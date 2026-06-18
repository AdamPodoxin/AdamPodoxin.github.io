const topicsFormattedMap = new Map<string, string>();
topicsFormattedMap.set('after-effects', 'After Effects');
topicsFormattedMap.set('android-studio', 'Android Studio');
topicsFormattedMap.set('api-gateway', 'API Gateway');
topicsFormattedMap.set('beautifulsoup', 'BeautifulSoup');
topicsFormattedMap.set('bert', 'BERT');
topicsFormattedMap.set('claude-code', 'Claude Code');
topicsFormattedMap.set('cloudwatch', 'CloudWatch');
topicsFormattedMap.set('coreferee', 'coreferee');
topicsFormattedMap.set('csharp', 'C#');
topicsFormattedMap.set('c#', 'C#');
topicsFormattedMap.set('css', 'CSS');
topicsFormattedMap.set('ddim', 'DDIM');
topicsFormattedMap.set('discordjs', 'Discord.js');
topicsFormattedMap.set('dotnet', '.NET');
topicsFormattedMap.set('dynamodb', 'DynamoDB');
topicsFormattedMap.set('ec2', 'EC2');
topicsFormattedMap.set('ecs', 'ECS');
topicsFormattedMap.set('fastapi', 'FastAPI');
topicsFormattedMap.set('fly', 'Fly.io');
topicsFormattedMap.set('github', 'GitHub');
topicsFormattedMap.set('github-api', 'GitHub API');
topicsFormattedMap.set('github-pages', 'GitHub Pages');
topicsFormattedMap.set('gitlab', 'GitLab');
topicsFormattedMap.set('html', 'HTML');
topicsFormattedMap.set('huggingface', 'Hugging Face');
topicsFormattedMap.set('javascript', 'JavaScript');
topicsFormattedMap.set('jquery', 'jQuery');
topicsFormattedMap.set('jupyter-notebooks', 'Jupyter Notebooks');
topicsFormattedMap.set('latex', 'LaTeX');
topicsFormattedMap.set('lora', 'LoRA');
topicsFormattedMap.set('matlab', 'MATLAB');
topicsFormattedMap.set('mongodb', 'MongoDB');
topicsFormattedMap.set('mysql', 'MySQL');
topicsFormattedMap.set('nextjs', 'Next.js');
topicsFormattedMap.set('nltk', 'NLTK');
topicsFormattedMap.set('nodejs', 'Node.js');
topicsFormattedMap.set('numpy', 'NumPy');
topicsFormattedMap.set('openrouter', 'OpenRouter');
topicsFormattedMap.set('pandas', 'pandas');
topicsFormattedMap.set('planetscale', 'PlanetScale');
topicsFormattedMap.set('postgresql', 'PostgreSQL');
topicsFormattedMap.set('powerpoint', 'PowerPoint');
topicsFormattedMap.set('psd-loss', 'PSD Loss');
topicsFormattedMap.set('pytorch', 'PyTorch');
topicsFormattedMap.set('qlora', 'QLoRA');
topicsFormattedMap.set('react-native', 'React Native');
topicsFormattedMap.set('scibert', 'SciBERT');
topicsFormattedMap.set('scikit-learn', 'Scikit-learn');
topicsFormattedMap.set('scirepeval', 'SciRepEval');
topicsFormattedMap.set('scipy', 'SciPy');
topicsFormattedMap.set('seaborn', 'seaborn');
topicsFormattedMap.set('sentence-transformers', 'SentenceTransformers');
topicsFormattedMap.set('sns', 'SNS');
topicsFormattedMap.set('spacy', 'spaCy');
topicsFormattedMap.set('sql', 'SQL');
topicsFormattedMap.set('sqs', 'SQS');
topicsFormattedMap.set('sveltekit', 'SvelteKit');
topicsFormattedMap.set('typescript', 'TypeScript');
topicsFormattedMap.set('unet', 'U-Net');
topicsFormattedMap.set('unsloth', 'unsloth');
topicsFormattedMap.set('vllm', 'vLLM');
topicsFormattedMap.set('vue', 'Vue.js');
topicsFormattedMap.set('vuejs', 'Vue.js');
topicsFormattedMap.set('vqvae', 'VQVAE');
topicsFormattedMap.set('ytseg', 'YTSeg');

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
	'vqvae',
	'sveltekit',
] as const;

const topicsOrderMap = new Map<string, number>();
topicsOrder.forEach((topic, i) => topicsOrderMap.set(topic, i + 1));

const getTopicPriority = (topic: string) => topicsOrderMap.get(topic) || topicsOrder.length + 1;

export const sortTopics = (topic1: string, topic2: string) =>
	getTopicPriority(topic1) - getTopicPriority(topic2);
