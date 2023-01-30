import React from "react";
import { Link, useNavigate } from "react-router-dom";
import './styless.css'
import logo from '../../assets/icon.jpg';
import Contato from "../../pages/contato/contato";
import Fotos from "../../pages/fotos/fotos";
import Comentarios from "../../pages/comentarios/comentarios";


function Header(){
    
    
    return(
        <header>
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
            </nav>
        </header>
    )
}


export default Header;


