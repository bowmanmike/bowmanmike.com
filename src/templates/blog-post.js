import React from 'react';
import { graphql, Link } from 'gatsby';

const NextPrev = ({ prevPost, nextPost }) => {
  return (
    <div className="flex justify-evenly">
      {prevPost && prevPost.slug && (
        <p className="border border-gray-800 p-2 my-4">
          <Link to={`/blog/${prevPost.slug}`}>&#8592; {prevPost.title}</Link>
        </p>
      )}
      {nextPost && nextPost.slug && (
        <p className="border border-gray-800 p-2 my-4">
          <Link to={`/blog/${nextPost.slug}`}>{nextPost.title} &#8594;</Link>
        </p>
      )}
    </div>
  );
};

const BlogPost = ({ data: { post }, pageContext: { prevPost, nextPost } }) => {
  return (
    <>
      <NextPrev nextPost={nextPost} prevPost={prevPost} />
      <article>
        <h2 className="text-xl my-1">{post.frontmatter.title}</h2>
        <small className="text-lg">{post.frontmatter.date}</small>
        <div
          dangerouslySetInnerHTML={{ __html: post.html }}
          className="prose"
        />
      </article>
      <NextPrev nextPost={nextPost} prevPost={prevPost} />
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
