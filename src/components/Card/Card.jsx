import React, { Component } from 'react';
import './style.css'

class Card extends Component {

    constructor(props) {
        super(props)
    }
    render() {

        return (
            <div className="card">
                <div className="card-header">
                    <span>
                        <a href={this.props.news.getUrl()}>{this.props.news.getTitle()}</a>
                    </span>
                </div>
                <div  className="card-content">
                    <p>{this.props.news.getDescription()}</p>
                    <img src={this.props.news.getUrlImage()}></img>
                </div>
                <div className="card-footer">
                    <span className="card-published">{this.props.news.getPublishedAt()}</span>
                    <span className="card-author">{this.props.news.getAuthor()}</span>
                    <button></button>
                </div>
            </div>
        );
    }
}

export default Card;