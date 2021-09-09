import React from 'react';
import { graphql, Link } from 'gatsby';

const BlogPost = ({ data: { post }, pageContext: {prev_slug, next_slug}}) => {
  return (
    <>
      <article>
        <h2>{post.frontmatter.title}</h2>
        <small>{post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <div>
        {prev_slug && <Link to={`/blog/${prev_slug}`}>Previous</Link>}
        {next_slug && <Link to={`/blog/${next_slug}`}>Next</Link>}
      </div>
    </>
  );
};

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
