import React from 'react'
import { Container,Row,Col } from 'react-bootstrap'
import Nave from '../Nav'
import USFlag from '../images/us-flag.png'
import MXFlag from '../images/mx-flag.png'
// import '../../Styles/style.css'
import logo from '../images/SolarMax.png'

const Ribbon = () => {
  return (
    <Container fluid className='ribbon-product'>
    <Row>
       <div className='nav-ribbon'>
       <Col xs={6} md={4} className='left-rib'>
       <img src={USFlag} alt='united states flag' />
       <span className='ribbon-txt rate'>   Yesterday: $20.63 </span>
       <span className='ribbon-txt rate'> Today: $19.87 </span>
       <img src={MXFlag} alt='mexico flag'/>
       
      
       
       </Col>
       <Col xs={12} md={8} className='right-rib'>
       <span className='ribbon-txt UserId'> <i class="fa-duotone fa-user"></i>Welcome Joe Doe</span> 
       
       <span className='ribbon-txt'>4,825 puntos disponibles</span>
       
        <span>      </span>
        <span></span>
         <span className='ribbon-txt'> <i class="fa-brands fa-whatsapp"></i>(614).434.0242 </span>
         <span className='ribbon-txt'> <i class="fa-duotone fa-cart-shopping"></i>8</span>
         <span className='ribbon-txt'> <a className='anchor' href='/Login'><i class="fa-thin fa-right-from-bracket"></i>Salir</a></span>
         </Col>
       </div>
     </Row>  
   </Container>
  )
}

export default Ribbon