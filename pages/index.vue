<template>
  <div>
    <div class="container my-16">
      <div class="grid grid-cols-5 gap-16 items-center mt-16">
        <div class=" col-span-5 md:col-span-3">
          <h1 class="text-5xl font-bold leading-tight mb-4">
            A character cards for your feedback session
          </h1>
          <div class="mt-2">
            We’ll provide you with a bundle of character card to be used in your
            feedback session. The bundle is claimed by the users that it help
            made the session become more effective and engaging.
          </div>
          <div class="flex mt-8">
            <n-link
              to="/pick"
              class="whiteButton mr-4 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >Pick the cards</n-link
            >
            <n-link
              to="/quiz"
              class="blackButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >
              Let’s us pick
            </n-link>
          </div>
        </div>
        <div class=" col-span-5 md:col-span-2 ">
          <img
            class=" mx-auto transition hover:scale-110"
            src="/intro.png"
            alt=""
          />
        </div>
      </div>
    </div>
    <div class="container my-20">
      <h1 class="text-center text-3xl my-20 font-bold">Explore the bundle</h1>
      <div class="grid grid-cols-2 md:grid-cols-3 gap-8">
        <div v-for="(card, i) in _roles" :key="`card-${i}`">
          <n-link :to="`role/${card.slug}`">
            <FlipCard
              :mainImage="card.cardImage"
              :description="card.description"
              :color="card.cardColor"
            ></FlipCard>
          </n-link>

          <!-- <img src="/card.png" alt="" /> -->
        </div>
      </div>
      <div class="my-20">
        <div class="flex justify-center">
          <n-link
            to="/pick"
            class="mr-4 whiteButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
            >Pick the cards
          </n-link>
          <n-link
            to="/quiz"
            class="blackButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
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
