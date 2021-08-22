import { graphql } from "gatsby";
import React from "react";

const BlogPost = ({ data: { post } }) => (
  <article>
    <h2>{post.frontmatter.title}</h2>
    <small>{post.frontmatter.date}</small>
    <div dangerouslySetInnerHTML={{ __html: post.html }} />
  </article>
);

export const query = graphql`
  query SinglePost($slug: String!) {
    post: markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      frontmatter {
        slug
        title
        date(formatString: "YYYY-MM-DD")
      }
      html
    }
  }
`;

export default BlogPost;
