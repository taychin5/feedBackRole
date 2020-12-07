<template>
  <div class="container">
   <!-- TODO: layout -->
    <h1 class="text-2xl text-center mb-8 font-bold">Select the cards for yout feedback session</h1>
    <div class="grid grid-cols-6 gap-4">
      <div v-for="(card, i) in _roles" :key="`card-${i}`">
        
       <img @click="selectCard(card.slug)" :src="card.cardImage" alt="" class="shadow" :class="{'-active' : selectedCard.includes(card.slug) }">
      </div>
       <!-- TODO: IF NOT SELECTED DISABLE -->
      <div class="flex mt-10 mb-20">
        <n-link :to="`/assign?roles=${_selectedRoleString}`" class="px-6 py-2 rounded-full shadow bg-black text-white hover:bg-purple-600 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"> next </n-link>
      </div>
    </div>
  </div>
</template>

<script>
import roles from "@/assets/roles.json";
export default {
  data: () => ({
    selectedCard: []
  }),
  computed: {
    _roles() {
      return roles;
    },
    _selectedRoleString() {
      if(this.selectedCard.length) return this.selectedCard.join(",")
      return []
    }
  },
  methods: {
    selectCard(slug){
      if(this.selectedCard.includes(slug)) {
        this.selectedCard = this.selectedCard.filter(x => x !== slug)
      } else {
        this.selectedCard.push(slug)
      }
      
    }
  }
};
</script>

<style lang="scss" scoped>
.-active {
  border: 2px solid #6A4DFF
}
</style>