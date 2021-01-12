<template>
  <div class="container">
    <div class="grid md:grid-cols-4 grid-cols-1 gap-4 mb-20">
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
          This is just our recommendation. If you have create your own sequence list, Go ahead!
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
        title: "The Inspector",
        description:
          "A person who helps you re-check if your design outcome answered the user's need and requirement."
      },
      {
        title: "The Critiquer",
        description:
          "A person who will be telling you what your design is lacking.They will also mention what you should get fixed."
      },
      {
        title: "The Creative",
        description:
          "A realistic dreamer who always comes up with a crazy alternative idea that will help inspire the designer one way or another."
      },
      {
        title: "The Contributor",
        description:
          "A person who will be mentioning what the designer has done well and should be kept in their design. Also, suggest how to make it better."
      },
      {
        title: "The Builder",
        description:
          "A person who focuses on the design's shape and structure also suggest the designer how they can improve their model."
      },
      {
        title: "The Maker",
        description:
          "A person focuses on the production stage of the design, considering how the designer would make their design happen."
      },
      {
        title: "The Tech expert",
        description:
          "A person will be consulting the technology aspect of the design; this covered suitability suggestion to the technical concern."
      },
      {
        title: "The Aesthetic pleaser",
        description:
          "A person who concentrates on how the design looks and will be giving suggestion on the visual part of the design."
      },
      {
        title: "The Business brain",
        description:
          "A person who will be considering about business aspect of the design. This covered how the product enters the market to how it makes money."
      },
      {
        title: "The Environmentalist",
        description:
          "A person who concerns about the environmental impact and will help prevent your design from weaponising the earth."
      },
      {
        title: "The Curious",
        description:
          "A person who will challenge the designer with a thought-provoking question or mention the possible pitfall in future scenarios."
      },
      {
        title: "The Visioner",
        description:
          "A person who will be focusing on the process and method used. This included the next step suggestion and design tools recommendation."
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
