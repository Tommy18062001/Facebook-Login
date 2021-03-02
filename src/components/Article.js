import React, { Component } from 'react'
import Card from './Card';
import CardButton from './CardButton';
import LoginHidden from './LoginHidden';
import me from './me.jpg'
import hacker from './hacker.jpg'

class Article extends Component {

    state = {
        actualState: "hidden",
        users : [
            {
                id:1,
                name: "Tommy",
                picture: me,
                num: 12
            },
            {
                id:2,
                name: "Brooklyn",
                picture: hacker,
                num: 5,
            }
        ] 
    }

    addCard = () => {
        this.setState({
                actualState : "shown"
            })
        }

    closeCard = () => {
        this.setState({
                actualState : "hidden"
            })
        }

    deleteCard = (id) => {
        var users = this.state.users;
        users = users.filter((user) => user.id !== id)
        
        this.setState({
            users : users
        })
    }


    render() {
        return (
            <div className="article">
                {/* Title*/}
                <h1 style={{ color:"#1877f2", fontWeight:"700", fontSize:"35px" }} >facebook</h1>
                <h2 style={{ fontWeight:"500"}} >Connexions récentes</h2>
                <p style={{ marginBottom:"50px" }} >Cliquez sur votre image ou sur Ajouter un compte.</p>
                <div style={{ display:"flex", flexWrap:"wrap"}}>

                    {/*  i am going to put here my picture and my name */}
                    {this.state.users.map((user, index) => {
                        return(
                            <Card key={index} id={user.id}
                                picture={user.picture} 
                                username={user.name} 
                                onDelete={this.deleteCard} 
                                num={user.num} />
                        )
                    })}
 

                    <CardButton onClick={this.addCard} />
                    <LoginHidden 
                        actual_state={this.state.actualState}
                        close_state={this.closeCard}/>
                </div>
            </div>
        )
    }
}

export default Article;