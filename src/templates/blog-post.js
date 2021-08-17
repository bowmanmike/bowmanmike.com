import React from 'react';
import { graphql } from 'gatsby';

const BlogPost = ({ data: { post } }) => (
  <article key={post.id}>
    <h2>{post.frontmatter.title}</h2>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </article>
);

export const query = graphql`
  query SinglePost($id: String!) {
    post: markdownRemark(id: { eq: $id }) {
      frontmatter {
        title
      }
      id
      fields {
        slug
      }
      html
    }
  }
`;

export default BlogPost;
