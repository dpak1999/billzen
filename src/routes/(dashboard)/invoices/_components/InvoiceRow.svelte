<script lang="ts">
	import * as Table from '$lib/components/ui/table/index.js';
	import { EyeIcon } from '@lucide/svelte';
	import InvoiceAction from './invoice-action.svelte';
	import type { Invoice } from '../../../../global';
	import StatusBadge from './StatusBadge.svelte';
	import { formatCurrency, sumLineItems } from '$lib/utils/moneyHelper';
	import { convertDate } from '$lib/utils/dateHelpers';

	export let invoice: Invoice;
</script>

<Table.Row>
	<Table.Cell class="font-medium">{invoice.invoiceNumber}</Table.Cell>
	<Table.Cell>
		<StatusBadge invoiceStatus={invoice.invoiceStatus} invoiceDate={invoice.dueDate} />
	</Table.Cell>
	<Table.Cell>{convertDate(invoice.dueDate)}</Table.Cell>
	<Table.Cell class="truncate whitespace-nowrap">{invoice.client.name}</Table.Cell>
	<Table.Cell>$ {formatCurrency(sumLineItems(invoice.lineItems))}</Table.Cell>
	<Table.Cell>
		<a href="/clients">
			<EyeIcon class="cursor-pointer" />
		</a>
	</Table.Cell>
	<Table.Cell>
		<InvoiceAction invoiceStatus={invoice.invoiceStatus} />
	</Table.Cell>
</Table.Row>
