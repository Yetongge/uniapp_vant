<template>
	<uni-shadow-root>
		<button :id="id || buttonId" :data-detail="dataset"
			:class="'custom-class '+ utils.bem('button', [type, size, { block, round, plain, square, loading, disabled, hairline, unclickable: disabled || loading }]) + (hairline ? ' van-hairline--surround' : '')"
			:hover-class="disabled || loading ? '' : 'van-button--active hover-class'" :lang="lang"
			:form-type="formType" :style="' ' + computed.rootStyle({ plain, color, customStyle })"
			:open-type="disabled || loading || (canIUseGetUserProfile && openType === 'getUserInfo') ? '' : openType"
			:business-id="businessId" :session-from="sessionFrom" :send-message-title="sendMessageTitle"
			:send-message-path="sendMessagePath" :send-message-img="sendMessageImg" :show-message-card="showMessageCard"
			:app-parameter="appParameter" :aria-label="ariaLabel" :bindtap="disabled || loading ? '' : 'onClick'"
			bindgetuserinfo="onGetUserInfo" bindcontact="onContact" bindgetphonenumber="onGetPhoneNumber"
			bindgetrealtimephonenumber="onGetRealTimePhoneNumber"
			bindagreeprivacyauthorization="onAgreePrivacyAuthorization" binderror="onError" bindlaunchapp="onLaunchApp"
			bindopensetting="onOpenSetting" bindchooseavatar="onChooseAvatar">
			<block v-if="loading">
				<van-loading custom-class="loading-class" :size="loadingSize" :type="loadingType"
					:color="' ' + computed.loadingColor({ type, color, plain })"></van-loading>
				<view v-if="loadingText" class="van-button__loading-text">
					{{ loadingText }}
				</view>
			</block>
			<block v-else>
				<van-icon v-if="icon" size="1.2em" :name="icon" :class-prefix="classPrefix" class="van-button__icon"
					custom-style="line-height: inherit;"></van-icon>
				<view class="van-button__text">
					<slot></slot>
				</view>
			</block>
		</button>
	</uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>
<wxs src="./../../libs/wxs/utils.wxs" module="utils"></wxs>
<script>
	import VanIcon from '../icon/index.vue'
	import VanLoading from '../loading/index.vue'
	export default {
		name: "van-button",
		components: {
			VanIcon,
			VanLoading
		},
		props: {
			id: String,
			buttonId: String,
			lang: {
				type: String,
				default: 'en',
			},
			formType: String,
			canIUseGetUserProfile: String,
			openType: String,
			businessId: String,
			sessionFrom: String,
			icon: String,
			classPrefix: {
				type: String,
				default: 'van-icon',
			},
			plain: Boolean,
			block: Boolean,
			round: Boolean,
			square: Boolean,
			loading: Boolean,
			hairline: {
				type: Boolean,
				default: false,
			},
			disabled: Boolean,
			loadingText: String,
			customStyle: String,
			loadingType: {
				type: String,
				default: 'circular',
			},
			type: {
				type: String,
				default: 'default',
			},
			dataset: null,
			size: {
				type: String,
				default: 'normal',
			},
			loadingSize: {
				type: String,
				default: '20px',
			},
			color: String,
			appParameter: String,
			sendMessageTitle: String,
			sendMessagePath: String,
			sendMessageImg: String,
			showMessageCard: {
				type: Boolean,
				default: false,
			},
			ariaLabel: String,
		},
		data() {
			return {

			};
		},
		created() {

		},
		methods: {

		}
	}
</script>

<style lang="scss" scoped>
	@import './index.scss';
</style>