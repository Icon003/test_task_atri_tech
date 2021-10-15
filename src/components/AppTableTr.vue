<template>
	<tr class="app-table__tr">
		<slot></slot>
	</tr>
</template>

<script>
export default {

};
</script>

<style>
	.app-table__tr {
		border-bottom: 1px solid var(--second-border-table-color);
	}
	.app-table__tr :last-child::before {
		display: none;
	}

</style>
