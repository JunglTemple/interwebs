<template>
	<div id="title-block">
		<span class="text-cool block text-xl">{{ pagetype }}</span>
		<h1 class="font-title text-9xl mb-2" :class="'text-' + titlecolor">
			<slot></slot>
		</h1>
	</div>
</template>

<script>
export default {
	name: "TitleBlock",
	props: ["pagetype", "titlecolor"],
	data() {
		return {
			description: "A page header/title card",
		};
	},
	metaInfo() {
		return {
			title: this.title,
			meta: [
				{ vmid: "description", name: "description", content: this.description },
			],
		};
	},
};
</script>
