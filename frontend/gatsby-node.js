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
