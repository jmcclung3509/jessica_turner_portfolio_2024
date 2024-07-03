<template>
  <section class="section projects bg-default-dark  pt-24 space-y-28 pb-0 " id="projects">
    <div class="inner mx-auto w-full container space-y-14">
      <h2 class=" animate text-center lg:text-left text-4xl text-default-white">Projects</h2>
      <div
        class="project-container  flex flex-col md:flex-row md:flex-wrap justify-center items-center md:gap-14 space-y-14 md:space-y-0  mr-0 md:mr-7" 
      >

        <ProjectBox
          link="https://sitezeus.com"
          title="SiteZeus"
          description="
SiteZeus is a multipage responsive website built with Nuxt 3 and Tailwind CSS, featuring CSS animations and SEO optimization. It is consistently updated to reflect the latest trends and best practices. "
          slug="sitezeus"
          :tagArray="['Nuxt', 'Tailwindcss', 'CSS-Animations', 'SEO']"
        />
        <ProjectBox
          link="https://sitezeus.com/under-60-seconds"
          title="Under 60 seconds"
          description="The 'SiteZeus Under 60-Second' page is a dynamic video gallery on YouTube linked via its API, allowing users to filter and expand descriptions, and customize URLs for targeted video viewing."
          slug="under-60"
          :tagArray="['Nuxt', 'Tailwindcss', 'Rest-API']"
        />
        <ProjectBox
          link="https://insites.sitezeus.com/"
          title="Insites Blog"
          description="Strengthened SiteZeus' WordPress blog, Insites, by optimizing usability, executing robust SEO strategies, meticulously maintaining pages, and expanding content." 
          slug="insites"
          :tagArray="['WordPress', 'PHP', 'Vanilla-JS', 'Sass', 'SEO']"
        />
        <ProjectBox
        link="https://finance-tracker-eta-azure.vercel.app/"
          repo="https://github.com/jmcclung3509/finance-tracker"
          title="Finance Tracker"
          description="Full-stack finance tracker application helps users manage their financial data effectively and securely. " 
          slug="finance-tracker"
          :tagArray="['Nuxt 3', 'SupaBase', 'CRUD', 'Auth', 'RLS Security', 'Supabase Storage']"
        />
        <ProjectBox
          link="https://jessica-turner-portfolio-blog.vercel.app/"
          repo="https://github.com/jmcclung3509/jessica-turner-portfolio-blog"
          title="Blog"
          description="Markdown-powered blog and portfolio, styled with Tailwind CSS. Uses Nuxt's file-based routing to efficiently manage content and a dark/light mode selector." 
          slug="blog"
          :tagArray="['Nuxt', 'Tailwind', 'Markdown', 'Prose', 'Nuxt-content', 'Light/Dark Mode']"/>
        <ProjectBox
        link="https://quizzical-quiz-app.netlify.app/"
          repo="https://github.com/jmcclung3509/"
          title="Quizzical game"
          description="Quizzical is a comic-book trivia game utilizing an open-source API. Players answer five multiple-choice questions, check scores, and celebrate perfect scores with confetti." 
          slug="quizzical"
          :tagArray="['React', 'React-hooks', 'Figma', 'Rest-Api']"
        />
        <!-- <ProjectBox
        link="https://swampi-angular-app.vercel.app/home"
          repo="https://github.com/jmcclung3509/SWAMPI_angular_app"
          title="Star Wars Search"
          description="Angular application that fetched data from SWAPI API and displays the results." 
          slug="swampi"
          :tagArray="['Angular', 'CSS-Animation', 'Rest-Api']"
        /> -->
      </div>
   
    </div>
    <div class="repo  bg-default-dark-blue py-14">
        <div class="inner container-mx-auto flex justify-center items-center"> 
        <p class="text-default-white text-2xl text-center md:w-2/3 mx-auto"> For more projects checkout my <a class="animate-underline light-blue" href="https://github.com/jmcclung3509?tab=repositories">GitHub Repositories</a></p>
      </div></div>
  </section>
</template>
