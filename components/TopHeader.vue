<template>
  <div class="container py-10">
    <div class="grid md:grid-cols-5 grid-cols-1 gap-4 items-center">
      <div class="md:col-start-1 md:col-end-2">
        <n-link to="/" class=" inline-flex items-center">
          <img class=" w-8" src="/favicon01.png" alt="" />
          <div class=" ml-4 font-bold text-lg">Feedback role</div>
        </n-link>
      </div>
      <div class="md:col-start-3 md:col-end-4 hidden md:block">
        <n-link to="/about" class=" flex paddingLeft">About</n-link>
      </div>
      <div class="md:col-start-4 md:col-end-5 hidden md:block">
        <n-link to="/howitswork" class="flex justify-center"
          >How its work</n-link
        >
      </div>
      <div class="md:col-start-5 md:col-end-6 text-right hidden md:block">
        <a
          href="https://drive.google.com/file/d/1iJToxAHQV1uDGYP3rkQ7d-xEtP36n_0C/view?usp=sharing"
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
