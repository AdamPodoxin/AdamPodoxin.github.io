import { Octokit } from 'octokit';

const octokit = new Octokit({
	auth: import.meta.env.VITE_GITHUB_API_KEY
});

const processTopic = (str: string) => {
	if (str === 'csharp') {
		return 'C#';
	}

	return str
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
};

export const getPortolioRepos = async () => {
	const repos = (
		await octokit.request('GET /user/repos', {
			per_page: 100
		})
	).data
		.filter((repo) => repo.topics?.includes('for-portfolio'))
		.map((repo) => ({
			name: repo.name,
			description: repo.description!,
			tags:
				repo.topics
					?.filter((topic) => topic !== 'for-portfolio')
					.map((topic) => processTopic(topic)) || [],
			homepage: repo.homepage!,
			repo: repo.private ? null : repo.html_url
		}));

	return repos;
};
