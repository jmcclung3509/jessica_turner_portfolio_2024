<template>
  <main>
    <section
      id="hero"
      class="section relative hero flex flex-col justify-center items-center hide-page "
      :class=" pageIsLoaded ? 'show-page' : ''"
    >
      <div
        class="text-box relative flex justify-center text-contianer items-center flex-col space-y-2 mt-[-200px]"
      >
        <template v-if="!isMobile">
          <SvgHeroText />
        </template>
        <template v-else>
          <h1 class="appear hero-text text-4xl text-default-white text-center">
            Jessica Turner
          </h1>
        </template>
        <h3 class="appear text-center text-2xl md:text-3xl caps text-blue-text">
          Web Developer
        </h3>
      </div>
      <transition name="fade-in">
        <div
          class="absolute bottom-10"
          :class="{ 'jump-animation': handShowing }"
          v-show="handShowing"
          @click="scrollToBottom"
        >
          <img class="h-[60px]" src="@/assets/images/home/pointing-down.png" />
        </div>
      </transition>
    </section>

    <div
      class=" bottom-container"
      id="bottom-container"
	  
    >
      <SectionAbout />
      <SectionProjects />
      <SectionContact />
    </div>
  </main>
</template>

<script setup>
const { updateSections } = useSideNavBar();
const { isMobile } = useScreenSize();

const config = useRuntimeConfig();
const route = useRoute();

const host = config.BASE_API_BROWSER_URL;
const title = "Jessica Turner | 2024";
const desc = " Personal website of Jessica Turner";

const image = host + "/static/images/featured-image.png";
const url = host + route.fullPath;

useHead({
  titleTemplate: title,
  meta: [
    { name: "title", content: "title" },
    { name: "description", content: "desc" },
    { hid: "og:type", property: "og:type", content: "website" },
    { hid: "og:title", property: "og:title", content: title },
    { hid: "og:url", property: "og:url", content: url },
    { hid: "og:description", property: "og:description", content: desc },
    { hid: "og:image", property: "og:image", content: image },
  ],
});

const handShowing = ref(false);
const pageIsLoaded = ref(false);

const scrollToBottom = () => {
  handShowing.value = false;
  const bottomContainer = document.getElementById("bottom-container");

  bottomContainer.scrollIntoView({ behavior: "smooth" });
};
onBeforeMount(() => {

	
  pageIsLoaded.value = false;
});

onMounted(() => {
  setTimeout(() => {
    useAnimateObserver();
    useGoToAnchor();
  }, 100);

  setTimeout(()=>{
	  pageIsLoaded.value=true
  },700
  )

  setTimeout(() => {
    handShowing.value = true;

  }, 7000);

  window.addEventListener("scroll", updateSections);
  updateSections(); // Initial update
});
</script>
<style lang="scss" scoped>
@import "@/assets/scss/variables.scss";

.hide-page {
  opacity: 0;
}
  .show-page {
    animation: page-appear 1s ease-in forwards;
    animation-delay: 1s;
  }

section.hero {
  &.show-page {
    width: 100vw;
    height: 100vh;
  }
}
@keyframes page-appear {
  0% {
    opacity: 0;
    transform: scale(0.5);
    transition: all 1s;
  }
  100% {
    opacity: 1;
    transforom: scale(1);
  }
}
</style>
