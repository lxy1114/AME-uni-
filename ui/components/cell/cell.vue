<template>
	<view class="cell" @click="click">
		<view class="cell-left">
			<image class="cell-left-icon" :src="icon" v-if="icon" mode="widthFix"></image>
			<view class="cell-left-title">{{title}}</view>
		</view>
		<view 
			class="cell-right" 
			:style="{
				width: !side ? '80%' : ''
			}">
			<view class="cell-right-text">{{text}}</view>
			<image class="cell-right-icon" src="/static/images/more.png" v-if="more"></image>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		//标题
		title: String,
		//内容
		text: String,
		//是否显示右箭头
		more: Boolean,
		icon: String,
		side: Boolean
	},
	data() {
		return {
			
		}
	},
	methods: {
		click() {
			this.$emit('click')
		},
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.cell{
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	line-height: 100rpx;
	border-bottom: 2rpx solid $uni-border-color;
	font-size: 28rpx;
	color: #333333;
	&-left{
		display: flex;
		align-items: center;
		&-icon{
			width: 30rpx;
			height: 30rpx;
			margin-right: 10rpx;
		}
	}
	&-right{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		height: 100rpx;
		color: #666666;
		&-icon{
			width: 24rpx;
			height: 24rpx;
			margin-left: 20rpx;
		}
	}
}
.cell:nth-last-child(1){
	border: none;
}
</style>
