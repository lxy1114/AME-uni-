<template>
	<view class="cell">
		<view class="cell-title">{{title}}</view>
		<view class="cell-right" @click="click">
			<view class="cell-right-text">{{text}}</view>
			<image class="cell-right-icon" src="/static/images/more.png" v-if="more"></image>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		title: String,
		text: String,
		more: Boolean
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
	&-right{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 80%;
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
