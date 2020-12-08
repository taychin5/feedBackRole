<template>
  <div>
    <h1 class=" text-3xl text-center" v-html="title"></h1>
    <span v-if="error" class="text-purple-600 flex justify-center">{{ error }}</span>
    <slot></slot>
    <button class="mt-8 flex mx-auto px-6 py-2 rounded-full shadow bg-black text-white hover:bg-purple-600 hover:text-white transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110" @click="$emit('next')">next</button>
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
