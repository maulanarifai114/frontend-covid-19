import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Title from '../components/Title'
import Today from '../components/Today'

export default function Home() {
  let [cases, setCases] = useState(0)
  let [plusCases, setPlusCases] = useState(0)
  let [secure, setSecure] = useState(0)
  let [plusSecure, setPlusSecure] = useState(0)
  let [death, setDeath] = useState(0)
  let [plusDeath, setPlusDeath] = useState(0)
  const url = 'https://apicovid19indonesia-v2.vercel.app/api'

  useEffect(() => {
    axios.get(`${url}/indonesia/more`)
    .then((res)=> {
      const today = res.data
      console.log(today);
      setCases(today.total.positif)
      setSecure(today.total.sembuh)
      setDeath(today.total.meninggal)
      setPlusCases(today.penambahan.positif)
      setPlusSecure(today.penambahan.sembuh)
      setPlusDeath(today.penambahan.meninggal)
    })
    .catch((err)=> {
      console.log(err.response);
    })
  });

  return (
    <div className="container">
      <Title name="Data Covid - 19 Indonesia Hari Ini"/>
      <Today 
        cases={cases} plusCases={plusCases}
        secure={secure} plusSecure={plusSecure}
        death={death} plusDeath={plusDeath}
      />
    </div>
  )
}
