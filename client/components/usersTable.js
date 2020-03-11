import React, { memo } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UsersTableControls from './usersTable_controls'
import UsersTableRow from './usersTable_row'

import USERS from './staticUsers'

const tableHeaders = ['Photo', 'First Name', 'Last Name', 'Email', 'Phone']

const UsersTable = () => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl text-gray-800 font-semibold leading-tight">Users</h2>
        </div>
        <UsersTableControls />
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {tableHeaders.map((h) => (
                    <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {USERS.results.map((user) => (
                  <UsersTableRow user={user} />
                ))}
              </tbody>
            </table>
            <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
              <span className="text-xs xs:text-sm text-gray-900">Showing 1 to 4 of 50 Entries</span>
              <div className="inline-flex mt-2 xs:mt-0">
                <button
                  type="button"
                  className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l"
                >
                  Prev
                </button>
                <button
                  type="button"
                  className="text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

UsersTable.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UsersTable))
