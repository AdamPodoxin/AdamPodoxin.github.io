export const processTopic = (str: string) => {
	switch (str) {
		case 'csharp':
			return 'C#';
		case 'html':
			return 'HTML';
		case 'css':
			return 'CSS';
		case 'javascript':
			return 'JavaScript';
		case 'typescript':
			return 'TypeScript';
		case 'nextjs':
			return 'Next.js';
		case 'nodejs':
			return 'Node.js';
		case 'discordjs':
			return 'Discord.js';
		case 'fly':
			return 'Fly.io';
		case 'sveltekit':
			return 'SvelteKit';
		default:
			return str
				.split('-')
				.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
				.join(' ');
	}
};

const topicsOrder = [
	'html',
	'css',
	'javascript',
	'typescript',
	'nodejs',
	'react',
	'nextjs',
	'vercel',
	'firebase',
	'supabase',
	'unity',
	'c#',
	'blender',
	'photoshop',
	'premiere-pro',
	'audacity',
	'flutter',
	'dart',
	'discordjs',
	'python',
	'flask'
] as const;
const topicsOrderMap = new Map<string, number>();
topicsOrder.forEach((topic, i) => topicsOrderMap.set(topic, i + 1));

const getTopicPriority = (topic: string) => topicsOrderMap.get(topic) || topicsOrder.length + 1;

export const sortTopics = (topic1: string, topic2: string) =>
	getTopicPriority(topic1) - getTopicPriority(topic2);
