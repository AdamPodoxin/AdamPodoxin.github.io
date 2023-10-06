import type { PageLoad } from './$types';
import { getPortolioRepos } from '$lib/api/reposApi';

export const load: PageLoad = async () => {
	const repos = await getPortolioRepos();
	return {
		repos
	};
};
