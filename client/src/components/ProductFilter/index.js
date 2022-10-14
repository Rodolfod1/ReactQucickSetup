import React, {useState, useEffect} from 'react'
import { Button, Form } from 'react-bootstrap'
import '../../pages/products/Style.css'
import useAuth from '../Hooks/useAuth'

const Filter = () => {
// const [categories,setCategories]=useState([])
const {products}=useAuth();


// useEffect ( ()=>{
//     //function to select different categories into an array 
//     const selectUinique = ()=>{
//      const allCat= products.map(product=>product.Category)
//       let uniqueCat= [...new Set(allCat)];
//       setCategories([...categories, uniqueCat])
//     }

//  selectUinique();

// },[])

//need to call the element [0] due to the used method, there are other methods that won't require the useEffect hook this
// useEffect hook was used in preparation for calling the array from the API 
// const items=categories[0];
// console.log(items);

// new method from here  ignore useEffect hook *****
const allCat= products.map(product=>product.Category)
 const Items= [...new Set(allCat)];


  return (
    <div className='filters'>
        <span className='title'> Filter Products</span>
        <span>
            <Form.Select inline label="By Category" defaultValue={"...Selecciona"}>
               <option>...Selecciona</option>
                         
             {Items.map((category)=>
             <option key={category.id}>{category}</option>
             )}
               

            </Form.Select>
        </span>
        <span>
            <Form.Check inline label="Ascending" name="group1" type="radio" id={'inline-1'}/>
        </span>
        <span>
            <Form.Check inline label="Descending" name="group1" type="radio" id={'inline-2'}/>
        </span>
        <Button variant='light'>Limpiar Filtros</Button>
        </div>
  )
}

export default Filter