import { NewsView } from "./newsView.js";
import { NewsController } from "./newsController.js";

/**
 * Class does html rendering on the favorites page
 * @author Lucas Martins de Castro <lucas.martins.c03@gmail.com>
 * @since 1.0.0
 * 
 */
export class FavoritesView extends NewsView{

    /**
     * Obtains data from the database and renders cards with past data
     * @see NewsView.createCards()
     */
    async renderView(){
        const data = await this.controller.getAllNewsDB();
        this.createCards(data, "Apagar", (news) => {
            this.clickBotao(news)
        });
    }

    /**
     * Perform button action when clicking, in this case, erases data from the database.
     * 
     * @param {News} news - Class Model News
     * 
     */
    clickBotao(news){
        this.controller.delete(news);
    }

}