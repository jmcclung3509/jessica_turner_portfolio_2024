<template>
         <section class="projects bg-default-dark pt-36" id="projects">
        <div class="inner container mx-auto space-y-7">
          <h2 class="text-2xl text-default-blue">Projects</h2>
          <div class="project-container">
            <Project
              imageSrc="/static/images/projects/sitezeus-homepage.png"
              title="SiteZeus"
              description="A complete redesign of the SiteZeus homepage, featuring a new color scheme, updated layout, and improved user experience."
              :projectButtons="['Vue', 'Nuxt', 'Tailwindcss']"
              demo="https://sitezeus.com"
            />
          </div>
        </div>
      </section>
</template>