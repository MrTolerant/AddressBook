/* eslint-disable no-console */
import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UsersTable from './usersTable'

const Index = () => {
  return (
    <div className="flex flex-row justify-center content-center min-h-screen min-w-screen bg-gray-200">
      <div className="flex-flex-col">
        <UsersTable />
      </div>
      <div className="flex-flex-col">
        <UsersTable />
      </div>
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
