<script lang="ts">
	let { children } = $props();
</script>

<div class="grid min-h-screen grid-cols-12 gap-x-16">
	<header class="col-span-3 bg-amber-400 text-center">
		<div>
			<a href="/invoices">
				<img src="/images/billzen-logo.svg" alt="Billzen Logo" class="mx-auto size-52" />
			</a>
		</div>

		<nav>
			<ul class="list-none text-2xl font-bold">
				<li>
					<a href="/invoices">Invoices</a>
				</li>
				<li>
					<a href="/clients">Clients</a>
				</li>
				<li>
					<a href="#">Settings</a>
				</li>
				<li>
					<a href="#">Logout</a>
				</li>
			</ul>
		</nav>
	</header>

	<main class="col-span-8 pt-10">
		{@render children()}
	</main>
</div>

<style lang="postcss">
	@reference "../layout.css";

	nav ul li {
		@apply mb-6;
	}

	nav ul li a {
		@apply font-bold text-white;
	}
</style>
