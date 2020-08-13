import { DataBase } from "./db.js";

/**Class does the persistence in the database and get data api.
 *
 * @since 1.0.0
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @link <https://newsapi.org>
 *
 */
export class NewsDAO {
  apiKey = "35cbe59d9d144abebd03d7c457a45e75";
  baseUrl = "https://newsapi.org/v2/";
  country = "br";
  constructor() {
    this.db = new DataBase();
  }

  /**Get data from api News Api
   * @return Promise - Data of request
   */
  getTopNewsApi() {
    var url = this.baseUrl + "top-headlines?country=br&apiKey=" + this.apiKey;

    // var url =
    //   "https://newsapi.org/v2/everything?q=cars&apiKey=868df49846794dd5b7331f9f51758913";
    return fetch(url);
  }

  /**
   * Generate url for API
   * @param {EndPoint} endPoint - Object for to build url 
   */
  generateURL(endPoint){
    let url = this.baseUrl;
  
    let functionEndPoint = endPoint.getFunction();
    let query = endPoint.getQuery();

    url =+ `${functionEndPoint}?${query}&${this.apiKey}`
    return url
  }
  
  getCountryQueryNewsApi(country) {
    var url =
      this.baseUrl +
      "top-headlines?country=" +
      country +
      "&apiKey=" +
      this.apiKey;
    return fetch(url);
  }

  getSubjectQueryNewsApi(subject) {
    var url =
      this.baseUrl + "everything?q=" + subject + "&apiKey=" + this.apiKey;
    return fetch(url);
  }

  /**Saves the news, passed as a parameter, in the database
   * @param {News} news - Class ViewModel
   * @see ViewModel
   */
  save(news) {
    this.db.con((db) => {
      var transaction = db.transaction(["news"], "readwrite");
      // Do something when all the data is added to the database.
      transaction.oncomplete = function (event) {
        alert("Success Save!");
      };

      transaction.onerror = function (event) {
        // Don't forget to handle errors!
      };
      var customerData = [
        {
          author: news.getAuthor(),
          content: news.getContent(),
          description: news.getDescription(),
          title: news.getTitle(),
          url: news.getUrl(),
          urlToImage: news.getUrlImage(),
          publishedAt: news.getPublishedAt(),
        },
      ];
      var objectStore = transaction.objectStore("news");

      customerData.forEach(function (customer) {
        var request = objectStore.put(customer);
        request.onsuccess = function (event) {
          //callback(request.result)
        };

        request.onerror = function (event) {
          alert("Matéria ja esta salva");
        };
      });
    });
  }

  /**Delete data by title of news, and query a primaryKey for delete
   * @param {String} title - The title is passed as a parameter
   * @see NewsController.delete()
   */
  delete(title) {
    this.db.con((db) => {
      var objectStore = db
        .transaction(["news"], "readwrite")
        .objectStore("news");

      var index = objectStore.index("title");
      var filtro = IDBKeyRange.only(title);
      var request = index.openCursor(filtro);

      request.onsuccess = function (event) {
        var cursor = event.target.result;
        if (cursor) {
          objectStore.delete(cursor["primaryKey"]);
        }
        //alert("Noticia excluida com sucesso");
      };
      request.onerror = function (event) {
        console.log("deu erro ao apargar");
      };
    });
  }

  /**
   * get data by title news
   * @param {String} title
   * @returns Promise
   */
  getByTitle(title) {
    return new Promise((resolve, reject) => {
      this.db.con((db) => {
        var objectStore = db.transaction(["news"]).objectStore("news");
        var request = objectStore.get(title);

        request.onsuccess = function (event) {
          resolve(request.result);
        };

        request.onerror = function (event) {
          //reject(request)
          console.log("Erro ao buscar dados pelo title");
        };
      });
    });
  }

  /**Get data from database. Use after save data by request api
   * @see NewsController.getAllNewsDB()
   * @returns Promise - use async await for get data.
   */

  getAllNewsDB() {
    return new Promise((resolve, reject) => {
      this.db.con((db) => {
        var objectStore = db.transaction(["news"]).objectStore("news");
        var request = objectStore.getAll();
        request.onsuccess = (event) => {
          resolve(request.result);
        };
      });
    });
  }
}
