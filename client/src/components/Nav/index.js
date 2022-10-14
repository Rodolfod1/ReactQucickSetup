import React from 'react'
// import "../../Styles/style.css"
import {Container, Navbar, NavDropdown, Nav} from "react-bootstrap"


const Nave = (props) => {
  const  Categories=["Baterías","Bombas", "Calentadores","Controladores","Estructura",
"Iluminación", "Inversores de Interconexión","Inversores Aislados","Módulos", "Refrigeradores"]


  return (
    <Navbar expand="lg">
      <Navbar.Toggle aria-controls="basic-navbar-nav" /> 
      <Navbar.Collapse id="basic-navbar-nav">
        <Container>
          <Nav className="navi">
            <a className="nav-link dklk " aria-current="page" href="/about">Nosotros</a>
            <a className="nav-link dklk" href="/products">Productos</a>
            <NavDropdown title="Soluciones" id="nav-dropdown" className="dklk">
              { Categories.map((category)=>{
                return(
                  <NavDropdown.Item eventKey={category.id}>{category}</NavDropdown.Item>
                )
              })

              }
            </NavDropdown>
            <a className="nav-link dklk" href="/downloads">Descargas</a>
            <a className="nav-link dklk" href="/supply">Distribuidores</a>
            <a className="nav-link dklk" href="/support">Soporte</a>
            <a className="nav-link dklk" href="/contact">Contacto</a>
          </Nav>
        </Container>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Nave