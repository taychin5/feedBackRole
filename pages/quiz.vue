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
            class="my-2"
          >
            <div
              class="card p-2 cursor-pointer"
              @click="stepOneSelected = choice.slug"
              :class="{ '-active': stepOneSelected === choice.slug }"
            >
              {{ choice.title }}
            </div>
          </div>
        </QuizHeading>
      </div>
      <div v-if="step === 1">
        <QuizHeading
          :error="errorMsg"
          @next="selectStepTwo"
          title="What kind of feedback do you expect from the session"
        >
          <div
            v-for="(choiceTwo, i) in choicesTwo"
            :key="`chocies2-${i}`"
            class="my-2"
          >
            <div
              class="card p-2 cursor-pointer"
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
        idea: "inspector,creative,planner,curious",
        develop: "critiquer,inspector,tech-expert,contributor,planner",
        check: "tech-expert,business-brain,aesthetic-please,curious,critiquer"
      },
      product: {
        idea: "inspector,creative,builder,curious",
        develop: "aesthetic-please,builder,maker,contributor,critiquer",
        check: "aesthetic-please,maker,environmentalist,business-brain,curious"
      },
      packaing: {
        idea: "creative,planer,inspector,builder",
        develop: "environmentalist,inspector,planer,builder,aesthetic-please",
        check:
          "environmentalist,maker,aesthetic-please,business-brain,inspector"
      },
      service: {
        idea: "critiquer,creative,planner,contributor",
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
      if (!this.stepOneSelected) return (this.errorMsg = "error1");
      this.step++;
    },
    selectStepTwo() {
      if (!this.stepTwoSelected) return (this.errorMsg = "error2");
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
