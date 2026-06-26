const reposFormattedMap = new Map<string, string>();
reposFormattedMap.set('lait', 'LAIT - Literary AI Translation');
reposFormattedMap.set('fasc', 'FASC');
reposFormattedMap.set('llm-lora-chapterization', 'LLM LoRA Chapterization');
reposFormattedMap.set('layman-scientific-embeddings', 'LaySciSearch');

export const formatRepoName = (repoName: string) => {
	const repoFormatted = reposFormattedMap.get(repoName);

	if (repoFormatted) {
		return repoFormatted;
	}

	return repoName
		.split('-')
		.map((str) => str[0].toUpperCase() + str.slice(1))
		.join(' ');
};

const reposOrder = [
	'lait',
	'layman-scientific-embeddings',
	'llm-lora-chapterization',
	'political-sentiment-analysis-classification',
	'diffusion-weather-downscaling',
	'adampodoxin.github.io',
	'morphology-etymology-analyzer',
	'podoxin-four-website',
	'night-mare',
	'assignment-tracker',
	'spotify-playlist-stats',
	'carpool',
	'fall-hacks-2023',
	'fasc'
] as const;

const reposOrderMap = new Map<string, number>();
reposOrder.forEach((repoName, i) => reposOrderMap.set(repoName, i + 1));

const getRepoPriority = (repoName: string) => reposOrderMap.get(repoName) || reposOrder.length + 1;

export const sortRepos = (repoSlug1: string, repoSlug2: string) =>
	getRepoPriority(repoSlug1.toLowerCase()) - getRepoPriority(repoSlug2.toLowerCase());
