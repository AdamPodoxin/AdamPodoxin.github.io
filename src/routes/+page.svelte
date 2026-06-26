<script lang="ts">
	import type { PageData } from './$types';

	import { skills } from '$lib/constants/skills';
	import Repo from '$lib/components/Repo.svelte';
	import Skill from '$lib/components/Skill.svelte';
	import GitHub from '$lib/icons/GitHub.svelte';
	import Mail from '$lib/icons/Mail.svelte';
	import LinkedIn from '$lib/icons/LinkedIn.svelte';
	import XTwitter from '$lib/icons/X-twitter.svelte';
	import GoogleScholar from '$lib/icons/GoogleScholar.svelte';
	import BlueSky from '$lib/icons/BlueSky.svelte';

	import headshot from '../assets/Headshot_Cropped.jpg';

	import '$lib/styles/global.css';
	// import '$lib/styles/colors-green.css';
	import '$lib/styles/colors-blue.css';

	export let data: PageData;
	const { repos } = data;

	const siteUrl = 'https://adampodoxin.github.io';
	const imageUrl = `${siteUrl}/headshot.jpg`;
	const description =
		"Adam Podoxin's online portfolio" +
		' | 🎓 CS + LING @ SFU' +
		' | 📝 NLP & Computational Linguistics researcher' +
		' | 💻 Full-stack and cloud developer';

	const sameAs = [
		'https://github.com/AdamPodoxin',
		'https://www.linkedin.com/in/adam-podoxin',
		'https://scholar.google.ca/citations?user=6niqKecAAAAJ&hl=en',
		'https://x.com/adampodoxin',
		'https://bsky.app/profile/adampodoxin.bsky.social'
	];

	const jsonLd = {
		'@context': 'https://schema.org',
		'@type': 'Person',
		name: 'Adam Podoxin',
		url: siteUrl,
		image: imageUrl,
		jobTitle: 'Computer Science Researcher & Software Developer',
		email: 'mailto:adam.podoxin@gmail.com',
		sameAs
	};
</script>

<svelte:head>
	<meta name="google-site-verification" content="bjXzIEzqiNSIJnruOfdbAV-g6vrJU8j4gdqt-wnodUg" />

	<title>Adam Podoxin</title>
	<meta name="description" content={description} />
	<meta name="author" content="Adam Podoxin" />
	<meta
		name="keywords"
		content="Adam Podoxin, software developer, researcher, portfolio, projects, NLP, computational linguistics, web development"
	/>
	<link rel="canonical" href={`${siteUrl}/`} />

	<meta property="og:type" content="profile" />
	<meta property="og:title" content="Adam Podoxin" />
	<meta property="og:description" content={description} />
	<meta property="og:url" content={`${siteUrl}/`} />
	<meta property="og:image" content={imageUrl} />
	<meta property="og:image:alt" content="Adam Podoxin" />
	<meta property="og:site_name" content="Adam Podoxin" />
	<meta property="profile:first_name" content="Adam" />
	<meta property="profile:last_name" content="Podoxin" />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content="Adam Podoxin" />
	<meta name="twitter:description" content={description} />
	<meta name="twitter:image" content={imageUrl} />
	<meta name="twitter:creator" content="@adampodoxin" />

	<!-- eslint-disable-next-line svelte/no-at-html-tags -- JSON-LD is built from static, developer-controlled data only -->
	{@html `<script type="application/ld+json">${JSON.stringify(jsonLd)}</${'script'}>`}
</svelte:head>

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
					href="https://scholar.google.ca/citations?user=6niqKecAAAAJ&hl=en"
					target="_blank"
					referrerpolicy="no-referrer"
					style="margin-left: -4px; margin-top: -2px"
				>
					<GoogleScholar />
				</a>

				<a
					href="https://www.linkedin.com/in/adam-podoxin"
					target="_blank"
					referrerpolicy="no-referrer"
				>
					<LinkedIn />
				</a>

				<a
					href="https://x.com/adampodoxin"
					target="_blank"
					referrerpolicy="no-referrer"
					style="margin-left: -4px; margin-top: -4px"
				>
					<XTwitter />
				</a>

				<a
					href="https://bsky.app/profile/adampodoxin.bsky.social"
					target="_blank"
					referrerpolicy="no-referrer"
					style="margin-left: -4px"
				>
					<BlueSky />
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
		row-gap: 4px;
		column-gap: 32px;
		flex-wrap: wrap;
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

		.profile-info {
			gap: 8px;
		}

		.links {
			column-gap: 16px;
		}

		.projects {
			flex-direction: column;
		}
	}
</style>
