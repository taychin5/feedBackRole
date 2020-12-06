<template>
  <div>
    <div class="container my-20">
      <h1 class="text-2xl">Feed Back Role</h1>
      <div class="grid grid-cols-2 gap-4 items-center">
        <div>
          <h1 class="text-5xl">A character cards for your feedback session</h1>
          <div>
            We’ll provide you with a bundle of character card to be used in your
            feedback session. The bundle is proofed that it will made your
            session more effectrive and engaging.
          </div>
          <div class="flex">
            <n-link to="/pick" class="px-4 py-2 rounded-full shadow mr-2"
              >Pick the cards</n-link
            >
            <n-link
              to="/quiz"
              class="px-4 py-2 rounded-full shadow bg-black text-white"
            >
              Let’s us pick
            </n-link>
          </div>
        </div>
        <div>
          <img src="/testPic.png" alt="" />
        </div>
      </div>
    </div>
    <div class="container my-20">
      <h1 class="text-center text-2xl my-20 bold">Explore the bundle</h1>
      <div class="grid grid-cols-4">
        <div class="col-span-1" v-for="(card, i) in 6" :key="`card-${i}`">
          <img src="card.png" alt="" class="mx-auto" />
        </div>
      </div>
      <div class="my-20">
        <div class="text-center">I want to add my own character card</div>
        <div class="flex justify-center">
          <n-link to="/pick" class="px-4 py-2 rounded-full shadow mr-2"
            >Pick the cards
          </n-link>
          <n-link
            to="/quiz"
            class="px-4 py-2 rounded-full shadow bg-black text-white"
          >
            Let’s us pick
          </n-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>
