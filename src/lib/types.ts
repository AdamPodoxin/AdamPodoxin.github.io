export type Repo = {
	name: string;
	description: string;
	tags: string[];
	homepage: string | null;
	repoUrl: string | null;
	paperUrl: string | null;
};

export type ManualRepo = {
	owner: string;
	repo: string;
	paperUrl: string | null;
	homepage: string | null;
	topics: string[];
}

export type Skill = {
	title: string;
	tools: string[];
};
