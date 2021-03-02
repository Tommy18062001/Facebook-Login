import React from 'react'
import LoginCard from './LoginCard'

function LoginHidden({actual_state, close_state}) {
    return (
        <div class={actual_state}>
            <button className="close" onClick={close_state}>x</button>
            <LoginCard />
        </div>
    )
}

export default LoginHidden
