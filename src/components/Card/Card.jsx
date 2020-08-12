import React, { Component } from 'react';
import './style.css'
import ButtonCard from './ButtonCard';
import NewsController from '../../controllers/newsController';

class Card extends Component {

    constructor(props) {
        super(props)
        this.news = this.props.news;
    }

    clickButton(event){
        console.log(this.props)
        let controller = new NewsController();
        controller.save(this.news);
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
                    <img src={this.news.getUrlImage()}></img>
                </div>
                <div className="card-footer">
                    <span className="card-published">{this.news.getPublishedAt()}</span>
                    <span className="card-author">{this.news.getAuthor()}</span>
                    <ButtonCard nameButton={this.props.cardNameButton} clickButton={this.clickButton.bind(this)}/>
                </div>
            </div>
        );
    }
}

export default Card;