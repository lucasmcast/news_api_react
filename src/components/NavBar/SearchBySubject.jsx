import React, { useState } from 'react'
import { connect } from 'react-redux';
import { getNews } from '../../redux/actions'
import EndPoint from '../../models/endPoint';
import NewsController from '../../controllers/newsController'
import News from '../../models/newsModel';


const controller = new NewsController();

function getData(endPoint) {
    const news = controller.getNewsApi(endPoint);
    return news;
}

function SearchBySubject(props) {
    const [subject, setSubject] = useState("");
    return (
        <li>
            <input
                placeholder={"Pesquisar por assunto..."}
                onChange={event => {
                    setSubject(event.target.value)
                }}
                value={subject}
            />
            <button
                onClick={async event => {
                    let query = `q=${subject}&language=pt`
                    let endPoint = new EndPoint('everything', query);

                    let data = await getData(endPoint);
                    let newsArray = []

                    data.forEach(element => {
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

                    props.getNews(newsArray);
                    setSubject("")

                }}>Buscar</button>
        </li>
    )
}

export default connect(null, { getNews })(SearchBySubject);