<template>
  <div class="container">
    <!-- TODO: layout -->
    <h1 class="text-3xl">Select the cards for yout feedback session</h1>
    <div class="grid grid-cols-6 gap-4">
      <div v-for="(card, i) in _roles" :key="`card-${i}`">
        <img
          @click="selectCard(card.slug)"
          :src="card.cardImage"
          alt=""
          class="shadow"
          :class="{ '-active': selectedCard.includes(card.slug) }"
        />
      </div>
      <!-- TODO: IF NOT SELECTED DISABLE -->
      <div>
        <n-link :to="`/assign?roles=${_selectedRoleString}`">next</n-link>
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
  border: 2px solid plum;
}
</style>
