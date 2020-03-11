/* eslint-disable no-console */

const GET_USERS = 'AddressBook/GET_USERS'
const ERROR_HAPPENED = 'AddressBook/ERROR_HAPPENED'
const REQUEST_STARTED = 'AddressBook/REQUEST_STARTED'
const REQUEST_DONE = 'AddressBook/REQUEST_DONE'

const API_SERVER = ''
const ORG_URL = `http://${API_SERVER}/api/org`

const initialState = {}

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      console.log('action.GET_USERS', action.data)
      return {
        ...state,
        data: action.data
      }
    }
    case REQUEST_STARTED:
      return {
        ...state,
        isRequesting: true,
        error: false
      }
    case REQUEST_DONE:
      return {
        ...state,
        isRequesting: false
      }
    case ERROR_HAPPENED:
      return {
        ...state,
        error: true,
        isRequesting: false
      }
    default:
      return state
  }
}

export function getOrg() {
  return (dispatch, getState) => {
    const { token, isRequestingRenewToken } = getState().apiAuth
    if (!isRequestingRenewToken) {
      dispatch({ type: REQUEST_STARTED })
      fetch(ORG_URL, {
        method: 'GET', // *GET, POST, PUT, DELETE
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
        .then((res) => {
          if (res.status === 403) {
            if (!isRequestingRenewToken) {
              const { token: newtoken } = getState().apiAuth
              fetch(ORG_URL, {
                method: 'GET', // *GET, POST, PUT, DELETE
                headers: {
                  Authorization: `Bearer ${newtoken}`
                }
              }).then((newres) => {
                return newres.json()
              })
            }
          }
          console.log('GET org status', res.status)
          return res.json()
        })
        .then((json) => {
          if (json.error) {
            console.log('throw json.error', json.error)
            throw json.error
          }
          console.log('json', json)
          dispatch({
            type: GET_USERS,
            data: json,
            TotalPages: json.TotalPages
          })
          dispatch({ type: REQUEST_DONE })
        })
        .catch((error) => {
          console.error('ORG catch error', error)
          dispatch({
            type: ERROR_HAPPENED,
            data: error
          })
        })
    }
  }
}
