<template>
	<view class="custom-class demo-block van-clearfix" :class="padding ? 'demo-block--padding' : ''">
		<view v-if="title" class="demo-block__title">{{ title }}</view>
		<view class="demo-block__card" v-if="card">
			<slot />
		</view>
		<slot v-else />
	</view>
</template>
<script>
	export default {
		name: "van-button",
		props: {
			title: String,
			padding: Boolean,
			card: Boolean,
		},
		data() {
			return {

			};
		}
	}
</script>

<style lang="scss" scoped>

</style>