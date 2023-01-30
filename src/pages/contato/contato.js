import React from 'react'
import { useLinkClickHandler } from 'react-router-dom';
import Footer from '../../components/footer/footer';
import Header from '../../components/header/header';
import './contato.css';


function Contato(){
    
 
    return(
        <>
        <Header/>
        <div>
            
           <div id="centropagina">
              <p>Entre em contato conosco </p>
              <p>33131312</p>
           </div>
           
    

        </div>
        <Footer/>
        </>
       
    )
}

export default Contato;