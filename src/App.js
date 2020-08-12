import React, { Component } from 'react';
import Card from './components/Card';
import News from './models/newsModel'

class App extends Component {

  constructor(){
    super()
    this.newsModel = new News(); 
    this.newsModel.setTitle("Ola");
    this.newsModel.setAuthor("Ola");
    this.newsModel.setDescription("Ola");
    this.newsModel.setPublishedAt("ola");
    this.newsModel.setUrl("ola");
    this.newsModel.setUrlImage("ola");
    /* {
      title: "Titlo Header",
      description: "Description",
      url: "http://felixalarmes.com.br",
      published: "2020/08/20",
      author: "Joaa",
      urlImage: "https://lh3.googleusercontent.com/proxy/RDJYy1bnscNIZ74qa4_MKTtZ569zNNS2erGZodj4fn_kwfVCNQWkcEboFvARBHpPgpNwvjDCW15fopiFjvE9RaaMpxNS7d9YWuWG8lOO4vw6"
    } */
  }
  render() {
    return (
      <Card news={this.newsModel}/>
    );
  }
}


export default App;
