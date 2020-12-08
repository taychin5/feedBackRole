<template>
  <div class="container">
    <!-- TODO: layout -->
    <h1 class="text-2xl text-center mb-10 font-bold">
      Select the cards for yout feedback session
    </h1>
    <div class="grid grid-cols-6 gap-4">
      <div v-for="(card, i) in _roles" :key="`card-${i}`">
        <img
          @click="selectCard(card.slug)"
          :src="card.cardImage"
          alt=""
          class="shadow cursor-pointer transform hover:scale-105 transition duration-400"
          :class="{ '-active': selectedCard.includes(card.slug) }"
        />
      </div>
      <!-- TODO: IF NOT SELECTED DISABLE -->
    </div>
    <div class="flex justify-center mt-10 mb-20">
      <n-link
        :to="`/assign?roles=${_selectedRoleString}`"
        class="px-6 py-2 rounded-full shadow bg-black text-white hover:bg-purple-600 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
        >next</n-link
      >
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
      // if(this.$route.query.roles) {
      //   let selectedRoles = this.$route.query.roles.join(",")
      //   return roles.filter(x => selectedRoles.includes(x.slug))
      // }
      return roles;
    },
    _selectedRoleString() {
      if (this.selectedCard.length) return this.selectedCard.join(",");
      return [];
    }
  },
  methods: {
    selectCard(slug) {
      if (this.selectedCard.includes(slug)) {
        this.selectedCard = this.selectedCard.filter(x => x !== slug);
      } else {
        this.selectedCard.push(slug);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.-active {
  border: 4px solid #6a4dff;
  border-radius: 0.75rem;
}
</style>
