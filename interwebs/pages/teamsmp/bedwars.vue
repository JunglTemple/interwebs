<template>
	<div class="m-6 mt-24" id="MAIN">
		<TitleBlock :pagetype="'Team SMP'" :titlecolor="'green-500'"
			><b>BedWars</b></TitleBlock
		>
		<p class="text-2xl">
			The BedWars map was built by the Owner, XxDreamXxXx, to give the players
			on the Team SMP their first minigame.
		</p>
		<section class="mt-5">
			<h1 class="text-5xl font-title"><b>DESIGN</b></h1>
			<img
				src="https://imagedelivery.net/W9K_l6ndK9x4x8m3rurakg/76dde2ea-9743-49ad-213d-dafd4df77800/original"
				alt="A screenshot of the BedWars arena"
				class="max-w-2xl rounded-xl my-4"
			/>
			The BedWars map
		</section>
	</div>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk
			? `${titleChunk} - Team SMP: BedWars`
			: "Team SMP: BedWars";
	},
});
definePageMeta({
	layout: "teamsmp",
});
</script>
