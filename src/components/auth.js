import React, { useState, useEffect } from 'react';
import { googleLogout, useGoogleLogin } from '@react-oauth/google';
import axios from 'axios';
import { json } from 'react-router-dom';

function AuthPage() {
    const [user, setUser] = useState([]);
    const [profile, setProfile] = useState([]);
    const [items, setItems] = useState([])

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
                        localStorage.setItem('userData', JSON.stringify(res.data))
                    })
                    .catch((err) => console.log(err));
            }
        },
        [user]
    );

    // log out function to log the user out of google and set the profile array to null
    const logOut = () => {
        googleLogout();
        setProfile(null);
        localStorage.clear();
    };

    const display = () => {
        const items = JSON.parse(localStorage.getItem('userData'));
        if (items) {
            setItems(items)
        }

        console.log(items)
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