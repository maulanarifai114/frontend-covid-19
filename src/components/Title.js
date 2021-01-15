import React from 'react'
import style from '../assets/css/title.module.css'

export default function Title(props) {
  return (
    <div className={`${style.mb_60}`}>
      <h1 className={`text-center ${style.title_home}`}>{props.name}</h1>
      <h2 className={`${style.date}`}>Terakhir update {props.date}</h2>
    </div>
  )
}
