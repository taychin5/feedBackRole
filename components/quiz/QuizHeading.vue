<template>
  <div>
    <h1 class=" text-3xl" v-html="title"></h1>
    <span v-if="error" class="text-red-600">{{ error }}</span>
    <slot></slot>
    <button class="mt-8" @click="$emit('next')">next</button>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ""
    },
    error: {
      type: String,
      default: ""
    }
  }
};
</script>

<style></style>
