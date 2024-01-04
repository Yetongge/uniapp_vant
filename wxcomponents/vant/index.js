require('@/wxcomponents/vant/libs/mixin/page-extend.js')
import mixin from "@/wxcomponents/vant/libs/mixin/mixin.js"

// import addUnit from '@/wxcomponents/vant/libs/wxs/add-unit.js'
// import array from '@/wxcomponents/vant/libs/wxs/array.js'
// import bem from '@/wxcomponents/vant/libs/wxs/bem.js'
// import memoize from '@/wxcomponents/vant/libs/wxs/memoize.js'
// import object from '@/wxcomponents/vant/libs/wxs/object.js'
// import style from '@/wxcomponents/vant/libs/wxs/style.js'
import parent from '@/wxcomponents/vant/libs/function/parent.js'
const v = {
	// addUnit,
	// array,
	// bem,
	// memoize,
	// object,
	// style,
	// utils
	parent

}
uni.$v = v

const install = Vue => {
	Vue.mixin(mixin)
	Vue.prototype.$v = v
}

export default {
	install
}