import React from 'react'
import Ribbon from '../../components/Ribbon'
// import './style.css'
import { Col, Container, Nav,Card, Badge } from 'react-bootstrap'
import mientras from '../../components/images/SolarMax.png'
import useAuth from '../../components/Hooks/useAuth'
const Supply = () => {

  const {products}=useAuth();

  return (
    <div>
      <Ribbon/>

    <div className='prodWrapper'>      
      <div className='VerOpt'>
        <h3>Menú</h3>
        <Nav defaultActiveKey="/home" className="flex-column">
        
        <Nav.Link eventKey="link-1">Historia de Facturas</Nav.Link>
        <Nav.Link eventKey="link-2">Ultimo Pedido</Nav.Link>
        <Nav.Link eventKey="link-2"><Badge pill bg="secondary">
        "Nueva Cotización"
      </Badge></Nav.Link>
        <Nav.Link href="/home">Home</Nav.Link>  
      
      </Nav>
      </div>
      
      <Col className='catalog'>
      {products.map(({id,Category,Brand,Name,Datasheet,Picture,DescripcionLarga})=>{
        return(

          <Card style={{ width: '18rem' }} key={id}>
      <Card.Body>
        <Card.Title>{Category}</Card.Title>
        <Card.Img variant="top" src={Picture} />
        <Card.Subtitle className="mb-2 text-muted">{Brand}<br></br>{Name}</Card.Subtitle>
        <Card.Text>
          {DescripcionLarga}
        </Card.Text>
        <Card.Link href={Datasheet} target="blank"><i class="fa-duotone fa-cloud-arrow-down fa-lg"></i></Card.Link>
        <Card.Link href="#"><a><i class="fa-duotone fa-cart-circle-plus fa-2x"></i></a></Card.Link>
      </Card.Body>
    </Card>

        )
      }
      )
    }
      
      </Col>

     
      </div>
      



    </div>
  )
}

export default Supply