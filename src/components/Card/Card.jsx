import React, { Component } from 'react';
import './style.css'
import ButtonCard from './ButtonCard';
import imageNotFound from './images/not_found.png'

class Card extends Component {

    constructor(props) {
        super(props)
        this.news = this.props.news;
    }

    /**
     * Calls the parent element function
     */
    clickButton(){  
        this.props.clickButton(this.props.id, this.news)
    }
    
    render() {

        return (
            <div className="card">
                <div className="card-header">
                    <span>
                        <a href={this.news.getUrl()}>{this.news.getTitle()}</a>
                    </span>
                </div>
                <div  className="card-content">
                    <p>{this.news.getDescription()}</p>
                    <img src={ this.news.getUrlImage() ? this.news.getUrlImage(): imageNotFound}></img>
                </div>
                <div className="card-footer">
                    <span className="card-published">{this.news.getPublishedAt()}</span>
                    <span className="card-author">{this.news.getAuthor()}</span>
                    <ButtonCard 
                        nameButton={this.props.cardNameButton} 
                        clickButton={this.clickButton.bind(this)}
                    />
                </div>
            </div>
        );
    }
}

export default Card;