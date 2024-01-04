<template>
	<uni-shadow-root class=".vant-weapp-cell-group-index">
		<view v-if="title" :class="' ' + utils.bem('cell-group__title', { inset })">
			{{ title }}
		</view>
		<view
			:class="'custom-class '+(utils.bem('cell-group', { inset }))+' '+(border ? 'van-hairline--top-bottom' : '')">
			<slot></slot>
		</view>
	</uni-shadow-root>
</template>
<wxs src="./../../libs/wxs/utils.wxs" module="utils"></wxs>

<script>
	export default {
		name: "van-cell-group",
		props: {
			title: String,
			border: {
				type: Boolean,
				value: true,
			},
			inset: Boolean,
		},
		data() {
			return {

			};
		},
		methods: {
			onClick(event) {
				this.$emit('click', event.detail);
				this.jumpLink();
			},
		},
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>