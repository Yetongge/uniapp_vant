export default {
	props: {
		url: String,
		linkType: {
			type: String,
			default: 'navigateTo'
		},
	},
	methods: {
		jumpLink(urlKey = 'url') {
			const url = this[urlKey];
			if (url) {
				if (this.linkType === 'navigateTo' &&
					getCurrentPages().length > 9) {
					wx.redirectTo({
						url
					});
				} else {
					wx[this.linkType]({
						url
					});
				}
			}
		},
	},
}