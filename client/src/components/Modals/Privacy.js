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
          Política De Privacidad
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <h4>En SolarMax</h4>
        <p>
        Nuestro objetivo de esta Política es informarte sobre qué datos recogemos, 
        por qué los recogemos y cómo puedes actualizarlos,  y gestionarlos .
        </p>
      </Modal.Body>
      <Modal.Footer>
        <Button onClick={props.onHide}>Salir</Button>
      </Modal.Footer>
    </Modal>
  );
}

const Privacidad=()=> {
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

export default Privacidad