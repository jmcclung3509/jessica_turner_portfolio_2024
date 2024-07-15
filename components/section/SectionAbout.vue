<template>

     <section class="section relative info about py-24 space-y-4 light animate" id="about">
        <div class="container mx-auto  flex flex-col items-center  lg:items-start space-y-14">
          <h2 class=" text-4xl text-default-blue">Experience & Skills</h2>
          <div class="menu flex justify-start gap-7 lg:gap-14 pb-7  ">
            <h3
              class="text-1.2xl font-normal text-default-blue hover:cursor-pointer"
              :class="{ active: data.selectedSection === 'about' }"
              @click="showSection('about')"
            >
              About
            </h3>
            <h3
              class="text-1.2xl font-normal text-default-blue hover:cursor-pointer"
              :class="{ active: data.selectedSection === 'skills' }"
              @click="showSection('skills')"
            >
              Skills
            </h3>
            <h3
              class="text-1.2xl font-normal text-default-blue hover:cursor-pointer" 
              :class="{ active: data.selectedSection === 'experience' }"
              @click="showSection('experience')"
            >
              Experience
            </h3>
          </div>
          <div class="contents animate">
            <transition :name="transitionDirection" mode="out-in">
              <div :key="data.selectedSection">
                <template v-if="data.selectedSection === 'about'">
                  <div
                    id="1"
                    class="  flex items-start flex-col lg:flex-row justify-center space-y-14 lg:space-y-0"
                  >
                    <div
                      class="flex flex-col w-full items-start space-y-7  max-w-[900px] "
                    >
                      <div class="content flex flex-col items-center justify-center lg:justify-start space-y-7 pb-7">
                        <p class="text-default-dark-purple font-light ">
                          Hey there! I'm Jessica Turner, a developer based in
                          North Georgia, and I absolutely love what I do. Lucky,
                          right!? I find immense satisfaction in the interplay
                          between analytical development and creative design,
                          blending technical knowledge with a strong design
                          sensibility to craft beautiful, dynamic, and
                          user-centric products.
                        </p>

                        <p class="text-default-dark-purple font-light">
                          With three years of frontend development experience, I've honed my skills in creating high-quality websites and applications. I relish tackling technical challenges with creative problem-solving and staying up-to-date with the latest web technologies. In my free time, you'll find me hanging out with my family, enjoying outdoor activities, watching WWE wrestling, or competing in a fierce game of cards. I am also an avid reader, baker, and novice gardener, always eager to learn and grow in all aspects of my life.
                        </p>
                      </div>
                      <div class="bullet-section">
                        <ul
                          class="flex flex-row flex-wrap items-start w-[110%] custom"
                        >
                          <li class="w-1/2 pb-14">
                            <h3 class="text-default-blue font-normal text-xs">
                              Experience
                            </h3>
                            <p
                              class="text-default-dark-purple ml-[40px] font-light"
                            >
                              3 years
                            </p>
                          </li>
                          <li class="pb-14">
                            <h3 class="text-default-blue font-normal text-xs">
                              Location
                            </h3>
                            <p
                              class="text-default-dark-purple ml-[40px] font-light"
                            >
                             Cumming, GA
                            </p>
                          </li>
                          <li class="w-1/2">
                            <h3 class="text-default-blue font-normal text-xs">
                              Hobbies
                            </h3>
                            <p
                              class="text-default-dark-purple ml-[40px] font-light"
                            >
                              Reading | Baking | Crafting | <br> Card games (Current fav: Exploding Kittens 🐱)
                            </p>
                          </li>
                        </ul>
                      </div>
                    </div>

                    <div class="hidden lg:block ml-[-20px] lg:ml-0">
                      
                    </div>
                  </div>
                </template>
                <template v-if="data.selectedSection === 'skills'">
                  <div
                    id="2"
                    class="flex flex-col w-full items-start space-y-7"
                  >
                    <div class="content space-y-7 max-w-[900px]">
                      <p class="text-default-dark-purple font-light text ">
                    
Over the last three years, I have evolved into a well-rounded developer. Proficient in JavaScript frameworks like Vue and Nuxt, and highly skilled with WordPress, I excel at transforming static designs into dynamic, interactive web experiences. My expertise as a CSS ninja allows me to create visually appealing and responsive interfaces. I am adept at version control, web bundling tools, and backend technologies such as Node.js, Supabase, and MongoDB. </p>

<p class="text-default-dark-purple font-light text pb-7">What truly sets me apart is my insatiable curiosity and drive for continuous improvement. I am constantly exploring new technologies and methodologies to expand my skill set and deliver innovative solutions. This relentless pursuit of knowledge ensures that I am always at the forefront of web development, ready to tackle any challenge with creativity and technical proficiency.
                      </p>
                    </div>
                    <div class="bullet-section">
                      <ul
                        class="flex items-start flex-col lg:flex-row flex-wrap  custom"
                      >
                        <li class="w-full lg:w-1/2 pb-14 pr-7">
                          <h3 class="text-default-blue font-normal text-xs">
                            html/css
                          </h3>
                          <p
                            class="text-default-dark-purple font-light ml-[40px] max-w-[350px]"
                          >
                            SCSS | Flex | Grid | Bootstrap | Tailwind | Nuxt UI
                            CSS/JS Animations
                          </p>
                        </li>
                        <li class="w-full lg:w-1/2 pb-14 pr-7">
                          <h3 class="text-default-blue font-normal text-xs">
                            design
                          </h3>
                          <p
                            class="text-default-dark-purple font-light ml-[40px] max-w-[350px]"
                          >
                            Wireframing | Prototyping | Adobe Creative Suite |
                            Figma
                          </p>
                        </li>
                        <li class="w-full lg:w-1/2 pb-14 pr-7">
                          <h3 class="text-default-blue font-normal text-xs">
                            Development
                          </h3>
                          <p
                            class="text-default-dark-purple font-light ml-[40px] max-w-[350px]"
                          >
                            JavaScript(ES6+) | Vue | Nuxt | WordPress |
                            Typescript | React | Node
                          </p>
                        </li>
                        <li class="w-full lg:w-1/2 pb-14 pr-7">
                          <h3 class="text-default-blue font-normal text-xs">
                            Tools
                          </h3>
                          <p
                            class="text-default-dark-purple font-light ml-[40px] max-w-[350px]"
                          >
                            Git/GitHub | Azure | Gulp | FTP Client | Webpack |
                            Postman | MongoDB | Supabase
                          </p>
                        </li>
                        <li class="w-full lg:w-1/2 pb-14 pr-7">
                          <h3 class="text-default-blue font-normal text-xs">
                            Soft skills
                          </h3>
                          <p
                            class="text-default-dark-purple font-light ml-[40px] max-w-[350px]"
                          >
                            Saas Industries | Startup | Creative Problem Solver | Growth-mindset | Can-do
                            Attitude | Written and Verbal Communication |  Ability to Work Independently and in a Team.
                           
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
                <template v-if="data.selectedSection === 'experience'">
                  <div
                    id="3"
                    class="flex flex-col w-full items-start space-y-7"
                  >
                    <div class="content space-y-7 max-w-[900px]">
                      <p class="text-default-dark-purple font-light pb-7">
                        My journey into development began in early 2021,
                        learning HTML, CSS, vanilla JavaScript, and React. As a
                        freelance developer, I embarked on various small
                        projects for friends and family, steadily building my
                        skills. In 2022, SiteZeus saw my potential and hired me,
                        despite my limited experience with Vue, Nuxt, or
                        WordPress. Swiftly, I adapted and became proficient in
                        crafting high-quality web pages using this tech stack.
                        I'm a quick learner, naturally inquisitive, and
                        fortunate to love what I do.
                      </p>
                    </div>
                    <div class="bullet-section">
                      <ul
                        class="flex items-start flex-row flex-wrap custom"
                      >
                        <li class="w-4/5 pb-14 space-y-1">
                          <h3 class="text-default-blue font-semibold text-xs">
                            SiteZeus
                          </h3>
                          <p class="text-default-blue font-light ml-[40px]">
                            Junior Frontend Developer, September 2022-Present
                          </p>
                          <p
                            class="text-default-dark-blue text-[.85rem] caps font-light ml-[40px]"
                          >
                            Vue | Nuxt | WordPress
                          </p>
                          <div class="flex flex-col space-y-4 pt-4 max-w-[900px]">
                            <p
                              class="text-default-dark-purple font-light text-xs ml-[40px]"
                            >
                             I spearheaded a comprehensive UI overhaul of the  <a class =" blue animate-underline"  href="https://sitezeus.com." target="_blank">SiteZeus website,</a> enhancing the user experience and modernizing the design. I am responsible for developing new features and maintaining existing ones, ensuring a seamless user experience. </p>
                                <p
                              class="text-default-dark-purple font-light ml-[40px] text-xs"
                            > I am also responsible for creating and maintaining the company's WordPress website,   <a class ="blue animate-underline"
                                href="https://insites.sitezeus.com/"
                                target="_blank"
                              >Insights, </a
                              > and have played a significant role in enhancing our SEO score and core web vitals, contributing to a 32% improvement in SiteHealth over the last 6 months.
                            </p>
                          </div>
                        </li>
                        <li class="w-4/5 pb-14 space-y-1">
                          <h3 class="text-default-blue font-semibold text-xs">
                            Freelance
                          </h3>
                          <p class="text-default-blue font-light ml-[40px]">
                            Frontend Developer, UI/UX Designer, April 2021 -
                            Present
                          </p>

                          <p
                            class="text-default-dark-blue text-[.85rem] caps font-light ml-[40px]"
                          >
                            React | Vue | Nuxt | Adobe Creative Suite | Figma |
                            Node
                          </p>
                          <p
                            class="text-default-dark-purple pt-4 ml-[40px] font-light text-xs"
                          >
                            Design, develop and maintain websites for various
                            clients.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </template>
              </div>
            </transition>
          </div>
        </div>
      </section>

</template>
<script setup>

const data = reactive({
  selectedSection: "about",
  previousSection: "about",

});

const sections = ["about", "skills", "experience"];

const showSection = (section) => {
  data.previousSection = data.selectedSection;
  data.selectedSection = section;
};

const transitionDirection = computed(() => {
  const currentIndex = sections.indexOf(data.selectedSection);
  const previousIndex = sections.indexOf(data.previousSection);

  const direction = currentIndex > previousIndex ? "slide-right" : "slide-left";

  return direction;
});
</script>