<template>
	<div class="control-panel-table">
		<div class="control-panel-table__container-title">
			<h1 class="control-panel-table__title">{{ title }}</h1>
		</div>
		<div class="control-panel-table__container-button">
			<AppDropdown :data="dropdownData" @selectItem="selectItem"/>
		</div>
		<div class="control-panel-table__container-search">
			<AppInput placeholder="Search" @input="callback($event)"/>
		</div>
	</div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";
import AppDropdown from "@/components/AppDropdown.vue";
import AppInput from "@/components/AppInput.vue";

export default {
	components: {
		AppButton,
		AppDropdown,
		AppInput,
	},
	props: {
		title: {
			type: String,
			require: false,
			default: "Title"
		},
		dropdownData: {
			type: Array,
			require: false,
			default: () => [],
		}
	},
	methods: {
		callback(e) {
			this.$emit("search", e);
		},
		selectItem(e) {
			this.$emit("changeCompositionTable", e)
		}
	}

}
</script>

<style scoped>
.control-panel-table {
	display: flex;

	width: 100%;
	padding-top: 18px;
	padding-right: 42px;
	padding-bottom: 18px;
	padding-left: 42px;

	border-top: 1px solid var(--main-border-table-color);
	border-right: 1px solid var(--main-border-table-color);
	border-left: 1px solid var(--main-border-table-color);
}
.control-panel-table__container-title {
	display: flex;

	justify-content: center;
	align-items: center;

	width: 34%;
	margin-right: 32px;
}
.control-panel-table__title {
	font-family: "Roboto Bold";
	font-size: 24px;
}
.control-panel-table__container-button {
	width: 30%;
}
.control-panel-table__container-search {
	width: 36%;
	margin-left: 32px;
}

</style>
