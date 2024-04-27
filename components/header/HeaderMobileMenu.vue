<template>
  <div
    class="mobile-menu fixed flex flex-col flex-1 lg:hidden md:w-1/2 overflow-auto space-y-4"
  >
    <ul class="space-y-4">
      <li class="relative p-2">
        <a href="#" data-go-to="about" class="animate-underline orange"
          >About</a
        >
      </li>

      <li class="relative p-2">
        <a href="#" data-go-to="projects" class="animate-underline orange"
          >Projects</a
        >
      </li>
      <li class="relative p-2">
        <nuxt-link to="/resume" target="_blank" class="animate-underline orange"
          >Resume</nuxt-link
        >
      </li>
      <li class="relative p-2">
        <a href="#" data-go-to="contact" class="animate-underline orange"
          >Contact</a
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
const emits = defineEmits("mobileMenuClick");
</script>
