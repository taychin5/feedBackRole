<template>
  <div class="container">
    <h1 class="text-center">Assign role to participants</h1>
    <div v-for="(item, i) in role" :key="`card-${i}`">
      <div>
        <img src="/testPic.png" alt="" />
        <div v-if="item.paticipants && item.paticipants.length">
          <div v-for="(pati, i) in item.paticipants" :key="`pati-${i}`">
            <b-field label="Name">
              <b-input v-model="item.paticipants[i]"></b-input>
            </b-field>
          </div>
        </div>
      </div>
      <div>
        <button @click="addItem(item)">add</button>
      </div>
    </div>
    <!-- submit -->
    <div>
      <button @click="submit()">submit</button>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    role: [
      {
        paticipants: null
      },
      {
        paticipants: null
      }
    ],
    isLoading: false
  }),
  methods: {
    addItem(item) {
      if (!item.paticipants) return (item.paticipants = ["/"]);
      item.paticipants.push("/");
    },
    async submit() {
      await this.$axios.$post(`api/email`);
      this.$router.push("/complete");
    }
  }
};
</script>
