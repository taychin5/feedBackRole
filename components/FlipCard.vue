<template>
  <div class="flipcard ">
    <div class="flipcard_front">
      <img src="/card.png" class="w-full h-full"></img>
    </div>
    
    <div class="flipcard_back shadow">
      <div class="flipcard_description">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Corporis
        accusantium, reiciendis repellat beatae nam ex ratione, adipisci eaque
        veniam ut et saepe, nulla odio porro unde magni aut expedita molestiae.
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
    desciption: {
      type: String,
      default: ""
    }
  }
};
</script>

<style lang="scss" scoped>
.flipcard {
  font-family: arial;
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
  height: 100%;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  -webkit-transition: all 0.5s ease;
  transition: all 0.5s ease;
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
}

.flipcard_description button {
  background: transparent;
  border: solid 1px white;
  border-radius: 50%;
  color: white;
  padding: 0;
  margin: 0% 2%;
  -webkit-transition: all 0.3s;
  transition: all 0.3s;
  text-align: center;
  font-size: 1rem;
  width: 2.5rem;
  height: 2.5rem;
}

.flipcard_description button:hover {
  color: black;
  background: white;
  cursor: pointer;
}

.flipcard_description h3 {
  color: #c6a869;
}

.flipcard_description p {
  opacity: 0.7;
  line-height: 1.4;
}

.flipcard_description img {
  height: 2rem;
  margin: 2% 1%;
}
</style>
