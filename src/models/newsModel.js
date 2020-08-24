/**Class model for News
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 */
class News {


    setAuthor(author) {
        if (author == null) {
            this.author = "Sem Autor";
        } else {
            this.author = author;

        }
    }

    getAuthor() {
        return this.author;
    }

    setTitle(title) {
        this.title = title;
    }

    getTitle() {
        return this.title;
    }

    setUrl(url) {
        this.url = url;
    }

    getUrl() {
        return this.url;
    }

    setUrlImage(urlImage) {
        this.urlImage = urlImage;
    }

    getUrlImage() {
        return this.urlImage;
    }

    setContent(content) {
        this.content = content;
    }

    getContent() {
        return this.content;
    }

    /**
     * @param {String} publishedAt 
     */
    setPublishedAt(publishedAt) {
        let stringReplace = publishedAt.replace(/T/g, " ").replace(/Z/g, "")

        this.publishedAt = stringReplace;
    }

    getPublishedAt() {
        return this.publishedAt;
    }

    setDescription(description) {
        if(description !== null){
            this.description = description;
        }else{
            this.description = "Sem Descrição"
        }
        
    }

    getDescription() {
        return this.description;
    }
}

export default News;