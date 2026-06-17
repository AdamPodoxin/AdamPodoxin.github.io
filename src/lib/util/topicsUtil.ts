const topicsFormattedMap = new Map<string, string>();
topicsFormattedMap.set('csharp', 'C#');
topicsFormattedMap.set('html', 'HTML');
topicsFormattedMap.set('css', 'CSS');
topicsFormattedMap.set('javascript', 'JavaScript');
topicsFormattedMap.set('typescript', 'TypeScript');
topicsFormattedMap.set('nextjs', 'Next.js');
topicsFormattedMap.set('nodejs', 'Node.js');
topicsFormattedMap.set('discordjs', 'Discord.js');
topicsFormattedMap.set('fly', 'Fly.io');
topicsFormattedMap.set('fastapi', 'FastAPI');
topicsFormattedMap.set('sveltekit', 'SvelteKit');
topicsFormattedMap.set('nltk', 'NLTK');
topicsFormattedMap.set('bert', 'BERT');
topicsFormattedMap.set('scibert', 'SciBERT');
topicsFormattedMap.set('scirepeval', 'SciRepEval');
topicsFormattedMap.set('huggingface', 'HuggingFace');
topicsFormattedMap.set('pytorch', 'PyTorch');
topicsFormattedMap.set('qlora', 'QLoRA');
topicsFormattedMap.set('lora', 'LoRA');
topicsFormattedMap.set('sentence-transformers', 'SentenceTransformers');
topicsFormattedMap.set('unsloth', 'unsloth');
topicsFormattedMap.set('vllm', 'vLLM');
topicsFormattedMap.set('ytseg', 'YTSeg');
topicsFormattedMap.set('ddim', 'DDIM');
topicsFormattedMap.set('psd-loss', 'PSD Loss');
topicsFormattedMap.set('unet', 'U-Net');
topicsFormattedMap.set('vqvae', 'VQVAE');

export const formatTopic = (topic: string) => {
	const topicFormatted = topicsFormattedMap.get(topic);

	if (topicFormatted) {
		return topicFormatted;
	}

	return topic
		.split('-')
		.map((word) => word.charAt(0).toUpperCase() + word.slice(1))
		.join(' ');
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
	'fastapi',
	'uvicorn',
	'vllm',
	'unsloth',
	'pytorch',
	'sentence-transformers',
	'huggingface',
	'qlora',
	'lora',
	'qwen3',
	'bert',
	'scibert',
	'unet',
	'vqvae'
] as const;

const topicsOrderMap = new Map<string, number>();
topicsOrder.forEach((topic, i) => topicsOrderMap.set(topic, i + 1));

const getTopicPriority = (topic: string) => topicsOrderMap.get(topic) || topicsOrder.length + 1;

export const sortTopics = (topic1: string, topic2: string) =>
	getTopicPriority(topic1) - getTopicPriority(topic2);
