import React, {useRef,useState} from 'react'
import { Container,Row , Col, Form, Button } from 'react-bootstrap'
import Brand from '../../components/Brands'
import './style.css'

const Contact = () => {
    const EmailRef= useRef();
const [emailInput, setEmailInput] = useState("");
const PasswordRef = useRef();
const [passwordInput, setPasswordInput] = useState("");
  return (
    <div>
    {/* <Brand/> */}
    <Container fluid className="ContactInfo">
        <Row className='ContactRow justify-content-center'>
       <Col xs={12} md={4} className="contact-left">
        {/* <h2>Deja tus datos</h2>
        <h4>Y te contactaremos a la brevedad</h4>
        <div className='whatsapp-num'><i class="fa-brands fa-whatsapp fa-2x"></i> BUSINESS <br></br> (614) 157.28.37</div> */}
       </Col>
       <Col xs={6} md={4}>
            <div>
            <h2>Deja tus datos</h2>
        <h4>Y te contactaremos a la brevedad</h4>
        <div className='whatsapp-num'><i class="fa-brands fa-whatsapp fa-2x"></i> BUSINESS <br></br> (614) 434.02.42</div>
            </div>
       
            <Form className="rounded p-4 p-sm-3">
                <div className='contact-form'>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label aria-required>Nombre</Form.Label>
                    <Form.Control type="name" 
                    placeholder="Tu nombre " 
                    ref={EmailRef} 
                    value={emailInput} 
                    autoComplete="off"
                    onChange={(e)=> setEmailInput(e.target.value)}/>
                <Form.Label aria-required>Correo Electronico</Form.Label>
                    <Form.Control type="email" 
                    placeholder="Tu email" 
                    ref={EmailRef} 
                    value={emailInput} 
                    autoComplete="off"
                    onChange={(e)=> setEmailInput(e.target.value)}/>
                <Form.Text className="text-muted">
                        Nunca compartiremos esta informacion con nadie mas.
                    </Form.Text>
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>WhatsApp</Form.Label>
                        <Form.Control type="text" 
                        placeholder="+52 (614)-____-____" 
                        ref={PasswordRef} 
                        value={passwordInput} 
                        autoComplete="off"
                        onChange={(e)=> setPasswordInput(e.target.value)} />
                </Form.Group>
                </div>
                {/* <div className="d-grid gap-2"> */}
                <div>
                    <Button variant="secondary" size="lg" type="submit" className='form-btn'>
                        Enviar
                    </Button> 
                </div>

             </Form>
       </Col>
       </Row>
    </Container>
    </div>

  )
}

export default Contact