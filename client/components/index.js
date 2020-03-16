/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UsersTable from './usersTable'
import { getUsers } from '../redux/reducers/users'

const Index = ({ getUsers: getUsersRedux, Data }) => {
  const [results, setResults] = useState(50)
  const [page, setPage] = useState(1)
  const MAX_USERS = 1000
  let allowHandleScroll = true

  const handleScroll = () => {
    if (allowHandleScroll) {
      if (
        window.innerHeight + document.documentElement.scrollTop >
        document.documentElement.offsetHeight - 2
      ) {
        allowHandleScroll = false
        setPage(page + 1)
        setTimeout(() => {
          allowHandleScroll = true
        }, 200)
      }
    }
  }

  useEffect(() => {
    if (Data.results.length + results <= MAX_USERS) {
      window.addEventListener('scroll', handleScroll)
    }
    return () => window.removeEventListener('scroll', handleScroll)
  }, [page])

  useEffect(() => {
    if (Data.results.length + results <= MAX_USERS) {
      getUsersRedux({ page, results })
      console.log('page', page)
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [getUsersRedux, page, setPage])

  return (
    <div className="flex-row mx-auto min-h-screen min-w-screen bg-gray-200">
      <div className="flex-flex-col">
        <UsersTable
          page={page}
          setPage={setPage}
          results={results}
          setResults={setResults}
          Data={Data}
          MAX_USERS={MAX_USERS}
        />
      </div>
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = (store) => ({ Data: store.users.data })

const mapDispatchToProps = (dispatch) => bindActionCreators({ getUsers }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
