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

  const handleScroll = () => {
    let allowHandleScroll = true
    if (allowHandleScroll) {
      if (
        window.innerHeight + document.documentElement.scrollTop >
        document.documentElement.offsetHeight - 5
      ) {
        console.log(
          'innerHeight',
          window.innerHeight,
          'scrollTop',
          document.documentElement.scrollTop,
          'offsetHeight',
          document.documentElement.offsetHeight
        )
        allowHandleScroll = false
        setPage(page + 1)
        setTimeout(() => {
          allowHandleScroll = true
        }, 500)
        console.log('Fetch more list items! page:', page)
      }
    }
  }

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [page])

  useEffect(() => {
    getUsersRedux({ page, results })
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
        />
      </div>
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = (store) => ({ Data: store.users.data })

const mapDispatchToProps = (dispatch) => bindActionCreators({ getUsers }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
