<template>
	<uni-shadow-root class="vant-weapp-tag-index">
		<view :class="'custom-class '+(utils.bem('tag', [type, size, { mark, plain, round }]))"
			:style="' ' + computed.rootStyle({ plain, color, textColor })">
			<slot></slot>
			<van-icon v-if="closeable" name="cross" custom-class="van-tag__close" @click="onClose"></van-icon>
		</view>
	</uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>
<wxs src="./../../libs/wxs/utils.wxs" module="utils"></wxs>

<script>
	export default {
		name: "van-tag",
		props: {
			size: String,
			mark: Boolean,
			color: String,
			plain: Boolean,
			round: Boolean,
			textColor: String,
			type: {
				type: String,
				value: 'default',
			},
			closeable: Boolean,
		},
		data() {
			return {

			};
		},
		methods: {
			onClose() {
				this.$emit('close');
			},
		},
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>