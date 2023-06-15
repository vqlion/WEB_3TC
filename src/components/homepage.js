import './homepage.css'
import "../index.css"

import { MapPage } from './Map_Assoc'
import { Commentaire } from './Commentaire'
import { AssoList } from './AssoList'

function HomePage() {
    return (<div className='wrapper'>
        <img src='/sfr.png' className='sfr'></img>
        <div className="welcome-container">
            <h1>Bienvenue</h1>
            <div className='links-container'>
                <a href="/login" className='link-box'>Se connecter</a>
                <a href="/profile" className='link-box'>Mon profil</a>
            </div>
        </div>
        <div>
            <Commentaire />
        </div>
        <div className='map-wrapper'>
            <div className='map'>
                <MapPage />
            </div>
            <AssoList />
        </div>
    </div>
    )
}

export default HomePage;