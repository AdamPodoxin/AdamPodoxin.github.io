import type { Repo } from '$lib/types';

const reposOrder = [
	'Podoxin Four Website',
	'Night Mare',
	'Morphology Etymology Analyzer',
	'AdamPodoxin.github.io',
	'FASC'
] as const;
const reposOrderMap = new Map<string, number>();
reposOrder.forEach((repoName, i) => reposOrderMap.set(repoName, i + 1));

const getRepoPriority = (repoName: string) => reposOrderMap.get(repoName) || reposOrder.length + 1;

export const sortRepos = (repo1: Repo, repo2: Repo) =>
	getRepoPriority(repo1.name) - getRepoPriority(repo2.name);

export const processRepoName = (repoName: string) => repoName.split('-').join(' ');
