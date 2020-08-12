import { NewsController } from "../controllers/newsController.js";
import { CardModel } from "./cardModel.js";
import { News } from "../models/newsModel.js";
import { data } from "../dao/countries-pt.js";

/**Class responsible for renders data in the html page and call class NewsController
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
export class NewsView {
  constructor() {
    this.controller = new NewsController();
  }

  addPageFunctionalities = () => {
    let subjectQueryButton = document.getElementById("subject-search-button");
    let countryQueryButton = document.getElementById("country-search-button");
    subjectQueryButton.addEventListener("click", () => {
      let subjectQueryInput = document.getElementById("subject-input").value;
      this.renderSubjectQuery(subjectQueryInput);
    });
    countryQueryButton.addEventListener("click", () => {
      let countryQueryInput = document.getElementById("country-input").value;
      let sigla = this.controller.getAbbreviation(countryQueryInput, data);
      this.renderNewsCountries(sigla);
    });
  };

  async renderSubjectQuery(subjectQueryInput) {
    let info = await this.controller.getSubjectQueryNewsApi(subjectQueryInput);
    let data = info.articles;
    this.createCards(data, "Salvar", (noticia) => {
      this.clickBotao(noticia);
    });
  }

  async renderNewsCountries(sigla) {
    let info = await this.controller.getCountryQueryNewsApi(sigla);
    let data = info.articles;
    this.createCards(data, "Salvar", (noticia) => {
      this.clickBotao(noticia);
    });
  }

  /**Render the news call methodo createCards whith parameter data, nameButton and callback*/
  async renderNews() {
    this.addPageFunctionalities();
    const response = await this.controller.getTopNewsApi();
    let data = response.articles;
    this.createCards(data, "Salvar", (noticia) => {
      this.clickBotao(noticia);
    });
  }

  /**Creates cards in the html page by length data from api
   * @param {Object} data - data returns from api
   * @param {String} nameButton - name for to create button
   * @param {Function} callback - Function callback click button
   */
  createCards(data, nameButton, callback) {
    let loader = document.getElementById("loader");
    loader.style.display = "none";
    //document.getElementById("cards").innerHTML = "";

    let cards = [];
    let qtdData = data.length;
    let card = new CardModel();
    
    for (let i = 0; i < qtdData; i++) {
      let noticia = new News();
      noticia.setTitle(data[i].title);
      noticia.setAuthor(data[i].author);
      noticia.setContent(data[i].content);
      noticia.setDescription(data[i].description);
      noticia.setPublishedAt(data[i].publishedAt);
      noticia.setUrlImage(data[i].urlToImage);
      noticia.setUrl(data[i].url);

      cards.push(card.createCard(noticia, nameButton, callback));
    }
    card.setCards(cards);

  }

  /**Perform button action when clicking, in this case, saves data in the database.
   * @param {News} news - Class MOdel news
   */
  clickBotao(news) {
    this.controller.save(news);
  }

}
