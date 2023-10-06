import { Octokit } from 'octokit';
import { processTopic, sortTopics } from '$lib/util/topicsUtil';

const octokit = new Octokit({
	auth: import.meta.env.VITE_GITHUB_API_KEY
});

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
					.sort(sortTopics)
					.map(processTopic) || [],
			homepage: repo.homepage!,
			repo: repo.private ? null : repo.html_url
		}));

	return repos;
};
