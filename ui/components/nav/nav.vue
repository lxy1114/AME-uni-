<template>
	<view 
		class="nav"
		:scroll="scroll"
		:style="{
			background: bgColor
		}">
		<view 
			class="nav-text"
			:class="{
				'text': !scroll,
				'active': navIndex == index && !move,
				'move': navIndex == index && move && !bgColor,
				'scroll': scroll,
				'bg-active': navIndex == index && bgColor
			}"
			v-for="(item,index) in list" :key="index"
			:style="{
				width: !scroll ? 100/list.length+'%' : '',
				fontSize: (fontSize*2)+'rpx',
				lineHeight: (height*2)+'rpx'
			}"
			@click="navTab(index)">
			{{item}}
		</view>
		<view 
			class="line"
			:style="{
				transform: 'translateX('+((172-150)/2+(172*this.navIndex))+'rpx)' 
			}"
			v-if="move && !bgColor">
		</view>
		<view
			class="bg"
			:style="{
				background: activeColor,
				transform: 'translateX('+172*this.navIndex+'rpx)' 
			}"
			v-if="bgColor">
		</view>
	</view>
</template>

<script>
export default {
	props: {
		list: Array,
		height: {
			type: String,
			default: '40'
		},
		scroll: Boolean,
		fontSize: {
			type: String,
			default: '16'
		},
		navIndex: Number,
		move: Boolean,
		bgColor: String,
		activeColor: {
			type: String,
			default: '#007aff'
		}
	},
	data() {
		return {
			
		}
	},
	methods: {
		navTab(index) {
			this.$emit('navTab',index)
		},
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.nav{
	border-bottom: 2rpx solid $uni-border-color;
	position: relative;
	&[scroll]{
		white-space: nowrap;
		overflow-x: scroll;
	}
	&-text{
		display: inline-block;
		width: 200rpx;
		text-align: center;
		position: relative;
		z-index: 9;
	}
}
.text{
	white-space: nowrap;
	overflow: hidden;
	text-overflow: ellipsis;
}
.active,.move{
	color: $uni-color-primary;
}
.text.active::after{
	content: '';
	display: block;
	width: 80%;
	height: 4rpx;
	background: $uni-color-primary;
	position: absolute;
	bottom: 0rpx;
	left: 10%;
}
.scroll{
	width: 172rpx;
	white-space: nowrap;
}
.line{
	width: 150rpx;
	height: 4rpx;
	background: $uni-color-primary;
	position: absolute;
	bottom: 0rpx;
	transition: transform 0.3s;
}
.bg{
	width: 172rpx;
	height: 100%;
	opacity: 0.5;
	position: absolute;
	top: 0rpx;
	left: 0rpx;
	transition: transform 0.3s;
}
@keyframes color{
	from{color: #000}
	to{color: #FFF}
}
.bg-active{
	color: #FFFFFF;
	animation: color 0.3s;
}
</style>
