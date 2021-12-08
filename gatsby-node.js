const path = require('path');

const gql = String.raw;

async function createPosts({ graphql, actions: { createPage } }) {
  const { data } = await graphql(gql`
    query {
      blog: allMarkdownRemark(
        filter: { frontmatter: { published: { eq: true } } }
        sort: { fields: frontmatter___date, order: DESC }
      ) {
        totalCount
        posts: edges {
          node {
            frontmatter {
              slug
              title
            }
          }
        }
      }
    }
  `);

  const { posts } = data.blog;

  posts.forEach(({ node }, i) => {
    const {
      frontmatter: { slug },
    } = node;
    const nextPost = posts[i - 1]?.node?.frontmatter;
    const prevPost = posts[i + 1]?.node?.frontmatter;

    createPage({
      path: `blog/${slug}`,
      component: path.resolve('./src/templates/blog-post.js'),
      context: {
        slug,
        prevPost,
        nextPost,
      },
    });
  });

  const pageSize = parseInt(process.env.GATSBY_PAGE_SIZE);
  const pageCount = Math.ceil(data.blog.totalCount / pageSize);

  Array.from({ length: pageCount }).forEach((_, i) => {
    createPage({
      path: `/blog/${i + 1}`,
      component: path.resolve('./src/pages/blog.js'),
      context: {
        skip: i * pageSize,
        currentPage: i + 1,
        pageSize,
      },
    });
  });
}

const redirects = [
  {
    fromPath: '/js/script.js',
    toPath: 'https://plausible.io/js/plausible.js',
    statusCode: 200,
  },
  {
    fromPath: '/api/event',
    toPath: 'https://plausible.io/api/event',
    statusCode: 202,
  },
];

exports.createPages = async params => {
  const { createRedirect } = params.actions;

  await Promise.all([createPosts(params)]);

  for (const redirect of redirects) {
    createRedirect(redirect);
  }
};
