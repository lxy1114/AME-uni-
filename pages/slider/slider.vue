<template>
	<view class="container">
		<!-- <view class="top">
			<ame-button type="text" text="查看参数" @click="show = true"></ame-button>
		</view> -->
		<view class="hor-title">基础用法</view>
		<ame-slider :value="value" @onChange="onChange"></ame-slider>
		<view class="hor-title">双滑块</view>
		<ame-slider :value="value" :nextValue="nextValue" range @onChange="onChange"></ame-slider>
		<view class="hor-title">禁用</view>
		<ame-slider :value="value" disabled @onChange="onChange"></ame-slider>
		<ame-params :list="list" @getParams="show = false" v-if="show"></ame-params>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: 10,
			nextValue: 50,
			show: false,
			list: [{name: 'value',exalpin: '取值',type: 'Number',default: '0'},
					{name: 'nextValue',exalpin: '取值(大)',type: 'Number'},
					{name: 'duration',exalpin: '最大值',type: 'Number',default: '100'},
					{name: 'max',exalpin: '最大值',type: 'String',default: '360'},
					{name: 'min',exalpin: '最小值',type: 'String',default: '15'}]
		}
	},
	methods: {
		onChange(data) {
			this.value = data.value
			this.nextValue = data.nextValue
		},
	},
	onLoad() {
		
	}
}
</script>

<style lang="scss" scoped>

</style>
