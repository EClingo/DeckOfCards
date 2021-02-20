<template>
  <div class="newDeck">
      <v-container>
          <v-card
          max-width="300">
               
               <v-img
                 src="@/assets/skullCardBack.jpg"
                 max-height="300"
                 contain
              >
              </v-img>
               
                 
                 
              <v-btn @click="getNewDeck()">New Deck</v-btn>
              
          </v-card>
      </v-container>
  </div>
</template>

<script>
import DeckService from "@/services/DeckService";

export default {
created(){
     DeckService.shuffleCards()
        .then((response) => {
            if (response.status === 200){
                this.$store.commit("SET_NEW_DECK_ID", response.data.deck_id);
                alert('new deck created');
            }
        });
        

},    

methods:{
    getNewDeck(){
        DeckService.shuffleCards()
        .then((response) => {
            if (response.status === 200){
                this.$store.commit("SET_NEW_DECK_ID", response.data.deck_id);
                alert('new deck created');
            }

        })
       
    },
},

}
</script>

<style>

</style>