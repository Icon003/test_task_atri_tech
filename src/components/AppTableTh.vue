<template>
	<th class="app-table__th" @click="callback($event)">
		<slot></slot>
	</th>
</template>

<script>
export default {
	methods: {
		callback(e) {
			this.$emit("click", e)
		}
	}
};
</script>

<style scoped>
.app-table__th {
	padding-top: 22px;
	padding-bottom: 22px;

	position: relative;

	font-family: "Roboto";
	font-size: 24px;

	border-bottom: 1px solid var(--main-border-table-color);

	cursor: pointer;
	text-align: center;
	text-transform: capitalize;
}

.app-table__th::before {
	display: block;

	width: 3px;
	height: 40px;

	position: absolute;
	top: calc(50% - 20px);
	right: 0;

	background-color: var(--main-border-table-color);

	content: "";
}

.app-table__th:last-child::before {
	display: none;
}

</style>
