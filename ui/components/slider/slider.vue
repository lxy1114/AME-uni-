<template>
	<view 
		class="slider"
		:style="{
			background: bgColor
		}"
		@click="setValue">
		<view 
			class="slider-line"
			:style="{
				width: range ? ((nextValue-value)/duration)*100+'%' : (value/duration)*100+'%',
				background: lineColor,
				left: range ? (value/duration)*100+'%' : 0,
				opacity: disabled ? 0.3 : 1
			}">
		</view>
		<view 
			class="slider-radius"
			:style="{
				width: size*2+'rpx',
				height: size*2+'rpx',
				background: radiusColor,
				marginTop: -size+'rpx',
				left: (value/duration)*100+'%',
				marginLeft: -size+'rpx'
			}"
			data-index="0"
			@touchmove="onMove">
			<view 
				class="value" 
				:style="{
					top: -(size+2)*2+'rpx'
				}">
				{{value}}
			</view>
		</view>
		<view
			class="slider-radius"
			:style="{
				width: size*2+'rpx',
				height: size*2+'rpx',
				background: radiusColor,
				marginTop: -size+'rpx',
				left: (nextValue/duration)*100+'%',
				marginLeft: -size+'rpx'
			}"
			data-index="1"
			@touchmove="onMove"
			v-if="range">
			<view 
				class="value"
				:style="{
					top: -(size+2)*2+'rpx'
				}">
				{{nextValue}}
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		value: {
			type: Number,
			default:0
		},
		nextValue: Number,
		duration: {
			type: Number,
			default: 100
		},
		max: {
			type: String,
			default: '360'
		},
		min: {
			type: String,
			default: '15'
		},
		bgColor: {
			type: String,
			default: '#c0c0c0'
		},
		lineColor: {
			type: String,
			default: '#007aff'
		},
		size: {
			type: Number,
			default: 16
		},
		radiusColor: {
			type: String,
			default: '#FFFFFF'
		},
		range: Boolean,
		disabled: Boolean
	},
	data() {
		return {
			
		}
	},
	methods: {
		setValue(e) {
			if(this.range || this.disabled) return
			const { x } = e.detail
			var value = (x-this.min)*this.duration/(this.max-this.min)
			this.$emit('onChange',{ value })
		},
		onMove(e) {
			if(this.disabled) return
			const { clientX } = e.touches[0]
			const { index } = e.currentTarget.dataset
			if(clientX <= this.min || clientX >= this.max) return
			if(!this.range){
				var value = parseInt((clientX-this.min)*this.duration/(this.max-this.min))
			}else{
				var value = index == 0 ? parseInt((clientX-this.min)*this.duration/(this.max-this.min)) : this.value
				var nextValue = index == 1 ? Math.ceil((clientX-this.min)*this.duration/(this.max-this.min)) : this.nextValue
			}			
			this.$emit('onChange',{
				value,
				nextValue
			})
		},
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.slider{
	width: 100%;
	height: 4rpx;
	border-radius: 30rpx;
	margin: 60rpx auto;
	position: relative;
	&-line{
		height: 100%;
		position: absolute;
		top: 0rpx;
	}
	&-radius{
		border-radius: 100%;
		box-shadow: 0 2rpx 4rpx rgba(0, 0, 0, 0.5);
		position: absolute;
		top: 50%;
	}
}
.value{
	font-size: 24rpx;
	color: $uni-text-color-grey;
	position: absolute;
	left: 0%;
}
</style>
