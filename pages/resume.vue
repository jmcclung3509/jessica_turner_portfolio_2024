<template>
  <NuxtLayout name="nonav">
    <div class="pt-20 pb-20">
      <div class="container mx-auto space-y-14">
        <div class="header space-y-2">
          <h1 class="text-default-blue text-3xl lg:text-4xl">Jessica Turner</h1>
          <h3 class="caps text-1.2xl lg:text-1.5xl text-default-dark">
            Frontend Developer
          </h3>
          <div class="links flex gap-4 justify-start">
            <nuxt-link
              class="caps font-normal hover:text-default-blue animate-underline blue project"
              to="/"
            >
              Portfolio
            </nuxt-link>
            <nuxt-link
              class="caps font-normal hover:text-default-blue animate-underline project blue"
              to="https://www.linkedin.com/in/jessica-turner-94b549229/"
            >
              Linkedin</nuxt-link
            >
            <nuxt-link
              class="caps font-normal hover:text-default-blue animate-underline project blue"
              to="https://github.com/jmcclung3509"
            >
              GitHub</nuxt-link
            >
          </div>
        </div>
        <div class="objective flex flex-col items-start space-y-4">
          <h2 class="text-2xl text-default-blue">Objective</h2>
          <p class="font-light text-default-dark w-full lg:w-2/3">
            Experienced Frontend Developer with expertise in advanced CSS,
            Vue.js, Nuxt.js, WordPress, and Node.js. With 3 years of
            professional experience, I have a proven track record of delivering
            high-quality web pages and applications. I am now seeking a
            challenging role in a dynamic company that offers opportunities for
            growth and skill development.
          </p>
        </div>
        <div class="skills flex flex-col items-start">
          <h2 class="text-2xl text-default-blue pb-7 lg:pb-0">Skills</h2>
          <div
            class="flex flex-col lg:flex-row items-start justify-start w-full space-y-7 lg:space-y-0"
          >
            <div
              class="inner flex justify-center flex-col space-y-4 lg:basis-1/3"
            >
              <h4 class="text-default-dark-purple text-1.2xl caps">
                Technologies & Languages
              </h4>
              <div class="skill-container grid grid-cols-2 gap-4">
                <div class="flex flex-col">
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Vue/Nuxt</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Typescript</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >WordPress</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >React</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >PHP</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Node.js</span
                  >
                </div>
                <div class="flex flex-col">
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Express.js</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >MongoDB</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >CSS/SCSS</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Tailwind CSS</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Supabase</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Rest APIs</span
                  >
                </div>
              </div>
            </div>

            <div
              class="inner flex flex-col justify-center  space-y-4 lg:basis-1/3"
            >
              <h4 class="text-default-dark-purple text-1.2xl caps " >
                Tools & More
              </h4>
              <div class="skill-container grid grid-cols-2 gap-4">
                <div class="flex flex-col">
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Gulp</span
                  >

                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Azure</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >SourceTree</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Git/GitHub</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >FTP Client</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Adobe Creative Suite</span
                  >
                </div>
                <div class="flex flex-col">
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Figma</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >HubSpot</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >SEO</span
                  >

                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Gulp</span
                  >
                  <span
                    class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                    >Webpack</span
                  >
                </div>
              </div>
            </div>

            <div
              class="inner flex justify-center flex-col space-y-4 lg:basis-1/3"
            >
              <h4 class="text-default-dark-purple text-1.2xl caps">
                Soft Skills
              </h4>
              <div class="skill-container  grid grid-cols-2">
                <div class="flex flex-col">
                <span
                  class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                  >Creative problem-solving</span
                >
                <span
                  class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                  >Innovative</span
                >
                <span
                  class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                  >Collaboration skills</span
                >
                <span
                  class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                  >Detail-oriented</span
                >
                </div>
                <div class="flex flex-col">
                <span
                  class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                  >Growth-mindset</span
                >
                <span
                  class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                  >Can-do attitude</span
                >
                <span
                  class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                  >Strong communication</span
                >
                <span
                  class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                  >Self-starter</span
                >
                </div>
              </div>
            </div>
          </div>
        </div>

        <div
          class="experience flex flex-col items-start space-y-7 w-full lg:w-1/2"
        >
          <h2 class="text-2xl text-default-blue">Experience</h2>
          <div class="flex flex-col space-y-2">
            <h4 class="caps text-default-dark-blue font-normal">
              SiteZeus | Junior Frontend Developer | September 2022- Present
            </h4>
            <ul class="resume space-y-4">
              <li class="text-default-dark font-light">
                Led the comprehensive UI overhaul of the
                <a href="https://sitezeus.com" target="_blank"
                  >SiteZeus website,</a
                >
                including the development of a new navigation menu, seamless
                integration of API data into a user-friendly interface, and the
                implementation of advanced CSS and animations for dynamic
                components using Nuxt.js and Tailwind CSS.
              </li>

              <li class="text-default-dark font-light">
                Implemented advanced SEO techniques and performance
                optimizations, achieving a SiteHealth score of 95%, reducing
                bounce rates by 12%, increasing session duration by 22%, and
                boosting organic search traffic by 15% within 6 months.
              </li>
              <li class="text-default-dark font-light">
                Create and maintain documentation for code, project
                architectures, and coding standards, facilitating seamless
                knowledge transfer for team members.
              </li>
              <li class="text-default-dark font-light">
                Troubleshoot and debug frontend issues efficiently, employing
                browser developer tools and industry best standards to maintain
                high-quality code.
              </li>
              <li class="text-default-dark font-light">
                Adapt quickly to new technologies and design patterns,
                contributing to the continuous improvement of development
                practices and overall project efficiency.
              </li>
              <li class="text-default-dark font-light">
                Collaborated with application development teams to implement new
                product designs and develop application features.
              </li>

              <li class="text-default-dark font-light">
                Partnered with the marketing team to develop engaging e-blasts,
                contribute to innovative marketing campaigns, and manage Google
                Analytics, Google Tag Manager, and HubSpot for data-driven
                decision-making.
              </li>
            </ul>
          </div>
          <div class="flex flex-col space-y-2">
            <h4 class="caps text-default-dark-blue font-normal">
              Freelance | Frontend Developer | January 2021- Present
            </h4>
            <ul class="resume space-y-4">
              <li class="text-default-dark font-light">
                Leveraged Vue, Nuxt, React, Node, MongoDB and Supabase to
                construct dynamic websites and applications, delivering seamless
                user experiences.
              </li>
              <li class="text-default-dark font-light">
                Create wireframes, prototypes, and mockups using Adobe
                Illustrator and Figma to visualize and test design concepts.
              </li>
              <li class="text-default-dark font-light">
                Apply meticulous attention to SEO best practices, continually
                enhancing SEO performance metrics.
              </li>
              <li class="text-default-dark font-light">
                Commit to continuous learning and staying updated with the
                latest technologies, actively acquiring new skills to deliver
                cutting-edge solutions.
              </li>
            </ul>
          </div>
          <div class="flex flex-col space-y-2">
            <h4 class="caps text-default-dark-blue font-normal">
              Nick's Restaurant | Head Server & Pastry Chef | October 2010-
              September 2022
            </h4>
          </div>
        </div>
        <div class="education flex flex-col items-start space-y-4">
          <h2 class="text-2xl text-default-blue">Education</h2>
          <div class="flex flex-col space-y-2">
            <h4 class="caps text-default-dark-blue font-normal">
              Emory University, Atlanta, GA
            </h4>
            <p class="text-default-dark font-light">
              Neuroscience, Doctoral Candidate, ABD
            </p>
          </div>
          <div class="flex flex-col space-y-2">
            <h4 class="caps text-default-dark-blue font-normal">
              California Polytechnic State University, San Luis Obispo, CA
            </h4>
            <p class="text-default-dark font-light">Psychology, BS</p>
          </div>
        </div>
      </div>
    </div>
  </NuxtLayout>
</template>

<script setup>
definePageMeta({
  layout: "nonav",
});
</script>

<style lang="scss">
@import "@/assets/scss/variables.scss";

body.page-resume {
  background-image: linear-gradient(
      to bottom,
      rgba($default-white, 0.75),
      rgba($default-white, 0.8)
    ),
    url("@/assets/images/home/resume-bg-2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
}
ul.resume {
  list-style: unset;
  li {
    margin-left: 20px;
  }
}
h3 {
  color: $default-blue;
}
h4 {
  font-family: "Roboto", serif;
  color: $default-light-purple;
}
</style>
