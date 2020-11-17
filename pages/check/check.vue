<template>
	<view class="container">
		<!-- <view class="top">
			<ame-button type="text" text="查看参数" @click="show = true"></ame-button>
		</view> -->
		<view class="hor-title">基础用法</view>
		<ame-check label="1" @getCheck="getCheck" :list="checkList"></ame-check>
		<ame-check label="2" @getCheck="getCheck" :list="checkList"></ame-check>
		<ame-check label="3" @getCheck="getCheck" :list="checkList"></ame-check>
		<ame-check label="4" @getCheck="getCheck" :list="checkList"></ame-check>
		<view class="hor-title">水平排列</view>
		<ame-check inline label="1" @getCheck="getCheck" :list="checkList"></ame-check>
		<ame-check inline label="2" @getCheck="getCheck" :list="checkList"></ame-check>
		<view class="hor-title">禁用</view>
		<ame-check disabled label="2" @getCheck="getCheck" :list="checkList"></ame-check>
		<ame-params :list="list" @getParams="show = false" v-if="show"></ame-params>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			checkList: ['1'],
			list: [{name: 'src',exalpin: '自定义图片',type: 'String'},
					{name: 'text',exalpin: '选项文字',type: 'String',default: '选项'},
					{name: 'inline',exalpin: '水平排列',type: 'Boolean',default: 'false'},
					{name: 'disabled',exalpin: '禁用',type: 'Boolean',default: 'false'},
					{name: 'label',exalpin: '绑定值',type: 'String'},
					{name: 'list',exalpin: '选值',type: 'String'}]
		}
	},
	methods: {
		getCheck(label) {
			var index = this.checkList.indexOf(label)
			if(index != -1){
				this.checkList.splice(index,1)
			}else{
				this.checkList.push(label)
			}
			console.log(this.checkList)
		}
	},
	onLoad() {
		
	}
}
</script>

<style lang="scss" scoped>

</style>
