import React from 'react';

import { Link, graphql } from 'gatsby';

const Blog = ({ data }) => {
  const { posts } = data.blog;
  return (
    <div className="p-2 lg:p-4 m-4 lg:m-0 shadow-md border border-gray-400">
      <h2 className="text-2xl text-center mb-4 border-sage border-b-4 max-w-max pr-8">
        All Posts
      </h2>
      {posts.map(post => {
        const { slug } = post.frontmatter;
        return (
          <Link key={slug} to={slug}>
            <div className="p-2 lg:p-4">
              <div className=" border-b-2 border-sage max-w-max pr-8">
                <p className="text-lg">{post.frontmatter.title}</p>
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

export const pageQuery = graphql`
  query AllPosts {
    blog: allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      posts: nodes {
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
