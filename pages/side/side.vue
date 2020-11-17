<template>
	<view>
		<view class="container">
			<ame-cell title="左侧弹出" more @click="getShow"></ame-cell>
			<ame-cell title="右侧弹出" more @click="getShow('right')"></ame-cell>
		</view>
		<ame-side 
			:list="list" 
			:right="right" 
			@getClose="show = false" 
			@click="click"
			v-if="show">
		</ame-side>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			right: false,
			list: [{title: '导航一',icon: '/static/images/star.png'},
					{title: '导航二',icon: '/static/images/star.png'},
					{title: '导航三',icon: '/static/images/star.png'},
					{title: '导航四',icon: '/static/images/star.png'},
					{title: '导航五',icon: '/static/images/star.png'}]
		}
	},
	methods: {
		getShow(type) {
			this.show = true
			this.right = type == 'right'
		},
		click() {
			console.log('点击菜单')
		},
	},
	onLoad() {
		
	}
}
</script>

<style lang="scss" scoped>
.cell:nth-last-child(1){
	border-bottom: 2rpx solid $uni-border-color;
}
</style>
