import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getTotal, getPerWeek } from '../configs/redux/actions'
import { optionsChart } from '../configs/views/Home/options'
import { Line } from 'react-chartjs-2';
import moment from 'moment'
import Title from '../components/Title'
import Today from '../components/Today'
import '../assets/css/home.css'
import '../assets/css/mb30.css'

const idLocale = require('moment/locale/id'); 
moment.locale('id', idLocale)

export default function Home() {
  const dispatch = useDispatch()
  const perweek = useSelector(state => state.perweek)
  const total = useSelector(state => state.total)
  const options = optionsChart(perweek.tglCasesPerDay)

  useEffect(() => {
    dispatch(getPerWeek())
    dispatch(getTotal())
  }, [dispatch]);

  return (
    <div className="container">
      <Title 
        name="Data Covid - 19 Indonesia Ter-update"
        date={total.date}
      />
      <Today 
        cases={total.cases} plusCases={total.plusCases}
        secure={total.secure} plusSecure={total.plusSecure}
        death={total.death} plusDeath={total.plusDeath}
        positive={total.positive} plusPositive={total.plusPositive}
      />
      <hr/>
      <h3 className="subtitle">Total 1 Minggu Terakhir</h3>
      <div className="mb30">
        <Line  
          data={perweek.totalDataLine}
          height={300}
          options={options}
        />
      </div>
      <h3 className="subtitle">Penambahan 1 Minggu Terakhir</h3>
      <div className="mb30">
        <Line
          data={perweek.addDataLine}
          height={300}
          options={options}
        />
      </div>
      <hr/>
    </div>
  )
}
