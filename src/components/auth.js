import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import getUserData from '../lib/AuthHelper';

function AuthPage() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState();

    const login = useGoogleLogin({
        onSuccess: (codeResponse) => setUser(codeResponse),
        onError: (error) => console.log('Login Failed:', error)
    });

    useEffect(
        () => {
            if (user) {
                axios
                    .get(`https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`, {
                        headers: {
                            Authorization: `Bearer ${user.access_token}`,
                            Accept: 'application/json'
                        }
                    })
                    .then((res) => {
                        setProfile(res.data);
                        sessionStorage.setItem('userData', JSON.stringify(res.data))
                        let userInfo =
                            {
                                username : res.data.name,
                                assoList : [],
                                google_id : res.data.id,
                            }
                        axios
                            .post("http://localhost:8082/api/adduser", userInfo)
                            .then(res => console.log(res))
                            .catch(err => {})
                            
                    })
                    .catch((err) => console.log(''));
            }
        },
        [user]
    );

    const getProfileInfo = () => {
        getUserData().then(res => setProfile(res)).catch(setProfile(null))
    }

    useEffect(
        () => {
            let ignore = false;
            if (!ignore) getProfileInfo()
            return () => { ignore = true; }
        }, []
    )

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
        sessionStorage.clear();
    };

    const display = () => {
        console.log(profile)
    }

    return (
        <div>
            <h2>React Google Login</h2>
            <br />
            <br />
            {profile ? (
                <div>
                    <img src={profile.picture} alt="user image" />
                    <h3>User Logged in</h3>
                    <p>Name: {profile.name}</p>
                    <p>Email Address: {profile.email}</p>
                    <br />
                    <br />
                    <br />
                    <button onClick={logOut}>Log out</button>
                    <br />
                    <button onClick={display}>display</button>
                </div>
            ) : (<div>
                <button onClick={display}>display</button>
                <br />
                <button onClick={() => login()}>Sign in with Google 🚀 </button>
            </div>
            )}
        </div>
    );
}

export default AuthPage;