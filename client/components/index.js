/* eslint-disable no-console */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UsersTable from './usersTable'
import UserView from './userView'

const Index = () => {
  const [currentUser, setCurrentUser] = useState(false)

  return (
    <div className="flex-row grid grid-cols-2 gap-4  min-h-screen min-w-screen bg-gray-200">
      <div className="flex-flex-col">
        <UsersTable setCurrentUser={setCurrentUser} currentUser={currentUser} />
      </div>
      <div
        className={`flex-flex-col transition-all duration-500 ease-in-out transform ${
          currentUser ? '' : 'opacity-0 -translate-x-48 '
        }`}
      >
        <UserView currentUser={currentUser} />
      </div>
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
