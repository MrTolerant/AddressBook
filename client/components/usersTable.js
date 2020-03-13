import React, { memo, useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UsersTableResultsSearch from './usersTable_results_search'
import UsersTablePages from './usersTable_pages'

import UsersTableRow from './usersTable_row'

import { getUsers } from '../redux/reducers/users'

const tableHeaders = ['Photo', 'First Name', 'Last Name', 'Email', 'Phone']

const UsersTable = ({ getUsers: getUsersRedux, UsersData = { results: [] } }) => {
  const [page, setPage] = useState(1)
  const [results, setResults] = useState(5)

  useEffect(() => {
    getUsersRedux({ page, results })
  }, [getUsersRedux, page, results])
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl text-gray-800 font-semibold leading-tight">Users</h2>
        </div>
        <UsersTableResultsSearch setPage={setPage} setResults={setResults} />
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
                {UsersData.results.map((user) => (
                  <UsersTableRow user={user} />
                ))}
              </tbody>
            </table>
            <UsersTablePages setPage={setPage} page={page} />
          </div>
        </div>
      </div>
    </div>
  )
}

UsersTable.propTypes = {}

const mapStateToProps = (store) => ({
  UsersData: store.users.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getUsers }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UsersTable))
