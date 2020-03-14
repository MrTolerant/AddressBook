import React, { memo } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const UsersTableRow = ({ user, setCurrentUser, currentUser }) => {
  return (
    <tr
      className={`pl-4 cursor-pointer transition duration-500 ease-in-out bg-white transform hover:-translate-y-1 hover:scale-110 ${
        user === currentUser ? 'bg-blue-200 hover:bg-red-200 ' : 'hover:bg-blue-200 '
      }`}
      onClick={() => setCurrentUser(user === currentUser ? false : user)}
    >
      <td className="px-5 py-1 border-b border-gray-200 text-sm">
        <div className="flex items-center">
          <div className="flex-shrink-0 w-10 h-10">
            <img className="w-full h-full rounded-full" src={user.picture.thumbnail} alt="" />
          </div>
        </div>
      </td>
      <td className="px-5 py-1 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user.name.first} </p>
      </td>
      <td className="px-5 py-1 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user.name.last}</p>
      </td>
      {/* <td className="px-5 py-1 border-b border-gray-200 text-sm">
        <span className="relative inline-block px-3 py-1 font-semibold text-green-900 leading-tight">
          <span aria-hidden className="absolute inset-0 bg-green-200 opacity-50 rounded-full" />
          <span className="relative">{user.email}</span>
        </span>
      </td> */}
      <td className="px-5 py-1 border-b border-gray-200 text-sm">
        <p className="text-gray-900 whitespace-no-wrap">{user.phone}</p>
      </td>
    </tr>
  )
}

UsersTableRow.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UsersTableRow))
