<script lang="ts">
	import Button, { buttonVariants } from '$lib/components/ui/button/button.svelte';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as DropdownMenu from '$lib/components/ui/dropdown-menu/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { EyeIcon, PlusIcon, SearchIcon, EllipsisVerticalIcon } from '@lucide/svelte';
	import TotalAmountView from '$lib/components/total-amount-view.svelte';

	let showNewDialog = $state(false);
</script>

<svelte:head>
	<title>Invoices | Billzen</title>
</svelte:head>

<section>
	<div class="flex items-center justify-between">
		<InputGroup.Root class="w-fit">
			<InputGroup.Input placeholder="Search..." />
			<InputGroup.Addon>
				<SearchIcon />
			</InputGroup.Addon>
			<InputGroup.Addon align="inline-end">12 results</InputGroup.Addon>
		</InputGroup.Root>

		<Button variant="default" size="default">
			<PlusIcon />
			Create Invoice
		</Button>
	</div>

	<div class="mt-6">
		<Table.Root>
			<Table.Header>
				<Table.Row>
					<Table.Head>Invoice No</Table.Head>
					<Table.Head>Status</Table.Head>
					<Table.Head>Due Date</Table.Head>
					<Table.Head>Client</Table.Head>
					<Table.Head>Amount</Table.Head>
					<Table.Head></Table.Head>
					<Table.Head></Table.Head>
				</Table.Row>
			</Table.Header>
			<Table.Body>
				<Table.Row>
					<Table.Cell class="font-medium">INV001</Table.Cell>
					<Table.Cell>
						<Badge variant="success">Paid</Badge>
					</Table.Cell>
					<Table.Cell>17/11/2025</Table.Cell>
					<Table.Cell>ABC Corp</Table.Cell>
					<Table.Cell>$250.00</Table.Cell>
					<Table.Cell>
						<a href="/clients">
							<EyeIcon class="cursor-pointer" />
						</a>
					</Table.Cell>
					<Table.Cell>
						<DropdownMenu.Root>
							<DropdownMenu.Trigger class={buttonVariants({ variant: 'outline', size: 'icon-sm' })}>
								<EllipsisVerticalIcon />
							</DropdownMenu.Trigger>
							<DropdownMenu.Content class="w-40" align="end">
								<DropdownMenu.Group>
									<DropdownMenu.Item onSelect={() => (showNewDialog = true)}>
										Send via mail
									</DropdownMenu.Item>
									<DropdownMenu.Item>Edit</DropdownMenu.Item>

									<DropdownMenu.Separator />
									<DropdownMenu.Group>
										<DropdownMenu.Item class="text-red-500">Delete</DropdownMenu.Item>
										<DropdownMenu.Item class="text-red-500">Cancel</DropdownMenu.Item>
									</DropdownMenu.Group>
								</DropdownMenu.Group>
							</DropdownMenu.Content>
						</DropdownMenu.Root>
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	</div>

	<TotalAmountView label="Total" amount="$1,444" />
</section>
