const path = require("path");

const gql = String.raw;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(gql`
    query {
      blog: allMarkdownRemark(
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        posts: edges {
          node {
            frontmatter {
              slug
            }
          }
        }
      }
    }
  `);

  result.data.blog.posts.forEach(({ node }) => {
    const {
      frontmatter: { slug },
    } = node;

    createPage({
      path: `blog/${slug}`,
      component: path.resolve("./src/templates/blog-post.tsx"),
      context: {
        slug,
      },
    });
  });
};
