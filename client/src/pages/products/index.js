import React from 'react'
import Nave from '../../components/Nav'
import { Col, Container, Row } from 'react-bootstrap'
import "./Style.css"
import useAuth from '../../components/Hooks/useAuth'
import CardProd from '../../components/ProductCard/CardProd'
import Filter from '../../components/ProductFilter'

const Catalog = () => {
    const {products}=useAuth();
  
  return (
    <div>
        <Container fluid className='ribbon-product' >
            <Row>
                <div className='nav-ribbon'>
                    <Nave/>
                </div>
            </Row>
            <div className='prodWrapper'>
            <Filter/>
          
            <Col className='col-sm gridcol'>
                <Container className='catalog'>
                {products.map(({_id,Category,Brand,Name,Datasheet,Picture,DescripcionCorta})=>{
                    return(
                    <CardProd 
                        Key={_id}
                        category={Category}
                        image={Picture}
                        pdctName={Name}
                        desc={DescripcionCorta}
                        marca={Brand}
                        techdata={Datasheet} />
                    )
                })

                }
                </Container>

            </Col>
        
        </div>
        </Container>
    </div>
  )
}

export default Catalog