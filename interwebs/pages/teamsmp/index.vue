<template>
	<div class="m-6 mt-24" id="MAIN">
		<TitleBgBlur
			:bgimg="'/img/teamsmp/lobby-2-shaders.png'"
			:pagetype="''"
			:titlecolor="'green-500'"
			><b>Team SMP</b></TitleBgBlur
		>
		<p class="text-2xl">
			The Team SMP is a survival Minecraft server, run by XxDreamXxXx and
			JunglTemple.
		</p>
		<div class="bg-gray-800 my-3 p-5 rounded-lg max-w-2xl" id="ad">
			<h2
				class="my-1 font-title text-2xl bg-yellow-300 dark:bg-yellow-500 p-1 px-2 rounded-md inline-block"
			>
				<b>AD</b>
			</h2>
			<ContentDoc path="/teamsmp-ad" v-slot="{ doc }">
				<h3 class="text-xl mt-1">{{ doc.title }}</h3>
				<ContentRenderer :value="doc"></ContentRenderer>
			</ContentDoc>
		</div>
	</div>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `Team SMP` : "Team SMP";
	},
});
definePageMeta({
	layout: "teamsmp",
});
</script>
