<template>
	<uni-shadow-root class="vant-weapp-row-index">
		<view class="van-row custom-class" :style="' ' + computed.rootStyle({ gutter })">
			<slot></slot>
		</view>
	</uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>

<script>
	export default {
		name: "van-row",
		props: {
			gutter: {
				type: [Number, String],
				observer: 'setGutter',
			},
		},
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>