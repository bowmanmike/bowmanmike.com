import { graphql, Link } from "gatsby";
import React from "react";

import Post from "../types/post";

const Blog = ({ data }: { data: { blog: { posts: Post[] } } }) => {
  const { posts } = data.blog;
  return (
    <div>
      {posts.map((post) => {
        const { slug } = post.frontmatter;
        return (
          <div key={slug}>
            <Link to={slug}>
              {post.frontmatter.date} - {post.frontmatter.title}
            </Link>
          </div>
        );
      })}
    </div>
  );
};

export const pageQuery = graphql`
  query AllPosts {
    blog: allMarkdownRemark(
      filter: { frontmatter: { published: { eq: true } } }
      sort: { fields: frontmatter___date, order: DESC }
    ) {
      posts: nodes {
        frontmatter {
          title
          slug
          date(formatString: "YYYY-MM-DD")
        }
      }
    }
  }
`;

export default Blog;
