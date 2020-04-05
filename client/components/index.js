import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const Index = () => {
  return (
    <div className="h-screen w-screen bg-blue-600 flex justify-center content-center flex-wrap">
      <p className="font-sans text-white error-text">...</p>
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
