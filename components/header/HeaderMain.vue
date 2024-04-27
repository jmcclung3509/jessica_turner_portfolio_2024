<template>


		<header
			class="main flex fixed top-0 h-20" 

			:class="[
				{
					'sticky-header': isHeaderSticky,
					'mobile-menu-open': data.mobileMenuOpen,
				},
			]">
			<div
				class="container flex justify-between items-center  mx-auto" >
				<div
					class="left flex items-center justify-center gap-2 lg:gap-4">
					<template v-if="isMobile">
						<Nuxt-Link
						to="/"
						>
						<img  class="h-[50px] font-sacramento" src="@/assets/images/logos/JT-logo-purple.svg" alt="Jessica Turner logo"/>
					</Nuxt-Link>
					</template>

				</div>

				<template v-if="!['sm', 'md'].includes(size)">
					<div class=" left flex justify-between container">
						<Nuxt-Link
						to="/"
						class="text-default-light-purple text-2xl font-light font-sacramento hover:text-default-dark-purple">
						Jessica Turner
					</Nuxt-Link>
					<nav
						class="middle main flex justify-centeritems-center pt-2">
						<ul class="flex z-10 items-center gap-4 ">
							<li class="relative p-2">
								<a
									href="#"
									data-go-to="about"
									class="animate-underline text-default-white font-light "
									>About</a
								>
							</li>

							<li class="relative p-2">
								<a
								href="#"
									data-go-to="projects"
									class="animate-underline text-default-white font-light "
									>Projects</a
								>
							</li>
							<li class="relative p-2">
								<nuxt-link
									to="/resume"
									class="animate-underline text-default-white font-light "
									target="_blank"
									>Resume</nuxt-link
								>
							</li>

							<li class="relative p-2">
								<a
								href="#"
									data-go-to="contact"
									class="animate-underline text-default-white font-light "
									>Contact</a
								>
							</li>
						</ul>
					</nav>
				
					</div>
				</template>

				<template v-else>
					<div
						class="mobile-nav-trigger ml-auto cursor-pointer fixed  right-10"
						@click="
							(data.mobileMenuOpen = !data.mobileMenuOpen),
								$emit('mobileMenuClick', data.mobileMenuOpen)
						">
						<font-awesome-icon
							class="icon text-1.5xl"
							:class="
								data.mobileMenuOpen
									? 'text-light-peach hover:text-orange transition-all'
									: 'text-dark-purple hover:text-orange transition-all'
							"
							:icon="
								data.mobileMenuOpen
									? ['fas', 'x']
									: ['fas', 'bars']
							" />
					</div>
				</template>
			</div>
		</header>

</template>
<script setup>

const scrollPosition = useScroll().scrollPosition;
const scrollDirectionUp = useScroll().scrollDirectionUp;
const size = useScreenSize().size;
const isMobile =useScreenSize().isMobile


const emits = defineEmits('mobileMenuClick');

const data = reactive({
	mobileMenuOpen: false,
});

const isHeaderSticky = computed(() => {
	if (scrollDirectionUp.value && scrollPosition.value != 0) {
		return true;
	}
	return false;
});



</script>
