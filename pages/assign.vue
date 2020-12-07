<template>
  <div class="container">
    <h1 class="text-center">Assign role to participants</h1>
    <div class="grid grid-cols-3 gap-8">
      <div v-for="(item, i) in exportRoles" :key="`card-${i}`">
        <!-- TODO : Layout!!! -->
        <div>
          <img :src="item.cardImage" alt="" />
          <button @click="addItem(item)">add</button>
        </div>
      </div>
    </div>
    <div>
    <!-- submit -->
      <button @click="submit()">submit</button>
    </div>
  </div>
</template>

<script>
import roles from "@/assets/roles.json";
export default {
  asyncData({query}){
    let selectedRoles = query.roles.split(',')
    console.log(selectedRoles)
    let exportRoles = roles.filter(x=> selectedRoles.includes(x.slug))
    return {
      exportRoles
    }
  },
  data: () => ({
    isLoading: false
  }),
  methods: {
    addItem(item) {
      console.log(item)
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
