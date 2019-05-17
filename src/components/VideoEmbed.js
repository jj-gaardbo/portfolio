import React from 'react'
import PropTypes from 'prop-types'

const VideoEmbed = ({ width, height, id }) => (
  <iframe
    title={id}
    width={width}
    height={height}
    src={`https://www.youtube-nocookie.com/embed/${id}?rel=0&amp;autoplay=1&mute=1&loop=1&modestbranding=1&showinfo=0&cc_load_policy=1&color=white`}
    frameBorder="0"
    allow="accelerometer; autoplay; loop; encrypted-media; gyroscope; picture-in-picture"
    allowFullScreen></iframe>
)

VideoEmbed.propTypes = {
  height: PropTypes.number,
  id: PropTypes.object.isRequired,
  width: PropTypes.number
}

export default VideoEmbed


