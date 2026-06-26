<script lang="ts">
	import Arxiv from '$lib/icons/Arxiv.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Link from '$lib/icons/Link.svelte';
	import type { Repo } from '$lib/types';

	export let repo: Repo;
</script>

<div class="repo">
	<section class="content">
		<h5 class="name">
			{#if repo.homepage}
				<a class="homepage" href={repo.homepage} target="_blank" referrerpolicy="no-referrer">
					{repo.name}
					<Link />
				</a>
			{:else}
				{repo.name}
			{/if}

			{#if repo.paperUrl}
				<a
					class="repo-link"
					href={repo.paperUrl}
					target="_blank"
					referrerpolicy="no-referrer"
					style="text-decoration: none;"
				>
					<Arxiv />
				</a>
			{/if}

			{#if repo.repoUrl}
				<a class="repo-link" href={repo.repoUrl} target="_blank" referrerpolicy="no-referrer">
					<GitHub />
				</a>
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
		align-items: start;
		gap: 12px;
		color: var(--text);
	}

	.name > a {
		color: var(--text);
	}

	.name > a.homepage {
		flex: 1;
		min-width: 0;
	}

	.name > a.homepage :global(svg) {
		display: inline-block;
		height: 1em;
		width: 1em;
		margin-left: 0.1em;
		vertical-align: -0.125em;
		fill: currentColor;
	}

	.name > a.repo-link {
		flex-shrink: 0;
		line-height: 0;
	}

	.name > a.repo-link :global(svg) {
		height: 24px;
		width: 24px;
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
			width: var(--tile-size);
		}
	}
</style>
