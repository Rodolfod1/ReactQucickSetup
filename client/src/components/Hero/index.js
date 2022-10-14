import React from 'react'
import logo from "../images/SolarMax.png"
// import logo from "../images/MainPage/SolarMaxBW.png"
import {Container,Row, Col } from 'react-bootstrap'
import Nave from '../Nav'
import Products from '../Products'
import "../../Styles/style.css"
import USFlag from '../images/us-flag.png'
import MXFlag from '../images/mx-flag.png'


const Hero = () => {
  return (
  <Container fluid className='hero'>
     <Row className='topRow'>
        <div className='main-ribbon'>
        <Col xs={6} md={4} className='left-rib'>
        <img src={USFlag} alt='united states flag' />
        <span className='ribbon-txt rate'> Yesterday: $20.63 </span>
        <span className='ribbon-txt rate'> Today: $19.87 </span>
        <img src={MXFlag} alt='mexico flag'/>
        </Col>
        <Col xs={12} md={8} className='right-rib'>
          <span className='ribbon-txt'> <i className="fa-thin fa-phone"></i> (614).434.0242 </span>
          <span className='ribbon-txt'> <i className="fa-thin fa-envelope"></i> ventas1@solarmaxenergia.com </span>
          <span className='ribbon-txt'> <a className='anchor' href='/Login'><i class="fa-duotone fa-user-large"></i>INICIO DE SESIÓN</a></span>
          </Col>
        </div>
      </Row>
      <Row>
        <Col>
        <a className='logo1' href='/Home'>
          <img className="logomain" src={logo} alt="logo"></img>
        </a>
        </Col>
        
        <Nave/> 
       
        <Products/>
         
      </Row>
    
    
    </Container>
  )
}

export default Hero