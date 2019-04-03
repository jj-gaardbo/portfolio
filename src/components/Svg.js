import React from 'react'
import PropTypes from 'prop-types'

const Svg = ({ width, height, fill, svg }) => (
	<svg width={width} height={height} fill={fill}>
		<use xlinkHref={`#${svg.id}`} />
	</svg>
)

Svg.propTypes = {
	fill: PropTypes.string,
	height: PropTypes.number,
	svg: PropTypes.object.isRequired,
	width: PropTypes.number
}

export default Svg
