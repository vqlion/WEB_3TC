import '../index.css'
import React from 'react'
import { FaRegUserCircle, FaRegListAlt, FaChevronDown, FaChevronUp, FaHome } from "react-icons/fa";
import { Outlet } from 'react-router-dom';
import { Link } from 'react-router-dom';
import axios from 'axios';
import styles from './ProfilePage.module.css'
import styled from 'styled-components'
import { useState, useEffect } from 'react';
import getUserData from '../lib/AuthHelper';
import { useNavigate } from 'react-router-dom';


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

    const navigate = useNavigate()


    const checkUserLoggedIn = async () => {
        getUserData().then((res) => {
            setProfile(res)
            if (!res) {
                setTimeout(() => {
                    navigate('/login')
                }, 2500);
            }
        })
            .catch(setProfile(null))
    }

    useEffect(
        () => {
            let ignore = false;
            if (!ignore) {
                checkUserLoggedIn()
            }
            return () => { ignore = true; }
        }, []
    )

    return (<>
        {!profile ? (<div className={styles.unauth}>
            <h1>Oups!</h1>
            <p>Vous devez être connecté pour pouvoir accéder à cette page. Vous allez être rédirigé vers la page de connexion.</p>
        </div>
        ) : (<>
            <div className={styles.wrapper}>
                <div className={styles.menu}>
                    <FlexDiv>
                        <h2 className='nameAppli'>Bonjour, {profile.name}</h2>
                    </FlexDiv>
                    <nav className='links-container' data-visible={visibleStatus}>
                        <Link className='link-box' to="/"><FaHome className='icon' /></Link>
                        <Link className='link-box' to="info" onClick={getUserInfo}><FaRegUserCircle className='icon' /></Link>
                        <Link className='link-box' to="asso"><FaRegListAlt className='icon' /></Link>
                    </nav>
                </div>
                <Outlet className={styles.outlet} />
            </div >
        </>
        )}
    </>
    );

}
//onClick={getUserInfo}
export default Userpage1;