<template>
	<transition name="fade">
		<div v-if="isLoading" class="app-loader">
			<img
				class="app-loader__image"
				src="@/assets/loaders/puff.svg"
				alt="Загрузка"
			/>
		</div>
	</transition>
</template>

<script>
export default {
	props: {
		isLoading: {
			type: Boolean,
			require: true
		}
	}
}
</script>

<style scoped>
.fade-enter-active,.fade-leave-active {
	transition: opacity 0.5s;
}
.fade-enter,.fade-leave-to {
	opacity: 0;
}
.app-loader {
	display: flex;

	justify-content: center;
	align-items: center;

	width: 100%;
	height: 100vh;

	position: fixed;
	z-index: 3;

	background-color: var(--loader-background-color);
}
.app-loader__image {
	width: 1200px;
	height: 120px;
}

</style>
