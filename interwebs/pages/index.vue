<template>
	<div class="m-6 mt-24" id="MAIN">
		<TitleBlock :titlecolor="'primary'">
			PROJECT <b>{INTERWEBS}</b>
		</TitleBlock>
		<p class="text-2xl">
			Open a <b class="text-primary">Point</b> using the button at the top of
			the screen!
		</p>
	</div>
</template>

<script setup lang="ts">
useHead({
	titleTemplate: (titleChunk) => {
		return titleChunk ? `${titleChunk} - Home` : "{INTERWEBS}";
	},
});
</script>
