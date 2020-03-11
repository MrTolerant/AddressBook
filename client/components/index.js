/* eslint-disable no-console */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UsersTable from './usersTable'

const Index = () => {
  return (
    <div className="flex justify-center content-center min-h-screen min-w-screen bg-gray-200">
      <UsersTable />
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
