<template>
  <div class="container">
    
    <div><n-link to="/">back to the bundle</n-link></div>
    <div class="grid grid-cols-2">
      <div>
        <img v-bind:src="role.mainImage" alt="" />
      </div>
      <div>
        <h1 class="text-5xl">{{role.title}}</h1>
        <div>{{role.description}}</div>
        <div class="p-8">
          <h3 class="text-3xl">feedback guide</h3>
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
