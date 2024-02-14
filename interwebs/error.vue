<!-- eslint-disable vue/multi-word-component-names -->
<template>
	<div class="error-page m-10 mt-20">
		<span class="big text-9xl block">{{ error.message }}</span>
		<h1 class="text-3xl text-primary">
			{{
				statusCode === 404
					? "I think we're lost..."
						? 500
						: "Vite? Where are you?"
					: "Hmm... That doesn't sound right..."
			}}
		</h1>
		<p class="text-xl">You've just hit a {{ statusCode }} error.</p>
	</div>
</template>

<script>
export default {
	props: {
		error: Object,
	},
};
</script>
