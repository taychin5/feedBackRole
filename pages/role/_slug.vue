<template>
  <div class="container">
    
    <div><n-link to="/"> back to the bundle </n-link></div>
    <div class="grid grid-cols-5 mt-16">
      <div class="col-span-2">
        <img class="w-3/4 mx-auto" v-bind:src="role.mainImage" alt="" />
      </div>
      <div class="col-span-3 ml-20">
        <h1 class="text-5xl font-bold">{{role.title}}</h1>
        <div class="pb-8">{{role.description}}</div>
        <div class="box-content border-none bg-white rounded-xl px-8 py-4 shadow">
          <h3 class="text-3xl font-semibold">Question guide</h3>
          <div>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Non soluta
            neque voluptatem illo, blanditiis est, suscipit, fugit mollitia hic
            consequuntur beatae explicabo esse saepe natus nobis sapiente.
            Dolorum, tenetur saepe! r
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import roles from "@/assets/roles.json";
export default {
  asyncData({ params }) {
    let role = roles.find( x => x.slug === params.slug)
    return {
      role
    }
  }
};
</script>

<style></style>
