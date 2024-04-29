<template>
  <div class="box p-4 space-y-4 w-full  lg:w-[45%]" :class="{'hover': flipBox=== true}" @click="flipBox=true">
    <div class="inner-box " :class="props.slug">
      <div
        class="front-box border-box flex flex-col lg:flex-row justify-center items-cener space-y-4"
        :class="props.slug"
      >
        <img :src="props.imageSrc" alt="props.title" class="front-box-image rounded-xl" />
      </div>
      <div
        class="back-box border-box text-center p-4 flex justify-center itmes-center bg-default-dark-purple flex-col space-y-7"
      >
        <div
          class="text-container p-7 flex flex-col space-y-4 absolute z-100 top-0 bottom-0 left-0 right-0 justify-center items-start"
        >
          <h2 class="text-default-white text-1.5xl lg:text-2xl">
            {{ props.title }}
          </h2>
          <p class="text-default-white text-left text-xs ">{{ props.description }}</p>
          <div
            class="flex flex-row flex-wrap justify-center items-center gap-4"
          >
            <p
              v-for="(tag, i) in props.tagArray"
              :key="i"
              class="text-default-light-purple mx-2"
            >
              {{ tag }}
            </p>
          </div>
          <div class="flex justify-center items-center gap-4  ">
            <nuxt-link
              class="text-default-white project-button caps  mx-auto button  dark"
              :to="props.link"
            >
              Live
            </nuxt-link>
            <nuxt-link
              class="text-default-white project-button caps  mx-auto button reverse dark"
              v-show="props.repo"
              :to="props.repo"
            >
              Repo
            </nuxt-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  title: String,
  demo: String,
  tagArray: Array,
  slug: String,
  imageSrc: String,
  repo: String,
  description: String,
  reverse: Boolean,
});
const flipBox = ref(false);
</script>
<style lang="scss">
@import "@/assets/scss/variables.scss";

.box {
  background: transparent;
  perspective: 1000px;
  box-sizing: border-box;
  border-radius: 12px;
  position: relative;
  aspect-ratio: 2/1;

//   height: 60vh;

  transition: transform 0.8s;
  border-radius: 12px;
  transform-style: preserve-3d;
  .inner-box {
    position: relative;
    background: rgba($default-dark-blue, .8);
    width: 100%;
    height: 100%;
    transition: transform 0.8s;
    border-radius: 12px;
    transform-style: preserve-3d;
    box-shadow: 0 10px 10px 4px rgba($default-dark, 0.15);

    .front-box,
    .back-box {
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 12px;
      text-align: center;
      -webkit-backface-visibility: hidden;
      backface-visibility: hidden;
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      &.front-box {
        background: rgba($default-blue, 0.3);
      }
    }
  }

  &:hover {
    .inner-box {
      transform: rotateY(180deg);
    }
  }
  .back-box {
    transform: rotateY(180deg);
  }
}
</style>
