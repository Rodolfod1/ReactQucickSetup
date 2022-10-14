import React from 'react'
import './slogan.css'
import { Container, Row } from 'react-bootstrap'
import logo from '../images/MainPage/SolarMaxBW.png'

const Slogan = () => {
  return (
    <div  className='legend'>
        <Container className='wrapping'>
        <Row className='pcbw'>
            <img src={logo} alt="logobw" className='Blwtlogo'></img>
        </Row>
        <Row>
        <h1>Ponemos el Sol en tus manos</h1>
        </Row>
        </Container>
        </div>
  )
}

export default Slogan