import './user_page1.css' 
import React from 'react'
import { FaRegUserCircle ,FaRegListAlt} from "react-icons/fa";
function Userpage1() {
    return ( 
        <div className='mainContainer'>
            <div className='header'>
                <h2 class='nameAppli'>NomAppli</h2>
             </div>
            <div className='wrapper'>
                <a href="/info"><FaRegUserCircle className='icon'/>Informations</a>
                <a href="/asso"><FaRegListAlt className='icon'/>Listes Assos</a>
             </div>
        </div>

     );
   
}

export default Userpage1;
