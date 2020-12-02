/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-console */
import React, { useState, useEffect } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UsersTable from './usersTable'
import { getUsers } from '../redux/reducers/users'

const Index = ({ getUsers: getUsersRedux, Data, isRequesting }) => {
  const [results, setResults] = useState(50)
  const [page, setPage] = useState(1)
  const MAX_USERS = 1000
  const PIXELS_BEFORE_FETCH_NEXT_ITEMS = 10
  let allowHandleScroll = true
  let allowListener = true

  const handleScroll = () => {
    if (allowListener) {
      allowListener = false
      console.log('Scroll...')
      setTimeout(() => {
        allowListener = true
        if (
          document.documentElement.offsetHeight - PIXELS_BEFORE_FETCH_NEXT_ITEMS <=
          window.innerHeight + document.documentElement.scrollTop
        ) {
          if (allowHandleScroll) {
            allowHandleScroll = false
            console.log('Next page')
            setPage(page + 1)
            setTimeout(() => {
              allowHandleScroll = true
            }, 2000)
          }
        }
      }, 500)
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
    <div className="flex-row mx-auto overflow-x-hidden bg-gray-200 min-h-screen">
      <div className="flex-flex-col">
        <UsersTable
          page={page}
          setPage={setPage}
          results={results}
          setResults={setResults}
          Data={Data}
          MAX_USERS={MAX_USERS}
        />
        {isRequesting && <p className="text-gray-600 text-center text-sm">... fetching ...</p>}
      </div>
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = (store) => ({
  Data: store.users.data,
  isRequesting: store.users.isRequesting
})

const mapDispatchToProps = (dispatch) => bindActionCreators({ getUsers }, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
