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
              class="caps  font-normal hover:text-default-blue  animate-underline blue project"
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
              class="caps font-normal hover:text-default-blue  animate-underline project blue"
              to="https://github.com/jmcclung3509"
            >
              GitHub</nuxt-link
            >
          </div>
        </div>
        <div class="objective flex flex-col items-start space-y-4">
          <h2 class="text-2xl text-default-blue">Objective</h2>
          <p class="font-light text-default-dark w-full lg:w-2/3">
            Experienced Frontend Developer specializing in Vue.js, Nuxt, and
            WordPress, with a proven track record of successfully delivering
            high-quality web pages and applications. Possessing over 2 years of
            professional experience, I am now seeking a challenging role within
            a dynamic company that offers room for growth and the opportunity to
            further develop my skills.
          </p>
        </div>
        <div class="skills flex flex-col items-start ">
            <h2 class="text-2xl text-default-blue pb-7 lg:pb-0">Skills</h2>
          <div class="flex flex-col lg:flex-row items-start justify-start w-full space-y-7 lg:space-y-0">
			<div class="inner flex justify-center flex-col  space-y-4 lg:basis-1/3">
            <h4 class=" text-default-dark-purple text-1.2xl caps">Technologies & Languages</h4>
            <div class="skill-container flex flex-col ">
              <span
                class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                >Vue/Nuxt</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >Typescript</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >WordPress</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >React</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >PHP</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >Node</span
              >

              <span
                class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                >Sass</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >Tailwind</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >Bootsrap</span
              >
			  <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >Rest APIs</span
              >
            </div>
          </div>
		
		
			<div class="inner flex justify-center flex-col  space-y-4 lg:basis-1/3 ">
            <h4 class=" text-default-dark-purple text-1.2xl caps">Tools & More</h4>
            <div class="skill-container flex flex-col w-full ">
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >Gulp</span
              >

              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >Azure</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
                >SourceTree</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >Git/GitHub</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >FTP Client</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >Adobe Creative Suite</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >Figma</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >HubSpot</span
              >
              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >SEO</span
              >

              <span
                class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
                >CSS Animation</span
              >
            </div>
			</div>
        
			<div class="inner flex justify-center flex-col  space-y-4 lg:basis-1/3 ">
          <h4 class=" text-default-dark-purple text-1.2xl caps">Soft Skills</h4>
          <div class="skill-container flex flex-col  w-full">
            <span
              class="mr-4 mb-4 text-default-dark font-light  text-xs-tight"
              >Creative problem solving</span
            >
            <span
              class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
              >Adaptable</span
            >
            <span
              class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
              >Efficient time-management</span
            >
            <span
              class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
              >Detail-oriented</span
            >
            <span
              class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
              >Growth mindset</span
            >
            <span
              class="mr-4 mb-4 text-default-dark font-light text-xs-tight"
              >Can-do attitude</span
            >
          </div>
		  </div>
		  </div>
		  </div>
     
        <div
          class="experience flex flex-col items-start space-y-7 w-full lg:w-1/2"
        >
		<h2 class="text-2xl text-default-blue ">Experience</h2>
          <div class="flex flex-col space-y-2">
            <h4 class="caps text-default-dark-blue font-normal">
              SiteZeus | Junior Frontend Developer | September 2022- Present
            </h4>
            <ul class="resume space-y-4">
              <li class="text-default-dark font-light">
                Successfully converted legacy WordPress pages to Vue/Nuxt
                <a href="https://sitezeus.com"> webpages </a>
                improving performance and enhancing user experience.
              </li>
              <li class="text-default-dark font-light">
                Maintained existing
                <a href="https://insites.sitezeus.com">WordPress </a>
                website while adding over 30+ new pages.
              </li>
              <li class="text-default-dark font-light">
                Optimize website performance by minimizing load times by 10%,
                resulting in improved user satisfaction and a 15% increase in
                SEO rankings.
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
            </ul>
          </div>
          <div class="flex flex-col space-y-2">
            <h4 class="caps text-default-dark-blue font-normal">
              Freelance | Frontend Developer | January 2021- Present
            </h4>
            <ul class="resume space-y-4">
              <li class="text-default-dark font-light">
                Create wireframes, prototypes, and mockups using Adobe
                Illustrator and Figma to visualize and test design concepts.
              </li>
              <li class="text-default-dark font-light">
                Leveraged Vue, Nuxt and React frontend frameworks to construct
                dynamic websites and applications.
              </li>

              <li class="text-default-dark font-light">
                Stay at the forefront of the web development industry by
                continuously adopting emerging technologies, libraries, and
                trends to enhance project quality and maintain competitiveness.
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

body.page-resume{
	background-image: linear-gradient(to bottom, rgba($default-white, .75), rgba($default-white, .80)), url('@/assets/images/home/resume-bg-2.jpg');
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
