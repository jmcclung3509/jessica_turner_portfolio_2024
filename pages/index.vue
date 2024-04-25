<template>
  <main class="relative">
    <section
      class="section fixed fold hero flex flex-col justify-center items-center h-[100vh]"
    >
      <div
        class="text-box relative flex justify-center text-contianer items-center flex-col space-y-7 mt-[-200px]"
      >
        <h3 class="text-6xl text-default-white font-bold text-center">Jessica Turner</h3>
        <h1 class="text-center text-3xl caps text-default-light-purple">
          Web Developer
        </h1>
      </div>

      <div
        class="show-button absolute bottom-10"
        @mouseover="hoverShowMore" @mouseleave="data.hoverEnabled ? hoverShowMore() : null"
        @click="showBottom()"
      >
        <img class="h-[40px]" src="@/assets/images/home/pointing-down.png" />
      </div>
      <Transition name="fade-in">
        <div
          class="absolute left-[53%] bottom-10"
          v-show="data.showMore === true"
        >
          <span class="text-default-white text-xs font-normal">Show More</span>
        </div>
      </Transition>
    </section>
    <div class="bottom-container" id="bottom-container" v-show="data.showMore">
      <SectionAbout />
      <SectionProjects />
    </div>
  </main>
</template>

<script setup>
const config = useRuntimeConfig();
const route = useRoute();
const size = useScreenSize().size;

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

const data = reactive({
  showMore: false,
  hoverEnabled: true,
});

const showBottom = () => {
	data.hoverEnabled = false;
  data.showMore = true;
  setTimeout(() => {
    scrollToBottom();
  }, 100);
};
console.log(data.showMore);
const scrollToBottom = () => {

  const bottomContainer = document.getElementById("bottom-container");
  bottomContainer.scrollIntoView({ behavior: "smooth" });
};
const hoverShowMore = ()=>{
	data.showMore = true;
	setTimeout(()=>{
		data.showMore = false;
	}, 1000)
	}




onMounted(() => {
  setTimeout(() => {
    useAnimateObserver();
    useGoToAnchor();
  }, 100);
});
</script>
