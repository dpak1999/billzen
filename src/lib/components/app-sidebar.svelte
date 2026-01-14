<script lang="ts" module>
	import { page } from '$app/state';

	const data = {
		navMain: [
			{
				title: 'Invoices',
				url: '/invoices'
			},
			{
				title: 'Clients',
				url: '/clients'
			},
			{
				title: 'Settings',
				url: '#'
			},
			{
				title: 'Logout',
				url: '#'
			}
		]
	};
</script>

<script lang="ts">
	import * as Sidebar from '$lib/components/ui/sidebar/index.js';
	import type { ComponentProps } from 'svelte';
	import { useSidebar } from '$lib/components/ui/sidebar/context.svelte.js';
	let { ref = $bindable(null), ...restProps }: ComponentProps<typeof Sidebar.Root> = $props();

	const sidebar = useSidebar();

	function closeSidebar() {
		if (sidebar.isMobile) {
			sidebar.setOpenMobile(false);
		}
	}
</script>

<Sidebar.Root {...restProps} bind:ref>
	<Sidebar.Header>
		<Sidebar.Menu>
			<Sidebar.MenuItem>
				<Sidebar.MenuButton size="lg">
					{#snippet child()}
						<a href="/invoices">
							<img src="/images/billzen-logo.svg" alt="Billzen Logo" />
						</a>
					{/snippet}
				</Sidebar.MenuButton>
			</Sidebar.MenuItem>
		</Sidebar.Menu>
	</Sidebar.Header>
	<Sidebar.Content>
		<Sidebar.Menu>
			{#each data.navMain as item (item.title)}
				<Sidebar.MenuItem>
					<Sidebar.MenuButton
						class="font-medium"
						isActive={page.route.id?.includes(item.url)}
						onclick={closeSidebar}
					>
						{#snippet child({ props })}
							<a href={item.url} {...props}>
								{item.title}
							</a>
						{/snippet}
					</Sidebar.MenuButton>
				</Sidebar.MenuItem>
			{/each}
		</Sidebar.Menu>
	</Sidebar.Content>
</Sidebar.Root>
