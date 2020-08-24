import { NewsDAO } from "../dao/newsDAO.js";
/**
 * Class makes the control between the views and DAO class
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
class NewsController {
  constructor() {
    this.newsDao = new NewsDAO();
  }

  getAbbreviation(countryName, data) {
    let i;
    for (i = 0; i < data.length; i++) {
      if (
        data[i]["gentilico"].toUpperCase() === countryName.toUpperCase() ||
        data[i]["nome_pais"].toUpperCase() === countryName.toUpperCase() ||
        data[i]["nome_pais_int"].toUpperCase() === countryName.toUpperCase()
      ) {
        return data[i]["sigla"];
      }
    }
  }

  /**
   * Get data from API
   * @link <https://newsapi.org>
   * @returns JSON
   */
  getNewsApi(endPoint) {
    var data = this.newsDao.getDataAPI(endPoint);
    return data;
  }

  /**
   *
   * @param {News} news - Class Model News
   */
  save(news) {
    this.newsDao.save(news);
  }

  /**
   * Get Data by title of news
   * @param {String} title
   */
  async getByTitle(title) {
    let response = await this.newsDao.getByTitle(title);
    return response;
  }

  /**
   * Get Data from database
   * @returns Promise
   */
  getAllNewsDB() {
    var response = this.newsDao.getAllNewsDB();
    return response;
  }

  /**
   * Delete data of database
   * @param {News} news - Class Model News
   */
  delete(news) {
    let title = news.getTitle();
    this.newsDao.delete(title);
  }
}

export default NewsController;