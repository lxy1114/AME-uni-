<template>
	<view class="score">
		<view class="score-list" v-for="(item,index) in 5" :key="index" @click="setScore(index)">
			<block v-if="!half">
				<image class="star" src="/static/images/star.png" v-if="index+1 > score"></image>
				<image class="star" src="/static/images/star-1.png" v-else></image>
			</block>
			<block v-else>
				<block>
					<image class="half" src="/static/images/star-1-1.png" v-if="index+1 > Math.ceil(score)" @click.stop="setHalf(index,'left')"></image>
					<image class="half" src="/static/images/star-2-1.png" v-if="(index <= first && second) || (index+1 <= score && !second)" @click.stop="setHalf(index,'left')"></image>			
				</block>
				<block>
					<image class="half" src="/static/images/star-2-2.png" v-if="(index+1 <= score && !second) || (index < first && second)" @click.stop="setHalf(index,'right')"></image>					
					<image class="half" src="/static/images/star-1-2.png" v-else @click.stop="setHalf(index,'right')"></image>
				</block>
			</block>
		</view>
		<view class="count" v-if="count">{{score}}</view>
	</view>
</template>

<script>
export default {
	props: {
		//分数
		score: {
			type: Number,
			default: 3.5
		},
		//是否可半星
		half: Boolean,
		//是否显示分数
		count: Boolean,
		//是否禁用
		disabled: Boolean
	},
	data() {
		return {
			
		}
	},
	computed: {
		first() {
			var score = String(this.score)
			var first = score.indexOf('.') != -1 ? first = score.split('.')[0] : score
			return first
		},
		second() {
			var score = String(this.score)
			var second = score.indexOf('.') != -1 ? second = score.split('.')[1] : 0
			return second
		},
	},
	methods: {
		setScore(index) {
			if(this.disabled) return
			this.$emit('setScore',index+1)
		},
		setHalf(index,type){
			if(this.disabled) return
			var score = type == 'left' ? String(index)+'.5' : String(index+1)
			this.$emit('setScore',Number(score))
		}
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.score{
	display: flex;
	align-items: center;
	&-list{
		margin-right: 15rpx;
	}
}
.star{
	width: 38rpx;
	height: 36rpx;
}
.half{
	width: 19rpx;
	height: 36rpx;
}
.count{
	color: red;
	font-weight: bold;
	line-height: 32rpx;
	margin-left: 20rpx;
}
</style>
