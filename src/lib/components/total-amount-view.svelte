<script lang="ts">
	export let label: string;
	export let amount: string;
</script>

<div
	class="circle float-right mt-6 flex min-h-24 min-w-[16rem] items-center justify-center gap-x-4 bg-no-repeat"
>
	<div class="font-bold">{label}</div>
	<div class="text-xl font-bold">{amount}</div>
</div>

<style>
	.circle {
		background-image: url('/images/amount-circle.svg');
	}
</style>
