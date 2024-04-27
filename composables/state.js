export const globalState = reactive({
	overlay: {
		showing: false,
		clickToClose: true
	}

})

export const useScroll = () => {
	const scrollPosition = ref(0);
	const lastScrollPosition = ref(0);
	const scrollDirectionUp = ref(false);
	return { scrollPosition, scrollDirectionUp};
};


export const useScreenSize = () => {
	let windowWidth = ref(0)
	let isMobile = ref(false)

	let size = ref(null)

	const handleResize = () => {
		windowWidth.value = window.innerWidth
		if (windowWidth.value >= 1024) {
			isMobile.value = false
		} else {
			isMobile.value = true
		}

		switch (true) {
			case windowWidth.value >= 1600:
				size.value = "3xl"
				break
			case windowWidth.value >= 1400:
				size.value = "xxl"
				break
			case windowWidth.value >= 1280:
				size.value = "xl"
				break
			case windowWidth.value >= 1024:
				size.value = "lg"
				break
			case windowWidth.value >= 768:
				size.value = "md"
				break
			case windowWidth.value < 641:
				size.value = "sm"
				break
			default:
				size.value = "default"
		}
	}
	onMounted(() => {
		window.addEventListener("resize", handleResize)
		handleResize()
	})
	return { size, isMobile }
}

//useAnimateObserver

export const useAnimateObserver = () => {
	const animatedEls = document.querySelectorAll('.animate');
	const animatedBtn = document.querySelector(".animated-btn")
	const contactSection = document.querySelector(".contact")

	const options = {
		threshold: 0.3
	};
	let observer = new IntersectionObserver((entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				entry.target.classList.add("animated");

				setTimeout(() => {
					observer.unobserve(entry.target);
				}, 1000); //
				if (entry.target === contactSection) {
					animatedBtn?.classList.add("slide-in-bounce")

				}
			}
		});
	}, options);
	animatedEls.forEach((el) => observer.observe(el));


};

export const useGoToAnchor = () => {
	document.querySelectorAll("a[data-go-to]").forEach((anchor) => {
		anchor.addEventListener("click", function (e) {
			e.preventDefault()
			document.getElementById(this.getAttribute("data-go-to")).scrollIntoView({
				behavior: "smooth",
				block: "center",
			})
		})
	})
}

export const useOverlay = () => {
	const on = () => {
		globalState.overlay.showing = true
	}
	const off = () => {
		globalState.overlay.showing = false
	}
	return { on, off }
}


//Dropdown transition

export default function useDropdownTransition(element) {
	const isDropdownOpen = ref(false)

	const onBeforeEnter = () => {
		element.style.opacity = 0
		element.style.transformOrigin = "center top"
	}

	const onEnter = (el, done) => {
		element.style.transition = "opacity 0.3s, transform 0.3s"
		element.style.opacity = 1
		element.style.transform = "scaleY(1)"
		element.addEventListener("transitioned", done)
	}

	const onAfterEnter = () => {
		element.style.transform = ""
	}
	const onBeforeLeave = () => {
		element.style.transformOrigin = "center top"
	}
	const onLeave = (el, done) => {
		element.style.transition = "opacity 0.3s, transform 0.3s";
		element.style.opacity = 0;
		element.style.transform = "scaleY(0)";
		element.addEventListener("transitioned", done);
	};


	const onAfterLeave = () => {
		element.style.display = "none"
		element.style.value = false
	}
	return {
		isDropdownOpen,
		onBeforeEnter,
		onEnter,
		onAfterEnter,
		onBeforeLeave,
		onLeave,
		onAfterLeave,
	}
}


