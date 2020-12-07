<template>
  <div class="container">
    {{ paticipants }}
    <h1 class="text-center">Assign role to participants</h1>
    <div class="grid grid-cols-3 gap-8">
      <div v-for="(item, i) in exportRoles" :key="`card-${i}`">
        <!-- TODO : Layout!!! -->
        <div>
          <img :src="item.cardImage" alt="" />
          <div
            v-if="
              paticipants &&
                paticipants.find(x => x.slug === item.slug) &&
                paticipants.find(x => x.slug === item.slug).paticipants
            "
          >
            <div
              v-for="(input, i) in paticipants.find(x => x.slug === item.slug)
                .paticipants"
              :key="`input-${i}`"
            >
              <b-field>
                <b-input
                  placeholder="Email"
                  v-model="
                    paticipants.find(x => x.slug === item.slug).paticipants[i]
                  "
                  type="email"
                >
                </b-input>
              </b-field>
            </div>
          </div>
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
  asyncData({ query }) {
    let selectedRoles = query.roles.split(",");
    console.log(selectedRoles);
    let exportRoles = roles.filter(x => selectedRoles.includes(x.slug));
    return {
      exportRoles
    };
  },
  data: () => ({
    isLoading: false,
    paticipants: []
  }),
  methods: {
    addItem(item) {
      if (!this.paticipants.find(x => x.slug === item.slug))
        return this.paticipants.push({
          slug: item.slug,
          paticipants: [""]
        });
      this.paticipants.find(x => x.slug === item.slug).paticipants.push("");
    },
    async submit() {
      let allEmail = this.paticipants.map(x => x.paticipants);
      alert(allEmail);
      await this.$axios.$post(`api/email`);
      this.$router.push("/complete");
    }
  }
};
</script>
