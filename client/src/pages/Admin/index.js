import React from 'react'
import { InputGroup,Form,Button } from 'react-bootstrap'

const Admin = () => {
  return (
<div className='container'>
    <div className='row'>
        <div className='col-md6 m-auto'>
            <h1 className='text-center display-4 my-4'>file uploading</h1>
            <Form.Group controlId="formFileSm" className="mb-3">
        <Form.Label>Small file input example</Form.Label>
        <Form.Control type="file" size="sm" />
      </Form.Group>
        </div>
    </div>

</div>

    // <div className='masthead'>
    //     {/* <div className="color-overlay d-flex justify-content-center align-items-center"> */}
    //     <h1>Welcome SolarMax Admin page</h1>
    //     <InputGroup className="mb-3">
    //     <Form.Control
    //       placeholder="Recipient's username"
    //       aria-label="Recipient's username"
    //       aria-describedby="basic-addon2"
    //     />
    //     <Button variant="outline-secondary" id="button-addon2">
    //       Button
    //     </Button>
    //   </InputGroup>

    //   <InputGroup className="mb-3">
    //     <Form.Control
    //       placeholder="Recipient's username"
    //       aria-label="Recipient's username"
    //       aria-describedby="basic-addon2"
    //     />
    //     <Button variant="outline-secondary" id="button-addon2">
    //       Button
    //     </Button>
    //   </InputGroup>

    

     
    //   {/* </div> */}
    // </div>
  )
}

export default Admin