<template>
  <section class="projects bg-default-dark py-36" id="projects">
    <div class="inner container mx-auto space-y-14">
      <h2 class="text-4xl text-default-white">Projects</h2>
      <div class="project-container flex flex-col  justify-center items-center space-y-24">
        <Flipbox
          imageSrc="/static/images/projects/sitezeus-homepage.webp"
          slug="sitezeus"
          title="SiteZeus"
          description="I spearheaded a complete overhaul of the SiteZeus website, implementing a fresh color scheme, revamped layout, and enhanced user experience. This project marked a significant milestone in my career, showcasing my ownership and creative input. "
          :tagArray="['Nuxt', 'Tailwindcss', 'CSS animation']"
          demo="https://sitezeus.com"
        />
        <Flipbox
        title= "SiteZeus | Under 60 seconds"
        slug="under-60"
        :tagArray="['Nuxt', 'REST-API', 'Tailwindcss']"
        demo="https://sitezeus.com/under-60-seconds"
        imageSrc="/static/images/projects/under-60-seconds.webp"
        description="The 'SiteZeus Under 60-Second' page is a dynamic video gallery linked to YouTube via its API. Users can filter videos by categories and solutions, expand descriptions for details, and the page adjusts URLs based on selections. This allows team members to create custom links for targeted video viewing, meeting specific customer interests."
        />

        <Flipbox
    
          title="Insites Blog"
          slug="insites"
          :tagArray="['WordPress', 'PHP', 'Vanilla-JS', 'Sass']"
          demo="https://insites.sitezeus.com"
          imageSrc="/static/images/projects/insites-homepage.png"
          description="SiteZeus' blog, Insites, is constructed in WordPress using PHP, vanilla JavaScript, and Sass. My role encompasses enhancing WordPress features for improved usability, implementing SEO enhancements, and ensuring ongoing maintenance of pages yet to transition to Vue/Nuxt. Furthermore, I'm engaged in updating and expanding blog content, including creating webinar landing pages and blog posts."
        />
        <Flipbox   
          title="Nick's Restaurant"
          slug="nicks"
          :tagArray="['Nuxt', 'Tailwindcss']"
          demo="https://nicks-restaurant-pacifica.vercel.app/"
          repo="https://github.com/jmcclung3509/nicks-restaurant-pacifica"
          imageSrc="/static/images/projects/nicks-homepage.webp"
          description="Dynamic and responsive website for a locally-loved Restaurant in Pacifica, CA. The site features a menu, gallery, and contact form, with a clean, modern design and easy-to-navigate layout. "
        />
        <Flipbox

          slug="quizzical"
          title="Quizzical"
          :tagArray="['React', 'React-Hooks', 'Rest-API',]"
          demo="https://quizzical-quiz-app.netlify.app/"
          repo="https://github.com/jmcclung3509/quizzical_react_project_scrimba"
          imageSrc="/static/images/projects/quizzical-app.webp"
          description="Quizzical is a trivia game fetching data from an open-source API. Players get five comic-book trivia questions with multiple-choice answers, click to guess, and can check scores, with confetti for perfect scores."
        />
      </div>
    </div>
  </section>
</template>
