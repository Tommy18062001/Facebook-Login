import React, { Component } from 'react'
import LoginCard from "./LoginCard"

class Login extends Component {
    render() {
        return (
            <div className="login">
                {/* Here we are going to have to login part*/}
                <LoginCard />
                <p><b>Créer une Page</b> pour une celebrité, un groupe ou un <br/> entreprise </p>
            </div>
        )
    }
}

export default Login


