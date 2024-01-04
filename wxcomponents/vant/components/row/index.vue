<template>
<uni-shadow-root class="vant-components-row-index"><view class="van-row custom-class" :style="' ' + computed.rootStyle({ gutter })">
  <slot></slot>
</view></uni-shadow-root>
</template>
<wxs src="./index.wxs" module="computed"></wxs>
<script>

global['__wxRoute'] = 'vant/components/row/index'
import { VantComponent } from '../common/component';
import { useChildren } from '../common/relation';
VantComponent({
    relation: useChildren('col', function (target) {
        const { gutter } = this.data;
        if (gutter) {
            target.setData({ gutter });
        }
    }),
    props: {
        gutter: {
            type: Number,
            observer: 'setGutter',
        },
    },
    methods: {
        setGutter() {
            this.children.forEach((col) => {
                col.setData(this.data);
            });
        },
    },
});
export default global['__wxComponents']['vant/components/row/index']
</script>
<style platform="mp-weixin">
@import '../common/index.scss';.van-row:after{clear:both;content:"";display:table}
</style>