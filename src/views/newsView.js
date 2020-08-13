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
  
  constructor(routes){ 
    this.routes = routes
    this.getDataAPI()
  }

  /**Perform button action when clicking, in this case, saves data in the database.
   * @param {News} news - Class MOdel news
   */
  clickButton(news) {
    let controller = new NewsController()
    controller.save(news);
  }

  /**
   * Get data from API and render ReactDOM
   */
  getDataAPI() {
    let arrayNews = []
    let controller = new NewsController();
    let severalNews = controller.getTopNewsApi();
    let clickButton = this.clickButton;
    let routes = this.routes;

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

      ReactDOM.render(
        <React.StrictMode>
          <NavBar menuItems={routes} />
          <Main 
            cardNameButton="Salvar" 
            data={arrayNews} 
            clickButton={clickButton}
          />
        </React.StrictMode>,
        document.getElementById('root')
      );
  
    })
  }
}

export default NewsView;