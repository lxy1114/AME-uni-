<template>
	<view class="container">
		<ame-nav :navIndex="navIndex" bgColor="#EEEEEE" :list="list" scroll move @navTab="navTab"></ame-nav>
	</view>
</template>

<script>
export default {
	data() {
		return {
			navIndex: 0,
			list: ['导航一','导航二','导航三','导航四']
		}
	},
	methods: {
		navTab(index) {
			this.navIndex = index
		},
	},
	onLoad() {
		
	}
}
</script>

<style lang="scss" scoped>

</style>
