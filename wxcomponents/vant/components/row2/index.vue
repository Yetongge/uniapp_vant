<template>
	<uni-shadow-root class="vant-weapp-row-index">
		<view class="van-row custom-class" :style="' ' + computed.rootStyle({ gutter })">
			<slot></slot>
		</view>
	</uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>

<script>
	import {
		useChildren
	} from '../common/relation';
	export default {
		name: "van-row",
		relation: useChildren('col', function(target) {
			let gutter = this.gutter
			console.log('gutter', gutter)
			console.log('target', target)
			// if (gutter) {
			// 	target.setData({
			// 		gutter
			// 	});
			// }
		}),
		props: {
			gutter: {
				type: [Number, String],
				observer: 'setGutter',
			},
		},
		data() {
			return {

			};
		},
		methods: {
			setGutter() {
				console.log('this.children', this.children)
				// this.children.forEach((col) => {
				// 	col.setData(this.data);
				// });
			},
		},
	}
</script>

<style lang="scss" scoped>

</style>