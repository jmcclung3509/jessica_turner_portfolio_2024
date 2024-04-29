<template>


		<header
			class="main flex  h-20 bg-transparent absolute top-10" v-show="isMobile"

			:class="[
				{
					'sticky-header': isHeaderSticky,
					'mobile-menu-open': data.mobileMenuOpen,
				},
			]">
		
			

			

			
					<div
						class="mobile-nav-trigger ml-auto cursor-pointer fixed top-10 right-10"
						@click="
							(data.mobileMenuOpen = !data.mobileMenuOpen),
								$emit('mobileMenuClick', data.mobileMenuOpen)
						">
						<font-awesome-icon
							class="icon text-1.5xl"
							:class="
								data.mobileMenuOpen
									? 'text-default-white hover:text-default-dark-blue transition-all'
									: 'text-blue-text hover:text-default-white transition-all'
							"
							:icon="
								data.mobileMenuOpen
									? ['fas', 'x']
									: ['fas', 'bars']
							" />
					</div>
			
		
		</header>

</template>
<script setup>

const scrollPosition = useScroll().scrollPosition;
const scrollDirectionUp = useScroll().scrollDirectionUp;
const size = useScreenSize().size;

const {isLargeScreen} = useScreenSize();
const {isMobile} = useScreenSize();



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
