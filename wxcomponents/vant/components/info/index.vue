<template>
	<uni-shadow-root>
		<view v-if="info !== null && info !== '' || dot"
			:class="'van-info '+(utils.bem('info', { dot }))+' custom-class'" :style="customStyle">{{ dot ? '' : info }}
		</view>
	</uni-shadow-root>
</template>
<wxs src="./../../libs/wxs/utils.wxs" module="utils"></wxs>
<script>
	export default {
		name: "van-info",
		components: {

		},
		props: {
			dot: {
				type: Boolean,
				default: false,
			},
			info: null,
			customStyle: String,
		},
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>