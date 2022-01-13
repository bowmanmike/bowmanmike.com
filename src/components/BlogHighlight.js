import React, { useState } from 'react';
import { graphql, useStaticQuery, Link } from 'gatsby';

import { formatDate } from '../lib/formatDate';

const LATEST_POST_QUERY = graphql`
  query LATEST_POST_QUERY {
    posts: allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
      limit: 1
    ) {
      nodes {
        id
        frontmatter {
          title
          slug
          date
        }
        excerpt
        html
      }
    }
  }
`;

const PostPreview = ({ togglePost, post }) => (
  <div>
    <p className="mx-auto prose prose-lg">
      {post.excerpt}{' '}
      <button
        type="button"
        className="ml-4 text-gray-500 hover:text-gray-700"
        onClick={togglePost}
      >
        Read more...
      </button>
    </p>
  </div>
);

const FullPost = ({ togglePost, post }) => (
  <div>
    <div
      dangerouslySetInnerHTML={{ __html: post.html }}
      className="mx-auto prose prose-lg"
    />
    <div className="mb-4">
      <button
        type="button"
        className="text-gray-500 hover:text-gray-700"
        onClick={togglePost}
      >
        Read less...
      </button>
    </div>
    <Link to="blog" className="">
      <p className="py-2 px-4 text-center border border-gray-400 shadow-md md:mx-auto md:w-1/2">
        More Posts!
      </p>
    </Link>
  </div>
);

const BlogHighlight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { posts } = useStaticQuery(LATEST_POST_QUERY);

  const togglePost = () => setIsOpen(!isOpen);

  const [post] = posts.nodes;

  return (
    <>
      <h2 className="pr-8 mb-4 max-w-max text-2xl border-b-4 border-sage">
        Latest Blog Post
      </h2>
      <div>
        {/* Do we actually want a link here? */}
        {/* Or should I have links to the most recent, say, 3 post? */}
        <div className="flex flex-col justify-between items-center mb-4 md:flex-row">
          <Link to={`blog/${post.frontmatter.slug}`} className="w-full">
            <h3 className="text-xl">{post.frontmatter.title}</h3>
            <h4 className="text-lg">
              Published on {formatDate(post.frontmatter.date)}
            </h4>
          </Link>
          <Link
            to="blog"
            className="inline-block py-2 px-4 mt-4 w-full h-full text-center border border-gray-400 shadow-md md:mt-0 md:w-1/4"
          >
            More Posts!
          </Link>
        </div>
        {/* TODO: Get prose-sage to work */}
        {isOpen ? (
          <FullPost togglePost={togglePost} post={post} />
        ) : (
          <PostPreview togglePost={togglePost} post={post} />
        )}
      </div>
    </>
  );
};

export default BlogHighlight;
