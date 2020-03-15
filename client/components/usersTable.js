/* eslint-disable no-console */
import React, { memo, useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import UsersTableResultsSearch from './usersTable_results_search'
import UsersTablePages from './usersTable_pages'
import UsersTableRow from './usersTable_row'

const tableHeaders = ['Photo', 'First Name', 'Last Name', 'Phone']

const UsersTable = ({ page, setPage, setResults, Data = { results: [] } }) => {
  const [filter, setFilter] = useState('')
  const [usersData, setUsersData] = useState(Data)
  const [currentUser, setCurrentUser] = useState(false)

  useEffect(() => {
    setUsersData(Data)
    // console.log(JSON.stringify(Data, null, 2))
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
    <div className="container w-screen ">
      <UsersTableResultsSearch setPage={setPage} setResults={setResults} setFilter={setFilter} />
      <div className="flex w-screen justify-center ">
        <div className="inline-block min-w-56 shadow-lg rounded-lg overflow-hidden">
          <table className="min-w-56 leading-normal">
            <thead>
              <tr>
                {tableHeaders.map((h) => (
                  <th
                    key={`${h}`}
                    className="text-center px-2 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider"
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {usersData.results.filter(useFilter).map((user) => (
                <UsersTableRow
                  key={`${user.phone}${user.name.first}`}
                  user={user}
                  setCurrentUser={setCurrentUser}
                  currentUser={currentUser}
                />
              ))}
            </tbody>
          </table>
          <UsersTablePages setPage={setPage} page={page} />
        </div>
      </div>
    </div>
  )
}

UsersTable.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UsersTable))
