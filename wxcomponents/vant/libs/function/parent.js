function parent(_this, name) {
	let parent = _this.$parent;
	let parentName = parent.$options.name;
	while (parentName !== name) {
		parent = parent.$parent;
		if (!parent) return false;
		parentName = parent.$options.name;
	}
	return parent;
}

export default parent