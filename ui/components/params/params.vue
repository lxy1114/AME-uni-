<template>
	<view>
		<view class="mask" @click="getParams"></view>
		<view class="params">
			<view class="params-title">参数说明</view>
			<view class="params-list">
				<view class="table">
					<view class="table-name">参数</view>
					<view class="table-name">说明</view>
					<view class="table-name">类型</view>
					<view class="table-name">可选值</view>
					<view class="table-name">默认值</view>
				</view>
				<view class="list">
					<view class="table" v-for="(item,index) in list" :key="index">
						<view class="table-name">{{item.name}}</view>
						<view class="table-name">{{item.exalpin}}</view>
						<view class="table-name">{{item.type}}</view>
						<view class="table-name">{{item.value || '--'}}</view>
						<view class="table-name">{{item.default || '--'}}</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: Array
	},
	data() {
		return {
			
		}
	},
	methods: {
		getParams() {
			this.$emit('getParams',false)
		},
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.list{
	max-height: 500rpx;
	overflow-y: scroll;
}
.params{
	width: 100%;
	max-height: 60%;
	box-sizing: border-box;
	padding: 0rpx 30rpx 30rpx;
	background: #FFFFFF;
	border-radius: 32rpx 32rpx 0rpx 0rpx;
	position: fixed;
	bottom: 0rpx;
	left: 0rpx;
	&-title{
		font-weight: bold;
		margin: 20rpx 0rpx;
		text-align: center;
	}
	&-text{
		font-size: 28rpx;
		color: #666666;
	}
	&-list{
		white-space: nowrap;
		overflow-x: scroll;
		font-size: 28rpx;
		color: #666666;
	}
}
.table{
	padding: 20rpx 0rpx;
	border-bottom: 2rpx solid $uni-border-color;
	// display: flex;
	// align-items: center;
	&-name{
		display: inline-block;
		width: 20%;
		vertical-align: middle;
		white-space: normal;
		text-align: center;
		word-break: break-all;
	}
}
.table:nth-last-child(1){
	border: none;
}
</style>
