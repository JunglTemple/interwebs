<template>
	<div
		id="title-block"
		class="p-5 mb-3 rounded-3xl bg-center bg-cover"
		:class="'bg-[url(\'' + bgimg + '\')]'"
	>
		<span class="text-cool m-1 block text-xl">{{ pagetype }}</span>
		<h1
			class="font-title text-9xl drop-shadow-lg backdrop-blur-sm rounded-3xl backdrop-brightness-75 px-3"
			:class="'text-' + titlecolor"
		>
			<slot></slot>
		</h1>
	</div>
</template>

<script>
export default {
	name: "title-card",
	props: ["bgimg", "pagetype", "titlecolor"],
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
