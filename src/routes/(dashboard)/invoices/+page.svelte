<script lang="ts">
	import Button from '$lib/components/ui/button/button.svelte';
	import * as InputGroup from '$lib/components/ui/input-group/index.js';
	import { PlusIcon, SearchIcon } from '@lucide/svelte';
	import TotalAmountView from '$lib/components/total-amount-view.svelte';
	import { invoices, loadInvoices } from '$lib/stores/InvoiceStore';
	import { onMount } from 'svelte';
	import InvoiceRow from './_components/InvoiceRow.svelte';
	import * as Table from '$lib/components/ui/table/index.js';
	import InvoiceCard from './_components/InvoiceCard.svelte';
	import { formatCurrency, sumInvoices } from '$lib/utils/moneyHelper';

	onMount(() => {
		loadInvoices();
		console.log($invoices);
	});
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
				{#each $invoices as invoice}
					<InvoiceRow {invoice} />
				{/each}
			</Table.Body>
		</Table.Root>
	</div>

	<div class="mt-6 sm:hidden">
		{#each $invoices as invoice}
			<InvoiceCard {invoice} />
		{/each}
	</div>

	<TotalAmountView label="Total" amount={`$ ${formatCurrency(sumInvoices($invoices))}`} />
</section>
