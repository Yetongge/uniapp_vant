const pageExtend = Page => {
	// console.log('Page111', Page)
	return object => {
		// console.log('object', object)
	}
}
// 获取原生Page
const originalPage = Page
// 定义一个新的Page，将原生Page传入Page扩展函数
Page = pageExtend(originalPage)
// console.log('originalPage', Page)