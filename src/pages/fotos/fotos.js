import React from 'react';
import './fotos.css';
import Header from '../../components/header/header';
import Footer from '../../components/footer/footer';



function Fotos(){
    return(
      <>
      <Header/>
        <div id="mensagem"> Personagens do filme</div>
         <div className="fotos">
            <div className="card batman">Batman </div>
            <div className="card mulhergato">Mulhergato</div>  
            <div className="card gordon">Gordon</div>  
            <div className="card charada">Charada</div>
            <div className="card alfred">Alfred </div>
            <div className="card pinguim">Pinguim</div>  
            <div className="card falcone">Falcone</div>  
            <div className="card gil">Gil</div>

        </div> 
       <Footer/>     
      
      
    </>
    )
}

export default Fotos;