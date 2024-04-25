<template>
  <div
    class="project-card text-default-white w-full flex"
    :class="props.reverse ? 'reverse' : ''"
    @mouseover="showBottom = true"
    @mouseleave="showBottom = false"
  >
    <div class="top w-2/3" :class="props.reverse ? 'rounded-r-2xl' : 'rounded-l-2xl'" >
      <img class="rounded-t-2xl" :src="props.imageSrc" alt="project.name" />
    </div>
    <Transition :name="transitionName">
      <div
        class="bottom container mx-auto rounded-b-2xl w-1/3" :class="props.reverse ? 'rounded-l-2xl' : 'rounded-r-2xl'" 
        v-show="showBottom"
      >
        <div
          class="inner flex flex-col items-start justify-center space-y-4 p-7"
        >
          <h3>{{ props.title }}</h3>
          <p>{{ props.description }}</p>
          <div
            class="project-button-container flex justify-start items-center gap-2"
          >
            <span v-for="(item, i) in props.tagArray" :key="i" class="tag">{{
              item
            }}</span>
          </div>
          <div class="link-container flex justify-center items-center gap-2">
            <a :href="props.demo" class="project-button caps">Demo</a>
            <a
              v-show="props.repo"
              :href="props.repo"
              class="project-button caps"
              >Repo</a
            >
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<script setup>
const showBottom = ref(false);

const props = defineProps({
  imageSrc: String,
  title: String,
  description: String,
  tagArray: Array,
  demo: String,
  repo: String,
  reverse: {
    type: Boolean,
    default: false,
  },
});

const transitionName = computed(() => {
  return props.reverse ? 'projectOpenLeft' : 'projectOpenRight';
});
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.bottom {
  background: rgba(0, 108, 250, 0.3);
}
.project-button {
  padding: 10px 15px;
  background: $default-blue;
  color: $default-white;
  border-radius: 5px;
}
.tag {
  padding: 5px 10px;
  background: $default-white;
  color: $default-purple;
  border-radius: 5px;
  font-size: 12px;
}
.reverse{
    flex-direction: row-reverse;
}
</style>
