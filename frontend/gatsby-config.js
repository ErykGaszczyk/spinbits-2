/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  plugins: [
    `gatsby-plugin-styled-components`,
    {
      resolve: 'gatsby-plugin-eslint',
      options: {
        test: /\.js$|\.jsx$/,
        exclude: /(node_modules|.cache|public)/,
        stages: ['develop'],
        options: {
          emitWarning: true,
          failOnError: false,
        },
      },
    },
    {
      resolve: 'gatsby-source-graphql',
      options: {
        // Arbitrary name for the remote schema Query type
        typeName: 'CMS',
        // Field under which the remote schema will be accessible. You'll use this in your Gatsby query
        fieldName: 'cms',
        // Url to query from
        url: 'http://localhost:1337/graphql',
        headers: {
          // Learn about environment variables: https://gatsby.dev/env-vars
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNjA1MDA0MjA2LCJleHAiOjE2MDc1OTYyMDZ9.TRDgLW3occlOY7PMRTIC39JGZmDIc4ZXO17zIcYaklU`,
        },
      },
    },
  ],
};
