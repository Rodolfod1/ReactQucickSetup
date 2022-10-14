import React from 'react'
import { Container } from 'react-bootstrap'
import Brands from "../images/MainPage/BrandRibbon3.png"


const Brand = () => {
  return (
    <Container fluid className='Nonhero'>
        <img className="logobrand" src={Brands} alt="logo"></img>
    </Container>
  )
}

export default Brand