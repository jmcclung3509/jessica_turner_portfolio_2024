<template>
  <div
    class="mobile-menu fixed flex flex-col flex-1 lg:hidden md:w-1/2 overflow-auto space-y-4" :class="{'mobile-menu-open': mobileMenuOpen}"
  >
    <ul class="space-y-4">
      <li class="relative p-2" @click="mobileMenuOpen = false">
        <nuxt-link href="#" data-go-to="about" :external=true class=" hover:text-default-dark-blue hover:font-normal"
          >About</nuxt-link
        >
      </li>

      <li class="relative p-2"  @click="mobileMenuOpen = false">
        <a href="#" data-go-to="projects" :external=true class=" hover:text-default-dark-blue hover:font-normal"
          >Projects</a
        >
      </li>
   
      <li class="relative p-2"  @click="mobileMenuOpen = false">
        <a href="#" data-go-to="contact" class=" hover:text-default-dark-blue hover:font-normal"
          >Contact</a
        >
      </li>   
      <li class="relative p-2"  @click="mobileMenuOpen = false">
        <nuxt-link to="/resume" target="_blank" class=" hover:text-default-dark-blue hover:font-normal"
          >Resume</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script setup>
const mobileMenuOpen = ref(true);



</script>
