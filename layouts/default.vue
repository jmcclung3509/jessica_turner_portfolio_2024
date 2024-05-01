<template>
  <Html lang="en">
    <Body :class="['page-' + route.name]">
 
      <transition name="fade-out" mode="out-in">
        <LoadSpinner v-if="data.showHideSpinner" />
      </transition>

      <div
        class="relative flex flex-wrap"
      
      >
        <div class="wrap-inner w-full overflow-hidden relative">
          <template v-if="!data.showHideSpinner"> <SideNav /></template>
          <slot />
        </div>
      </div>
      <HeaderMobileMenu
  
       
      ></HeaderMobileMenu>
    </Body>
  </Html>
</template>

<script setup>
const route = useRoute();

const { isMobile } = useScreenSize();

const data = reactive({

  showBottom: false,
  showHideSpinner: true,
});


const showButtonClicked = () => {
  data.showBottom = true;
};

onMounted(() => {
  setTimeout(() => {
    useAnimateObserver();
    useGoToAnchor();
  }, 100);

  setTimeout(() => {
    data.showHideSpinner = false;
  }, 700);
});
onUpdated(() => {
  setTimeout(() => {
    useAnimateObserver();
    useGoToAnchor();
  }, 100);
});
</script>
