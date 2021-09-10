import React from 'react';
import { graphql, Link } from 'gatsby';

const NextPrev = ({ prevSlug, nextSlug }) => {
  return (
    <div className="flex justify-center">
      {prevSlug && <Link to={`/blog/${prevSlug}`}>&#8592; Previous</Link>}
      {nextSlug && <Link to={`/blog/${nextSlug}`}>Next &#8594;</Link>}
    </div>
  );
};

const BlogPost = ({ data: { post }, pageContext: { prevSlug, nextSlug } }) => {
  return (
    <>
      <NextPrev nextSlug={nextSlug} prevSlug={prevSlug} />
      <article>
        <h2 className="text-xl my-1">{post.frontmatter.title}</h2>
        <small className="text-lg">{post.frontmatter.date}</small>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="prose"
        />
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
