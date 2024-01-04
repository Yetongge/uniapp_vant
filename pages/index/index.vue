<template>
	<view class="content">
		<van-cell-group :title="item.title" v-for="(item, index) in list" :key="index">
			<van-cell :title="item2.name" v-for="(item2, index2) in item.children" :key="index2" is-link
				:url="item2.url" />
		</van-cell-group>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				title: 'Hello',
				list: [{
					title: '基础组件',
					children: [{
						name: 'Button 按钮',
						url: '/pages/button/button'
					}, {
						name: 'Cell 单元格',
						url: '/pages/cell/cell'
					}, {
						name: 'Icon 图标',
						url: '/pages/icon/icon'
					}, {
						name: 'Image 图片',
						url: '/pages/image/image'
					}, {
						name: 'Layout 布局',
						url: '/pages/layout/layout'
					}]
				}]
			}
		},
		onLoad() {

		},
		methods: {
			goPage(url) {
				uni.navigateTo({
					url
				})
			}
		}
	}
</script>

<style>

</style>