<script lang="ts">
	import type { PageData } from './$types';

	export let data: PageData;
	const { repos } = data;

	console.log(repos);
</script>
