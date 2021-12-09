import React from 'react';
import { graphql, Link } from 'gatsby';

import { formatDate } from '../lib/formatDate';
import NavButton from '../components/NavButton';

const homeSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
  </svg>
);

const bookSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
    />
  </svg>
);

const prevSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 mr-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M10 19l-7-7m0 0l7-7m-7 7h18"
    />
  </svg>
);

const nextSvg = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5 ml-2"
    fill="none"
    viewBox="0 0 24 24"
    stroke="currentColor"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14 5l7 7m0 0l-7 7m7-7H3"
    />
  </svg>
);

const BlogPost = ({ data: { post }, pageContext: { prevPost, nextPost } }) => (
  <div className="border border-gray-400 p-2 lg:p-4 m-4 lg:m-0 shadow-md">
    <article>
      <header className="py-2 text-center my-4">
        <h2 className="text-xl lg:text-2xl mb-2">{post.frontmatter.title}</h2>
        <small className="text-base">
          Published on {formatDate(post.frontmatter.date)}
        </small>
      </header>
      <nav className="grid grid-cols-2 grid-rows-2 gap-2 mx-auto">
        <NavButton href="/" content="Go Back Home" icon={homeSvg} />
        {/* TODO: Would be cool to jump back to last visited blog page, if any, else, first page */}
        <NavButton href="/blog" content="Back To All Posts" icon={bookSvg} />
        <NavButton
          href={prevPost ? `/blog/${prevPost.slug}` : 'disabled'}
          content={prevPost ? prevPost.title : 'You found the oldest post!'}
          icon={prevPost && prevSvg}
        />

        <NavButton
          href={nextPost ? `/blog/${nextPost?.slug}` : 'disabled'}
          content={nextPost ? nextPost?.title : 'This is the most recent post!'}
          postIcon={nextPost && nextSvg}
        />
      </nav>
      <div
        dangerouslySetInnerHTML={{ __html: post.html }}
        className="prose lg:prose-lg prose-sky text-justify mx-auto"
      />
    </article>
  </div>
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
