const path = require('path');

const gql = String.raw;

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(gql`
    query {
      blog: allMarkdownRemark(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
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

  const posts = result.data.blog.posts;
  posts.forEach(({ node }, i) => {
    const {
      frontmatter: { slug },
    } = node;
    const nextSlug = posts[i - 1]?.node?.frontmatter?.slug;
    const prevSlug = posts[i + 1]?.node?.frontmatter?.slug;

    createPage({
      path: `blog/${slug}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug,
        prevSlug,
        nextSlug,
      },
    });
  });
};
