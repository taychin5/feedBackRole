<template>
  <div class="container">
    <Step></Step>
    <h1 class="text-xl">heading {{ step }}</h1>
    <!-- body -->
    <div>
      <div v-if="step === 0">
        <b-field label="Name">
          <b-input v-model="name"></b-input>
        </b-field>
      </div>
      <div v-if="step === 1">yyyyyyy</div>
      <div v-if="step === 2">zzzzzzz</div>
    </div>
    <button @click="step += 1">next</button>
  </div>
</template>

<script>
export default {
  data: () => ({
    step: 0
  }),
  watch: {
    step: {
      handler(val) {
        if (val > 2) this.$router.push(`/assign?card=1,2,3,4,5,6`);
      }
    }
  }
};
</script>

<style></style>
