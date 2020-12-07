<template>
  <div>
    <div class="container my-20">
      <div class="grid grid-cols-5 gap-16 items-center">
        <div class=" col-span-5 md:col-span-3">
          <h1 class="text-5xl font-bold leading-tight">
            A character cards for your feedback session
          </h1>
          <div>
            We’ll provide you with a bundle of character card to be used in your
            feedback session. <br />The bundle is proofed that it will made your
            session more effectrive and engaging.
          </div>
          <div class="flex mt-8">
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
        <div class=" col-span-5 md:col-span-2 ">
          <img class=" mx-auto" src="/testPic.png" alt="" />
        </div>
      </div>
    </div>
    <div class="container my-20">
      <h1 class="text-center text-2xl my-20 bold">Explore the bundle</h1>
      <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
        <div v-for="(card, i) in _roles" :key="`card-${i}`">
          <n-link :to="`role/${card.slug}`">
            <FlipCard></FlipCard>
          </n-link>

          <!-- <img src="/card.png" alt="" /> -->
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
import roles from "@/assets/roles.json";
export default {
  computed: {
    _roles() {
      return roles;
    }
  }
};
</script>

<style lang="scss" scoped></style>
