import React from 'react'
import './value.css'
import { Container } from 'react-bootstrap'
import ValueChain from '../../components/images/MainPage/SupplyChainNew.png'

const Value = () => {
  return (
    <div className='Value'>
        <img src={ValueChain} alt="valuehcain" className='picvalue'></img>
    </div>
  )
}

export default Value