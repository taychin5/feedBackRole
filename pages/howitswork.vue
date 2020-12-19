<template>
  <div>
    <div class="container">
      <div>
       <h2 class="flex justify-center text-3xl text-center font-bold purpleText mt-16"> 
         Let’s make the conversation <br>
started in the feedback session
      </h2>
      </div>
      <!-- <img class="w-5/6 flex mx-auto" src="/conver.gif" alt=""> -->
      <div class="grid grid-cols-2 gap-0 mt-8">
        <div class="col-start-1 col-end-2">
          <img class="" src="/conver-1.gif">
        </div>
        <div class="col-start-2 col-end-3">
          <img class="" src="/conver-2.gif" alt="">
        </div>
      </div>

    <div class="flex justify-center mt-10">
    <div class="verLine"></div>
    </div>

      <div class="grid grid-cols-2 mt-16">
        <div class="col-start-1 col-end-2">
          <img class="w-1/12 mb-4" src="/number/1.png" alt="">
          <h2 class="purpleText font-bold text-xl">Explore the bundle</h2>
          <p class="mr-6 mt-2">The core idea is you, a project owner, will be giving out your feedback session’s participants a role in advance. So, they’ll have some time to learn about the role. They will be giving feedback according to the role they got. To get started, we recommend you to explore the role we offer in the bundle in order for you to get the idea of each roles.</p>
        </div>
      <div class="col-start-2 col-end-3">
        <img class="w-11/12 flex mx-auto transform hover:scale-110 transition duration-300" src="/explore.gif" alt="">
      </div>
      </div>

      <div class="grid grid-cols-2 mt-32">
        <div class="col-start-1 col-end-2">
          <img class="" src="/select.gif" alt="">
        </div>
        <div class="col-start-2 col-end-3">
        <img class="w-1/12 mb-4" src="/number/2.png" alt="">
        <h2 class="purpleText font-bold text-xl">Select cards or take a quiz</h2>
          <p class="mr-6 mt-2">You can choose to select a set of card for your session by yourself or let us help by take the quiz. The quiz will be filtering cards from the bundle and help select the one that seem suitable for your project.</p>
        </div>
      </div>

        <div class="grid grid-cols-2 mt-32">
        <div class="col-start-1 col-end-2 mt-16">
        <img class="w-1/12 mb-4" src="/number/3.png" alt="">
        <h2 class="purpleText font-bold text-xl">Assign role to participants</h2>
          <p class="mr-6 mt-2">After you have select a set of card, you can assign a role to participant by type down their e-mail address. (Each role can be assign to more than one participant)
Then, just click on submit and we’ll send an invitation to all participants together with their assigned role detail.</p>
        </div>
        <div class="col-start-2 col-end-3">
          <img class="w-4/5 flex mx-auto" src="/assign2.gif" alt="">
        </div>
      </div>

      <div class="grid grid-cols-2 mt-10 mb-20">
        <div class="col-start-1 col-end-2">
        <img class="" src="/ready.gif" alt="">
        </div>
        <div class="col-start-2 col-end-3 mt-16">
        <img class="w-1/12 mb-4" src="/number/4.png" alt="">
        <h2 class="purpleText font-bold text-xl">Get yourself ready</h2>
          <p class="mr-6 mt-2"> After you have sent out invitation to participants, its time to get yourself ready for facilitate the session. We have provide you a recommended feedback sequence which you can choose to follow or not. Also, make sure your presentation is percise, clear and included all the information that needed.</p>
        </div>
        </div>
        <div class="flex justify-center mb-20">
          <n-link to="/" class="blackButton transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110"> Let's get started</n-link>
        </div>
      </div>  

  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped></style>