/**
 * class responsible for generating a search through the attributes passed
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
class EndPoint{

    constructor(functionSearch, query){
        this._baseUrl = "https://newsapi.org/v2/";
        this._key = '35cbe59d9d144abebd03d7c457a45e75'
        this._functionSearch = functionSearch ? functionSearch : "top-headlines";
        this._query = query ? query : "country=br";
    }

    set functionSearch(functionSearch){
        this._functionSearch = functionSearch;
    }

    get functionSearch(){
        return this._functionSearch;
    }

    set query(query){
        this._query = query
    }

    generateURL(){
        let url = this._baseUrl;
        return `${url}${this._functionSearch}?${this._query}&apiKey=${this._key}`
    }

}

export default EndPoint;