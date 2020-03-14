import React, { memo } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const UserView = ({ currentUser }) => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className=" pt-20  ">
        <div className="mt-1 flex justify-start -mx-4 sm:-mx-8 pl-auto sm:px-8 py-4 overflow-x-auto">
          <div className="inline-block min-w-64 shadow-lg rounded-lg overflow-hidden">
            <img className="w-auto h-auto rounded" src={currentUser.picture.large} alt="" />
            <table className="min-w-64 leading-normal">
              <thead>
                <tr>
                  <th className="px-5 py-3 border-b-2 border-gray-200 bg-gray-100 text-left text-xs font-semibold text-gray-600 uppercase tracking-wider">
                    ...
                  </th>
                </tr>
              </thead>
            </table>
          </div>
        </div>
        <pre>{JSON.stringify(currentUser, null, 4)}</pre>
      </div>
    </div>
  )
}

UserView.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UserView))
