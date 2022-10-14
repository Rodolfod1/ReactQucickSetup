import React, {useEffect, useRef, useState} from "react";
// import useAuth from "../Hooks/useAuth"
// import { AuthService } from "../../Authentication/AuthService";
import {Form, Button} from "react-bootstrap"
// import 'bootstrap/dist/css/bootstrap.min.css';
import "../LogFrm/style.css"
// import { useNavigate, useLocation} from "react-router-dom";



function LoginFrm() {

// declaring hooks and refs

// const {setAuth} = useAuth();
const EmailRef= useRef();
const [emailInput, setEmailInput] = useState("");
const PasswordRef = useRef();
const [passwordInput, setPasswordInput] = useState("");
const [message, setMessage] = useState(null);
// const navigate = useNavigate();
// const location = useLocation();
// const from = location.state?.from?.pathname || "/";

useEffect(()=>{
},[])

// const HandleSubmit = async (e) =>{
//         e.preventDefault();
//         const user = {
//             username: EmailRef.current.value,
//             password: PasswordRef.current.value
//              };
            
//         // section to add the authentication comparisons 
//         if (!EmailRef.current.value || !PasswordRef.current.value) {
//             return setMessage("Faltan campos de e-mail y password! "); 
            
//         }

//   try{
    
//     AuthService.login(user)
//     .then((data) => {
//         // console.log("respuesta del server" + data);
//              const { isAuthenticated, user} = data;
           
//             setAuth({ user, isAuthenticated })
        
//              setPasswordInput("");
//              setEmailInput("");
                  
//              navigate(from, {replace:true})
//           if (!isAuthenticated) {
                    
//               setMessage("e-mail o password no autorizados");
//             } 
//             },
          
//             );
//   }catch (err){
//     if(!err?.response){
//         setMessage("No Server Respose")
//     }
 

//     } 

//     }

        
    return(
        <div className="masthead">
               <div className="color-overlay d-flex justify-content-center align-items-center">
           
                {/* <Form className="rounded p-4 p-sm-3" onSubmit={HandleSubmit}> */}
                <Form className="rounded p-4 p-sm-3" >
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Correo Electronico:</Form.Label>
                            <Form.Control type="email" 
                            placeholder="Enter email" 
                            ref={EmailRef} 
                            value={emailInput} 
                            autoComplete="off"
                            onChange={(e)=> setEmailInput(e.target.value)}/>
                            <Form.Text className="text-muted">
                               Nunca compartiremos esta informacion con nadie mas.
                            </Form.Text>
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                                <Form.Control type="password" 
                                placeholder="Password" 
                                ref={PasswordRef} 
                                value={passwordInput} 
                                autoComplete="off"
                                onChange={(e)=> setPasswordInput(e.target.value)} />
                        </Form.Group>
                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Mantenerme conectado" />
                        </Form.Group>
                        <div className="d-grid gap-2">
                            <Button variant="secondary" size="lg" type="submit" >
                                 Entrar
                            </Button> 
                        </div>

             </Form>
            </div>
            <div className="errorMessage">{message}</div>
        </div>

    )
}

export default LoginFrm