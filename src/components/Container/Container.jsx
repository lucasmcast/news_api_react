import React from 'react';
import Card from '../Card';
import './style.css'
import { connect } from 'react-redux';

function Container(props) {

    return (
        <div className="container">
            {props.news.map((news, index) => {
                return (
                    <Card
                        id={index}
                        key={news.getTitle()}
                        cardNameButton={props.cardNameButton}
                        clickButton={props.clickButton}
                        news={news}/>
                );
            })}
        </div>
    );

}

const mapStateToProps = (state) => {
    return (
        { news: state.rootNews.news }
    )
}

export default connect(mapStateToProps)(Container);