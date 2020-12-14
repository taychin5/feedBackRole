<template>
  <div class="flipcard ">
    <div class="flipcard_front shadow">
      <img :src="mainImage" class="w-full h-full"></img>
    </div>
    <div class="flipcard_back shadow" :style="`background-color:${color}`">
      <div class="flipcard_description">
        {{ description }}
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    mainImage: {
      type: String,
      default: ""
    },
    description: {
      type: String,
      default: ""
    },
    color: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.flipcard {
  margin: 25px auto;
  height: 350px;
  width: 240px;
  position: relative;
  perspective: 700px;
  -webkit-transform-style: preserve-3d;
  transform-style: preserve-3d;
  text-align: center;
}

.flipcard_front{
  backface-visibility: hidden;
  height: auto;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
}


.flipcard_back {
  backface-visibility: hidden;
  height: 400px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
  border-radius: 12px;
}

.flipcard_front {
  transform: translate(-50%, -50%) rotateY(0deg);
}

.flipcard:hover .flipcard_front {
  transform: translate(-50%, -50%) rotateY(180deg);
}

.flipcard_back {
  transform: translate(-50%, -50%) rotateY(180deg);
}

.flipcard:hover .flipcard_back {
  transform: translate(-50%, -50%) rotateY(360deg);
}

.flipcard_description {
  box-sizing: border-box;
  position: absolute;
  top: 0;
  width: 100%;
  padding: 10% 10% 0%;
  overflow: auto;
  color: white;
}

</style>
