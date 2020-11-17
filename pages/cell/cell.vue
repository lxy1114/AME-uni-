<template>
	<view class="container">
		<!-- <view class="top">
			<ame-button type="text" text="查看参数" @click="show = true"></ame-button>
		</view> -->
		<ame-cell title="标题" text="内容" more></ame-cell>
		<ame-params @getParams="show = false" v-if="show" :list="list"></ame-params>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			list: [{name: 'title',exalpin: '标题',type: 'String'},
					{name: 'text',exalpin: '内容',type: 'String'},
					{name: 'more',exalpin: '更多',type: 'Boolean',default: 'false'}]
		}
	},
	methods: {
		
	},
	onLoad() {
		
	}
}
</script>

<style lang="scss" scoped>
.cell:nth-last-child(1){
	border-bottom: 2rpx solid $uni-border-color;
}
</style>
