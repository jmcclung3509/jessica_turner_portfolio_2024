<template>
  <div
    class="project-box relative w-full md:w-[45%] xl:w-[30%] animate"
    @mouseover="showHidden = true"
    @mouseleave="showHidden = false"
    @click="showHidden = true"
  >
    <div class="visible flex justify-center items-center h-[300px] rounded-lg" :class="props.slug">
      <h2 class="text-3xl text-default-white">{{ props.title }}</h2>
    </div>
    <Transition name="small-to-big">
      <div
        class="behind flex flex-col items-center justify-center h-[300px] bg-default-dark-blue absolute top-0 p-7 space-y-4 rounded-lg"
        v-show="showHidden === true"
      >
        <p class="text-center text-default-white">{{ props.description }}</p>
        <div class="tag-box flex flex-row items-center justify-center gap-2" >
            <p class="text-blue-text text-[12px] caps" v-for="(tag, i) in tagArray" :key="i">{{ tag }}</p></div>
        <div
          class="flex flex-row items-center justify-center gap-4"
        >
          <nuxt-link :to="props.link" class="button project">Live</nuxt-link>
          <nuxt-link
            v-show="props.repo"
            :to="props.repo"
            class="button reverse project"
            >Repo</nuxt-link
          >
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const showHidden= ref(false);

const props=defineProps({
    title: String,
    description: String,
    link: String,
    repo: String,
    slug: String,
    tagArray:Array
    });

</script>



