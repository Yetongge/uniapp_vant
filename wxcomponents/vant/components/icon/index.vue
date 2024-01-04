<template>
	<uni-shadow-root class="vant-weapp-icon-index">
		<view :class="' ' + computed.rootClass({ classPrefix, name })"
			:style="' ' + computed.rootStyle({ customStyle, color, size })" @click="onClick">
			<van-info v-if="info !== null || dot" :dot="dot" :info="info"
				custom-class="van-icon__info info-class"></van-info>
			<image v-if="computed.isImage(name)" :src="name" mode="aspectFit" class="van-icon__image"></image>
		</view>
	</uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>

<script>
	import VanInfo from '../info/index.vue'
	export default {
		name: "van-icon",
		components: {
			VanInfo
		},
		props: {
			dot: {
				type: Boolean,
				default: false,
			},
			info: {
				type: [String, Number],
				default: null,
			},
			size: null,
			color: String,
			customStyle: String,
			classPrefix: {
				type: String,
				default: 'van-icon',
			},
			name: String,
		},
		methods: {
			onClick() {
				this.$emit('click');
			},
		},
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>