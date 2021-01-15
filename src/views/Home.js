import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import { Line } from 'react-chartjs-2';
import Title from '../components/Title'
import Today from '../components/Today'
import '../assets/css/home.css'
import '../assets/css/mb30.css'

const idLocale = require('moment/locale/id'); 
moment.locale('id', idLocale)

export default function Home() {
  let [cases, setCases] = useState(0)
  let [plusCases, setPlusCases] = useState(0)
  let [secure, setSecure] = useState(0)
  let [plusSecure, setPlusSecure] = useState(0)
  let [death, setDeath] = useState(0)
  let [plusDeath, setPlusDeath] = useState(0)
  let [date, setDate] = useState(null)
  let [dataChartLine, setChartLine] = useState({
    labels: [],
    datasets: [
      {
        label: 'Covid - 19 Indonesia',
        data: [0,0,0],
        backgroundColor: [
          '#f0f358',
          '#72ee62',
          '#ee6262',
        ],
      }
    ]
  })

  const funcSetDate = (payload)=> {
    const splitT = payload.split('T')
    const splitZ = splitT[1].split('.000Z')
    const date = `${splitT[0]} ${splitZ[0]}`
    setDate(moment(date).format('LLLL'))
  }
  const url = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia'

  useEffect(() => {
    axios.get(`${url}/harian`)
    .then((res)=> {
      const start = res.data.length-1-7
      const end = res.data.length-1
      const allData = res.data
      let labels = []
      let cases = []
      let secure = []
      let death = []
      allData.forEach((e, index)=> {
        const day = e.tanggal.split('T')
        if (index > start && index <= end) {
          labels.push(moment(day[0]).format('dddd'))
          cases.push(e.positif_kumulatif)
          secure.push(e.sembuh_kumulatif)
          death.push(e.meninggal_kumulatif)
        }
      })
      console.log('labels', labels);
      setChartLine({
        labels: labels,
        datasets: [
          {
            label: 'Total Kasus',
            data: cases,
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
    })
    axios.get(`${url}/more`)
    .then((res)=> {
      const today = res.data
      setCases(today.total.positif)
      setSecure(today.total.sembuh)
      setDeath(today.total.meninggal)
      setPlusCases(today.penambahan.positif)
      setPlusSecure(today.penambahan.sembuh)
      setPlusDeath(today.penambahan.meninggal)
      funcSetDate(today.penambahan.created)
      console.log(today);
    })
    .catch((err)=> {
      console.log(err.response);
    })
    
  }, []);

  return (
    <div className="container">
      <Title 
        name="Data Covid - 19 Indonesia Ter-update"
        date={date}
      />
      <Today 
        cases={cases} plusCases={plusCases}
        secure={secure} plusSecure={plusSecure}
        death={death} plusDeath={plusDeath}
      />
      <hr/>
      <h3 className="subtitle">1 Minggu Terakhir</h3>
      <div className="mb30">
        <Line  
          data={dataChartLine}
          height={300}
          options={{
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
                fontSize: 16
              }
              
            },
            responsive: true,
            maintainAspectRatio: false 
          }}
        />
      </div>
      <hr/>
    </div>
  )
}
