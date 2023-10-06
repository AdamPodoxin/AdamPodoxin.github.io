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
	'react',
	'nextjs',
	'vercel',
	'unity',
	'c#',
	'blender',
	'photoshop',
	'premiere-pro',
	'audacity'
];

const topicsOrderMap = new Map<string, number>();
for (let i = 0; i < topicsOrder.length; i++) {
	topicsOrderMap.set(topicsOrder[i], i);
}

const getTopicPriority = (topic: string) => topicsOrderMap.get(topic) || -1;

export const sortTopics = (topic1: string, topic2: string) =>
	getTopicPriority(topic1) - getTopicPriority(topic2);
