<template>
  <div class="container">
    <h1>Select the cards for yout feedback session</h1>
    <div class="grid grid-cols-6">
      <div v-for="(card, i) in 12" :key="`card-${i}`">
        <img src="/card.png" alt="" />
      </div>
      <div>
        <n-link :to="`/assign?card=1,3,4,5,6`">next</n-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
