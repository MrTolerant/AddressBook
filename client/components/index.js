/* eslint-disable no-console */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Index = () => {
  return (
    <div className="flex justify-center content-center h-full bg-gray-800">
      <div className=" m-auto">
        <p className="subpixel-antialiased text-4xl text-white">...</p>
      </div>
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
