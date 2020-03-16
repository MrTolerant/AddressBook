import React, { memo } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UserView from './userView'

const UsersTableRow = ({ user, setCurrentUser, currentUser }) => {
  return (
    <>
      <tr
        className={`m-2 rounded-full z-50 pl-4 cursor-pointer transition duration-500 ease-in-out bg-white transform hover:-translate-y-1 hover:scale-110 ${
          user === currentUser ? 'bg-blue-200 hover:bg-red-200 ' : 'hover:bg-blue-200 '
        }`}
        onClick={() => setCurrentUser(user === currentUser ? false : user)}
      >
        <td className="px-2 py-1 border-b border-gray-200 text-sm">
          <div className="flex items-center">
            <div className="mx-auto  flex-shrink-0 w-10 h-10">
              <img
                className="w-full h-full rounded-full select-none"
                src={user.picture.thumbnail}
                alt=""
              />
            </div>
          </div>
        </td>
        <td className="px-2 py-1 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap select-none">{user.name.first} </p>
        </td>
        <td className="px-2 py-1 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap select-none">{user.name.last}</p>
        </td>
        <td className="px-2 py-1 border-b border-gray-200 text-sm">
          <p className="text-gray-900 whitespace-no-wrap select-none">{user.phone}</p>
        </td>
      </tr>

      <tr>
        <td colSpan="4">
          <UserView
            currentUser={currentUser}
            user={user}
            onClick={() => setCurrentUser(user === currentUser ? false : user)}
          />
        </td>
      </tr>
    </>
  )
}

UsersTableRow.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UsersTableRow))
