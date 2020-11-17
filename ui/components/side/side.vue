<template>
	<view>
		<view class="mask" @click="getClose"></view>
		<view 
			class="side container"
			:class="{
				right: right
			}">
			<view 
				class="side-list"
				v-for="(item,index) in list" :key="index">
				<ame-cell 
					:title="item.title" 
					:text="item.text" 
					:icon="item.icon" 
					more 
					side
					@click="click"></ame-cell>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		//菜单列表
		list: Array,
		//右侧弹出
		right:Boolean
	},
	data() {
		return {
			
		}
	},
	methods: {
		getClose() {
			this.$emit('getClose')
		},
		click() {
			this.$emit('click')
		},
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
@keyframes left{
	from{left: -250rpx;}
	to{left: 0rpx;}
}
@keyframes right{
	from{right: -250rpx;}
	to{right: 0rpx;}
}
.side{
	width: 250rpx;
	height: 100%;
	box-sizing: border-box;
	background: #FFFFFF;
	box-shadow: 10rpx 10rpx 10rpx rgba(0,0,0,0.3);
	position: absolute;
	top: 0rpx;
	left: 0rpx;
	z-index: 99;
	animation: left 0.5s;
}
.side.right{
	left: auto;
	right: 0rpx;
	animation: right 0.5s;
}
</style>
