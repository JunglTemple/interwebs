<template>
	<div class="m-6 mt-24" id="MAIN">
		<TitleBlock :pagetype="'Point'" :titlecolor="'red-500'"
			><b>OneTime</b></TitleBlock
		>
		<p class="text-2xl">
			OneTime is a band featuring Oskar and Felix, who are songwriters and
			producers, aiming to make mostly Pop music.
		</p>
	</div>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - OneTime` : "OneTime";
	},
});
definePageMeta({
	layout: "onetime-links",
});
</script>
