<template>
  <div class="home">
    
      <v-row justify="center">
    <new-deck></new-deck>
    <draw-card></draw-card>
      </v-row>
      <v-row>
        <list-pile></list-pile>
      </v-row>
    
  </div>
</template>

<script>
import DrawCard from '../components/Draw-card.vue';
import ListPile from '../components/List-pile.vue';
import NewDeck from '../components/New-deck.vue';
// @ is an alias to /src

export default {
  name: "Home",
  components: {
    NewDeck,
    DrawCard,
    ListPile
    
  }
};
</script>
