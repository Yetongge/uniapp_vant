<template>
	<uni-shadow-root class="vant-weapp-image-index">
		<view :style="' '+computed.rootStyle({ width, height, radius })"
			:class="'custom-class '+(utils.bem('image', { round }))" @click="onClick">
			<image v-if="(!error)" :src="src" :mode="' '+computed.mode(fit)" :lazy-load="lazyLoad" :webp="webp"
				class="image-class van-image__img" :show-menu-by-longpress="showMenuByLongpress" @load="onImageLoad"
				@error="onImageError"></image>

			<view v-if="loading && showLoading" class="loading-class van-image__loading">
				<slot v-if="useLoadingSlot" name="loading"></slot>
				<van-icon v-else name="photo" custom-class="van-image__loading-icon"></van-icon>
			</view>
			<view v-if="error && showError" class="error-class van-image__error">
				<slot v-if="useErrorSlot" name="error"></slot>
				<van-icon v-else name="photo-fail" custom-class="van-image__error-icon"></van-icon>
			</view>
		</view>
	</uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>
<wxs src="./../../libs/wxs/utils.wxs" module="utils"></wxs>

<script>
	import VanIcon from '../icon/index.vue'
	import VanLoading from '../loading/index.vue'
	export default {
		name: "van-image",
		components: {
			VanIcon,
			VanLoading
		},
		classes: ['custom-class', 'loading-class', 'error-class', 'image-class'],
		props: {
			src: {
				type: String,
				observer() {
					this.setData({
						error: false,
						loading: true,
					});
				},
			},
			round: Boolean,
			width: null,
			height: null,
			radius: null,
			lazyLoad: Boolean,
			useErrorSlot: Boolean,
			useLoadingSlot: Boolean,
			showMenuByLongpress: Boolean,
			fit: {
				type: String,
				default: 'fill',
			},
			webp: {
				type: Boolean,
				default: false,
			},
			showError: {
				type: Boolean,
				default: true,
			},
			showLoading: {
				type: Boolean,
				default: true,
			},
		},
		data() {
			return {
				error: false,
				loading: true,
				viewStyle: '',
			};
		},
		methods: {
			onImageLoad(event) {
				this.loading = false
				this.$emit('load', event.detail);
			},
			onImageError(event) {
				this.loading = false
				this.error = true
				this.$emit('error', event.detail);
			},
			onClick(event) {
				this.$emit('click', event.detail);
			},
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>