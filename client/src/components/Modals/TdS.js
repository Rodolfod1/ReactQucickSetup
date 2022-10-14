import React from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import useAuth from '../Hooks/useAuth';
import "./styleModal.css"

function MyVerticallyCenteredModal(props) {  
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
      contentClassName='ModStyle'
   
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          Términos de Servicio
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>En SolarMax</h4>
        <p>
        Aquí describimos que puedes esperar de nosotros, 
        Como usar nuestro servicion y como llevar tus proyectos al éxito
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Salir</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Terminos=()=> {
  const [modalShow, setModalShow] = React.useState(true);// change to false when its button activated 
  const {privacy,setPrivacy}=useAuth();
  return (
    <>
      {/* <Button variant="primary" onClick={() => setModalShow(true)}>
        Launch vertically centered modal
      </Button> */}

      <MyVerticallyCenteredModal
        show={modalShow}
        onHide={() => {setModalShow(false);
          setPrivacy(!privacy)     
    }
        }
      />
    </>
  );
}

export default Terminos