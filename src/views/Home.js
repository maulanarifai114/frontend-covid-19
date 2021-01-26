import React, { useState, useEffect } from 'react'
import {useDispatch, useSelector} from 'react-redux'
import { getTotal } from '../configs/redux/actions'
import { Line } from 'react-chartjs-2';
import axios from 'axios'
import moment from 'moment'
import Title from '../components/Title'
import Today from '../components/Today'
import '../assets/css/home.css'
import '../assets/css/mb30.css'

const idLocale = require('moment/locale/id'); 
moment.locale('id', idLocale)

export default function Home() {
  const dispatch = useDispatch()
  // const perweek = useSelector(state => state.perweek)
  const totaled = useSelector(state => state.total)

  const [tglCases, setTglCases] = useState([])
  const [totalDataLine, setTotalDataLine] = useState({
    labels: [],
    datasets: [
      {
        label: 'Covid - 19 Indonesia',
        data: [0,0,0],
      }
    ]
  })
  const [addDataLine, setAddDataLine] = useState({
    labels: [],
    datasets: [
      {
        label: 'Covid - 19 Indonesia',
        data: [0,0,0],
      }
    ]
  })

  const options = {
    tooltips: {
      backgroundColor: 'rgba(0, 0, 0, 0.9)',
      titleFontFamily: 'Quicksand',
      bodyFontFamily: 'Quicksand',
      footerMarginTop: 16,
      footerFontFamily: 'Quicksand',
      xPadding: 12,
      yPadding: 12,
      borderColor: '#fff',
      caretSize: 10,
      multiKeyBackground: '#00000000',
      callbacks: {
        footer: function(tooltipItem, data) {
          const day = tooltipItem[0].label
          const label = data.labels
          let date = ''
          label.forEach((el, index)=> {
            if(day === el) {
              date = tglCases[index]
            }
          })
          return date
        }
      }
    },  
    scales: {
      yAxes: [{
        ticks: {
          fontFamily: 'Quicksand',
          fontColor: 'white'
        }
      }],
      xAxes: [{
        ticks: {
          fontFamily: 'Quicksand',
          fontColor: 'white'
        }
      }]
    },        
    legend: {
      labels: {
        fontFamily: 'Quicksand',
        fontColor: '#ffffff',
        fontSize: 16,
        boxWidth: 20
      }
      
    },
    responsive: true,
    maintainAspectRatio: false 
  }

  const url = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia'

  useEffect(() => {
    axios.get(`${url}/harian`)
    .then((res)=> {
      const start = res.data.length-1-7
      const end = res.data.length-1
      const allData = res.data
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
      setTglCases(tglCases)
      setTotalDataLine({
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
      })
      setAddDataLine({
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
      })
    })
    dispatch(getTotal())
  }, [dispatch]);

  return (
    <div className="container">
      <Title 
        name="Data Covid - 19 Indonesia Ter-update"
        date={totaled.date}
      />
      <Today 
        cases={totaled.cases} plusCases={totaled.plusCases}
        secure={totaled.secure} plusSecure={totaled.plusSecure}
        death={totaled.death} plusDeath={totaled.plusDeath}
        positive={totaled.positive} plusPositive={totaled.plusPositive}
      />
      <hr/>
      <h3 className="subtitle">Total 1 Minggu Terakhir</h3>
      <div className="mb30">
        <Line  
          data={totalDataLine}
          height={300}
          options={options}
        />
      </div>
      <h3 className="subtitle">Penambahan 1 Minggu Terakhir</h3>
      <div className="mb30">
        <Line  
          data={addDataLine}
          height={300}
          options={options}
        />
      </div>
      <hr/>
    </div>
  )
}
