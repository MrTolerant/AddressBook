import React, { memo, useState, useEffect } from 'react'

import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

const UserView = ({ currentUser }) => {
  const [lastUser, setLastUser] = useState(currentUser)

  useEffect(() => {
    setLastUser(currentUser || lastUser)
  }, [currentUser, lastUser])

  return (
    <div className="container mx-auto px-4 sm:px-8">
      <div className="mt-2 flex justify-start -mx-4 sm:-mx-8 pl-auto sm:px-8 py-4 overflow-x-auto min-w-full">
        <div className="flex flex-col pt-2 mb-2 pb-32 bg-white inline-block shadow-lg rounded-lg overflow-hidden min-w-64">
          {lastUser && (
            <>
              <div className=" justify-center  flex flex-row mt-2 antialiased text-center text-gray-500 text-2xl font-bold">
                <span className="mx-1">{lastUser.name.title}</span>
                <span className="mx-1">{lastUser.name.first}</span>
                <span className="mx-1">{lastUser.name.last}</span>
              </div>
              <div className="flex flex-row">
                <div className="flex flex-col">
                  <img className="w-auto h-auto rounded m-4" src={lastUser.picture.large} alt="" />
                </div>
                <div className="flex flex-col font-thin">
                  <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                    <span className="mx-1">phone: {lastUser.phone}</span>
                  </div>
                  <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                    <span className="mx-1">cell: {lastUser.cell}</span>
                  </div>
                  <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                    <span className="mx-1">{lastUser.location.country}</span>
                    <span className="mx-1">{lastUser.location.state}</span>
                    <span className="mx-1">{lastUser.location.city}</span>
                  </div>
                  <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                    <span className="mx-1">{lastUser.location.street.name}</span>
                    <span className="mx-1">{lastUser.location.street.number}</span>
                  </div>
                  <div className="flex flex-row mt-4 mr-4 antialiased border-b-2 border-gray-200">
                    <span className="mx-1"> age: {lastUser.dob.age}</span>
                    <span className="mx-1">
                      date of birthday: {lastUser.dob.date.split('T')[0]}
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
