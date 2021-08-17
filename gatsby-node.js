const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');

const gql = String.raw;

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;

  if (node.internal.type === 'MarkdownRemark') {
    const slug = createFilePath({ node, getNode, basePath: 'blog' });

    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });
    createNodeField({
      node,
      name: 'path',
      value: `/blog${slug}`,
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(gql`
    query {
      blog: allMarkdownRemark(
        filter: { frontmatter: { published: { eq: true } } }
      ) {
        posts: edges {
          node {
            fields {
              slug
              path
            }
            id
          }
        }
      }
    }
  `);

  result.data.blog.posts.forEach(({ node }) => {
    const {
      fields: { slug, path: postPath },
      id,
    } = node;

    createPage({
      path: postPath,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug,
        id,
        postPath,
      },
    });
  });
};
