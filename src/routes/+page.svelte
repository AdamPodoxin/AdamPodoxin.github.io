<script lang="ts">
	import type { PageData } from './$types';

	import Repo from '$lib/components/Repo.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Mail from '$lib/icons/Mail.svelte';

	import '$lib/styles/global.css';

	export let data: PageData;
	const { repos } = data;

	console.log(repos);
</script>

<header>
	<section class="title">
		<h1>Adam Podoxin</h1>
		<h4>Versatile programmer and perpetual learner</h4>
	</section>

	<section class="icons">
		<a href="mailto:adam.podoxin@gmail.com" target="_blank" rel="noreferrer"><Mail /></a>
		<a href="https://github.com/AdamPodoxin" target="_blank" rel="noreferrer"><GitHub /></a>
	</section>
</header>

<section class="repos">
	{#each repos as repo}
		<Repo {repo} />
	{/each}
</section>

<style>
	.title {
		margin: 32px;
	}

	h1,
	h4 {
		text-align: center;
		margin: 8px;
	}

	.icons {
		display: flex;
		justify-content: center;
		gap: 32px;
	}
</style>
