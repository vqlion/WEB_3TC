//import styles from './user-style.module.css';
// import 'bootstrap/dist/css/bootstrap.css';
//import background from "./background.jpeg";
import React from 'react'
import Group from './Group'
import userImage from "./user.png";
function User() {
    return ( 
        <div className="container">
            <div className="profil">                 
                <div style={{
                        backgroundImage: `url(${userImage})`,
                        backgroundSize:"cover",
                        width: 200,
                        height: 200,
                        borderRadius: 200 / 2
                    }}
                    className="photo">
                </div>
                <Group>
                    <h3> Username </h3>
                </Group>
                <Group>
                    <h3> Joined us : Date </h3>
                </Group>
            </div>
            <div className="listeAssos">                 
                
                <Group>
                    <h1 align='center'> Liste des associations </h1>
                </Group>
                
                
            </div>
        </div>
        );
}

export default User;



// pour ajouter une photo au fond de la page : ajouter ces lignes de code dans 
// le div du container 
// style={{backgroundImage: `url(${background})`,
// backgroundRepeat: "no-repeat",
// backgroundSize:"cover"
// }}