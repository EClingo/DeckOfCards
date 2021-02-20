import axios from 'axios';


const http = axios.create( {
    baseURL: "https://deckofcardsapi.com/api/deck"
});

export default {
    shuffleCards() {
        return http.get("/new/shuffle");
    },

    drawACard(deckId, amountToDraw) {
        return http.get(`/${deckId}/draw/?count=${amountToDraw}`);
    },
    reshuffleDeck(deckId){
        return http.get(`${deckId}/shuffle/`);
    },
    addToPile(deckId, pileName, cards) {
        return http.get(`${deckId}/pile/${pileName}/add/?cards=${cards}`);
    },
    showPile(deckId, pileName){
        return http.get(`${deckId}/pile/${pileName}/list/`);
    }



}