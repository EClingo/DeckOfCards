import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    deckId: '',
    cardsRemaining: '',
    discard: '',
    drawnCards: [],

  },
  mutations: {
    SET_NEW_DECK_ID(state, payload){
      state.deckId = payload;
      state.cardsRemaining = 52;
    },
    DRAW_CARDS(state, payload){
      state.drawnCards.push(payload.cards[0]);
      
       state.cardsRemaining = payload.remaining;
    },
    DISCARD_CARDS(state){
      state.drawnCards = [];
      
    }
    
  },
  actions: {},
  modules: {}
});
