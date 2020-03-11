import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { push } from 'connected-react-router'
import { connect } from 'react-redux'

const NotFound = (props) => (
  <div className="flex h-screen w-screen bg-gray-800">
    <div className="mx-auto mt-16 text-center">
      <p className="text-6xl text-white">404</p>
      <br />
      <p className="lead text-gray-500 mb-5">Page Not Found</p>
      <br />
      <p className="text-gray-500 mb-0">It looks like you found a glitch in the matrix...</p>
      <br />
      <button
        className="cursor-pointer bg-gray-800 hover:bg-gray-500 shadow-xl px-5 py-2 inline-block text-gray-100 hover:text-white rounded focus:outline-none"
        type="button"
        tabIndex="0"
        onClick={props.goRoot}
      >
        Back to main page
      </button>
    </div>
  </div>
)
NotFound.propTypes = {
  goRoot: PropTypes.func
}

NotFound.defaultProps = {
  goRoot: () => {}
}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) =>
  bindActionCreators(
    {
      goRoot: () => push('/')
    },
    dispatch
  )

export default connect(mapStateToProps, mapDispatchToProps)(NotFound)
