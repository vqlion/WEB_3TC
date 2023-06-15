import styles from './assoList.module.css'
import { useState, useRef } from 'react'
import axios from "axios"
import getUserData from '../lib/AuthHelper'
export function AssoList() {

    const [clickedButton, setClickedButton] = useState()
    const [profile, setProfile] = useState()

    const checkUserLoggedIn = async () => {
        getUserData().then((res) => {
            setProfile(res)
        })
            .catch(setProfile(null))
    }

    let user
    const [listasso, updatelistasso] = useState([]);
    const reqDone = useRef(false);
    if (reqDone.current==false) 
        {
            user = checkUserLoggedIn();
            //if (user.id) getUserInfo(user.id)
            getUserInfo("6489fcfb22ecc34e945ab951")
            reqDone.current=true;
        }

    function getUserInfo(u)
        {
            axios
                .post("http://localhost:8082/api/getusers", {"google_id": u})
                .then(res=>
                        {
                            let asso = res.data[0]["assoList"];
                            updatelistasso(asso);
                        })
                .catch(err => console.log(err))
        }

    console.log(listasso)
    let i=0
    let buttonProps = listasso.map((a) =>
        {
            let temp = {"id": i, "text": a}
            i++
            return (temp)
        })

    const buttonGenerator = (props) => {
        return <button onClick={handleButtonClick} data-id={props.id} data-clicked={clickedButton == props.id ? true : false}>{props.text}</button>
    }

    const handleButtonClick = (e) => {
        const isClicked = e.target.getAttribute('data-clicked') == 'true' ? true : false
        const buttonId = parseInt(e.target.getAttribute('data-id'))

        if (isClicked) {
            setClickedButton(null)
            return
        }
        setClickedButton(buttonId)
    }

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