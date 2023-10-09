<script lang="ts">
	import type { Skill } from '$lib/types';

	export let skill: Skill;
</script>

<div class="skill">
	<h5 class="title">{skill.title}</h5>
	<section class="tools">
		{#each skill.tools as tool}
			<span class="tool">{tool}</span>
		{/each}
	</section>
</div>

<style>
	.skill {
		background-color: var(--secondary);
		border-radius: 16px;
		padding: 24px;
	}

	.title {
		margin: 0;
	}

	.tools {
		display: flex;
		flex-wrap: wrap;
		gap: 8px;
		margin-block-start: 16px;
	}

	.tool {
		background-color: var(--primary);
		border: 1px solid var(--text-secondary);
		color: white;
		padding: 4px 8px;
		border-radius: 12px;
	}

	@media only screen and (min-width: 768px) {
		.skill {
			width: 230px;
		}
	}

	@media only screen and (max-width: 767px) {
		.skill {
			width: 100%;
		}
	}
</style>
