<template>
 <div>
    <div class="custom-card">
      <div class="card__inner">
        <div class="card__content card_content--front">
          <img src="/card.png" alt="" />
        </div>
        <div class="card__content card__content--back">
          <div>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid ab pariatur id exercitationem harum voluptate molestias a iste, libero necessitatibus atque possimus optio itaque temporibus facilis. Libero quod incidunt non.</div>
        </div>
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

.custom-card {
  cursor: pointer;
  border-radius: 3px;
  perspective: 1000px;
}

.card__inner {
  background-color: #FFFFFF;
  color: #41295a;
  
  display: flex;
  justify-content: center;
  align-items: center;
  
  transition: transform 0.8s;
  transform-style: preserve-3d;
}

.custom-card:hover .card__inner {
  transform: rotateY(180deg);
}

.card__content {
  position: absolute;
  -webkit-backface-visibility: hidden; /* Safari */
  backface-visibility: hidden;
}

.card__content--back {
  transform: rotateY(180deg);
} 
</style>
