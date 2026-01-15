<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { EllipsisVerticalIcon } from '@lucide/svelte';
	import { buttonVariants } from './ui/button';

	let showNewDialog = $state(false);
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon-sm' })}>
		<EllipsisVerticalIcon />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-40" align="end">
		<DropdownMenu.Group>
			<DropdownMenu.Item onSelect={() => (showNewDialog = true)}>Send via mail</DropdownMenu.Item>
			<DropdownMenu.Item>Edit</DropdownMenu.Item>

			<DropdownMenu.Separator />
			<DropdownMenu.Group>
				<DropdownMenu.Item class="text-red-500">Delete</DropdownMenu.Item>
				<DropdownMenu.Item class="text-red-500">Cancel</DropdownMenu.Item>
			</DropdownMenu.Group>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
