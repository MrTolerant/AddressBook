/* eslint-disable no-console */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UsersTable from './usersTable'
import UserView from './userView'

const Index = () => {
  const [currentUser, setCurrentUser] = useState({})

  return (
    <div className="flex flex-row justify-center content-center min-h-screen min-w-screen bg-gray-200">
      <div className="flex-flex-col">
        <UsersTable setCurrentUser={setCurrentUser} />
      </div>
      <div className="flex-flex-col">
        <UserView currentUser={currentUser} />
      </div>
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
