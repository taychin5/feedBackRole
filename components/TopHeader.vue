<template>
  <div class="container py-10">
    <div class="grid md:grid-cols-3 grid-cols-2 gap-4 items-center">
      <div class="md:col-start-1 md:col-end-2">
        <n-link to="/" class=" inline-flex items-center">
          <img class=" w-8" src="/favicon01.png" alt="" />
          <div class=" ml-4 font-bold text-lg">Feedback role</div>
        </n-link>
      </div>
      <div class="md:col-start-3 md:col-end-4 text-right">
        <a
          href="/google"
          target="blank"
          rel="noopener"
          class="outlineButton px-5 py-2 transform transition duration-500 ease-in-out hover:scale-110 hover:-translate-y-1"
          >Download the bundle</a
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.outlineButton {
  border: 1px solid #6a4dff;
  border-radius: 9999px;
  white-space: nowrap;
  &:hover {
    color: white;
    background-color: #6a4dff;
  }
}
</style>
