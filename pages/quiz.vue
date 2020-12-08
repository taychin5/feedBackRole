<template>
  <div class="container">
    <Step :activeStep="step"></Step>
    <!-- body -->
    <div>
      <div v-if="step === 0">
        <QuizHeading
          @next="selectStepOne"
          :error="errorMsg"
          title="What is your project category?"
        >
          <div
            v-for="(choice, i) in choices"
            :key="`chocies1-${i}`"
            class="my-2 px-4"
          >
            <div
              class="choice py-2 px-4 cursor-pointer flex mx-auto"
              @click="stepOneSelected = choice.slug"
              :class="{ '-active': stepOneSelected === choice.slug }"
            >
              {{ choice.title }}
            </div>
          </div>
        </QuizHeading>
      </div>
      <div v-if="step === 1">
        <!-- อันนี้render เข้า slot ในquizheader -->
        <QuizHeading
          :error="errorMsg"
          @next="selectStepTwo"
          title="What kind of feedback do you expect from the session"
        >
          <div
            v-for="(choiceTwo, i) in choicesTwo"
            :key="`chocies2-${i}`"
            class="my-2 px-4"
          >
            <div
              class="choice py-2 px-4 cursor-pointer flex mx-auto"
              @click="stepTwoSelected = choiceTwo.slug"
              :class="{ '-active': stepTwoSelected === choiceTwo.slug }"
            >
              {{ choiceTwo.title }}
            </div>
          </div>
        </QuizHeading>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    errorMsg: "",
    step: 0,
    choices: [
      { title: "Digital design", slug: "digital" },
      { title: "Product design", slug: "product" },
      { title: "Packaging design", slug: "packaing" },
      { title: "Service design", slug: "service" }
    ],
    choicesTwo: [
      { title: "I’m looking for some idea", slug: "idea" },
      { title: "Concept and design development", slug: "develop" },
      { title: "PA final check feedback", slug: "check" }
    ],
    stepOneSelected: "",
    stepTwoSelected: "",
    calculator: {
      digital: {
        idea: "inspector,creative,visioner,curious",
        develop: "critiquer,inspector,tech-expert,contributor,visioner",
        check: "tech-expert,business-brain,aesthetic-pleaser,curious,critiquer"
      },
      product: {
        idea: "inspector,creative,builder,curious",
        develop: "aesthetic-pleaser,builder,maker,contributor,critiquer",
        check: "aesthetic-pleaser,maker,environmentalist,business-brain,curious"
      },
      packaing: {
        idea: "creative,visioner,inspector,builder",
        develop: "environmentalist,inspector,visioner,builder,aesthetic-pleaser",
        check:
          "environmentalist,maker,aesthetic-pleaser,business-brain,inspector"
      },
      service: {
        idea: "critiquer,creative,visioner,contributor",
        develop: "critiquer,creative,business,curious,inspector",
        check: "business-brain,contributor,critiquer,curious,maker"
      }
    }
  }),
  watch: {
    step: {
      handler(val) {
        this.errorMsg = "";
        if (val >= 2) {
          let stepOne = this.calculator[this.stepOneSelected];
          let stepTwo = stepOne[this.stepTwoSelected];
          this.$router.push(`/assign?roles=${stepTwo}`);
        }
      }
    }
  },
  methods: {
    selectStepOne() {
      if (!this.stepOneSelected) return (this.errorMsg = "Sorry if the categories below does not match your project, please try custom selection");
      this.step++;
    },
    selectStepTwo() {
      if (!this.stepTwoSelected) return (this.errorMsg = "Let us know what you need");
      this.step++;
    }
  }
};
</script>

<style lang="scss" scoped>
.card {
  &.-active {
    border: 1px solid violet;
  }
}
</style>
