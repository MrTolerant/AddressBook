import React, { memo } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const UserView = ({ currentUser }) => {
  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className=" pt-20  ">
        <div className="mt-2 flex justify-start -mx-4 sm:-mx-8 pl-auto sm:px-8 py-4 overflow-x-auto min-w-full">
          <div className="flex pt-2 mb-2 pb-32 bg-white inline-block shadow-lg rounded-lg overflow-hidden min-w-64">
            <div className="flex flex-row">
              <div className="flex flex-col">
                <img
                  className="w-auto h-auto rounded m-4"
                  src={currentUser ? currentUser.picture.large : ''}
                  alt=""
                />
              </div>
              <div className="flex flex-col">
                <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                  <span className="mx-1">{currentUser ? currentUser.name.title : ''}</span>
                  <span className="mx-1">{currentUser ? currentUser.name.first : ''}</span>
                  <span className="mx-1">{currentUser ? currentUser.name.last : ''}</span>
                </div>
                <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                  <span className="mx-1">phone: {currentUser ? currentUser.phone : ''}</span>
                </div>
                <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                  <span className="mx-1">cell: {currentUser ? currentUser.cell : ''}</span>
                </div>
                <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                  <span className="mx-1">{currentUser ? currentUser.location.country : ''}</span>
                  <span className="mx-1">{currentUser ? currentUser.location.state : ''}</span>
                  <span className="mx-1">{currentUser ? currentUser.location.city : ''}</span>
                </div>
                <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                  <span className="mx-1">
                    {currentUser ? currentUser.location.street.name : ''}
                  </span>
                  <span className="mx-1">
                    {currentUser ? currentUser.location.street.number : ''}
                  </span>
                  <span className="mx-1">{currentUser ? currentUser.location.city : ''}</span>
                </div>
                <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                  <span className="mx-1"> age: {currentUser ? currentUser.dob.age : ''}</span>
                  <span className="mx-1">
                    date of birthday: {currentUser ? currentUser.dob.date.split('T')[0] : ''}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

UserView.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UserView))
