<template>
	<div class="app-dropdown">
		<div class="app-dropdown__container-button">
			<AppButton
				text="Edit Table"
				@click="toogleList"
				:active="visibleList"
			/>
		</div>
		<div class="app-dropdown__container-list" v-show="visibleList === true">
			<ul class="app-dropdown__list">
				<li
					class="app-dropdown__item"
					v-for="item of data"
					:key="item.id">
					<button
						class="app-dropdown__button"
						@click="selectItem($event, item.id)">
						<i :class="['app-dropdown__icon', item.status === true ? 'app-dropdown__icon--check' : 'app-dropdown__icon--close']"></i>
						{{ item.name }}
					</button>
				</li>
			</ul>
		</div>
	</div>
</template>

<script>
import AppButton from "@/components/AppButton.vue";

export default {
	components: {
		AppButton
	},
	props: {
		data: {
			type: Array,
			require: false,
			default: () => []
		}
	},
	data() {
		return {
			visibleList: false
		};
	},
	methods: {
		toogleList() {
			this.visibleList = !this.visibleList;
		},
		selectItem(e, itemId) {
			this.$emit("selectItem", itemId);
		}
	}
};
</script>

<style scoped>
.app-dropdown {
	width: 100%;

	position: relative;
}
.app-dropdown__container-button {
	width: 100%;
}
.app-dropdown__container-list {
	width: 100%;

	position: absolute;
	z-index: 1;

	background-color: var(--dropdown-background-color);
}
.app-dropdown__list {
	width: 100%;

	border-right: 1px solid var(--dropdown-border-color);
	border-left: 1px solid var(--dropdown-border-color);

	list-style-type: none;
}
.app-dropdown__item {
}
.app-dropdown__button {
	display: flex;

	align-items: center;

	width: 100%;
	padding-top: 8px;
	padding-bottom: 8px;

	font-family: "Roboto";
	font-size: 24px;

	border: none;
	border-bottom: 1px solid var(--dropdown-border-color);
	background: none;

	cursor: pointer;
	text-transform: capitalize;
}
.app-dropdown__icon {
	display: block;

	width: 42px;
	height: 42px;

	background-repeat: no-repeat;
	background-position: center;
}
.app-dropdown__icon--check {
	background-image: url("../assets/icons/check.svg");
}
.app-dropdown__icon--close {
	background-image: url("../assets/icons/close.svg");
}

</style>
