import React from 'react';

import { Link, graphql } from 'gatsby';

const Blog = ({ data }) => {
  const {
    blog: { posts },
  } = data;
  return (
    <div>
      {posts.map(post => (
        <div key={post.fields.slug}>
          <Link to={post.fields.path}>{post.frontmatter.title}</Link>
        </div>
      ))}
    </div>
  );
};

export const pageQuery = graphql`
  query MyQuery {
    blog: allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
    ) {
      posts: nodes {
        frontmatter {
          title
        }
        fields {
          slug
          path
        }
      }
    }
  }
`;

export default Blog;
