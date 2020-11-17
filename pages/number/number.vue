<template>
	<view class="container">
		<ame-number :value="value" input border @onChange="onChange"></ame-number>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: 1
		}
	},
	methods: {
		onChange(value) {
			this.value = value
		},
	},
	onLoad() {
		
	}
}
</script>

<style lang="scss" scoped>
.container{
	padding: 30rpx 60rpx;
}
</style>
