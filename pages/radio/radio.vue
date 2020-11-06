<template>
	<view class="container">
		<view class="top">
			<ame-button type="text" text="查看参数" @click="show = true"></ame-button>
		</view>
		<view class="hor-title">基础用法</view>
		<ame-radio label="1" :value="value"></ame-radio>
		<ame-radio label="2" :value="value"></ame-radio>
		<view class="hor-title">水平排列</view>
		<ame-radio inline label="1" :value="value" @getCheck="getCheck"></ame-radio>
		<ame-radio inline label="2" :value="value" @getCheck="getCheck"></ame-radio>
		<view class="hor-title">禁用</view>
		<ame-radio label="2" :value="value" disabled></ame-radio>
		<ame-params :list="list" @getParams="show = false" v-if="show"></ame-params>
	</view>
</template>

<script>
export default {
	data() {
		return {
			value: 1,
			show: false,
			list: [{name: 'src',exalpin: '自定义图片',type: 'String'},
					{name: 'text',exalpin: '选项文字',type: 'String',default: '选项'},
					{name: 'inline',exalpin: '水平排列',type: 'Boolean',default: 'false'},
					{name: 'disabled',exalpin: '禁用',type: 'Boolean',default: 'false'},
					{name: 'label',exalpin: '绑定值',type: 'String'},
					{name: 'value',exalpin: '选中值',type: 'String'}]
		}
	},
	methods: {
		getCheck(value) {
			this.value = value
		},
	},
	onLoad() {
		
	}
}
</script>

<style lang="scss" scoped>

</style>
