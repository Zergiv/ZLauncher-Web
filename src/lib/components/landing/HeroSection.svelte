<script lang="ts">
	import { ArrowRightIcon } from 'lucide-svelte';
	import AnimatedShinyText from '$lib/components/magic/AnimatedShinyText/AnimatedShinyText.svelte';
	import BorderBeam from '$lib/components/magic/borderbeam/BorderBeam.svelte';
	import Button from '$lib/components/ui/button/button.svelte';
	import type { ObserverEventDetails } from 'svelte-inview';
	import { inview } from 'svelte-inview';
	import DotPattern from '$lib/components/magic/DotPattern/DotPattern.svelte';
	import AnimatedGradientText from '../magic/AnimatedGradientText/AnimatedGradientText.svelte';
	import { cn } from '$lib/utils';

	// import HeroLightImg from '$lib/imgs/hero-light.png';
	let inView = false;
	const handleChange = ({ detail }: CustomEvent<ObserverEventDetails>) => {
		// console.log(detail);
		inView = detail.inView;
	};
</script>

<section id="hero" class="relative mx-auto mt-32 max-w-7xl px-6 text-center md:px-8">
	<div class="-10 flex items-center justify-center"></div>
	<h1
		class="-translate-y-4 animate-fade-in text-balance bg-gradient-to-br from-black from-30% to-black/40 bg-clip-text py-6 text-5xl font-medium leading-none tracking-tighter text-transparent opacity-0 [--animation-delay:200ms] dark:from-white dark:to-white/40 sm:text-6xl md:text-7xl lg:text-8xl"
	>
		ZLauncher: La nueva era
		<br class="hidden md:block" />
		{' '}
		del Minecraft con mods.
	</h1>
	<p
		class="mb-12 -translate-y-4 animate-fade-in text-balance text-lg tracking-tight text-gray-400 opacity-0 [--animation-delay:400ms] md:text-xl"
	>
		Instala Minecraft, Java, Forge y los mods del servidor con facilidad.
		<br class="hidden md:block" />
		{' '}
		Mantente siempre actualizado sin problemas manuales.
	</p>
	<Button
		class="-translate-y-4 animate-fade-in gap-1 rounded-lg text-white opacity-0 ease-in-out [--animation-delay:800ms] dark:text-black"
		href="https://github.com/DeltaV3/ZLauncher/releases/latest"
	>
		<span>Descargar Ahora</span>
		<ArrowRightIcon
			class="ml-1 size-4 transition-transform duration-300 ease-in-out group-hover:translate-x-1"
		/>
	</Button>

	<p
		class="md:text-md mt-8 -translate-y-4 animate-fade-in text-balance text-sm tracking-tight text-gray-400 opacity-0 [--animation-delay:600ms]"
	>
		Disponible en:
		<br class="hidden md:block" />
		{' '}
	</p>
	<div
		class="md:text-md mt-4 flex -translate-y-4 animate-fade-in justify-center gap-4 text-balance text-sm tracking-tight text-gray-400 opacity-0 [--animation-delay:600ms]"
	>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M0 0h11.377v11.372H0Zm12.623 0H24v11.372H12.623ZM0 12.623h11.377V24H0Zm12.623 0H24V24H12.623"
			/></svg
		>
		<svg
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			preserveAspectRatio="xMidYMid meet"
			><path
				d="M12 24C5.373 24 0 18.627 0 12S5.373 0 12 0s12 5.373 12 12-5.373 12-12 12zm-6.485-8.51c0 2.079 1.602 3.591 3.6 3.591 1.989 0 3.636-1.539 3.636-3.618 0-2.061-1.611-3.609-3.609-3.609a3.607 3.607 0 0 0-3.627 3.636zm1.161-.027c0-1.431 1.071-2.583 2.457-2.583 1.377 0 2.457 1.152 2.457 2.583 0 1.431-1.08 2.592-2.457 2.592-1.386 0-2.457-1.161-2.457-2.592zm8.932 3.618c1.558 0 2.44-1.035 2.44-2.061 0-1.044-.666-1.791-1.926-2.043l-.892-.171c-.566-.117-.89-.54-.89-.936 0-.54.53-1.026 1.215-1.026.747 0 1.224.558 1.35 1.062l1.025-.324c-.143-.765-.8-1.728-2.393-1.728-1.27 0-2.332.954-2.332 2.115 0 .918.63 1.683 1.791 1.917l.864.18c.595.126 1.044.45 1.044 1.026 0 .594-.576.99-1.277.99-.847 0-1.405-.531-1.558-1.35L13 17.02c.098.999.962 2.061 2.61 2.061zM7.464 7.9V10h.826V7.914c0-.567.308-.945.826-.945.574 0 .798.392.798.924V10h.833V7.69c0-.847-.413-1.512-1.358-1.512-.574 0-.938.21-1.302.616-.21-.378-.581-.616-1.155-.616-.294 0-.756.112-1.113.588v-.504h-.812V10h.833V7.921c0-.567.308-.952.819-.952.574 0 .805.406.805.931zm7.308 2.1V7.62c0-.252-.035-.469-.126-.672-.245-.539-.77-.763-1.4-.763-.273 0-.539.049-.756.147-.518.224-.805.7-.84 1.015l.756.168c.063-.357.364-.616.819-.616.49 0 .735.273.735.567 0 .182-.098.315-.35.315h-.462c-.651 0-1.554.273-1.554 1.141v.042c0 .644.532 1.099 1.26 1.099.35 0 .826-.119 1.099-.574V10h.819zm-.819-1.512c0 .56-.364.91-.931.91-.35 0-.595-.203-.595-.511 0-.35.406-.518.721-.518h.805v.119zm3.591 1.575c1.015 0 1.596-.651 1.764-1.225l-.763-.245c-.112.287-.343.714-.987.714-.637 0-1.106-.497-1.106-1.197 0-.707.49-1.169 1.099-1.169.623 0 .896.406.98.7l.756-.252c-.161-.63-.805-1.204-1.729-1.204-1.113 0-1.96.875-1.96 1.939 0 1.099.847 1.939 1.946 1.939z"
				fill="currentColor"
				fill-rule="evenodd"
			></path></svg
		>
		<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
			><path
				fill="currentColor"
				d="M12.504 0q-.232 0-.48.021c-4.226.333-3.105 4.807-3.17 6.298c-.076 1.092-.3 1.953-1.05 3.02c-.885 1.051-2.127 2.75-2.716 4.521c-.278.832-.41 1.684-.287 2.489a.4.4 0 0 0-.11.135c-.26.268-.45.6-.663.839c-.199.199-.485.267-.797.4c-.313.136-.658.269-.864.68c-.09.189-.136.394-.132.602c0 .199.027.4.055.536c.058.399.116.728.04.97c-.249.68-.28 1.145-.106 1.484c.174.334.535.47.94.601c.81.2 1.91.135 2.774.6c.926.466 1.866.67 2.616.47c.526-.116.97-.464 1.208-.946c.587-.003 1.23-.269 2.26-.334c.699-.058 1.574.267 2.577.2c.025.134.063.198.114.333l.003.003c.391.778 1.113 1.132 1.884 1.071s1.592-.536 2.257-1.306c.631-.765 1.683-1.084 2.378-1.503c.348-.199.629-.469.649-.853c.023-.4-.2-.811-.714-1.376v-.097l-.003-.003c-.17-.2-.25-.535-.338-.926c-.085-.401-.182-.786-.492-1.046h-.003c-.059-.054-.123-.067-.188-.135a.36.36 0 0 0-.19-.064c.431-1.278.264-2.55-.173-3.694c-.533-1.41-1.465-2.638-2.175-3.483c-.796-1.005-1.576-1.957-1.56-3.368c.026-2.152.236-6.133-3.544-6.139m.529 3.405h.013c.213 0 .396.062.584.198c.19.135.33.332.438.533c.105.259.158.459.166.724c0-.02.006-.04.006-.06v.105l-.004-.021l-.004-.024a1.8 1.8 0 0 1-.15.706a.95.95 0 0 1-.213.335a1 1 0 0 0-.088-.042c-.104-.045-.198-.064-.284-.133a1.3 1.3 0 0 0-.22-.066c.05-.06.146-.133.183-.198q.08-.193.088-.402v-.02a1.2 1.2 0 0 0-.061-.4c-.045-.134-.101-.2-.183-.333c-.084-.066-.167-.132-.267-.132h-.016c-.093 0-.176.03-.262.132a.8.8 0 0 0-.205.334a1.2 1.2 0 0 0-.09.4v.019q.002.134.02.267c-.193-.067-.438-.135-.607-.202a2 2 0 0 1-.018-.2v-.02a1.8 1.8 0 0 1 .15-.768a1.08 1.08 0 0 1 .43-.533a1 1 0 0 1 .594-.2zm-2.962.059h.036c.142 0 .27.048.399.135c.146.129.264.288.344.465c.09.199.14.4.153.667v.004c.007.134.006.2-.002.266v.08c-.03.007-.056.018-.083.024c-.152.055-.274.135-.393.2q.018-.136.003-.267v-.015c-.012-.133-.04-.2-.082-.333a.6.6 0 0 0-.166-.267a.25.25 0 0 0-.183-.064h-.021c-.071.006-.13.04-.186.132a.55.55 0 0 0-.12.27a1 1 0 0 0-.023.33v.015c.012.135.037.2.08.334c.046.134.098.2.166.268q.014.014.034.024c-.07.057-.117.07-.176.136a.3.3 0 0 1-.131.068a2.6 2.6 0 0 1-.275-.402a1.8 1.8 0 0 1-.155-.667a1.8 1.8 0 0 1 .08-.668a1.4 1.4 0 0 1 .283-.535c.128-.133.26-.2.418-.2m1.37 1.706c.332 0 .733.065 1.216.399c.293.2.523.269 1.052.468h.003c.255.136.405.266.478.399v-.131a.57.57 0 0 1 .016.47c-.123.31-.516.643-1.063.842v.002c-.268.135-.501.333-.775.465c-.276.135-.588.292-1.012.267a1.1 1.1 0 0 1-.448-.067a4 4 0 0 1-.322-.198c-.195-.135-.363-.332-.612-.465v-.005h-.005c-.4-.246-.616-.512-.686-.71q-.104-.403.193-.6c.224-.135.38-.271.483-.336c.104-.074.143-.102.176-.131h.002v-.003c.169-.202.436-.47.839-.601c.139-.036.294-.065.466-.065zm2.8 2.142c.358 1.417 1.196 3.475 1.735 4.473c.286.534.855 1.659 1.102 3.024c.156-.005.33.018.513.064c.646-1.671-.546-3.467-1.089-3.966c-.22-.2-.232-.335-.123-.335c.59.534 1.365 1.572 1.646 2.757c.13.535.16 1.104.021 1.67c.067.028.135.06.205.067c1.032.534 1.413.938 1.23 1.537v-.043c-.06-.003-.12 0-.18 0h-.016c.151-.467-.182-.825-1.065-1.224c-.915-.4-1.646-.336-1.77.465c-.008.043-.013.066-.018.135c-.068.023-.139.053-.209.064c-.43.268-.662.669-.793 1.187c-.13.533-.17 1.156-.205 1.869v.003c-.02.334-.17.838-.319 1.35c-1.5 1.072-3.58 1.538-5.348.334a2.7 2.7 0 0 0-.402-.533a1.5 1.5 0 0 0-.275-.333c.182 0 .338-.03.465-.067a.62.62 0 0 0 .314-.334c.108-.267 0-.697-.345-1.163s-.931-.995-1.788-1.521c-.63-.4-.986-.87-1.15-1.396c-.165-.534-.143-1.085-.015-1.645c.245-1.07.873-2.11 1.274-2.763c.107-.065.037.135-.408.974c-.396.751-1.14 2.497-.122 3.854a8.1 8.1 0 0 1 .647-2.876c.564-1.278 1.743-3.504 1.836-5.268c.048.036.217.135.289.202c.218.133.38.333.59.465c.21.201.477.335.876.335q.058.005.11.006c.412 0 .73-.134.997-.268c.29-.134.52-.334.74-.4h.005c.467-.135.835-.402 1.044-.7zm2.185 8.958c.037.6.343 1.245.882 1.377c.588.134 1.434-.333 1.791-.765l.211-.01c.315-.007.577.01.847.268l.003.003c.208.199.305.53.391.876c.085.4.154.78.409 1.066c.486.527.645.906.636 1.14l.003-.007v.018l-.003-.012c-.015.262-.185.396-.498.595c-.63.401-1.746.712-2.457 1.57c-.618.737-1.37 1.14-2.036 1.191c-.664.053-1.237-.2-1.574-.898l-.005-.003c-.21-.4-.12-1.025.056-1.69c.176-.668.428-1.344.463-1.897c.037-.714.076-1.335.195-1.814c.12-.465.308-.797.641-.984l.045-.022zm-10.814.049h.01q.08 0 .157.014c.376.055.706.333 1.023.752l.91 1.664l.003.003c.243.533.754 1.064 1.189 1.637c.434.598.77 1.131.729 1.57v.006c-.057.744-.48 1.148-1.125 1.294c-.645.135-1.52.002-2.395-.464c-.968-.536-2.118-.469-2.857-.602q-.553-.1-.723-.4c-.11-.2-.113-.602.123-1.23v-.004l.002-.003c.117-.334.03-.752-.027-1.118c-.055-.401-.083-.71.043-.94c.16-.334.396-.4.69-.533c.294-.135.64-.202.915-.47h.002v-.002c.256-.268.445-.601.668-.838c.19-.201.38-.336.663-.336m7.159-9.074c-.435.201-.945.535-1.488.535c-.542 0-.97-.267-1.28-.466c-.154-.134-.28-.268-.373-.335c-.164-.134-.144-.333-.074-.333c.109.016.129.134.199.2c.096.066.215.2.36.333c.292.2.68.467 1.167.467c.485 0 1.053-.267 1.398-.466c.195-.135.445-.334.648-.467c.156-.136.149-.267.279-.267c.128.016.034.134-.147.332a8 8 0 0 1-.69.468zm-1.082-1.583V5.64c-.006-.02.013-.042.029-.05c.074-.043.18-.027.26.004c.063 0 .16.067.15.135c-.006.049-.085.066-.135.066c-.055 0-.092-.043-.141-.068c-.052-.018-.146-.008-.163-.065m-.551 0c-.02.058-.113.049-.166.066c-.047.025-.086.068-.14.068c-.05 0-.13-.02-.136-.068c-.01-.066.088-.133.15-.133c.08-.031.184-.047.259-.005c.019.009.036.03.03.05v.02h.003z"
			/></svg
		>
	</div>
	
	<div class="image-grid grid">
		<div class="grid-block">
			<div class="tile">
				<a class="tile-link" href="/">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="tile-img tile-img1"
						src="https://techterra.x10.mx/PANTALLA3.png"
						alt="Image"
					/>
				</a>
			</div>
		</div>

		<div class="grid-block">
			<div class="tile">
				<a class="tile-link" href="/">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="tile-img tile-img2"
						src="https://techterra.x10.mx/zweb5.png"
						alt="Image"
					/>
				</a>
			</div>
		</div>

		<div class="grid-block">
			<div class="tile">
				<a class="tile-link" href="/">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="tile-img tile-img3"
						src="https://lh3.googleusercontent.com/pw/ACtC-3dhqk2CMZiOyFNPfjfffFIRIp1r9XjSNhfWHXk3gHDNf0hGwwWtXlQbtTf7DBp9t_KnCVull_WGpXNDVRtLkslw1qskUAjbSMEilFituKSeJVKqzVbsTFOeLfvd92nowevb7EGG3Pno37_WfsShZnYP=w1384-h791-no"
						alt="Image"
					/>
				</a>
			</div>
		</div>

		<div class="grid-block">
			<div class="tile">
				<a class="tile-link" href="/">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="tile-img tile-img4"
						src="https://lh3.googleusercontent.com/pw/ACtC-3eYKEnL-pUFhF9aCKHKKRNrWEyJJ-7SCD8-EJLpBkVKp6jIHEKvBGiOL0hPW5f6UAcyoxaR06XRDUayk0NaQMxpSWCjnNyqdypHsIzrPfSwQZmOBR4-i3VCc0Ywg9CUmFYv2vs-rbmEmio2-4ZUuokZ=w1384-h791-no"
						alt="Image"
					/>
				</a>
			</div>
		</div>

		<div class="grid-block">
			<div class="tile">
				<a class="tile-link" href="/">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="tile-img tile-img5"
						src="https://lh3.googleusercontent.com/pw/ACtC-3ckl0QrFbuW3W6VJ88rW0TeCZYumT9H7ZzN1dW6nrxOcf6mxEYT79iai43_T8i9AbiViFkpJBqVtS6d7loh-IgUwviFhdnkg1U-BNgeBPvstSBHCqWokHbx3EIHTkZFh3QkaTykBxZH7BqYvni2ukTL=w1384-h791-no"
						alt="Image"
					/>
				</a>
			</div>
		</div>
		<div class="grid-block">
			<div class="tile">
				<a class="tile-link" href="/">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="tile-img tile-img6"
						src="https://lh3.googleusercontent.com/pw/ACtC-3csXE_23DqssKWd76nUGNa5re7em4ySmZEif2L_jxJBpIV0pV3qHYXQope682nX2Qs04nhMHVZlNNwbUGzz6CWjaywX5VaH5TX2Wrh0iocAk5aRrN2ud7H55mGYdR-z-QEyK5ckiZ4BGZLiSpXe-TmD=w1384-h791-no"
						alt="Image"
					/>
				</a>
			</div>
		</div>

		<div class="grid-block">
			<div class="tile">
				<a class="tile-link" href="/">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="tile-img tile-img7"
						src="https://lh3.googleusercontent.com/pw/ACtC-3fbpkwsUjaB8Cv6JFW_Z5E_7WjTwR3hEfafXoDmSsxBN_I_TKHLw3ngMCcOhYVv0KrzdJpjBfRzmTPVUikRZpyy53lb10ENbvWxrP-Hf83Y1KXc2RG0zLXoXqQjaT7NP9bBKEY7iv2I8sRIUJxCU9ql=w1703-h973-no"
						alt="Image"
					/>
				</a>
			</div>
		</div>

		<div class="grid-block">
			<div class="tile">
				<a class="tile-link" href="/">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="tile-img tile-img8"
						src="https://lh3.googleusercontent.com/pw/ACtC-3cCwp7dKtvwMA8uf_Y3OTxZz-CiYRpay0fSZhfqYXCeDWBBfQERYnB7DzDCbsyyzdzoOU7_9BbW3WR5VaY9YPD3syn3VgZDxj6-2qTOwDw_HDlnLd92LlvCZIEr8oDKVt4AU7q-oJNHE6O9sRhGAVMi=w1384-h791-no"
						alt="Image"
					/>
				</a>
			</div>
		</div>

		<div class="grid-block">
			<div class="tile">
				<a class="tile-link" href="/">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="tile-img tile-img9"
						src="https://lh3.googleusercontent.com/pw/ACtC-3ffctj4lOMbhO6QA2a-9o24LTDFytAw4WAnxkpZr3fCDQHPyXTXeXqaI7KrD2ktnpXyfzGKvsax_oekoUGojWEGc9Ghte4ycSxgx6ZydR3LsnJlXO5zKwpoZYIBCIlYxxpq2PNcc9irUdA7P68_rdSY=w1384-h791-no"
						alt="Image"
					/>
				</a>
			</div>
		</div>

		<div class="grid-block">
			<div class="tile">
				<a class="tile-link" href="/">
					<!-- svelte-ignore a11y-img-redundant-alt -->
					<img
						class="tile-img tile-img10"
						src="https://lh3.googleusercontent.com/pw/ACtC-3dM37DnDx6OrPA4-VazUuGM5p9grWJtW8SLNQ9vo3xZlGTHw8wt6NXShF3umpCjoaM6XUyvIDl8una8MAd4z-hU23Fuz9_AjCkTpQ4YV3k5C0cXPzAq70WhaKHAEFHKcDXGVqAZVl5HgOSr9hSbHrLr=w1384-h791-no"
						alt="Image"
					/>
				</a>
			</div>
		</div>
	</div>
</section>

<style>

	*,
	*:before,
	*:after {
		box-sizing: inherit;
	}

	.grid {
		width: 100%;
		max-width: 60rem;
		min-width: 30rem;
		margin: 0 auto;

		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		justify-content: center;
	}

	.grid-block {
		width: 50%;
		min-height: auto;
		max-width: 30rem;
		min-width: 15rem;
		padding: 1rem;
	}

	.image-grid {
		-webkit-transform: rotateX(45deg) rotateZ(45deg);
		transform: rotateX(45deg) rotateZ(-45deg);
		-webkit-perspective: 1000px;
		perspective: 1000px;
	}

	.image-grid .tile-link:hover .tile-img {
		top: -1.3rem;
		left: 1.3rem;
	}

	.image-grid .tile-img {
		position: relative;
		top: 0;
		left: 0;
		-webkit-transition-property: opacity, top, left, box-shadow;
		transition-property: opacity, top, left, box-shadow;
	}

	.tile-link:hover .tile-img {
		opacity: 1;
	}

	.tile-link:hover .tile-img-link:hover .tile-img {
		opacity: 0.5;
	}

	.tile-img {
		display: block;
		width: 100%;
		height: auto;
		opacity: 1;
		-webkit-transition-property: opacity;
		transition-property: opacity;
		-webkit-transition-duration: 0.125s;
		transition-duration: 0.125s;
		-webkit-transition-timing-function: ease-in;
		transition-timing-function: ease-in;
	}
	.tile-link:hover .tile-img1 {
		box-shadow:
			-5px 5px rgba(244, 170, 200, 0.4),
			-10px 10px rgba(244, 170, 200, 0.3),
			-15px 15px rgba(244, 170, 200, 0.2),
			-20px 20px rgba(244, 170, 200, 0.1),
			-25px 25px rgba(244, 170, 200, 0.05);
	}

	.tile-link:hover .tile-img2 {
		box-shadow:
			-5px 5px rgba(45, 186, 233, 0.4),
			-10px 10px rgba(45, 186, 233, 0.3),
			-15px 15px rgba(45, 186, 233, 0.2),
			-20px 20px rgba(45, 186, 233, 0.1),
			-25px 25px rgba(45, 186, 233, 0.05);
	}

	.tile-link:hover .tile-img3 {
		box-shadow:
			-5px 5px rgba(214, 221, 244, 0.4),
			-10px 10px rgba(214, 221, 244, 0.3),
			-15px 15px rgba(214, 221, 244, 0.2),
			-20px 20px rgba(214, 221, 244, 0.1),
			-25px 25px rgba(214, 221, 244, 0.05);
	}

	.tile-link:hover .tile-img4 {
		box-shadow:
			-5px 5px rgba(82, 119, 192, 0.4),
			-10px 10px rgba(82, 119, 192, 0.3),
			-15px 15px rgba(82, 119, 192, 0.2),
			-20px 20px rgba(82, 119, 192, 0.1),
			-25px 25px rgba(82, 119, 192, 0.05);
	}

	.tile-link:hover .tile-img5 {
		box-shadow:
			-5px 5px rgba(138, 218, 245, 0.4),
			-10px 10px rgba(138, 218, 245, 0.3),
			-15px 15px rgba(138, 218, 245, 0.2),
			-20px 20px rgba(138, 218, 245, 0.1),
			-25px 25px rgba(138, 218, 245, 0.05);
	}

	.tile-link:hover .tile-img6 {
		box-shadow:
			-5px 5px rgba(203, 215, 193, 0.4),
			-10px 10px rgba(203, 215, 193, 0.3),
			-15px 15px rgba(203, 215, 193, 0.2),
			-20px 20px rgba(203, 215, 193, 0.1),
			-25px 25px rgba(203, 215, 193, 0.05);
	}

	.tile-link:hover .tile-img7 {
		box-shadow:
			-5px 5px rgba(91, 209, 250, 0.4),
			-10px 10px rgba(91, 209, 250, 0.3),
			-15px 15px rgba(91, 209, 250, 0.2),
			-20px 20px rgba(91, 209, 250, 0.1),
			-25px 25px rgba(91, 209, 250, 0.05);
	}

	.tile-link:hover .tile-img8 {
		box-shadow:
			-5px 5px rgba(145, 156, 196, 0.4),
			-10px 10px rgba(145, 156, 196, 0.3),
			-15px 15px rgba(145, 156, 196, 0.2),
			-20px 20px rgba(145, 156, 196, 0.1),
			-25px 25px rgba(145, 156, 196, 0.05);
	}

	.tile-link:hover .tile-img9 {
		box-shadow:
			-5px 5px rgba(188, 97, 129, 0.4),
			-10px 10px rgba(188, 97, 129, 0.3),
			-15px 15px rgba(188, 97, 129, 0.2),
			-20px 20px rgba(188, 97, 129, 0.1),
			-25px 25px rgba(188, 97, 129, 0.05);
	}

	.tile-link:hover .tile-img10 {
		box-shadow:
			-5px 5px rgba(4, 140, 231, 0.4),
			-10px 10px rgba(4, 140, 231, 0.3),
			-15px 15px rgba(4, 140, 231, 0.2),
			-20px 20px rgba(4, 140, 231, 0.1),
			-25px 25px rgba(4, 140, 231, 0.05);
	}
</style>
