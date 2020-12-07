<template>
  <div>
    <b-steps v-model="activeStep" :has-navigation="false">
      <b-step-item label="Project" step="1"></b-step-item>
      <b-step-item label="feedback" step="2"></b-step-item>
      <b-step-item label="picks" step="3"></b-step-item>
    </b-steps>
  </div>
</template>

<script>
export default {
  props: {
    activeStep: {
      type: Number,
      default: 0
    }
  }
};
</script>
