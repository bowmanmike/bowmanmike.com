import React from 'react';
import { Link, graphql } from 'gatsby';

import Pagination from '../components/Pagination';
import NavButton from '../components/NavButton';

const homeSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const Blog = ({ data, pageContext }) => {
  const { posts } = data.blog;
  return (
    <div className="p-2 lg:p-4 m-4 lg:m-0 shadow-md border border-gray-400">
      <h2 className="text-2xl text-center mb-4 border-sage border-b-4 max-w-max pr-8">
        All Posts
      </h2>
      <NavButton href="/" content="Go Back Home" icon={homeSvg} />
      <Pagination
        pageSize={parseInt(process.env.GATSBY_PAGE_SIZE)}
        totalCount={data.blog.totalCount}
        currentPage={pageContext.currentPage || 1}
        skip={pageContext.skip}
        base="/blog"
      />
      {posts.map(post => {
        const { slug } = post.frontmatter;
        return (
          <Link key={slug} to={`/blog/${slug}`}>
            <div className="p-2 lg:p-4">
              <div className=" border-b-2 border-sage max-w-max pr-8">
                <p className="text-lg italic font-medium">
                  {post.frontmatter.title}
                </p>
                <p className="italic">Published {post.frontmatter.date}</p>
              </div>
              <p>{post.excerpt}</p>
              <p className="text-sm">Continue Reading...</p>
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export const query = graphql`
  query ($skip: Int = 0, $pageSize: Int = 10) {
    blog: allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
      skip: $skip
      limit: $pageSize
    ) {
      totalCount
      posts: nodes {
        id
        frontmatter {
          title
          slug
          date(formatString: "YYYY-MM-DD")
        }
        excerpt
      }
    }
  }
`;

export default Blog;
