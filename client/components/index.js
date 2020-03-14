/* eslint-disable no-console */
import React, { useState } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'

import UsersTable from './usersTable'
import UserView from './userView'

const Index = () => {
  const [currentUser, setCurrentUser] = useState({
    gender: 'female',
    name: {
      title: 'Miss',
      first: 'Louane',
      last: 'Vidal'
    },
    location: {
      street: {
        number: 2479,
        name: 'Place du 8 Février 1962'
      },
      city: 'Avignon',
      state: 'Vendée',
      country: 'France',
      postcode: 78276,
      coordinates: {
        latitude: '2.0565',
        longitude: '95.2422'
      },
      timezone: {
        offset: '+1:00',
        description: 'Brussels, Copenhagen, Madrid, Paris'
      }
    },
    email: 'louane.vidal@example.com',
    login: {
      uuid: '9f07341f-c7e6-45b7-bab0-af6de5a4582d',
      username: 'angryostrich988',
      password: 'r2d2',
      salt: 'B5ywSDUM',
      md5: 'afce5fbe8f32bcec1a918f75617ab654',
      sha1: '1a5b1afa1d9913cf491af64ce78946d18fea6b04',
      sha256: '0124895aa1e6e5fb0596fad4c413602e0922e8a8c2dc758bbdb3fa070ad25a07'
    },
    dob: {
      date: '1966-06-26T11:50:25.558Z',
      age: 54
    },
    registered: {
      date: '2016-08-11T06:51:52.086Z',
      age: 4
    },
    phone: '02-62-35-18-98',
    cell: '06-07-80-83-11',
    id: {
      name: 'INSEE',
      value: '2NNaN01776236 16'
    },
    picture: {
      large: 'https://randomuser.me/api/portraits/women/88.jpg',
      medium: 'https://randomuser.me/api/portraits/med/women/88.jpg',
      thumbnail: 'https://randomuser.me/api/portraits/thumb/women/88.jpg'
    },
    nat: 'FR'
  })

  return (
    <div className="flex-row grid grid-cols-2 gap-4  min-h-screen min-w-screen bg-gray-200">
      <div className="flex-flex-col">
        <UsersTable setCurrentUser={setCurrentUser} currentUser={currentUser} />
      </div>
      <div className="flex-flex-col">{currentUser && <UserView currentUser={currentUser} />}</div>
    </div>
  )
}

Index.propTypes = {}

const mapStateToProps = () => ({})

const mapDispatchToProps = (dispatch) => bindActionCreators({}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Index)
