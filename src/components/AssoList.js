import styles from './assoList.module.css'
import { useState, useRef } from 'react'
import axios from "axios"
export function AssoList() {

    const [clickedButton, setClickedButton] = useState()

    var userId = "6489fcfb22ecc34e945ab951"
    const [listasso, updatelistasso] = useState([]);
    const reqDone = useRef(false);
    function getUserInfo()
        {
            reqDone.current=true;
            axios
                .post("http://localhost:8082/api/getusers", {"google_id": userId})
                .then(res=>
                        {
                            let asso = res.data[0]["assoList"];
                            updatelistasso(asso);
                        })
                .catch(err => console.log(err))
        }
    if (reqDone.current==false) getUserInfo()

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