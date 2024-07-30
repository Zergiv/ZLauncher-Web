<script lang="ts">
	import Footer from '$lib/layout/Footer.svelte';
	import Header from '$lib/layout/Header.svelte';
	import '../app.css';
	import { ModeWatcher } from 'mode-watcher';
	import Lenis from 'lenis'
	import { onMount } from 'svelte';

	onMount(() => {
		
		const lenis = new Lenis()
		
		// lenis.on('scroll', (e: string) => {
		// 	console.log(e)
		// })
		
		function raf(time: number) {
			lenis.raf(time)
			requestAnimationFrame(raf)
		}
		
		requestAnimationFrame(raf)
	})
</script>

<ModeWatcher defaultMode="dark" />

<div class="min-h-screen bg-background font-sans antialiased">
	<Header />
	<div class="mx-auto flex-1 overflow-hidden">
		<slot></slot>
	</div>
	<Footer />
</div>
