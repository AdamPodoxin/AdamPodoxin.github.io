<script lang="ts">
	import Repo from '$lib/components/Repo.svelte';
	import '$lib/styles/global.css';

	import type { PageData } from './$types';

	export let data: PageData;
	const { repos } = data;

	console.log(repos);
</script>

<div class="repo">
	{#each repos as repo}
		<Repo {repo} />
	{/each}
</div>
