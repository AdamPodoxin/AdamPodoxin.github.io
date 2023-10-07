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

	<section class="links">
		<a href="mailto:adam.podoxin@gmail.com" target="_blank" referrerpolicy="no-referrer">
			<Mail />
		</a>
		<a href="https://github.com/AdamPodoxin" target="_blank" referrerpolicy="no-referrer">
			<GitHub />
		</a>
	</section>
</header>

<main>
	<h3>Projects</h3>
	<section class="projects">
		{#each repos as repo}
			<Repo {repo} />
		{/each}
	</section>
</main>

<style>
	.title {
		margin: 32px;
	}

	.title > h1,
	.title > h4 {
		text-align: center;
		margin: 8px;
	}

	.title > h4 {
		color: var(--text-secondary);
	}

	.links {
		display: flex;
		justify-content: center;
		gap: 32px;
	}

	.projects {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}

	@media only screen and (min-width: 768px) {
		main {
			padding: 0 64px;
		}
	}

	@media only screen and (max-width: 767px) {
		main {
			padding: 0 8px;
		}

		.projects {
			flex-direction: column;
		}
	}
</style>
