<script lang="ts">
	import { Badge } from '$lib/components/ui/badge/index.js';
	import type { InvoiceStatus } from '../../../../enums';

	export let invoiceStatus: InvoiceStatus;
</script>

<Badge
	variant={invoiceStatus === 'paid'
		? 'success'
		: invoiceStatus === 'cancelled'
			? 'destructive'
			: invoiceStatus === 'sent'
				? 'outline'
				: 'default'}
>
	{invoiceStatus.toUpperCase()}
</Badge>
