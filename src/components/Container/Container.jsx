import React, { Component } from 'react';
import Card from '../Card';
import './style.css'
class Container extends Component{
    constructor(props){
        super(props)
    }
    render(){
        let arrayNews = this.props.data.news
        console.log(this.props.data)
        return(
            <div className="container">
                {arrayNews.map((news, index) =>{
                    return (
                        <Card key={index} isFavorite={this.props.isFavorite} cardNameButton={this.props.cardNameButton} news={news}/>
                    );
                })}
            </div>
        );
    }
}

export default Container;