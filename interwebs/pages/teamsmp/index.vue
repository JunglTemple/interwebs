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
		<div
			class="dark:bg-gray-800 bg-gray-200 my-3 p-5 rounded-xl max-w-2xl"
			id="ad"
		>
			<ContentDoc path="/teamsmp-ad" v-slot="{ doc }">
				<h3 class="text-3xl mt-1 mb-2">
					<span
						class="font-title text-white bg-yellow-300 dark:bg-yellow-500 text-2xl p-1 px-2 me-1 rounded-md"
					>
						<b>AD</b>
					</span>
					{{ doc.title }}
				</h3>
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
