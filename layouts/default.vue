<template>
  <Html lang="en">
    <Body :class="['page-' + route.name]">
      <Overlay></Overlay>
      <div
        class="relative flex flex-wrap"
        :class="{ 'mobile-menu-open': isMobileMenuOpen }"
      >
        <HeaderMain @mobileMenuClick="onMobileMenuClick" />

        <div class="wrap-inner w-full overflow-hidden relative">
          <SideNav />
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
});
const onMobileMenuClick = (payload) => {
  console.log(payload);
  data.mobileMenuOpen = payload;
};
const isMobileMenuOpen = computed(() => {
  return data.mobileMenuOpen && isMobile.value;
});
const showButtonClicked = () => {
  console.log("emitted");
  data.showBottom = true;
  console.log(data.showBottom);
};

onMounted(() => {
  setTimeout(() => {
    useAnimateObserver();
    useGoToAnchor();
  }, 100);
});
onUpdated(() => {
  setTimeout(() => {
    useAnimateObserver();
    useGoToAnchor();
  }, 100);
});
</script>
