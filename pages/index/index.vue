<template>
	<view class="container page">
		<view class="ver-title">基础组件</view>
		<view class="card">
			<ame-cell title="按钮" more @click="goDetail('/button')"></ame-cell>
			<ame-cell title="单元格" more @click="goDetail('/cell')"></ame-cell>
		</view>
		<view class="ver-title">表单组件</view>
		<view class="card">
			<ame-cell title="输入框" more @click="goDetail('/input')"></ame-cell>
			<ame-cell title="表单" more @click="goDetail('/form')"></ame-cell>
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
