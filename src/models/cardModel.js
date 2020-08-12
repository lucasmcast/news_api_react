/**
 * Class responsible for creating cards in the html page
 * 
 * @since 1.0.0
 * 
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * 
 */
export class CardModel{

    constructor(){
        this.cards = document.getElementById("cards")
    }

    /**
     * Creates card for render in the page
     * 
     * @param {News} news - Object News 
     * @param {String} nameButton - name for creates button
     * @param {Function} callback - function for click button
     * 
     * @returns ReactElement
     */
    createCard(news, nameButton, callback){
        const link = React.createElement('a', {key: Math.random().toString(), href: news.getUrl()}, news.getTitle());
        const title = React.createElement('span', {key: Math.random().toString()} , link);
        const cardHeader = React.createElement(
            'div', 
            {
                key: Math.random().toString(),
                className: "card-header"
            }, 
            [title]
        );
        
        const description = React.createElement('p', {key: Math.random().toString()}, news.getDescription());
        const img = React.createElement('img', {key: Math.random().toString(), src: news.getUrlImage()});
        
        const cardContent = React.createElement(
            'div', 
            {
                key: Math.random().toString(),
                className: "card-content"
            }, 
            [description, img]
        );
        
        const published = React.createElement('span', {key: Math.random().toString(), className : 'card-published'}, news.getPublishedAt());
        const author = React.createElement('span', {key: Math.random().toString(), className: 'card-author'}, news.getAuthor());
        
        const button = this.createButton(nameButton, callback, news);
        
        const cardFooter = React.createElement(
            'div',
            {   
                key: Math.random().toString(),
                className : "card-footer"
            },
            [published, author, button]
        );
        const card = React.createElement(
            'div', 
            {
                key: Math.random().toString(),
                className: "card"
            }, 
            [cardHeader, cardContent, cardFooter]
        );


        return card;
    } 
    
    /**Render cards by ReactElement from createCards
     * 
     * @param {ReactElement} cards 
     */
    setCards(cards){
        ReactDOM.render(cards, this.cards)
    }
    /**
     * Creates button and put button value and creates class css
     * 
     * @param {String} nameButton name of button for creates class css and button value
     * @param {Function} callback function for click button
     * @param {News} news class model News
     * @returns DOMElement  
     */
    createButton(nameButton, callback, news){
        let button = React.createElement(
            'button', 
            {
                key: Math.random().toString(),
                className: 'btn-'+nameButton.toLocaleLowerCase(),
                onClick: () => {callback(news)}
            }, 
            nameButton);
        return button;
    }

}