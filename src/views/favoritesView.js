import NewsController from "../controllers/newsController";
import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main'
import { Provider } from 'react-redux'
import store from "../redux/store";

/**
 * Class does html rendering on the favorites page
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 * @version 2.0.0
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
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <NavBar menuItems={this.routes} />
          <Main cardNameButton={"Apagar"} clickButton={this.clickButton.bind(this)} isFavorite={true}/>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );
  }
  /**
   * Perform button action when clicking, in this case, erases data from the database.
   * 
   * @param {News} news - Class Model News
   * 
   */
  clickButton(id, news) {
    let controller = new NewsController()
    controller.delete(news);
  }

}

export default FavoritesView;