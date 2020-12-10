<template>
  <div class="container">
    <h1 class="text-center mb-10 text-2xl font-bold">
      Assign role to participants
    </h1>
    <div class="grid grid-cols-3 gap-8">
      <div v-for="(item, i) in exportRoles" :key="`card-${i}`">
        <!-- TODO : Layout!!! -->
        <div>
          <img :src="item.cardImage" alt="" class="w-3/5 mx-auto" />
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
                  class="w-4/6 mx-auto mt-4"
                >
                </b-input>
              </b-field>
            </div>
          </div>
          <button @click="addItem(item)" class="mt-4 flex mx-auto addButton">
            add participant
          </button>
        </div>
      </div>
    </div>
    <div class="mt-10 mb-2 flex justify-center">
      <!-- submit -->
      <button
        @click="submit()"
        class="mb-10 blackButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"
      >
        submit
      </button>
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
      await this.$axios.$post(
        `https://asia-southeast2-instant-pivot-298007.cloudfunctions.net/send-email-ten`,
        this.paticipants
      );
      this.$router.push("/complete");
    }
  }
};
</script>
