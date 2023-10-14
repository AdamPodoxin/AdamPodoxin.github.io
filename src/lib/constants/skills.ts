import type { Skill } from '$lib/types';

export const skills: Skill[] = [
	{ title: 'Languages', tools: ['C', 'C++', 'C#', 'Java', 'Python', 'Rust', 'Go', 'Dart'] },

	{
		title: 'Cloud Computing',
		tools: [
			'Node.js',
			'Express',
			'Flask',
			'FastAPI',
			'.NET',
			'Firebase',
			'Fly.io',
			'EC2',
			'ECS',
			'S3',
			'Lambda',
			'SQL',
			'MySQL',
			'PostgreSQL',
			'MongoDB',
			'PlanetScale',
			'Supabase'
		]
	},

	{
		title: 'Web Development',
		tools: [
			'HTML',
			'CSS',
			'JavaScript',
			'TypeScript',
			'React',
			'Next.js',
			'Svelte',
			'SvelteKit',
			'Vue.js',
			'Vite',
			'Vercel',
			'jQuery'
		]
	},

	{ title: 'Mobile Development', tools: ['Flutter', 'Android Studio', 'React Native'] },

	{
		title: 'Media',
		tools: ['Unity', 'Godot', 'Blender', 'Photoshop', 'Premiere Pro', 'After Effects', 'Audacity']
	},

	{ title: 'Microsoft Office', tools: ['Word', 'Powerpoint', 'Excel'] },

	{ title: 'Academic', tools: ['MATLAB', 'LaTex'] }
];
