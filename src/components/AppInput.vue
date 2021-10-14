<template>
	<input
		class="app-input"
		type="text"
		:placeholder="placeholder"
		@input="callback($event)"
	/>
</template>

<script>
export default {
	props: {
		placeholder: {
			type: String,
			require: false,
			default: "Placeholder"
		}
	},
	methods: {
		callback(e) {
			this.$emit("input", e.target.value);
		}
	}
}
</script>

<style scoped>
	.app-input {
		width: 100%;
		padding-top: 8px;
		padding-right: 25.5%;
		padding-bottom: 8px;
		padding-left: 25.5%;

		font-family: "Roboto";
		font-size: 18px;
		line-height: 22px;

		border: 1px solid var(--border-input-color);
		background: transparent;
	}
	.app-input::placeholder {
		color: var(--text-color);
	}

</style>
