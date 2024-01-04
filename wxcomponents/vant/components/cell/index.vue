<template>
	<uni-shadow-root class="vant-weapp-cell-index">
		<view
			:class="'custom-class '+(utils.bem('cell', [size, { center, required, borderless: !border, clickable: isLink || clickable }]))"
			hover-class="van-cell--hover hover-class" hover-stay-time="70" :style="customStyle" @click="onClick">
			<van-icon v-if="icon" :name="icon" class="van-cell__left-icon-wrap"
				custom-class="van-cell__left-icon"></van-icon>
			<slot v-else name="icon"></slot>

			<view :style="' ' + computed.titleStyle({ titleWidth, titleStyle })" class="van-cell__title title-class">

				<block v-if="title">{{ title }}</block>
				<slot v-else name="title"></slot>

				<view v-if="label || useLabelSlot" class="van-cell__label label-class">
					<slot v-if="useLabelSlot" name="label"></slot>
					<block v-else-if="label">{{ label }}</block>
				</view>
			</view>

			<view class="van-cell__value value-class">
				<block v-if="value || value === 0">{{ value }}</block>
				<slot v-else></slot>
			</view>

			<van-icon v-if="isLink" :name="arrowDirection ? 'arrow' + '-' + arrowDirection : 'arrow'"
				class="van-cell__right-icon-wrap right-icon-class" custom-class="van-cell__right-icon"></van-icon>
			<slot v-else name="right-icon"></slot>

			<slot name="extra"></slot>
		</view>
	</uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>
<wxs src="./../../libs/wxs/utils.wxs" module="utils"></wxs>

<script>
	import VanIcon from '../icon/index.vue'
	import link from '../mixins/link';
	export default {
		name: "van-cell",
		components: {
			VanIcon
		},
		mixins: [link],
		props: {
			title: null,
			value: null,
			icon: String,
			size: String,
			label: String,
			center: Boolean,
			isLink: Boolean,
			required: Boolean,
			clickable: Boolean,
			titleWidth: String,
			customStyle: String,
			arrowDirection: String,
			useLabelSlot: Boolean,
			border: {
				type: Boolean,
				default: true,
			},
			titleStyle: String,
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