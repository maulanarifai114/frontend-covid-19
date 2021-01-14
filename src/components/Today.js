import React from 'react'
import '../assets/css/box.scoped.css'

export default function Today(props) {
  return (
    <div className="row wrap-box">
      <div className="col-lg d-flex flex-column box-data">
        <h3 className="box-title box-title-total">Total Kasus</h3>
        <h2 className=" d-flex flex-wrap big-number number-total">{props.cases.toLocaleString('id-ID')}</h2>
        <h4 className="small-number">+{props.plusCases.toLocaleString('id-ID')}</h4>
      </div>
      <div className="col-lg d-flex flex-column box-data">
        <h3 className="box-title box-title-secure">Sembuh</h3>
        <h2 className=" d-flex flex-wrap big-number number-secure">{props.secure.toLocaleString('id-ID')}</h2>
        <h4 className="small-number">+{props.plusSecure.toLocaleString('id-ID')}</h4>
      </div>
      <div className="col-lg d-flex flex-column box-data">
        <h3 className="box-title box-title-death">Meninggal</h3>
        <h2 className=" d-flex flex-wrap big-number number-death">{props.death.toLocaleString('id-ID')}</h2>
        <h4 className="small-number">+{props.plusDeath.toLocaleString('id-ID')}</h4>
      </div>
    </div>
  )
}
