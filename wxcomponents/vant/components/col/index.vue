<template>
	<uni-shadow-root class="vant-weapp-col-index">
		<view :class="'custom-class '+(utils.bem('col', [span]))+' '+(offset ? 'van-col--offset-' + offset : '')"
			:style="' ' + computed.rootStyle({ gutter })">
			<slot></slot>
		</view>
	</uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>
<wxs src="./../../libs/wxs/utils.wxs" module="utils"></wxs>

<script>
	import {
		useParent
	} from '../common/relation';
	export default {
		name: "van-col",
		props: {
			span: [Number, String],
			offset: Number,
		},
		data() {
			return {
				gutter: 0
			};
		},
		created() {
			let parent = uni.$v.parent(this, 'van-row')
			this.gutter = parent.gutter
		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>