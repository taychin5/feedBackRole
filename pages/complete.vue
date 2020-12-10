<template>
  <div>
    <div class="container">
      <div class="grid grid-cols-4 gap-4">
        <div class="col-start-2 col-end-4">
          <h2 class="text-center mb-10 mt-10 text-3xl font-bold">
            Invitation sent
          </h2>
          <img class="" src="/invitation-sent.png" alt="" />
          <h2 class="text-center mt-10 text-xl font-bold">
            Get your presentation ready for feedback!
          </h2>
          <div class="flex justify-center">
            <n-link
              to="/sequence"
              class=" mt-8 mb-20 outlineButton py-2 px-4 transition duration-300"
            >
              see feedback sequence
            </n-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style></style>
