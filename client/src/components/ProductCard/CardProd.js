import React,{useState} from 'react'
import { Button, Card } from 'react-bootstrap'
import useAuth from '../Hooks/useAuth'
import ProductShow from '../ProductDetail';

const CardProd = (props) => {
  const {productDet, setProductDet,singleProd,setSingleProd}=useAuth(); 


  const HandleClick=(e)=>{
    e.preventDefault();
    setProductDet(!productDet)
   setSingleProd({...singleProd, product:props})
    
  }


  return (
    
        <Card className="Pcard" style={{width: '25rem'}}>
            <div>
                <h5>{props.category}</h5>
                <img src={props.image} className="card-img-top" alt='productImage'/>
            </div>
            <Card.Body>
                <Card.Title>{props.pdctName}</Card.Title>
                <Card.Subtitle>{props.marca}</Card.Subtitle>
                <Card.Text><h8>{props.desc}</h8></Card.Text>
                <Card.Footer className='cardFoot'>
                    {/* <Button href={props.techdata} target="blank">
                                          Ver Ficha Tecnica
                    </Button> */}
                    <Button variant='secondary' onClick={HandleClick}> Ver mós informacion</Button>
                    
                    {productDet && (<ProductShow key={props.Key} product={props}/>)}
                </Card.Footer>
            </Card.Body>

        </Card>
    
  )
}

export default CardProd