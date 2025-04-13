import React from 'react'
import s from './LoadMoreBtn.module.css'

const LoadMoreBtn = ({onClick}) => {
  return (
    <button className={s.loadBtn} onClick= {onClick}>Load more</button>
  )
}

export default LoadMoreBtn