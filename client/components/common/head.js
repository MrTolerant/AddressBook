import React from 'react'
import PropTypes from 'prop-types'
import { Helmet } from 'react-helmet'

const Head = (props) => <Helmet>{props.title}</Helmet>

Head.propTypes = {
  title: PropTypes.string
}

Head.defaultProps = {
  title: ''
}

export default Head
