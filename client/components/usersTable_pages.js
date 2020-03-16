import React, { memo } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const UsersTableResultsSearch = ({ usersCount, MAX_USERS }) => {
  return (
    <div className="px-2 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
      <span className="text-xs xs:text-sm text-gray-900">
        Records count {usersCount} of {MAX_USERS}{' '}
      </span>
    </div>
  )
}

UsersTableResultsSearch.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UsersTableResultsSearch))
