import React from 'react';
import { graphql, Link } from 'gatsby';

const NextPrev = ({ prevSlug, nextSlug }) => {
  return (
    <div>
      {prevSlug && <Link to={`/blog/${prevSlug}`}>Previous</Link>}
      {nextSlug && <Link to={`/blog/${nextSlug}`}>Next</Link>}
    </div>
  );
};

const BlogPost = ({ data: { post }, pageContext: { prevSlug, nextSlug } }) => {
  return (
    <>
      <NextPrev nextSlug={nextSlug} prevSlug={prevSlug} />
      <article>
        <h2>{post.frontmatter.title}</h2>
        <small>{post.frontmatter.date}</small>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </article>
      <NextPrev nextSlug={nextSlug} prevSlug={prevSlug} />
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
