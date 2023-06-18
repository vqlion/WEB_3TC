import styles from './AssoList.module.css'
import { useState, useRef } from 'react'
import axios from "axios"
import getUserData from '../lib/AuthHelper'
export function AssoList() {

    const [clickedButton, setClickedButton] = useState()
    const [profile, setProfile] = useState()

    const selectedAsso = sessionStorage.getItem('selectedAsso')


    const checkUserLoggedIn = async () => {
        getUserData().then((res) => {
            setProfile(res)
        })
            .catch(setProfile(null))
    }

    let user
    const [listasso, updatelistasso] = useState([]);
    const reqDone = useRef(false);
    if (reqDone.current == false) {
        user = checkUserLoggedIn();
        try {
            const userID = JSON.parse(sessionStorage.getItem("userData")).id
            if (userID) getUserInfo(userID)
        }
        catch
            {
                console.log("not logged in")
            }
        //getUserInfo(JSON.parse(sessionStorage.getItem("userData")).name)
        reqDone.current = true;
    }

    function getUserInfo(u) {
        axios
            .post("http://localhost:8082/api/getusers", { "google_id": u })
            .then(res => {
                let asso = res.data[0]["assoList"];
                console.log(res.data)
                updatelistasso(asso);
            })
            .catch(err => console.log(err))
    }

    console.log(listasso)
    let i = 0
    let buttonProps = listasso.map((a) => {
        let temp = { "id": i, "text": a }
        i++
        return (temp)
    })

    const buttonGenerator = (props) => {
        return <button onClick={handleButtonClick} data-id={props.id} data-text={props.text} data-clicked={clickedButton == props.id || selectedAsso == props.text ? true : false}>{props.text}</button>
    }

    const handleButtonClick = (e) => {
        const isClicked = e.target.getAttribute('data-clicked') == 'true' ? true : false
        const buttonId = parseInt(e.target.getAttribute('data-id'))

        if (isClicked) return

        const name = e.target.getAttribute('data-text')
        sessionStorage.setItem('selectedAsso', name)
        console.log(name)
        window.location.reload(false)

        setClickedButton(buttonId)
    }
    if(sessionStorage.getItem("userData"))
        {
            return (<>
                <div>
                    <h1 className={styles.header}>Choisis ton asso</h1>
                    <div className={styles.listview}>
                        {buttonProps.map(entry => buttonGenerator(entry))}
                    </div>
                </div>
            </>
            )   
        }
    else return
   
}