import React from 'react';
import { graphql, Link } from 'gatsby';

import { formatDate } from '../lib/formatDate';

const NextPrev = ({ prevPost, nextPost }) => (
  <div className="flex justify-between">
    {prevPost && (
      <p className="border border-gray-800 p-2 my-4">
        <Link to={`/blog/${prevPost.slug}`}>&#8592; {prevPost.title}</Link>
      </p>
    )}
    {nextPost && (
      <p className="border border-gray-800 p-2 my-4">
        <Link to={`/blog/${nextPost.slug}`}>{nextPost.title} &#8594;</Link>
      </p>
    )}
  </div>
);

const BlogPost = ({ data: { post }, pageContext: { prevPost, nextPost } }) => (
  <>
    <NextPrev nextPost={nextPost} prevPost={prevPost} />
    <article>
      <header className="py-2 text-center my-4">
        <h2 className="text-xl lg:text-2xl mb-2">{post.frontmatter.title}</h2>
        <small className="text-base">
          Published on {formatDate(post.frontmatter.date)}
        </small>
      </header>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className="prose lg:prose-lg prose-sky text-justify mx-auto"
      />
    </article>
    <NextPrev nextPost={nextPost} prevPost={prevPost} />
  </>
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
