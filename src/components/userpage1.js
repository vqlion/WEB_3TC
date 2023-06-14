import './user_page1.css'
import '../index.css'
import React from 'react'
import { FaRegUserCircle, FaRegListAlt, FaChevronDown, FaChevronUp, FaHome } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './menu.module.css'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import getUserData from '../lib/AuthHelper';
import { redirect, Navigate } from 'react-router-dom';

function Userpage1() {
    const getUserInfo = () => {
        // axios
        //     .get('http://localhost:8082/api/getusers')
        //     .then((res) => console.log(res))
    }

    const FlexDiv = styled.div`
    display: flex;
    flex-direction: row;
    gap: 1rem;
    align-items: center;`

    const [visibleStatus, setVisibleStatus] = useState(false)
    const [profile, setProfile] = useState()

    const getChevron = () => {
        return visibleStatus ? <FaChevronUp className='icon' /> : <FaChevronDown className='icon' />
    }

    const checkUserLoggedIn = () => {
        const userData = getUserData()
        if (userData) setProfile(userData)

    }

    useEffect(
        () => {
            let ignore = false;
            if (!ignore) {
                const userData = getUserData()
                if (userData) setProfile(userData)
                console.log("profile", profile)
            }
            return () => { ignore = true; }
        }, []
    )

    const display = () => {
        console.log(profile)
    }


    return (<>
        {!profile ? (<>
            <button onClick={display}>display</button>
            </>
        ) : (
            <div className='wrapper'>
                <button onClick={display}>display</button>
                < header className='header'>
                    <div className={styles.menu}>
                        <FlexDiv>
                            <h2 className='nameAppli'>Username</h2>
                            <button onClick={() => setVisibleStatus(!visibleStatus)}> {getChevron()}</button>
                        </FlexDiv>
                        <nav className='links-container' data-visible={visibleStatus}>
                            <Link className='link-box' to="/"><FaHome className='icon' /></Link>
                            <Link className='link-box' to="info" onClick={getUserInfo}><FaRegUserCircle className='icon' /></Link>
                            <Link className='link-box' to="asso"><FaRegListAlt className='icon' /></Link>
                        </nav>
                    </div>
                </header>
            </div >
        )}
        <Outlet />
    </>
    );

}

export default Userpage1;