import { request } from '@octokit/request';
import type { Repo } from '$lib/types';
import { processTopic, sortTopics } from '$lib/util/topicsUtil';
import { processRepoName, sortRepos } from '$lib/util/reposUtil';

export const getPortolioRepos = async () => {
	const repos: Repo[] = (
		await request('GET /user/repos', {
			headers: { authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}` },
			per_page: 100
		})
	).data
		.filter((repo) => repo.topics?.includes('for-portfolio'))
		.map((repo) => ({
			name: processRepoName(repo.name),
			description: repo.description!,
			tags: repo
				.topics!.filter((topic) => topic !== 'for-portfolio')
				.sort(sortTopics)
				.map(processTopic),
			homepage: repo.homepage!,
			repoUrl: repo.private ? null : repo.html_url
		}))
		.sort(sortRepos);

	return repos;
};
