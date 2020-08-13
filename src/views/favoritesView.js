import NewsController from "../controllers/newsController";
import News from "../models/newsModel"
import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main'

/**
 * Class does html rendering on the favorites page
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 * 
 */
class FavoritesView {

  constructor(routes) {
    this.routes = routes;
    this.getDataDB();
  }

  /**
   * Get data from database for favorites news and render ReactDOM
   */
  getDataDB() {
    let arrayNews = []
    let controller = new NewsController();
    let severalNews = controller.getAllNewsDB();
    let clickButton = this.clickButton
    let route = this.routes;
    
    severalNews.then(function (data) {
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
          <NavBar menuItems={route} />
          <Main
            cardNameButton="Apagar"
            data={arrayNews}
            clickButton={clickButton}
          />
        </React.StrictMode>,
        document.getElementById('root')
      );
    })
  }
  /**
   * Perform button action when clicking, in this case, erases data from the database.
   * 
   * @param {News} news - Class Model News
   * 
   */
  clickButton(news) {
    let controller = new NewsController()
    controller.delete(news);
  }

}

export default FavoritesView;