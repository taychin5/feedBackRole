<template>
  <div class="container">
    <div class="grid md:grid-cols-4 grid-cols-1 gap-4">
      <div class="col-start-1 col-end-2 md:block hidden">
        <img class="mt-10" src="/sequence/left.png" />
        <img class="mt-64" src="/sequence/left2.png" />
        <img class="sqphoto" src="/sequence/left3.png" />
      </div>

      <div class="md:col-start-2 md:col-end-4">
        <h1 class="text-3xl font-bold text-center mb-4">
          Recommended feedback sequence
        </h1>
        <h3 class="text-lg text-center mb-10">
          This is just our recommendation, if you have your own sequence
          <br />Go ahead!
        </h3>
        <!-- number 01: inspector-->
        <div
          v-for="(item, i) in sequences"
          :key="`sequence-${i}`"
          class="sequenceBox"
        >
          <div class="flex">
            <div class="relative">
              <img
                :class="{
                  'opacity-100': i % 4 == 0,
                  'opacity-50': i % 4 == 2,
                  'opacity-75': i % 4 == 3 || i % 4 == 1
                }"
                class="w-12"
                src="/bubble.svg"
              />
              <div class="absolute custom-number">
                {{ minTwoDigits(i + 1) }}
              </div>
            </div>
            <h4 class="text-xl font-bold ml-4">{{ item.title }}</h4>
          </div>
          <p class="mt-3">{{ item.description }}</p>
        </div>
      </div>
      <div class="col-start-4 col-end-5 md:block hidden">
        <img class="mt-64 mb-64" src="/sequence/right.png" />
        <img class="sqphoto" src="/sequence/right2.png" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    sequences: [
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      }
    ]
  }),
  methods: {
    minTwoDigits(n) {
      return (n < 10 ? "0" : "") + n;
    }
  }
};
</script>

<style lang="scss" scoped>
.custom-number {
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
  font-weight: 600;
}
</style>
