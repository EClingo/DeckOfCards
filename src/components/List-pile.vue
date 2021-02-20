<template>
  <div class="listPile">
      {{ discardPile }}
      <v-row>
          <v-card
          v-for="card in showPile"
          :key="card.code"
          max-width="300">

          <v-img
          :src="card.image"
          max-height="300"
          contain
          >
          </v-img>
          </v-card>
      </v-row>
      <v-btn @click="showDiscardPile()">Show Discard Pile</v-btn>
  </div>
</template>

<script>
import DeckService from "@/services/DeckService";

export default {
    data: () => {
        return {
            showPile: [],
            discardPile: [],
        }
    },
    methods: {
        showDiscardPile(){
            DeckService
            .showPile(this.$store.state.deckId, 'discard')
            .then((response) => {
                this.discardPile = response.data.piles.discard.cards;
                this.showPile = this.discardPile;
            })
        },
    },

}
</script>

<style>

</style>