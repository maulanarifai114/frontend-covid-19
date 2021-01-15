import React, { useState, useEffect } from 'react'
import axios from 'axios'
import moment from 'moment'
import Title from '../components/Title'
import Today from '../components/Today'
import '../assets/css/home.css'

export default function Home() {
  let [cases, setCases] = useState(0)
  let [plusCases, setPlusCases] = useState(0)
  let [secure, setSecure] = useState(0)
  let [plusSecure, setPlusSecure] = useState(0)
  let [death, setDeath] = useState(0)
  let [plusDeath, setPlusDeath] = useState(0)
  let [date, setDate] = useState(null)

  const funcSetDate = (payload)=> {
    const idLocale = require('moment/locale/id'); 
    moment.locale('id', idLocale)
    const splitT = payload.split('T')
    const splitZ = splitT[1].split('.000Z')
    const date = `${splitT[0]} ${splitZ[0]}`
    setDate(moment(date).format('LLLL'))
  }
  const url = 'https://apicovid19indonesia-v2.vercel.app/api/indonesia'

  useEffect(() => {
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
    </div>
  )
}
