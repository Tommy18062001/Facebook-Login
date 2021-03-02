import React from 'react'
import Button from './Button'

function LoginCard() {
    return (
        <div className="loginCard">
            <form>
                <input type="text" placeholder="Adresse e-mail ou numéro de tél"/>
                <input type="text" placeholder="Mot de passe"/>
                <Button text="Connexion" color="#1877f2" width="332px"/>
                
                <a href="?">Mot de passe oublié ?</a>

                <hr/>

                <Button text="Créer un compte" color="#42b72a" width="206px" />
            </form>
        </div>
    )
}

export default LoginCard
