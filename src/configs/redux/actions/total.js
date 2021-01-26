import axios from 'axios'
import moment from 'moment'

export const getTotal = () => (dispatch) => {

  const total = {
    cases : 0,
    secure : 0,
    death : 0,
    positive : 0,
    plusCases : 0,
    plusSecure : 0,
    plusDeath : 0,
    plusPositive : 0,
    date : null
  }

  const funcSetDate = (payload)=> {
    const splitT = payload.split('T')
    const splitZ = splitT[1].split('.000Z')
    const date = `${splitT[0]} ${splitZ[0]}`
    total.date = moment(date).format('LLLL')
  }

  const url = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia'
  axios.get(`${url}/more`)
    .then((res)=> {
      const today = res.data
      total.cases  = today.total.positif
      total.secure  = today.total.sembuh
      total.death  = today.total.meninggal
      total.positive  = today.total.dirawat
      total.plusCases  = today.penambahan.positif
      total.plusSecure  = today.penambahan.sembuh
      total.plusDeath  = today.penambahan.meninggal
      total.plusPositive  = today.penambahan.dirawat
      funcSetDate(today.penambahan.created)
      dispatch({type: 'TOTAL', payload: total})
    })
    .catch((err)=> {
      console.log(err.response);
    })
}
