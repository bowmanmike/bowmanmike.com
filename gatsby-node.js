// const path = require('path');

// const gql = String.raw;

exports.createPages = async ({ graphql, actions }) => {
  const { createRedirect } = actions;
  // const result = await graphql(gql`
  //   query {
  //     blog: allMarkdownRemark(
  //       filter: { frontmatter: { published: { eq: true } } }
  //       sort: { fields: frontmatter___date, order: DESC }
  //     ) {
  //       posts: edges {
  //         node {
  //           frontmatter {
  //             slug
  //             title
  //           }
  //         }
  //       }
  //     }
  //   }
  // `);

  // const { posts } = result.data.blog;
  // posts.forEach(({ node }, i) => {
  //   const {
  //     frontmatter: { slug },
  //   } = node;
  //   const nextPost = posts[i - 1]?.node?.frontmatter;
  //   const prevPost = posts[i + 1]?.node?.frontmatter;

  //   createPage({
  //     path: `blog/${slug}`,
  //     component: path.resolve('./src/templates/blog-post.js'),
  //     context: {
  //       slug,
  //       prevPost,
  //       nextPost,
  //     },
  //   });
  // });

  createRedirect({
    fromPath: '/js/script.js',
    toPath: 'https://plausible.io/js/plausible.js',
    statusCode: 200,
  });
  createRedirect({
    fromPath: '/api/event',
    toPath: 'https://plausible.io/api/event',
    statusCode: 202,
  });
};
