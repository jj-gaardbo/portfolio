const Path = require('path')
const FS = require('fs')
const { createFilePath } = require('@acto/gatsby-source-filesystem')
const { getGDoc } = require( "@acto/gatsby-plugin-drive/googleapis")

let token = require("client_secret.json")

exports.onPostBuild = () =>{
  getGDoc("1lesTFK6MFYCax1eeCmO_CKtAOraaysuH7F7fJKnmd_U", token, "text/html")
  return {__html: html};
}

exports.onCreateWebpackConfig = ({ getConfig, stage, actions }) => {
  const config = getConfig()
  if (stage.startsWith('develop') && config.resolve) {
    config.resolve.alias = {
      ...config.resolve.alias,
      'react-dom': '@hot-loader/react-dom'
    }
  }
  actions.setWebpackConfig({
    module: {
      rules: [
        {
          test: /\.md$/,
          loaders: ['html-loader', 'markdown-loader'],
        },
        {
          test: /\.html$/,
          loader: 'html-loader',
          options: {
            minimize: false,
          },
        },
      ],
    },
  })
}

exports.createPages = ({ graphql, actions }) => {
 	graphql(`
 		query PagesQuery {
 		  allFile(filter: {relativePath: {regex: "/"}}) {
 			group(field: dir) {
 			  edges {
 				node {
 				  relativePath
 				  extension
 				  content
 				}
 			  }
 			}
 		  }
 		}
 	`).then(({ data }) => {
 		console.log("Content: %j", data)
 	})
}
