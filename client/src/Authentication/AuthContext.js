import React, { createContext, useState, useEffect} from 'react'
import axios from 'axios'
 const AuthContext = createContext({});

 export const AuthProvider = ({ children }) => {
     //hook to store the logged user profile 
     const [auth, setAuth]=useState({})
     //hook for sub profile to store name and copany of the current logged user
     const [currentuser, setCurrentuser]=useState({});
     //this context is for develoment only for deployment we need to call to db
     const [products,setProducts]=useState([])
     const [privacy,setPrivacy]=useState(false)
     const [productDet, setProductDet]=useState(false); // state to controll offcanvas called from product card
     const [singleProd,setSingleProd]=useState({}); 

     //attempting to call the db 
     useEffect(()=>{
        const CallDb=async()=>{
            const items= await axios.get('/Items/All')
            .then(res=>{return (res.data)})
            .catch(e=>console.log(e))
            setProducts(items)
                


        }

        CallDb();


     },[])


    return (
        <div>
            <AuthContext.Provider value={{ auth, setAuth, privacy,setPrivacy, productDet, setProductDet,singleProd,setSingleProd, currentuser, setCurrentuser,products,setProducts }}>
                { children }
            </AuthContext.Provider>
        </div>
    )
}

export default AuthContext