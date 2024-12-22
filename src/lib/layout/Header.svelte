<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import { cn } from '$lib/utils';
	import { AlignJustify, XIcon } from 'lucide-svelte';
	import { fly } from 'svelte/transition';

	const menuItem = [
		{
			id: 1,
			label: 'Features',
			href: '#'
		},
		{
			id: 2,
			label: 'Pricing',
			href: '#'
		},
		{
			id: 3,
			label: 'Careers',
			href: '#'
		},
		{
			id: 4,
			label: 'Contact Us',
			href: '#'
		}
	];

	let hamburgerMenuIsOpen = false;

	function toggleOverflowHidden(node: HTMLElement) {
		node.addEventListener('click', () => {
			hamburgerMenuIsOpen = !hamburgerMenuIsOpen;
			const html = document.querySelector('html');
			if (html) {
				if (hamburgerMenuIsOpen) {
					html.classList.add('overflow-hidden');
				} else {
					html.classList.remove('overflow-hidden');
				}
			}
		});
	}

	let innerWidth: number = 0;
</script>

<svelte:window bind:innerWidth />

<header class="fixed left-0 top-0 z-50 w-full -translate-y-4 animate-fade-in border-b opacity-0 backdrop-blur-md">
	<!-- {#if innerWidth < 768} -->
		<div class="container flex h-14 items-center justify-between">
			<a class="text-md flex items-center" href="/"> 
				<img src="http://techterra.x10.mx/minecraft_title.png" class="h-5 w-auto" alt="migu logo"/>
			</a>

			<div class="ml-auto flex h-full items-center">
				<!-- <a class="mr-6 text-sm" href="/signin"> Log in </a> -->
				<Button variant="secondary" class="text-sm" href="https://github.com/DeltaV3/ZLauncher/releases/latest">Descargar</Button>
				<a href="https://discord.com/invite/vHCbvhzrj5" class="ml-4 group" target="_blank">
					<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' class="h-6 w-6 fill-current text-gray-500 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.8)] transition-all">
						<path d='M20.317 4.37a19.791 19.791 0 0 0-4.885-1.515.074.074 0 0 0-.079.037c-.21.375-.444.864-.608 1.25a18.27 18.27 0 0 0-5.487 0 12.64 12.64 0 0 0-.617-1.25.077.077 0 0 0-.079-.037A19.736 19.736 0 0 0 3.677 4.37a.07.07 0 0 0-.032.027C.533 9.046-.32 13.58.099 18.057a.082.082 0 0 0 .031.057 19.9 19.9 0 0 0 5.993 3.03.078.078 0 0 0 .084-.028c.462-.63.874-1.295 1.226-1.994a.076.076 0 0 0-.041-.106 13.107 13.107 0 0 1-1.872-.892.077.077 0 0 1-.008-.128 10.2 10.2 0 0 0 .372-.292.074.074 0 0 1 .077-.01c3.928 1.793 8.18 1.793 12.062 0a.074.074 0 0 1 .078.01c.12.098.246.198.373.292a.077.077 0 0 1-.006.127 12.299 12.299 0 0 1-1.873.892.077.077 0 0 0-.041.107c.36.698.772 1.362 1.225 1.993a.076.076 0 0 0 .084.028 19.839 19.839 0 0 0 6.002-3.03.077.077 0 0 0 .032-.054c.5-5.177-.838-9.674-3.549-13.66a.061.061 0 0 0-.031-.03zM8.02 15.33c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.956-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.956 2.418-2.157 2.418zm7.975 0c-1.183 0-2.157-1.085-2.157-2.419 0-1.333.955-2.419 2.157-2.419 1.21 0 2.176 1.096 2.157 2.42 0 1.333-.946 2.418-2.157 2.418Z'/>
					</svg>
				</a>
			</div>
			<!-- <button class="hidden" use:toggleOverflowHidden>
				<span class="sr-only">Toggle menu</span>
				{#if hamburgerMenuIsOpen}
					<XIcon  strokeWidth={1.4} class='text-gray-300'/>
				{:else}
					<AlignJustify strokeWidth={1.4} class='text-gray-300' />
				{/if}
			</button> -->
		</div>
	<!-- {/if} -->
</header>

<nav
	class={cn(
		`fixed left-0 top-0 z-50 h-screen w-full overflow-auto`,
		{
			'pointer-events-none': !hamburgerMenuIsOpen
		},
		{
			'bg-background/70 backdrop-blur-md': hamburgerMenuIsOpen
		}
	)}
>
	{#if hamburgerMenuIsOpen === true}
		<div class="container flex h-14 items-center justify-between">
			<a class="text-md flex items-center" href="/"> Svee UI </a>

			<button class="md:hidden" use:toggleOverflowHidden>
				<span class="sr-only">Toggle menu</span>
				{#if hamburgerMenuIsOpen}
					<XIcon strokeWidth={1.4} class='text-gray-300'/>
				{:else}
					<AlignJustify strokeWidth={1.4} class='text-gray-300'/>
				{/if}
			</button>
		</div>
		<ul
			in:fly={{ y: -30, duration: 400 }}
			class="flex flex-col uppercase ease-in md:flex-row md:items-center md:normal-case"
		>
			{#each menuItem as item, i}
				<li class="border-grey-dark border-b py-0.5 pl-6 md:border-none">
					<a
						class="hover:text-grey flex h-[var(--navigation-height)] w-full items-center text-xl transition-[color,transform] duration-300 md:translate-y-0 md:text-sm md:transition-colors {hamburgerMenuIsOpen
							? '[&_a]:translate-y-0'
							: ''}"
						href={item.href}
					>
						{item.label}
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</nav>
