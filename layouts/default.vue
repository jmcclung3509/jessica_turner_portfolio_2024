<template>
  <Html lang="en">
    <Body :class="['page-' + route.name]">
      <Overlay></Overlay>
      <transition name="fade-out" mode="out-in">
        <LoadSpinner v-if="data.showHideSpinner" />
      </transition>

      <div
        class="relative flex flex-wrap"
        :class="{ 'mobile-menu-open': isMobileMenuOpen }"
      >
        <HeaderMain @mobileMenuClick="onMobileMenuClick" />

        <div class="wrap-inner w-full overflow-hidden relative">
          <template v-if="!data.showHideSpinner"> <SideNav /></template>
          <slot />
        </div>
      </div>
      <HeaderMobileMenu
        @mobileMenuClick="onMobileMenuClick"
        :class="{
          'mobile-menu-open': isMobileMenuOpen,
        }"
      ></HeaderMobileMenu>
    </Body>
  </Html>
</template>

<script setup>
const route = useRoute();

const { isMobile } = useScreenSize();

const data = reactive({
  mobileMenuOpen: false,
  showBottom: false,
  showHideSpinner: true,
});
const onMobileMenuClick = (payload) => {
  console.log(payload);
  data.mobileMenuOpen = payload;
};
const isMobileMenuOpen = computed(() => {
  return data.mobileMenuOpen && isMobile.value;
});
const showButtonClicked = () => {
  data.showBottom = true;
};
onBeforeMount(() => {
  data.showHideSpinner = true;
});
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
