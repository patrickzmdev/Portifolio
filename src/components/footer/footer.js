import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './footer.css';
import logo from '../../assets/icon.jpg';
import Contato from "../../pages/contato/contato";
import Fotos from "../../pages/fotos/fotos";


function Footer(){
    return(
     <footer> 
        <img id="logo" src={logo}/>
       
            <nav>
                <ul>
                    <Link style={{textDecoration:'none'}} to= '/'>
                        <li>Home</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='./contato'>
                        <li>Contato</li>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/fotos'>
                        <li>Fotos</li>
                    </Link>
                   
                </ul>
                <span>Todos os direitos reservados ©</span>
                <span>Desenvolvido por Patrick</span>
                    
            </nav>
             
     </footer>
    )
}

export default Footer;