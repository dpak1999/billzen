<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import * as Table from '$lib/components/ui/table/index.js';
	import * as Card from '$lib/components/ui/card/index.js';
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { EyeIcon, PlusIcon, SearchIcon } from '@lucide/svelte';
	import TotalAmountView from '$lib/components/total-amount-view.svelte';
	import InvoiceAction from '$lib/components/invoice-action.svelte';
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
			Add Invoice
		</Button>
	</div>

	<div class="mt-6 hidden md:block">
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
						<InvoiceAction />
					</Table.Cell>
				</Table.Row>
			</Table.Body>
		</Table.Root>
	</div>

	<div class="mt-6 sm:hidden">
		<Card.Root class="w-full">
			<Card.Content>
				<div class="flex items-center justify-between">
					<span class="font-semibold">INV2123</span>
					<InvoiceAction />
				</div>

				<div class="mt-8 flex items-center justify-between">
					<div class="flex flex-col items-start gap-1">
						<span>ABC corp</span>
						<span class="text-sm text-muted-foreground">17/1/2025</span>
					</div>
					<div class="flex flex-col items-end gap-1">
						<span>$112.00</span>
						<Badge variant="success">Paid</Badge>
					</div>
				</div>
			</Card.Content>
		</Card.Root>
	</div>

	<TotalAmountView label="Total" amount="$1,444" />
</section>
