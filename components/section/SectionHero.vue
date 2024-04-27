<template>
     <section
      class="section relative fold hero flex flex-col justify-center items-center h-[100vh]"
    >
      <div
        class="text-box relative flex justify-center text-contianer items-center flex-col space-y-2 mt-[-200px]"
      >
        <h1 class="text-[8rem] text-default-white text-center">
          Jessica Turner
        </h1>
        <h3 class="text-center text-3xl caps text-default-light-purple">
          Web Developer
        </h3>
      </div>

      <div
        class="jump-animation absolute bottom-10"
        v-show="data.hoverEnabled"
        @mouseover="hoverShowMore"
        @mouseleave="data.hoverEnabled ? (data.showMore = false) : ''"
        @click="showBottom()"
      >
        <img class="h-[60px]" src="@/assets/images/home/pointing-down.png" />
      </div>
    </section>
</template>

<script setup>
const emit = defineEmits(["showBottom"]);

const data = reactive({
  showMore: false,
  hoverEnabled: true,
});

const showBottom = () => {
  data.hoverEnabled = false;
  data.showMore = true;

  setTimeout(() => {
    const bottomContainer = document.getElementById("bottom-container");
    bottomContainer.scrollIntoView({ behavior: "smooth" });
	emit('showBottom', true)
  }, 100);
};

const hoverShowMore = () => {
  data.showMore = true;
};

onMounted(() => {
  setTimeout(() => {
    useAnimateObserver();
    useGoToAnchor();
  }, 100);
});
</script></script>