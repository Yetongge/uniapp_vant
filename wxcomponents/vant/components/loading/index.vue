<template>
	<uni-shadow-root class="vant-weapp-loading-index">
		<view :class="'custom-class '+(utils.bem('loading', { vertical }))">
			<view :class="'van-loading__spinner van-loading__spinner--'+(type)"
				:style="' ' + computed.spinnerStyle({ color, size })">
				<view v-for="(item,index) in array12" :key="index" v-if="type === 'spinner'"
					class="van-loading__dot"></view>
			</view>
			<view class="van-loading__text" :style="' ' + computed.textStyle({ textSize })">
				<slot></slot>
			</view>
		</view>
	</uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>
<wxs src="./../../libs/wxs/utils.wxs" module="utils"></wxs>
<script>
	export default {
		name: "van-loading",
		props: {
			color: String,
			vertical: Boolean,
			type: {
				type: String,
				default: 'circular',
			},
			size: String,
			textSize: String,
		},
		data() {
			return {
				array12: Array.from({
					length: 12
				}),
			};
		},
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>