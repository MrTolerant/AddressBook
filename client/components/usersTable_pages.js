import React, { memo } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const MAX_PAGES = 100

const UsersTableResultsSearch = ({ setPage, page }) => {
  return (
    <div className="px-5 py-5 bg-white border-t flex flex-col xs:flex-row items-center xs:justify-between          ">
      <span className="text-xs xs:text-sm text-gray-900">
        Page {page} of {MAX_PAGES}{' '}
      </span>
      <div className="inline-flex mt-2 xs:mt-0">
        <button
          type="button"
          onClick={() => setPage(Math.max(page - 1, 1))}
          className="transition duration-500 ease-in-out text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-l focus:outline-none"
        >
          Prev
        </button>
        <button
          type="button"
          onClick={() => setPage(Math.min(page + 1, MAX_PAGES))}
          className="transition duration-500 ease-in-out text-sm bg-gray-300 hover:bg-gray-400 text-gray-800 font-semibold py-2 px-4 rounded-r focus:outline-none"
        >
          Next
        </button>
      </div>
    </div>
  )
}

UsersTableResultsSearch.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UsersTableResultsSearch))
