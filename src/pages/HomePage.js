import './HomePage.css'
import "../index.css"
import axios from 'axios'
import { Map } from '../components/Map'
import { Comments } from '../components/Comments'
import { AssoList } from '../components/AssoList'
import { useState, useRef, useEffect } from "react"
import getUserData from '../lib/AuthHelper'

function HomePage() {
    var asso = sessionStorage.getItem("selectedAsso")

    const [profile, setProfile] = useState()

    const checkUserLoggedIn = async () => {
        getUserData().then((res) => {
            setProfile(res)
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

    const [list, updateList] = useState([]);
    const reqDone = useRef(false);
    function getComments()
    {
        console.log("incom")
        reqDone.current=true;
        axios
            .post("http://localhost:8082/api/getcomments", {"asso": asso})
            .then(res=>
                    {
                        console.log(res.data)
                        let listCom = res.data;
                        console.log(listCom[0]["content"])
                        let divList = listCom.map(com => <div><b style={{fontSize:10 + 'px'}}>{com["user"]}</b> <b style={{fontSize:10 + 'px'}}>{com["date"]}</b> <br></br><div>{com["content"]}</div> <br></br> </div>)
                        updateList(divList);
                    })
            .catch(err => console.log(err))
        console.log(list)
    }
    if (reqDone.current==false) getComments()

    return (<div className='wrapper'>
        <img src='/sfr.png' className='sfr'></img>
        <div className="welcome-container">
            <h1>Bienvenue</h1>
            <div className='links-container'>
                <a href="/login" className='link-box'>Se connecter</a>
                <a href="/profile/info" className='link-box'>Mon profil</a>
            </div>
        </div>

        <div className='map-wrapper'>
            <div className='map'>
                <Map />
            </div>
            <AssoList />
        </div>
        <div>
            <Comments />
        </div>
        <h3></h3>
        <div>
        {list}

        </div>
    </div>
    )
}

export default HomePage;