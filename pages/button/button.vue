<template>
	<view 
		class="container" 
		:style="show ? 'position: fixed' : ''">
		<view class="top">
			<ame-button type="text" text="查看参数" @click="show = true"></ame-button>
		</view>
		<!-- <view class="hor-title">基础按钮</view>
		<ame-button></ame-button>
		<ame-button type="success"></ame-button>
		<ame-button type="info"></ame-button>
		<ame-button type="danger"></ame-button>
		<ame-button type="warning"></ame-button>
		<ame-button type="default"></ame-button>
		<view class="hor-title">朴素按钮</view>
		<ame-button simple></ame-button>
		<ame-button type="success" simple></ame-button>
		<ame-button type="info" simple></ame-button>
		<ame-button type="danger" simple></ame-button>
		<ame-button type="warning" simple></ame-button>
		<ame-button type="default" simple></ame-button>
		<view class="hor-title">文字按钮</view>
		<ame-button type="text"></ame-button>
		<ame-button type="text" disabled></ame-button>
		<view class="hor-title">自定义百分比</view>
		<ame-button percent="100"></ame-button>
		<view class="hor-title">尺寸</view>
		<ame-button></ame-button>
		<ame-button size="medium"></ame-button>
		<ame-button size="small"></ame-button>
		<view class="hor-title">圆角按钮</view>
		<ame-button raudio></ame-button>
		<view class="hor-title">自定义尺寸</view>
		<ame-button width="150" height="36"></ame-button>
		<view class="hor-title">禁用状态</view>
		<ame-button disabled></ame-button>
		<ame-button simple disabled></ame-button> -->
		<view class="hor-title">自定义颜色</view>
		<ame-button bgColor="red"></ame-button>
		<ame-params :list="list" v-if="show" @getParams="show = false"></ame-params>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			list: [{name: 'text',exalpin: '按钮文字',type: 'String',default: '提交'},
					{name: 'type',exalpin: '类型',type: 'String',value: 'success、warning、danger、info、default、text',default: 'primary'},
					{name: 'percent',exalpin: '自定义宽度（%）',type: 'String',default: ''},
					{name: 'size',exalpin: '尺寸',type: 'String',value: 'medium、small',default: ''},
					{name: 'raudio',exalpin: '圆角',type: 'Boolean',default: 'false'},
					{name: 'width',exalpin: '自定义宽度（px）',type: 'String',default: ''},
					{name: 'height',exalpin: '自定义高度（px）',type: 'String',default: ''},
					{name: 'disabled',exalpin: '禁用状态',type: 'Boolean',default: 'false'},
					{name: 'simple',exalpin: '朴素按钮',type: 'Boolean',default: 'false'}]
		}
	},
	methods: {
		
	},
	onLoad() {
		 
	}
}
</script>

<style lang="scss" scoped>

</style>
