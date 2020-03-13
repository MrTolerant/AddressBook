import React, { memo, useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UsersTableResultsSearch from './usersTable_results_search'
import UsersTablePages from './usersTable_pages'

import UsersTableRow from './usersTable_row'

import { getUsers } from '../redux/reducers/users'

const tableHeaders = ['Photo', 'First Name', 'Last Name', 'Phone']

const UsersTable = ({ getUsers: getUsersRedux, Data = { results: [] } }) => {
  const [page, setPage] = useState(1)
  const [results, setResults] = useState(5)
  const [filter, setFilter] = useState('')
  const [usersData, setUsersData] = useState(Data)

  useEffect(() => {
    getUsersRedux({ page, results })
  }, [getUsersRedux, page, results])

  useEffect(() => {
    setUsersData(Data)
  }, [Data])

  const useFilter = (item) => {
    return (
      item.name.first.toLowerCase().includes(filter.toLowerCase()) ||
      item.name.last.toLowerCase().includes(filter.toLowerCase()) ||
      // item.email.toLowerCase().includes(filter.toLowerCase()) ||
      item.phone.toLowerCase().includes(filter.toLowerCase())
    )
  }
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="py-8">
        <div>
          <h2 className="text-2xl text-gray-800 font-semibold leading-tight">Users</h2>
        </div>
        <UsersTableResultsSearch setPage={setPage} setResults={setResults} setFilter={setFilter} />
        <div className="-mx-4 sm:-mx-8 px-4 sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-full shadow-lg rounded-lg overflow-hidden">
            <table className="min-w-full leading-normal">
              <thead>
                <tr>
                  {tableHeaders.map((h) => (
                    <th
                      key={`${h}`}
                      className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                    >
                      {h}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {usersData.results.filter(useFilter).map((user) => (
                  <UsersTableRow key={`${user.phone}`} user={user} />
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
  Data: store.users.data
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getUsers }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UsersTable))
