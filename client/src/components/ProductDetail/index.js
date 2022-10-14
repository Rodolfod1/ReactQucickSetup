import React, { useState, useEffect } from 'react';
import ListGroup from 'react-bootstrap/ListGroup';
import Offcanvas from 'react-bootstrap/Offcanvas';
import useAuth from '../Hooks/useAuth';
import './pdetail.css'

const ProductShow=(param)=> {
  const {productDet, setProductDet,singleProd,setSingleProd}=useAuth();  
  const [show, setShow] = useState(true); //change this prop to false when its button activated
 
  const handleClose = () => {setShow(false); setProductDet(!productDet);}
  
  return ( 
      <Offcanvas show={show} onHide={handleClose}  placement='start'>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>{singleProd.product.category}<br></br>{singleProd.product.marca}</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
            <img src={singleProd.product.image} alt={singleProd.product.marca} className="PhotoOffcanvas" />
            <h1 className='NameOfproduct'>{singleProd.product.pdctName}</h1>
            <br></br>
            <p>Some text as placeholder. In real life you can have the elements you
          have chosen. Like, text, images, lists, etc.   </p>
          <ListGroup variant="flush">
            Documentos de referencia:
      <ListGroup.Item>Hoja Técnica 
        <span className='dwnld'> <a><i class="fa-duotone fa-cloud-arrow-down fa-lg"></i></a> </span>
      </ListGroup.Item>
      <ListGroup.Item>Manual de Uso
      <span className='dwnld'> <a><i class="fa-duotone fa-cloud-arrow-down fa-lg"></i></a> </span>
      </ListGroup.Item>
      <ListGroup.Item>Certificado
      <span className='dwnld'> <a><i class="fa-duotone fa-cloud-arrow-down fa-lg"></i></a> </span>
      </ListGroup.Item>
    </ListGroup> 
        </Offcanvas.Body>
      </Offcanvas>
    
  );
}
export default  ProductShow;