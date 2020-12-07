<template>
  <div class="container">
    <h1 class="text-3xl">Select the cards for yout feedback session</h1>
    <div class="grid grid-cols-6">
      <div v-for="(card, i) in _roles" :key="`card-${i}`">
        {{ card }}
        <!-- <FlipCard
          :mainImage="card.mainImage"
          :description="card.description"
        ></FlipCard> -->
      </div>
      <div>
        <n-link to="/assign">next</n-link>
        <a href="/">xxxxx</a>
      </div>
    </div>
  </div>
</template>

<script>
import roles from "@/assets/roles.json";
export default {
  computed: {
    _roles() {
      return roles;
    }
  }
};
</script>

<style></style>
