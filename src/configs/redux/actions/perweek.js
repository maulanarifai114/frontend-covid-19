import axios from 'axios'
import moment from 'moment'

export const getPerWeek = () => (dispatch) => {

  let tglCasesPerDay = []
  let totalDataLine = {
    labels: [],
    datasets: [
      {
        label: 'Covid - 19 Indonesia',
        data: [0,0,0],
      }
    ]
  }
  let addDataLine = {
    labels: [],
    datasets: [
      {
        label: 'Covid - 19 Indonesia',
        data: [0,0,0],
      }
    ]
  }

  const url = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia'
  axios.get(`${url}/harian`)
    .then((res)=> {
      const allData = res.data
      const start = res.data.length-1-7
      const end = res.data.length-1
      const tglCases = []
      const labels = []
      const cases = []
      const positive = []
      const secure = []
      const death = []
      const addCases = []
      const addPositive = []
      const addSecure = []
      const addDeath = []
      allData.forEach((e, index)=> {
        const day = e.tanggal.split('T')
        if (index > start && index <= end) {
          labels.push(moment(day[0]).format('dddd'))
          cases.push(e.positif_kumulatif)
          positive.push(e.dirawat_kumulatif)
          secure.push(e.sembuh_kumulatif)
          death.push(e.meninggal_kumulatif)
          addCases.push(e.positif)
          addPositive.push(e.dirawat)
          addSecure.push(e.sembuh)
          addDeath.push(e.meninggal)
          tglCases.push(moment(day[0]).format('ll'))
        }
      })
      tglCasesPerDay = tglCases
      totalDataLine = {
        labels: labels,
        datasets: [
          {
            label: 'Total Kasus',
            data: cases,
            fill: false,
            borderColor: '#589bf3',
          },
          {
            label: 'Positif',
            data: positive,
            fill: false,
            borderColor: '#f0f358',
          },
          {
            label: 'Sembuh',
            data: secure,
            fill: false,
            borderColor: '#72ee62'
            
          },
          {
            label: 'Meninggal',
            data: death,
            fill: false,
            borderColor: '#ee6262'
          },
        ]
      }
      addDataLine = {
        labels: labels,
        datasets: [
          {
            label: 'Total Kasus',
            data: addCases,
            fill: false,
            borderColor: '#589bf3',
          },
          {
            label: 'Positif',
            data: addPositive,
            fill: false,
            borderColor: '#f0f358',
          },
          {
            label: 'Sembuh',
            data: addSecure,
            fill: false,
            borderColor: '#72ee62'
            
          },
          {
            label: 'Meninggal',
            data: addDeath,
            fill: false,
            borderColor: '#ee6262'
          },
        ]
      }
      const data = {
        tglCasesPerDay,
        totalDataLine,
        addDataLine
      }
      dispatch({type: 'PERWEEK', payload: data})
    })
}
