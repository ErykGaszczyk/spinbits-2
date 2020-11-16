const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    resolve: {
      alias: {
        '@components': path.resolve(__dirname, 'src/components'),
        '@templates': path.resolve(__dirname, 'src/templates'),
        '@styles': path.resolve(__dirname, 'src/styles'),
        '@static': path.resolve(__dirname, 'static'),
      },
    },
  });
};

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions;

  const blogPostTemplate = require.resolve(`./src/templates/blogTemplate.js`);

  const result = await graphql(`
    {
      cms {
        blogPosts {
          id
          title
        }
      }
    }
  `);

  // Handle errors
  if (result.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`);
    return;
  }

  result.data.cms.blogPosts.forEach(({ id }) => {
    createPage({
      path: `blog/${id}`,
      component: blogPostTemplate,
      context: {
        // additional data can be passed via context
        id,
      },
    });
  });
};
