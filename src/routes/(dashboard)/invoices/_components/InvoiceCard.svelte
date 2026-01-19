<script lang="ts">
	import * as Card from '$lib/components/ui/card/index.js';
	import InvoiceAction from '$lib/components/invoice-action.svelte';
	import StatusBadge from './StatusBadge.svelte';
	import type { Invoice } from '../../../../global';
	import { formatCurrency, sumLineItems } from '$lib/utils/moneyHelper';

	export let invoice: Invoice;
</script>

<Card.Root class="mt-4 w-full">
	<Card.Content>
		<div class="flex items-center justify-between">
			<span class="font-semibold">{invoice.invoiceNumber}</span>
			<InvoiceAction />
		</div>

		<div class="mt-8 flex items-center justify-between">
			<div class="flex flex-col items-start gap-1">
				<span class="truncate whitespace-nowrap">{invoice.client.name}</span>
				<span class="text-sm text-muted-foreground">{invoice.dueDate}</span>
			</div>
			<div class="flex flex-col items-end gap-1">
				<span>$ {formatCurrency(sumLineItems(invoice.lineItems))}</span>
				<StatusBadge invoiceStatus={invoice.invoiceStatus} />
			</div>
		</div>
	</Card.Content>
</Card.Root>
