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
    <p className="prose prose-lg mx-auto">
      {post.excerpt}{' '}
      <button
        type="button"
        className="text-gray-500 ml-4 hover:text-gray-700"
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
      className="prose prose-lg mx-auto"
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
    <p className="border border-gray-400 shadow-md py-2 px-4 text-center md:w-1/2 md:mx-auto">
      <Link to="blog" className="">
        More Posts!
      </Link>
    </p>
  </div>
);

const BlogHighlight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { posts } = useStaticQuery(LATEST_POST_QUERY);

  const togglePost = () => setIsOpen(!isOpen);

  const [post] = posts.nodes;

  return (
    <div className="border border-gray-400 lg:p-4 lg:mx-0 shadow-md m-4 p-2">
      <Link to="blog">
        <h2 className="text-2xl border-sage border-b-4 max-w-max pr-8 mb-4 inline-block">
          Latest Blog Post
        </h2>
      </Link>
      <div className="">
        {/* Do we actually want a link here? */}
        {/* Or should I have links to the most recent, say, 3 post? */}
        <div className="mb-4 flex flex-col md:flex-row justify-between items-center">
          <Link to={`blog/${post.frontmatter.slug}`} className="w-full">
            <h3 className="text-xl">{post.frontmatter.title}</h3>
            <h4 className="text-lg">
              Published on {formatDate(post.frontmatter.date)}
            </h4>
          </Link>
          <Link
            to="blog"
            className="border border-gray-400 shadow-md w-full md:w-1/4 py-2 px-4 text-center mt-4 md:mt-0 h-full inline-block"
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
    </div>
  );
};

export default BlogHighlight;
