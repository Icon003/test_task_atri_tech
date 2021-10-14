<template>
	<button
		:class="['app-button', active === true ? 'app-button--active' : '']"
		@click="callback($event)">
		{{ text }}
	</button>
</template>

<script>
export default {
	props: {
		text: {
			type: String,
			require: false,
			default: "Text button"
		},
		active: {
			type: Boolean,
			require: false,
			default: false
		}
	},
	methods: {
		callback(e) {
			this.$emit("click", e);
		}
	}
};
</script>

<style scoped>
.app-button {
	width: 100%;
	padding-top: 8px;
	padding-bottom: 8px;

	font-family: "Roboto";
	font-size: 18px;
	line-height: 22px;

	border: 1px solid var(--button-border-color);
	background: var(--button-background-color);

	cursor: pointer;
}
.app-button--active {
	background: var(--button-focus-background-color);
}

</style>
