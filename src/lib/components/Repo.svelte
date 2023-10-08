<script lang="ts">
	import GitHub from '$lib/icons/GitHub.svelte';
	import type { Repo } from '$lib/types';

	export let repo: Repo;
</script>

<div class="repo">
	<section class="content">
		<h5 class="name">
			{#if repo.homepage}
				<a href={repo.homepage} target="_blank" referrerpolicy="no-referrer">
					{repo.name}
				</a>
			{:else}
				{repo.name}
			{/if}

			{#if repo.repoUrl}
				<a href={repo.repoUrl} target="_blank" referrerpolicy="no-referrer"> <GitHub /></a>
			{/if}
		</h5>
		<p class="description">{repo.description}</p>
	</section>

	<section class="tags">
		{#each repo.tags as tag}
			<small class="tag">{tag}</small>
		{/each}
	</section>
</div>

<style>
	.repo {
		background-color: var(--secondary);
		border-radius: 16px;
		padding: 24px;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}

	.name {
		margin: 0;
		display: flex;
		justify-content: space-between;
		color: var(--text);
	}

	.name > a {
		color: var(--text);
	}

	.name > a:hover {
		color: var(--accent);
	}

	.description {
		color: var(--text-secondary);
	}

	.tags {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
	}

	.tag {
		background-color: var(--primary);
		color: white;
		padding: 4px 8px;
		border-radius: 12px;
	}

	@media only screen and (min-width: 768px) {
		.repo {
			width: 380px;
		}
	}
</style>
