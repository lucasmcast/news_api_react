import React, { Component } from 'react';
import Card from '../Card';
import './style.css'
import { throwStatement } from '@babel/types';
class Container extends Component{
    constructor(props){
        super(props)
        this.state = {
            cardNameButton: props.cardNameButton,
            data: props.data,
            clickButton: props.clickButton
        }
    }

    /**
     * Calls the function passed as a parameter, and deletes the card from the page
     * @param {Integer} id - ID of card when click button
     * @param {News} news 
     */
    handleClickCard(id, news){        
        this.state.clickButton(news)

        if(this.state.cardNameButton === "Apagar"){
            this.state.data.splice(id, 1)
            this.setState({data: this.state.data})
            console.log(this.state.data)
        }
    }

    render(){
        return(
            <div className="container">
                {this.state.data.map((news, index) =>{
                    return (
                        <Card 
                            id={index}
                            key={news.getTitle()} 
                            cardNameButton={this.state.cardNameButton} 
                            news={news} 
                            clickButton={this.handleClickCard.bind(this)}/>
                    );
                })}
            </div>
        );
    }
}

export default Container;