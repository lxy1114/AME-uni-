<template>
	<view class="container">
		<!-- <view class="top">
			<ame-button type="text" text="查看参数" @click="show = true"></ame-button>
		</view> -->
		<view class="hor-title">基础用法</view>
		<ame-score :score="score" @setScore="setScore"></ame-score>
		<view class="hor-title">可半星</view>
		<ame-score :score="score" half @setScore="setScore"></ame-score>
		<view class="hor-title">显示分数</view>
		<ame-score :score="score" count @setScore="setScore"></ame-score>
		<view class="hor-title">禁用</view>
		<ame-score :score="score" disabled @setScore="setScore"></ame-score>
		<ame-params :list="list" @getParams="show = false" v-if="show"></ame-params>
	</view>
</template>

<script>
export default {
	data() {
		return {
			score: 2.5,
			show: false,
			list: [{name: 'score',exalpin: '分数',type: 'Number'},
					{name: 'half',exalpin: '可半星',type: 'Boolean',default: 'false'},
					{name: 'count',exalpin: '显示分数',type: 'Boolean',default: 'false'},
					{name: 'disabled',exalpin: '禁用',type: 'Boolean',default: 'false'}]
		}
	},
	methods: {
		setScore(e) {
			this.score = e
		},
	},
	onLoad() {
		
	}
}
</script>

<style lang="scss" scoped>

</style>
