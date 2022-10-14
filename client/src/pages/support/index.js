import React from 'react'
import { Container,Row} from 'react-bootstrap'
import logoBW from "../../components/images/MainPage/SolarMaxBW.png"
import Privacidad from '../../components/Modals/Privacy'
import Terminos from '../../components/Modals/TdS'
import useAuth from '../../components/Hooks/useAuth'

import './support.css'

const Support = () => {
  const {privacy,setPrivacy}=useAuth();

  const HandlePrivacy=(e)=>{
    e.preventDefault();
    setPrivacy(!privacy)

  }

  const HandleTerms=(e)=>{
    e.preventDefault();
    setPrivacy(!privacy)

  }

  return (
    <div>
        <Container fluid className='RibbonFooter'>
            <Row className="justify-content-center">
          <img className="logobott" src={logoBW} alt="SolarMax"/>
            </Row>
            <div className="BotRow">
                <span className='ribbon-as'>
                    <a href='https://www.facebook.com/solarmax.energia/'>
                        <i className="fa-brands fa-facebook fa-6x Ficon"></i></a>
                </span>
                <span className='ribbon-as'>
                    <a href='https://www.instagram.com/solarmaxenergia/?hl=en'>
                    <i className="fa-brands fa-instagram fa-6x Ficon"></i></a>
                </span>
            </div>
        </Container>

        <Container fluid className='privacy-tos'>
        <div className='footer-links'>
          <a href="#" onClick={HandlePrivacy}>PÓLITICA DE PRIVACIDAD</a>
          {privacy && (<Privacidad/>) } 
          <a href="#" onClick={HandleTerms}>TERMINOS DE SERVICIO</a>
          {privacy && (<Terminos/>) } 
        </div>
        <div class='copyright'>
          Derechos Reservados Roccia Global 2022
        </div>
        </Container>

      

        
    </div>
  )
}

export default Support