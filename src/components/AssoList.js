import styles from './assoList.module.css'
import { useState } from 'react'

export function AssoList() {

    const [clickedButton, setClickedButton] = useState()

    const buttonProps = [{
        id: 0,
        text: 'Exit'
    }, {
        id: 1,
        text: 'Karna'
    }, {
        id: 2,
        text: 'Lezarts'
    }]

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