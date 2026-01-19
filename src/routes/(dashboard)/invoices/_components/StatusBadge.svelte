<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import { isLate } from '$lib/utils/dateHelpers';
	import type { InvoiceStatus } from '../../../../enums';
	import type { Invoice } from '../../../../global';

	export let invoiceStatus: InvoiceStatus;
	export let invoiceDate: Invoice['dueDate'];
</script>

<Badge
	variant={invoiceStatus === 'paid'
		? 'success'
		: invoiceStatus === 'cancelled' || (invoiceStatus === 'sent' && isLate(invoiceDate))
			? 'destructive'
			: invoiceStatus === 'sent'
				? 'outline'
				: 'default'}
>
	{invoiceStatus === 'sent' && isLate(invoiceDate) ? 'OVERDUE' : invoiceStatus.toUpperCase()}
</Badge>
