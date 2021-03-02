import React from 'react'

function CardButton({ onClick }) {

    return (
        <button className="cardButton" onClick={onClick}>
            <div className="plus">+</div>
            <p>Ajouter un compte</p>
        </button>
    )
}

export default CardButton
