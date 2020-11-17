<template>
	<view 
		class="number"
		:border="border"
		:disabled="disabled">
		<view 
			class="number-icon"
			:style="{
				color: value == min ? '#999' : '',
				background: value == min && !border ? '#f3f3f3' : ''
			}"
			:border="border"
			@click="onChange('reduce')">
			-
		</view>
		<view 
			class="number-value"
			:border="border"
			v-if="!input">
			{{value}}
		</view>
		<input 
			class="number-value"
			:border="border"
			v-model="value"
			@input="getInput"
			:disabled="disabled"
			v-else/>
		<view 
			class="number-icon"
			:style="{
				color: max && value == max ? '#999' : '',
				background: max && value == max && !border ? '#f3f3f3' : ''
			}"
			:border="border"
			@click="onChange('add')">
			+
		</view>
	</view>
</template>

<script>
export default {
	props: {
		value: {
			type: Number,
			default: 1
		},
		max: Number,
		min: {
			type: Number,
			default: 1
		},
		border: Boolean,
		input: Boolean,
		disabled: Boolean,
		step: {
			type: Number,
			default: 1
		}
	},
	data() {
		return {
			
		}
	},
	methods: {
		onChange(type) {
			if(this.disabled) return
			var value = this.value
			this.step = typeof this.step == Number ? this.step : Number(this.step)
			if(type == 'reduce'){
				value = value > this.min ? value-this.step : value
			}else{
				value = !this.max || (this.max && value < this.max) ? value+this.step : value
			}
			this.$emit('onChange',value)
		},
		getInput() {
			this.$emit('onChange',Number(this.value))
		},
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.number{
	display: inline-flex;
	align-items: center;
	&[border]{
		border: 2rpx solid $uni-border-color;
	}
	&[disabled]{
		opacity: 0.6;
	}
	&-icon{
		width: 50rpx;
		height: 50rpx;
		line-height: 50rpx;
		background: $uni-border-color;
		border-radius: 4rpx;
		font-size: 40rpx;
		text-align: center;
		&[border]{
			background: none;
		}
	}
	&-value{
		max-width: 100rpx;
		height: 50rpx;
		line-height: 50rpx;
		padding: 0rpx 10rpx;
		background: $uni-border-color;
		border-radius: 4rpx;
		text-align: center;
		margin: 0rpx 5rpx;
		&[border]{
			margin: 0rpx;
			border-left: 2rpx solid $uni-border-color;
			border-right: 2rpx solid $uni-border-color;
			background: none;
		}
	}
}
</style>
