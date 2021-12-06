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

const BlogHighlight = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { posts } = useStaticQuery(LATEST_POST_QUERY);

  const togglePost = () => setIsOpen(!isOpen);

  const [post] = posts.nodes;

  return (
    <div className="border border-gray-400 lg:p-4 lg:mx-0 shadow-md m-4 p-2">
      <h2 className="text-2xl border-sage border-b-4 max-w-max pr-8 mb-4">
        Blog
      </h2>
      <div>
        {/* Do we actually want a link here? */}
        {/* Or should I have links to the most recent, say, 3 post? */}
        <Link to={`blog/${post.frontmatter.slug}`}>
          <div className="mb-4">
            <h3 className="text-xl">{post.frontmatter.title}</h3>
            <h4 className="text-lg">
              Published on {formatDate(post.frontmatter.date)}
            </h4>
          </div>
        </Link>
        {/* TODO: Get prose-sage to work */}
        {isOpen ? (
          <div>
            <button type="button" onClick={togglePost}>
              See Less
            </button>
            <div
              dangerouslySetInnerHTML={{ __html: post.html }}
              className="prose "
            />
          </div>
        ) : (
          <div>
            <button type="button" onClick={togglePost}>
              See More
            </button>
            <p className="prose">{post.excerpt}</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default BlogHighlight;
