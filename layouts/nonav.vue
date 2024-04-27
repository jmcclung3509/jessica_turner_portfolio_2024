<template>
	<div>
		<Html lang="en">
			<Body :class="`page-${route.name}`">

				<div class="wrap flex flex-wrap">
					<div class="wrap-inner w-full overflow-hidden">
					<slot></slot>
					</div>
				</div>
			</Body>
		</Html>
	</div>

</template>
<script setup>
const route=useRoute()


</script>