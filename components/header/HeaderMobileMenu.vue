<template>
  <div
    class="mobile-nav-trigger ml-auto cursor-pointer top-10 right-10 fixed z-[9999]"
    v-show="isMobile"
    @click="data.mobileMenuOpen = !data.mobileMenuOpen"
  >
    <font-awesome-icon
      class="icon text-1.5xl"
      :class="
        data.mobileMenuOpen
          ? 'text-default-white hover:text-default-dark-blue transition-all'
          : 'text-blue-text hover:text-default-white transition-all'
      "
      :icon="data.mobileMenuOpen ? ['fas', 'x'] : ['fas', 'bars']"
    />
  </div>
  <div
    class="mobile-menu fixed top-0 flex flex-col flex-1 lg:hidden md:w-1/2 overflow-auto space-y-7"
    :class="{ 'mobile-menu-open': data.mobileMenuOpen }"
  >
    <ul class="space-y-4 mr-10">
      <li class="relative p-2" @click="handleLinkClick">
        <nuxt-link
          href="#"
          data-go-to="about"
          :external="true"
          class="hover:text-default-dark-blue hover:font-normal"
          >About</nuxt-link
        >
      </li>

      <li class="relative p-2" @click="handleLinkClick">
        <a
          href="#"
          data-go-to="projects"
          :external="true"
          class="hover:text-default-dark-blue hover:font-normal"
          >Projects</a
        >
      </li>

      <li class="relative p-2" @click="handleLinkClick">
        <a
          href="#"
          data-go-to="contact"
          class="hover:text-default-dark-blue hover:font-normal"
          >Contact</a
        >
      </li>
      <li class="relative p-2" @click="handleLinkClick">
        <a
          href="https://jessica-turner-portfolio-blog.vercel.app/"
          target="_blank"
          class="hover:text-default-dark-blue hover:font-normal"
          >Blog</a
        >
      </li>
      
      <li class="relative p-2" @click="handleLinkClick">
        <nuxt-link
          to="/resume"
          target="_blank"
          class="hover:text-default-dark-blue hover:font-normal"
          >Resume</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
const { isMobile } = useScreenSize();

const data = reactive({
  mobileMenuOpen: false,
});

const handleLinkClick = () => {
  // Close the mobile menu
  data.mobileMenuOpen = false;
};
</script>
