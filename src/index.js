import './index.css';
import FavoritesView from './views/favoritesView';
import NewsView from './views/newsView';

class Index {
  constructor(){
    this.route(window.location.pathname)
  }

  route(pathname){
    switch(pathname){
      case "/favoritos":
        new FavoritesView()
        break;
      case "/home":
        new NewsView()
        break;
      case "/":
        new NewsView()
        break;
    }
  }
}

new Index();