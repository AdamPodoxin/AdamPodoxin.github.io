<script lang="ts">
	import type { PageData } from './$types';

	import { skills } from '$lib/constants/skills';
	import Repo from '$lib/components/Repo.svelte';
	import Skill from '$lib/components/Skill.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Mail from '$lib/icons/Mail.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';

	import headshot from '../assets/Headshot_Cropped.jpg';

	import '$lib/styles/global.css';
	// import '$lib/styles/colors-green.css';
	import '$lib/styles/colors-blue.css';

	export let data: PageData;
	const { repos } = data;
</script>

<header>
	<div class="profile">
		<img class="headshot" src={headshot} alt="Adam Podoxin" />

		<div class="profile-info">
			<h1 class="name">Adam Podoxin</h1>

			<section class="links">
				<a href="mailto:adam.podoxin@gmail.com" target="_blank" referrerpolicy="no-referrer">
					<Mail />
				</a>

				<a href="https://github.com/AdamPodoxin" target="_blank" referrerpolicy="no-referrer">
					<GitHub />
				</a>

				<a
					href="https://www.linkedin.com/in/adam-podoxin"
					target="_blank"
					referrerpolicy="no-referrer"
				>
					<LinkedIn />
				</a>
			</section>
		</div>
	</div>
</header>

<main>
	<section>
		<h3>Projects</h3>
		<section class="projects">
			{#each repos as repo}
				<Repo {repo} />
			{/each}
		</section>
	</section>

	<section>
		<h3>Skills</h3>
		<section class="skills">
			{#each skills as skill}
				<Skill {skill} />
			{/each}
		</section>
	</section>
</main>

<style>
	header {
		display: flex;
		justify-content: center;
	}

	.profile {
		--headshot-size: 160px;
		display: flex;
		align-items: center;
		gap: 28px;
		margin: 32px;
	}

	.headshot {
		width: var(--headshot-size);
		height: var(--headshot-size);
		border-radius: 50%;
		object-fit: cover;
		flex-shrink: 0;
	}

	.profile-info {
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 32px;
		height: var(--headshot-size);
	}

	.name {
		margin: 0;
		line-height: 1.1;
		font-family: 'Domine';
		font-weight: 500;
	}

	.links {
		display: flex;
		gap: 32px;
	}

	.projects,
	.skills {
		display: flex;
		flex-wrap: wrap;
		gap: 16px;
	}

	main > section {
		margin: 64px 0;
	}

	@media only screen and (min-width: 768px) {
		main {
			padding: 0 64px;
		}

		.skills {
			flex-direction: row;
		}
	}

	@media only screen and (max-width: 767px) {
		main {
			padding: 0 8px;
		}

		.profile {
			--headshot-size: 120px;
			margin: 32px 8px;
			gap: 20px;
		}

		.name {
			font-size: 2rem;
		}

		.projects {
			flex-direction: column;
		}
	}
</style>
