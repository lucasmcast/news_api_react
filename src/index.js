import './index.css';
import FavoritesView from './views/favoritesView';
import NewsView from './views/newsView';

class Index {
  routes = ["home", "favoritos"]

  constructor(){
    this.route(window.location.pathname)
  }

  route(pathname){
    switch(pathname){
      case "/favoritos":
        new FavoritesView(this.routes)
        break;
      case "/home":
        new NewsView(this.routes)
        break;
      default:
        new NewsView(this.routes)
    }
  }
}

new Index();