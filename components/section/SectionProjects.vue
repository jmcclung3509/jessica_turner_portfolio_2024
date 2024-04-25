<template>
         <section class="projects bg-default-dark py-36" id="projects">
        <div class="inner container mx-auto space-y-7">
          <h2 class="text-2xl text-default-light-purple">Projects</h2>
          <div class="project-container flex flex-col justify-center space-y-14">
            <Project
              imageSrc="/static/images/projects/sitezeus-homepage.png"
              title="SiteZeus"
              description="A complete redesign of the SiteZeus homepage, featuring a new color scheme, updated layout, and improved user experience."
              :tagArray="['Vue', 'Nuxt', 'Tailwindcss']"
              demo="https://sitezeus.com"
            />
            <Project  :reverse=true title="Insites Blog" :tagArray="['WordPress', 'PHP']" demo="https://insites.sitezeus.com" imageSrc="/static/images/projects/insites-homepage.png" description="Insites is the blog of SiteZeus"/>
          </div>
        </div>
      </section>
</template>