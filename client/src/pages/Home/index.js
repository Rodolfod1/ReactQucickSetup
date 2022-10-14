import React from 'react'
// import Nave from '../../components/Nav'
// import "../../Styles/style.css"

import Hero from '../../components/Hero'
import Brand from '../../components/Brands'
import Contact from '../contact'
import Support from '../support'
// import Products from '../../components/Products'
import Value from '../../components/ValueChain'
import Slogan from '../../components/Slogan'

const Home = () => {
  return (
    <div>
        
   <Hero/>
   {/* <Products/> */}
{/*  
  <a
    className="App-link"
    href="https://solarmaxenergia.mx/"
    target="_blank"
    rel="noopener noreferrer"
  >
    visit old site 
  </a> */}
<Brand/>
<Slogan/>
<Value/>
<Contact/>
<Support/>

</div>
      
    
  )
}

export default Home