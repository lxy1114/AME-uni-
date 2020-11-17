<template>
	<view class="container">
		<!-- <view class="top">
			<ame-button type="text" text="查看参数" @click="show = true"></ame-button>
		</view> -->
		<view class="hor-title">基础用法</view>
		<ame-search></ame-search>
		<view class="hor-title">可重置</view>
		<ame-search cancel></ame-search>
		<view class="hor-title">搜索</view>
		<ame-search text="取消"></ame-search>
		<ame-search text="搜索"></ame-search>
		<view class="hor-title">圆角</view>
		<ame-search radius></ame-search>
		<view class="hor-title">边框</view>
		<ame-search border radius></ame-search>
		<view class="hor-title">城市</view>
		<ame-search :city="city" radius></ame-search>
		<ame-params :list="list" @getParams="show = false" v-if="show"></ame-params>
	</view>
</template>

<script>
export default {
	data() {
		return {
			city: '深圳',
			show: false,
			list: [{name: 'placeholder',exalpin: '提示文字',type: 'String'},
					{name: 'cancel',exalpin: '取消按钮',type: 'Boolean',default: 'false'},
					{name: 'text',exalpin: '框后文字',type: 'String'},
					{name: 'radius',exalpin: '圆角',type: 'Boolean',default: 'false'},
					{name: 'city',exalpin: '城市',type: 'String'},
					{name: 'border',exalpin: '边框',type: 'Boolean',default: 'false'}]
		}
	},
	methods: {
		
	},
	onShow() {
		this.city = uni.getStorageSync('city') || this.city
	}
}
</script>

<style lang="scss" scoped>

</style>
