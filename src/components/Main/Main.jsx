import React, { useState, useEffect } from 'react';
import Container from '../Container'
import './style.css'
import { getNews } from '../../redux/actions'
import { connect } from 'react-redux';
import NewsController from '../../controllers/newsController';
import EndPoint from '../../models/endPoint';
import News from '../../models/newsModel';

const controller = new NewsController();

function Main(props) {
    const [news, setNews] = useState([])
    const endPoint = new EndPoint();

    useEffect(() =>{
        const readNews = async () =>{
            let newsArray = []
            const newsApi =  props.isFavorite ? await controller.getAllNewsDB() : await controller.getNewsApi(endPoint)
         
            newsApi.forEach(element => {
                let newsModel = new News()
                newsModel.setTitle(element.title)
                newsModel.setAuthor(element.author);
                newsModel.setDescription(element.description);
                newsModel.setContent(element.content);
                newsModel.setPublishedAt(element.publishedAt);
                newsModel.setUrl(element.url);
                newsModel.setUrlImage(element.urlToImage)
                newsArray.push(newsModel);
            });
            setNews(newsArray);
        }

        readNews()
    }, [])

    props.getNews(news)

    return (
        <main>
            <Container clickButton={props.clickButton} cardNameButton={props.cardNameButton}/>
        </main>

    )
}

export default connect(null, {getNews})(Main);