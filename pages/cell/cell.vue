<template>
	<view>
		<demo-block title="基础用法">
			<van-cell-group>
				<van-cell title="单元格" value="内容" />
				<van-cell title="单元格" value="内容" label="描述信息" :border="false" />
			</van-cell-group>
		</demo-block>

		<demo-block title="卡片风格">
			<van-cell-group inset>
				<van-cell title="单元格" value="内容" />
				<van-cell title="单元格" value="内容" label="描述信息" />
			</van-cell-group>
		</demo-block>

		<demo-block title="单元格大小">
			<van-cell-group>
				<van-cell title="单元格" value="内容" size="large" />
				<van-cell title="单元格" value="内容" size="large" use-label-slot :border="false">
					<view slot="label">描述信息</view>
				</van-cell>
			</van-cell-group>
		</demo-block>

		<demo-block title="展示图标">
			<van-cell title="单元格" value="内容" icon="location-o" :border="false" />
		</demo-block>

		<demo-block title="展示箭头">
			<van-cell title="单元格" is-link />
			<van-cell title="单元格" value="内容" is-link />
			<van-cell title="单元格" is-link arrow-direction="down" value="内容" :border="false" />
		</demo-block>

		<demo-block title="页面跳转">
			<van-cell title="单元格" is-link url="/pages/dashboard/index" />
			<van-cell title="单元格" is-link url="/pages/dashboard/index" link-type="redirectTo" />
		</demo-block>

		<demo-block title="分组标题">
			<van-cell-group title="分组 1">
				<van-cell title="单元格" value="内容" />
			</van-cell-group>
			<van-cell-group title="分组 2">
				<van-cell title="单元格" value="内容" />
			</van-cell-group>
		</demo-block>

		<demo-block title="使用插槽">
			<van-cell value="内容" icon="shop-o" is-link>
				<view slot="title">
					<view class="title">单元格</view>
					<van-tag type="danger">标签</van-tag>
				</view>
			</van-cell>
			<van-cell title="单元格" :border="false">
				<van-icon slot="right-icon" name="search" />
			</van-cell>
		</demo-block>

		<demo-block title="垂直居中">
			<van-cell center title="单元格" value="内容" label="描述信息" />
		</demo-block>
	</view>
</template>

<script>
	import demoBlock from "@/components/demo-block/index.vue"
	export default {
		components: {
			demoBlock
		},
		data() {
			return {

			}
		},
		methods: {
			click() {
				uni.showToast({
					title: '点击了cell'
				})
			}
		}
	}
</script>

<style scoped lang="scss">
.title {
  margin-right: 5px;
  display: inline-block;
  vertical-align: middle;
}
</style>