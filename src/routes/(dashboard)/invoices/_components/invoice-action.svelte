<script lang="ts">
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import {
		ArchiveIcon,
		EllipsisVerticalIcon,
		MailIcon,
		PencilIcon,
		TrashIcon
	} from '@lucide/svelte';
	import { buttonVariants } from '../../../../lib/components/ui/button';
	import { InvoiceStatus } from '../../../../enums';

	// let showNewDialog = $state(false);
	export let invoiceStatus: InvoiceStatus;
</script>

<DropdownMenu.Root>
	<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon-sm' })}>
		<EllipsisVerticalIcon />
	</DropdownMenu.Trigger>
	<DropdownMenu.Content class="w-40 " align="end">
		<DropdownMenu.Group>
			<DropdownMenu.Item
				disabled={invoiceStatus === InvoiceStatus.Paid || invoiceStatus === InvoiceStatus.Cancelled}
				onSelect={() => {}}
			>
				<MailIcon />
				Send via mail
			</DropdownMenu.Item>
			<DropdownMenu.Item disabled={invoiceStatus === InvoiceStatus.Paid}>
				<PencilIcon />
				Edit
			</DropdownMenu.Item>

			<DropdownMenu.Separator />
			<DropdownMenu.Group>
				<DropdownMenu.Item
					class="text-red-500"
					disabled={invoiceStatus === InvoiceStatus.Paid || invoiceStatus === InvoiceStatus.Sent}
				>
					<TrashIcon class="text-red-500" />
					Delete
				</DropdownMenu.Item>
				<DropdownMenu.Item
					class="text-red-500"
					disabled={invoiceStatus === InvoiceStatus.Paid ||
						invoiceStatus === InvoiceStatus.Cancelled}
				>
					<ArchiveIcon class="text-red-500" />
					Cancel
				</DropdownMenu.Item>
			</DropdownMenu.Group>
		</DropdownMenu.Group>
	</DropdownMenu.Content>
</DropdownMenu.Root>
