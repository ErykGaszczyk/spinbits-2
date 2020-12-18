FROM node:12-buster AS build
RUN yarn global add gatsby-cli
WORKDIR /application
ADD . ./
RUN yarn
RUN gatsby build

FROM gatsbyjs/gatsby
COPY --from=build /application/public /pub
