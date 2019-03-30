import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import PropTypes from 'prop-types'

const Image = props => (
  <StaticQuery
    query={graphql`
			{
				images: allFile(filter: { extension: { regex: "/(jpg|jpeg|png)/" } }) {
					edges {
						node {
							relativePath
							name
							childImageSharp {
								fluid(maxWidth: 1440, quality: 100) {
									...GatsbyImageSharpFluid_withWebp_tracedSVG
								}
							}
						}
					}
				}
			}
		`}
    render={data => {
      const { path, alt, ...otherProps } = props

      const image = data.images.edges.find(n => {
        return n.node.relativePath === path
      })

      return image ? (
        <Img
          fluid={image.node.childImageSharp.fluid}
          alt={alt}
          { ...otherProps }
        />
      ) : null
    }}
  />
)

Image.propTypes = {
  alt: PropTypes.string.isRequired,
  path: PropTypes.string.isRequired,
}

export default Image
