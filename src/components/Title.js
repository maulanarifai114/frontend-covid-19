import React from 'react'
import '../assets/css/home.scoped.css'

export default function Title(props) {
  return (
    <div className="mb-60">
      <h1 className="text-center title-home">{props.name}</h1>
    </div>
  )
}
