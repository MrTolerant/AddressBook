import React, { memo } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const UserView = ({ currentUser, user, onClick }) => {
  return (
    <div
      role="button"
      onClick={onClick}
      onKeyDown={onClick}
      tabIndex={0}
      className={`z-0 fucus:outline-none outline-none container mx-auto px-4 sm:px-2 flex flex-col transition-all duration-500 ease-in-out transform ${
        currentUser === user ? '' : '-translate-y-10 h-0 opacity-0'
      }`}
    >
      <div className="mt-2 flex justify-center px-1 py-1 overflow-x-auto min-w-full">
        <div className="flex flex-col pt-2 mb-2 pb-32 bg-white inline-block shadow-lg rounded-lg overflow-hidden w-auto">
          {user && (
            <>
              <div className=" justify-center  flex flex-row mt-2 antialiased text-center text-gray-500 text-2xl font-bold select-none">
                <span className="mx-1">{user.name.title}</span>
                <span className="mx-1">{user.name.first}</span>
                <span className="mx-1">{user.name.last}</span>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <img
                    className="w-auto h-auto rounded m-4 select-none"
                    src={user.picture.large}
                    alt=""
                  />
                </div>
                <div className="flex flex-col font-thin">
                  <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                    <span className="mx-1 select-none">phone: {user.phone}</span>
                  </div>
                  <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                    <span className="mx-1 select-none">cell: {user.cell}</span>
                  </div>
                  <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                    <span className="mx-1 select-none">{user.location.country}</span>
                    <span className="mx-1 select-none">{user.location.state}</span>
                    <span className="mx-1 select-none">{user.location.city}</span>
                  </div>
                  <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                    <span className="mx-1 select-none">{user.location.street.name}</span>
                    <span className="mx-1 select-none">{user.location.street.number}</span>
                  </div>
                  <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                    <span className="mx-1 select-none"> age: {user.dob.age}</span>
                    <span className="mx-1 select-none">
                      date of birthday: {user.dob.date.split('T')[0]}
                    </span>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  )
}

UserView.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(memo(UserView))
