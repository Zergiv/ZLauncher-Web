<script>
	import { seo } from '$lib';
	import ClientSection from '$lib/components/landing/ClientSection.svelte';
	import CtaSection from '$lib/components/landing/CtaSection.svelte';
	import HeroSection from '$lib/components/landing/HeroSection.svelte';
	import PricingSection from '$lib/components/landing/PricingSection.svelte';
	import SphereMask from '$lib/components/magic/SphereMask/SphereMask.svelte';
	import DotPattern from '$lib/components/magic/DotPattern/DotPattern.svelte';
</script>

<svelte:head>
	<title>{seo.title}</title>
	<meta name="description" content={seo.description} />
	<meta name="keywords" content={seo.keywords} />

	<meta property="og:title" content={seo.title} />
	<meta property="og:type" content="website" />
	<meta property="og:description" content={seo.description} />
	<meta property="og:image" content={seo.image} />
	<meta property="og:site_name" content={seo.title} />
	<meta property="og:url" content={seo.url} />

	<meta name="twitter:card" content="summary_large_image" />
	<meta name="twitter:title" content={seo.title} />
	<meta name="twitter:description" content={seo.description} />
	<meta name="twitter:image" content={seo.image} />
	<meta name="twitter:site" content="@NoCrypt" />
</svelte:head>

<style>
	@keyframes float {
		0% {
			transform: translateY(0);
		}
		50% {
			transform: translateY(-10px);
		}
		100% {
			transform: translateY(0);
		}
	}

	.image {
		animation: float 3s ease-in-out infinite;
	}
	
	.h-32 {
    height: auto;
}
</style>

<DotPattern class="[mask-image:radial-gradient(650px_circle_at_center_50%,white,transparent)] opacity-65" />

<HeroSection />
<div class="flex w-auto items-center justify-center">
	<img 
		src="http://techterra.x10.mx/minecraft_title.png" 
		alt="migu logo" 
		class="image h-32 w-auto text-center" 
	/>
</div>
<!-- <ClientSection /> -->
<SphereMask />
<PricingSection />
<CtaSection />

