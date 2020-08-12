import NewsController  from "../controllers/newsController";
import News from "../models/newsModel";
import { data } from "../dao/countries-pt.js";
import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main'

/**Class responsible for renders data in the html page and call class NewsController
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
class NewsView {
  
  constructor(){
    this.getDataAPI()
  }

  getDataAPI() {
    let arrayNews = []
    let controller = new NewsController();
    let severalNews = controller.getTopNewsApi();
  
    severalNews.then(function(resp){
      let data = resp.articles;
      for (let i = 0; i < data.length; i++) {
        let noticia = new News();
        noticia.setTitle(data[i].title);
        noticia.setAuthor(data[i].author);
        noticia.setContent(data[i].content);
        noticia.setDescription(data[i].description);
        noticia.setPublishedAt(data[i].publishedAt);
        noticia.setUrlImage(data[i].urlToImage);
        noticia.setUrl(data[i].url);
        arrayNews.push(noticia)
      }

      let props = {
        isFavorites: false,
        news : arrayNews
      }

      ReactDOM.render(
        <React.StrictMode>
          <NavBar menuItems={["Home", "Favoritos"]} />
          <Main cardNameButton="Salvar" data={props} />
        </React.StrictMode>,
        document.getElementById('root')
      );
  
    })
  }

  /**Perform button action when clicking, in this case, saves data in the database.
   * @param {News} news - Class MOdel news
   */
  clickBotao(news) {
    this.controller.save(news);
  }

}

export default NewsView;