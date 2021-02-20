<template>
  <div class="drawCard">
  <v-row>
  <v-card
  v-for="card in drawnCards"
  :key="card.code"
  max-width="300">
  
      
            <v-img 
            :src="card.image"
            max-height="300"
            contain
            ></v-img>  
      
    </v-card>
  </v-row>
    <v-btn @click="drawCard(1)">Draw A Card</v-btn>
    <v-btn @click="discard()">Discard All</v-btn>
    <p> {{ this.$store.state.cardsRemaining }}</p>
  </div>
</template>

<script>
import DeckService from "@/services/DeckService";

export default {
    data:() => { 
        return {
        drawnCards: [],
       
    }
    },
    

    
    methods: {
        drawCard(numToDraw){
            DeckService.drawACard(this.$store.state.deckId, numToDraw)
            .then((response) => {
                
                    this.$store.commit("DRAW_CARDS", response.data);
                    this.drawnCards = this.$store.state.drawnCards;
        },
                )
        },
          discard(){
              DeckService
              .addToPile(this.$store.state.deckId, 'discard', this.drawnCards
              .forEach((card) => {
                  return card.code;}))
                  .then ((response) => {
                      this.$store.commit("DISCARD_CARDS", response.data);
                      this.drawnCards = this.$store.state.drawnCards;
                  })
          }      
        
}
}
   
                


</script>

<style>

</style>