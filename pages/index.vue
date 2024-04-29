<template>
  <main class="relative">
    <section id="hero"
      class="section relative fold hero flex flex-col justify-center items-center h-[100vh]"
    >
      <div
        class="text-box relative flex justify-center text-contianer items-center flex-col space-y-2 mt-[-200px]"
      >
        <h1 class="lg:text-[8rem] text-4xl  text-default-white text-center">
          Jessica Turner
        </h1>
        <h3 class="text-center text-2xl lg:text-3xl caps text-blue-text">
          Web Developer
        </h3>
      </div>

      <div
        class="jump-animation absolute bottom-10" v-show="handShowing"
     @click="scrollToBottom"
     
      >
        <img class="h-[60px]" src="@/assets/images/home/pointing-down.png" />
      </div>
    </section>
    <div class="bottom-container" id="bottom-container" >
      <SectionAbout />
      <SectionProjects />
      <SectionContact />
    </div>
  </main>
</template>

<script setup>
const { updateSections } = useSideNavBar();

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






const handShowing = ref(true)



const scrollToBottom = ()=>{
handShowing.value=false
 const bottomContainer = document.getElementById("bottom-container");

bottomContainer.scrollIntoView({ behavior: "smooth" });
    

}
 
	





onMounted(() => {
  setTimeout(() => {
    useAnimateObserver();
    useGoToAnchor();

  }, 100);
  window.addEventListener("scroll", updateSections);
  updateSections(); // Initial update
});

</script>
