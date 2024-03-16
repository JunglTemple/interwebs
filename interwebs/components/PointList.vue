<script setup lang="ts">
const PointsMenuOpen = ref(false);
</script>

<template>
	<div>
		<UButton
			label="Points"
			icon="i-heroicons-cpu-chip-20-solid"
			size="md"
			@click="PointsMenuOpen = true"
		/>

		<USlideover v-model="PointsMenuOpen" side="left">
			<div class="p-4 flex-1">
				<span class="text-2xl m-2 mt-8 text-primary block">Points</span>
				<div class="grid grid-cols-3 gap-3 m-2">
					<!-- Home Button -->
					<UButton
						size="xl"
						variant="soft"
						to="/"
						@click="PointsMenuOpen = false"
						>Home</UButton
					>
					<!-- Team SMP page -->
					<UButton
						size="xl"
						variant="soft"
						to="/teamsmp"
						@click="PointsMenuOpen = false"
						>Team SMP</UButton
					>
					<!--
					<UButton
						size="xl"
						variant="soft"
						to="/onetime"
						@click="PointsMenuOpen = false"
						>OneTime</UButton
					>
					-->
				</div>
			</div>
		</USlideover>
	</div>
</template>
