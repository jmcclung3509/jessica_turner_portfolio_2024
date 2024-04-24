<template>
  <div class="project-card bg-default-dark-purple text-default-white w-full md:w-1/2 lg:w-1/3 ">
    <div class="top">
      <img :src="props.imageSrc" alt="project.name" />
    </div>
    <div class="bottom container mx-auto">
      <div class="inner flex flex-col items-start justify-center space-y-4 p-7">
        <h3>{{ props.title }}</h3>
        <p>{{ props.description }}</p>
        <div
          class="project-button-container flex justify-start items-center gap-2"
       
        >
          <span   v-for="(item, i) in props.projectButtons"
          :key="i" class="project-button">{{ item }}</span>
        </div>
        <div class="link-container flex justify-center items-center gap-2">
          <a :href="props.demo" class="project-button caps">Demo</a>
          <a v-show="props.repo" :href="props.repo" class="project-button caps"
            >Repo</a
          >
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  imageSrc: String,
  title: String,
  description: String,
  projectButtons: Array,
  demo: String,
  repo: String,
});
</script>
