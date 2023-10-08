<script lang="ts">
	import type { Skill } from '$lib/types';

	export let skill: Skill;
</script>

<div class="skill">
	<h5 class="title">{skill.title}</h5>
	<ul class="toolsList">
		{#each skill.tools as tool}
			<li>{tool}</li>
		{/each}
	</ul>
</div>

<style>
	.skill {
		background-color: var(--secondary);
		border-radius: 16px;
		padding: 24px;
		min-width: 200px;
	}

	.title {
		margin: 0;
		display: flex;
		justify-content: space-between;
	}

	.toolsList {
		color: var(--text-secondary);
	}

	@media only screen and (max-width: 767px) {
		.skill {
			flex-grow: 1;
		}
	}
</style>
