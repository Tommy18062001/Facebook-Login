import React from 'react'

function Card({ id, username, picture, onDelete, num }) {
    return (
        <div className="card">
            <button onClick={() => onDelete(id)}>x</button>
            <legend>{num}</legend>

            <img src={picture} alt="" width="50px" height="50px"/>
            <label>{ username }</label>
        </div>
    )
}
export default Card
