import './user_page1.css'
import '../index.css'
import React from 'react'
import { FaRegUserCircle, FaRegListAlt } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
function Userpage1() {
    return (
        <div className='mainContainer'>
            <div className='header'>
                <h2 class='nameAppli'>NomAppli</h2>
            </div>
            <div className='wrapper'>
                <Link className='link-box' to="info"><FaRegUserCircle className='icon' />Informations</Link>
                <Link className='link-box' to="asso"><FaRegListAlt className='icon' />Listes assos</Link>
            </div>
            <Outlet />
        </div>

    );

}

export default Userpage1;
