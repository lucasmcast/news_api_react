import NewsController from "../controllers/newsController";
import ReactDOM from 'react-dom';
import React from 'react';
import NavBar from '../components/NavBar';
import Main from '../components/Main'
import { Provider } from 'react-redux'
import store from "../redux/store";

/**Class responsible for renders data in the html page and call class NewsController
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 * @version 2.0.0
 */
class NewsView {

  constructor(routes) {
    this.routes = routes
    this.getDataAPI()
  }

  /**
   * Get data from API and render ReactDOM
   */
  getDataAPI() {
    ReactDOM.render(
      <React.StrictMode>
        <Provider store={store}>
          <NavBar menuItems={this.routes} />
          <Main cardNameButton={"Salvar"} clickButton={this.clickButton.bind(this)} isFavorite={false}/>
        </Provider>
      </React.StrictMode>,
      document.getElementById('root')
    );

  }

  clickButton(id, news) {
    let controller = new NewsController()
    controller.save(news)
  }
}

export default NewsView;