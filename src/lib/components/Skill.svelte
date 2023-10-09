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
	}

	.title {
		margin: 0;
	}

	.toolsList {
		color: var(--text-secondary);
		padding-inline-start: 20px;
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
