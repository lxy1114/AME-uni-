<template>
	<view 
		class="radio"
		:class="{
			inline: inline
		}"
		:disabled="disabled"
		 @click="getCheck">
		<view class="radio-icon" v-if="list.indexOf(label) == -1"></view>
		<image class="radio-icon icon" :src="src" v-else></image>
		<view class="radio-text">{{text}}</view>
	</view>
</template>

<script>
export default {
	props: {
		//单选框图片
		src: {
			type: String,
			default: '/static/images/check.png'
		},
		//选项文字
		text: {
			type: String,
			default: '选项'
		},
		//水平排列
		inline: Boolean,
		//禁用
		disabled: Boolean,
		//绑定值
		label: String,
		//选值
		list: Array
	},
	data() {
		return {
			
		}
	},
	methods: {
		getCheck() {
			if(this.disabled) return
			this.$emit('getCheck',this.label)
		},
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.radio{
	display: flex;
	align-items: center;
	margin: 0rpx 30rpx 20rpx 0rpx;
	&-icon{
		width: 30rpx;
		height: 30rpx;
		border: 2rpx solid $uni-text-color-disable;
		border-radius: 6rpx;
		margin: 4rpx 20rpx 0rpx 0rpx;
	}
	&[disabled]{
		color: #999;
	}
}
.radio.inline{
	display: inline-flex;
}
.icon{
	width: 34rpx;
	height: 34rpx;
	border: none;
}
</style>
