import React from 'react'
import style from '../assets/css/box.module.css'

export default function Today(props) {
  return (
    <div className="row">
      {/* <div className="col-lg d-flex flex-column box-data box-total"> */}
      <div className={`col-lg d-flex flex-column ${style.box_data} ${style.box_total}`}>
        <h3 className={`${style.box_title} ${style.box_title_total}`}>Total Kasus</h3>
        <h2 className={`d-flex flex-wrap ${style.big_number} ${style.number_total}`}>{props.cases.toLocaleString('id-ID')}</h2>
        <h4 className={style.small_number}>+{props.plusCases.toLocaleString('id-ID')}</h4>
      </div>
      <div className={`col-lg d-flex flex-column ${style.box_data} ${style.box_secure}`}>
        <h3 className={`${style.box_title} ${style.box_title_secure}`}>Sembuh</h3>
        <h2 className={`d-flex flex-wrap ${style.big_number} ${style.number_secure}`}>{props.secure.toLocaleString('id-ID')}</h2>
        <h4 className={style.small_number}>+{props.plusSecure.toLocaleString('id-ID')}</h4>
      </div>
      <div className={`col-lg d-flex flex-column ${style.box_data} ${style.box_death}`}>
        <h3 className={`${style.box_title} ${style.box_title_death}`}>Meninggal Dunia</h3>
        <h2 className={`d-flex flex-wrap ${style.big_number} ${style.number_death}`}>{props.death.toLocaleString('id-ID')}</h2>
        <h4 className={style.small_number}>+{props.plusDeath.toLocaleString('id-ID')}</h4>
      </div>
    </div>
  )
}
