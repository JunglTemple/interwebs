<script setup lang="ts">
const PagesMenuOpen = ref(false);
</script>

<template>
	<div>
		<UButton
			label="Pages"
			icon="i-heroicons-cpu-chip-20-solid"
			size="md"
			@click="PagesMenuOpen = true"
		/>

		<USlideover v-model="PagesMenuOpen" side="left">
			<div class="p-4 flex-1">
				<span class="text-2xl m-2 mt-8 text-primary block">Team SMP Pages</span>
				<div class="grid grid-cols-3 gap-3 m-2">
					<!-- Home Button -->
					<UButton
						size="xl"
						variant="soft"
						to="/teamsmp"
						@click="PagesMenuOpen = false"
						>Home</UButton
					>
					<!-- Team SMP page -->
					<UButton
						size="xl"
						variant="soft"
						to="/teamsmp/bedwars"
						@click="PagesMenuOpen = false"
						>BedWars</UButton
					>
				</div>
			</div>
		</USlideover>
	</div>
</template>
