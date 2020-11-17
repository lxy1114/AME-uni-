<template>
	<view class="container page">
		<view class="ver-title">基础组件</view>
		<view class="card">
			<ame-cell title="按钮" more @click="goDetail('/button')"></ame-cell>
			<ame-cell title="单元格" more @click="goDetail('/cell')"></ame-cell>
		</view>
		<view class="ver-title">表单组件</view>
		<view class="card">
			<ame-cell title="单选框" more @click="goDetail('/radio')"></ame-cell>
			<ame-cell title="复选框" more @click="goDetail('/check')"></ame-cell>
			<ame-cell title="输入框" more @click="goDetail('/input')"></ame-cell>
			<ame-cell title="搜索框" more @click="goDetail('/search')"></ame-cell>
			<ame-cell title="滑块" more @click="goDetail('/slider')"></ame-cell>
			<ame-cell title="计数器" more @click="goDetail('/number')"></ame-cell>
			<ame-cell title="评分" more @click="goDetail('/score')"></ame-cell>
			<ame-cell title="表单" more @click="goDetail('/form')"></ame-cell>
		</view>
		<view class="ver-title">表格</view>
		<view class="card">
			<ame-cell title="表格" more @click="goDetail('/table')"></ame-cell>
		</view>
		<view class="ver-title">导航</view>
		<view class="card">
			<ame-cell title="导航" more @click="goDetail('/nav')"></ame-cell>
			<ame-cell title="侧边栏" more @click="goDetail('/side')"></ame-cell>
		</view>
		<view class="ver-title">模板</view>
		<view class="card">
			<ame-cell title="登录" more @click="goDetail('/login')"></ame-cell>
			<ame-cell title="城市选择" more @click="goDetail('/city')"></ame-cell>
		</view>
	</view>
</template>

<script>
export default {
	data() {
		return {
			
		}
	},
	onLoad() {

	},
	methods: {
		goDetail(type){
			this.$utils.navigateTo(type)
		}
	}
}
</script>

<style lang="scss" scoped>

</style>
