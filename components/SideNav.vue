<template>
  <div
    v-if="!isMobile"
    class="h-[100vh] nav-container hide flex flex-col justify-center z-50 items-end fixed right-0 bg-transparent px-7"
  >
    <template v-for="(navItem, index) in navItems" :key="index">
      <a
        v-if="navItem.hashtag === true"
        @mouseover="openText(navItem.slug)"
        @mouseleave="data.hoveredItem = null"
        href="#"
        :data-go-to="navItem.goTo"
        class="relative w-[40px] pointer-cursor nav-item flex flex-row gap-2 text-default-blue items-center justify-center py-7"
        :class="navItem.slug"
      >
        <transition name="fade-in">
          <p
            class="hidden-part absolute right-14"
            v-show="navItem.slug === data.hoveredItem"
          >
            {{ navItem.text }}
          </p>
        </transition>

        <div class="visible-part hover:bg-$transparent"></div>
      </a>
      <a
        v-else
        @mouseover="openText(navItem.slug)"
        @mouseleave="data.hoveredItem = null"
        :href="navItem.goTo"
        class="relative w-[40px] pointer-cursor nav-item flex flex-row gap-2 text-default-blue items-center justify-center py-7"
        :class="navItem.slug"
      >
        <transition name="fade-in">
          <p
            class="hidden-part absolute right-14"
            v-show="navItem.slug === data.hoveredItem"
          >
            {{ navItem.text }}
          </p>
        </transition>

        <div class="visible-part hover:bg-$transparent"></div>
      </a>
    </template>
  </div>
</template>

<script setup>
const { isLargeScreen } = useScreenSize();
const { isMobile } = useScreenSize();
const data = reactive({
  hoveredItem: null,
});

const openText = (navItem) => {
  data.hoveredItem = navItem;
  console.log(data.hoveredItem, navItem);
};

const navItems = [
  {
    slug: "hero",
    goTo: "hero",
    text: "Home",
    hashtag: true,
  },
  {
    slug: "about",
    goTo: "about",
    text: "About",
    hashtag: true,
  },
  {
    slug: "projects",
    goTo: "projects",
    text: "Projects",
    hashtag: true,
  },
  {
    slug: "contact",
    goTo: "contact",
    text: "Contact",
    hashtag: true,
  },
  {
    slug: "resume",
    goTo: "/resume",
    text: "Resume",
    hashtag: false,
  },
];
</script>

<style scoped lang="scss">
@import "@/assets/scss/variables.scss";

.visible-part {
  height: 10px;
  width: 10px;

  background: $blue-text;
  border-radius: 100%;
  &:hover {
    background: $default-blue;
  }
}
.nav-item {
  &.active {
    .visible-part {
      background: $default-blue;
    }
  }
}
</style>
