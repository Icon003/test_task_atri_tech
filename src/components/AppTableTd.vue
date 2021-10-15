<template>
	<td class="app-table__td">
		<slot></slot>
	</td>
</template>

<script>
export default {
};
</script>

<style scoped>
.app-table__td {
	padding-top: 22px;
	padding-bottom: 22px;

	position: relative;

	font-family: "Roboto";
	font-size: 20px;

	text-align: center;
}

.app-table__td::before {
	display: block;

	width: 1px;
	height: 40px;

	position: absolute;
	top: calc(50% - 20px);
	right: 0;

	background-color: var(--main-border-table-color);

	content: "";
}

.app-table__td:last-child::before {
	display: none;
}

</style>
