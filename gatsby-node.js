const Path = require('path')
const { groupToProjectPageObject } = require('./src/util/pageMapper')


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

exports.createPages = async ({ graphql, actions }) => {
  await graphql(`
		query ProjectQuery {
		  allFile(filter: {relativePath: {regex: "/projects/"}}) {
			group(field: dir) {
			  edges {
				node {
				  base
				  relativeDirectory
				  content
				}
			  }
			}
		  }
		}
	`).then(({ data }) => {
    data.allFile.group.forEach(group => {
      const projectPageObject = groupToProjectPageObject(group)
      actions.createPage({
        path: projectPageObject.pagePath,
        component: Path.resolve(__dirname, 'src/templates/project.js'),
        context: projectPageObject
      })
    })
  })
}
