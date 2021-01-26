import axios from 'axios'

export const getUser = () => (dispatch) => {
  axios.get('https://jsonplaceholder.typicode.com/users')
    .then((res) => {
      dispatch({ type: 'WEEK', payload: res.data })
    })
}
