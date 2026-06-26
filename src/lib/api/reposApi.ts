import { request } from '@octokit/request';
import type { Repo } from '$lib/types';
import { formatTopic, sortTopics } from '$lib/util/topicsUtil';
import { formatRepoName, sortRepos } from '$lib/util/reposUtil';
import { manualRepos } from '$lib/constants/manualRepos';

export const getPortolioRepos = async () => {
	const manualReposRaw = await Promise.all(
		manualRepos.map(async manualRepo => {
			const res = await request('GET /repos/{owner}/{repo}', {
				owner: manualRepo.owner,
				repo: manualRepo.repo,
				headers: { authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}` },
			});

			const data = res.data;

			return {
				...data,
				paperUrl: manualRepo.paperUrl,
				homepage: manualRepo.homepage,
				topics: manualRepo.topics,
			};
		})
	);

	const manualReposProcessed: Repo[] = manualReposRaw.map(repo => ({
		name: repo.name,
		description: repo.description!,
		tags: repo
		.topics!.filter((topic) => topic !== 'for-portfolio')
		.sort(sortTopics)
		.map(formatTopic),
		homepage: repo.homepage!,
		repoUrl: repo.private ? null : repo.html_url,
		paperUrl: repo.paperUrl,
	}))

	const userReposProcessed: Repo[] = (
		await request('GET /user/repos', {
			headers: { authorization: `token ${import.meta.env.VITE_GITHUB_API_KEY}` },
			per_page: 100
		})
	).data
	.filter((repo) => repo.topics?.includes('for-portfolio'))
	.map((repo) => ({
		name: repo.name,
		description: repo.description!,
		tags: repo
		.topics!.filter((topic) => topic !== 'for-portfolio')
		.sort(sortTopics)
		.map(formatTopic),
		homepage: repo.homepage!,
		repoUrl: repo.private ? null : repo.html_url,
		paperUrl: null,
	}));

	const allRepos = 
		userReposProcessed.concat(manualReposProcessed)
		.sort((repo1, repo2) => sortRepos(repo1.name, repo2.name))
		.map(repo => ({
			...repo,
			name: formatRepoName(repo.name),
		}));
	
	// const allRepos = userRepos + await getManualRepos();
	return allRepos;
};
