/* eslint-disable no-console */

const GET_USERS = 'AddressBook/GET_USERS'
const ERROR_HAPPENED = 'AddressBook/ERROR_HAPPENED'
const REQUEST_STARTED = 'AddressBook/REQUEST_STARTED'
const REQUEST_DONE = 'AddressBook/REQUEST_DONE'

const initialState = { data: { results: [] } }

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_USERS: {
      return {
        ...state,
        data: {
          ...state.data,
          results: [...state.data.results, ...action.data.results]
        }
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

export function getUsers({ page, results }) {
  const USERS_URL = `https://randomuser.me/api/?page=${page}&results=${results}&seed=abc`
  return (dispatch) => {
    dispatch({ type: REQUEST_STARTED })
    fetch(USERS_URL, {
      method: 'GET' // *GET, POST, PUT, DELETE
    })
      .then((res) => res.json())
      .then((json) => {
        if (json.error) {
          throw json.error
        }
        dispatch({
          type: GET_USERS,
          data: json
        })
        dispatch({ type: REQUEST_DONE })
      })
      .catch((error) => {
        console.error('GetUsers catch error', error)
        dispatch({
          type: ERROR_HAPPENED,
          data: error
        })
      })
  }
}
