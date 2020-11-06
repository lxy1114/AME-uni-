<template>
	<view 
		class="button"
		:class="[
			`button-${type}`
		]"
		:type="type"
		:size="size"
		:raudio="raudio"
		:disabled="disabled"
		:simple="simple"
		:style="{
			width: percent+'%' || (width*2)+'rpx',
			height: (height*2)+'rpx',
			background: bgColor,
			'border-color': bgColor
		}"
		@click="click">
		<!-- <image class="button-loading" src="/static/images/loading.gif"></image> -->
		<view >{{text}}</view>
	</view>
</template>

<script>
export default {
	props: {
		//按钮文字
		text: {
			type: String,
			default: '提交'
		},
		//按钮类型 success,warning,danger,info,default,text
		type: {
			type: String,
			default: 'primary'
		},
		//自定义百分比宽度
		percent: String,
		//尺寸  medium,small
		size: String,
		//圆角
		raudio: Boolean,
		//自定义宽度
		width: String,
		//自定义高度
		height: String,
		//禁用
		disabled: Boolean,
		//朴素状态
		simple: Boolean,
		//自定义颜色
		bgColor: String
	},
	data() {
		return {
			
		}
	},
	methods: {
		click() {
			if(this.disabled) return
			console.log('点击按钮')
			this.$emit('click')
		},
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.button{
	display: inline-flex;
	align-items: center;
	justify-content: center;
	width: 200rpx;
	line-height: 80rpx;
	background: $uni-color-primary;
	border: 2rpx solid $uni-color-primary;
	border-radius: 12rpx;
	margin: 0rpx 20rpx 20rpx 0rpx;
	color: #FFFFFF;
	&-loading{
		width: 70rpx;
		height: 70rpx;
	}
	&[size = 'medium']{
		line-height: 72rpx;
	}
	&[size = 'small']{
		line-height: 64rpx;
	}
	&[raudio]{
		border-radius: 60rpx;
	}
	&[disabled]{
		opacity: 0.5;
	}
	@mixin color($type,$color,$border) {
	   &.button-#{$type}{
		   background: $color;
		   border: 2rpx solid $color;
		   &[simple]{
				background: rgba($color,0.1);
				color: $color;
		   }
	   }
		&.button-default{
			&[simple]{
				border-color: $border;
				color: #666;
			}
		}
		&.button-text{
			display: inline-block;
			width: auto;
			height: auto;
			background: #FFFFFF;
			border: none;
			color: $uni-color-primary;
			font-size: 28rpx;
			&[disabled]{
				color: #888888;
			}
		}
	}
	@include color(primary, $uni-color-primary,1);
	@include color(success, $uni-color-success,1);
	@include color(danger, $uni-color-danger,1);
	@include color(info, $uni-color-info,1);
	@include color(warning, $uni-color-warning,1);
	@include color(default, $uni-color-default,$uni-border-color);
}
</style>
