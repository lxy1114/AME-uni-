<template>
	<view 
		class="container"
		:style="show ? 'position: fixed' : ''">
		<!-- <view class="top">
			<ame-button type="text" text="查看参数" @click="show = true"></ame-button>
		</view> -->
		<view class="hor-title">基础用法</view>
		<view class="card">
			<ame-input></ame-input>
			<ame-input more></ame-input>
		</view>
		<view class="hor-title">禁用</view>
		<view class="card">
			<ame-input more disabled></ame-input>
		</view>
		<view class="hor-title">密码</view>
		<view class="card">
			<ame-input title="密码" placeholder="请输入密码" more password></ame-input>
			<ame-input title="密码" placeholder="请输入密码" more :password="password" @click="password = !password" :icon="icon"></ame-input>
		</view>
		<view class="hor-title">对齐方式</view>
		<view class="card">
			<ame-input more password left></ame-input>
		</view>
		<view class="hor-title">验证码</view>
		<view class="card">
			<ame-input title="验证码" placeholder="请输入验证码" code></ame-input>
		</view>
		<view class="hor-title">校验</view>
		<view class="card">
			<ame-input title="中文" placeholder="请输入中文" more reg="text" test></ame-input>
			<ame-input title="数字" placeholder="请输入数字" more request reg="number" test></ame-input>
			<ame-input title="手机号" placeholder="请输入手机号" more request reg="phone" test></ame-input>
			<ame-input title="身份证号" placeholder="请输入身份证号" more request reg="idcard" test></ame-input>
			<ame-input title="银行卡号" placeholder="请输入银行卡号" more request reg="bankcard" test></ame-input>
		</view>
		<view class="hor-title">文本域</view>
		<view class="card">
			<ame-input area></ame-input>
		</view>
		<view class="hor-title">字数统计</view>
		<view class="card">
			<ame-input area maxlength="40" count></ame-input>
		</view>
		<ame-params v-if="show" @getParams="show = false" :list="list"></ame-params>
	</view>
</template>

<script>
export default {
	data() {
		return {
			show: false,
			list: [{name: 'title',exalpin: '标题',type: 'String'},
					{name: 'placeholder',exalpin: 'input提示文字',type: 'String',default: '请输入内容'},
					{name: 'more',exalpin: '更多',type: 'Booolean',default: 'false'},
					{name: 'disabled',exalpin: '禁用',type: 'Booolean',default: 'false'},
					{name: 'password',exalpin: '明/密文',type: 'Booolean',default: 'false'},
					{name: 'icon',exalpin: '自定义图标',type: 'String',default: '箭头'},
					{name: 'left',exalpin: '对齐方式',type: 'Booolean',default: 'right'},
					{name: 'code',exalpin: '验证码',type: 'Booolean',default: 'false'},
					{name: 'request',exalpin: '必填',type: 'Booolean',default: 'false'},
					{name: 'reg',exalpin: '校验类型',type: 'String',default: ''},
					{name: 'test',exalpin: '是否校验',type: 'Boolean',default: 'false'},
					{name: 'area',exalpin: '文本域',type: 'Booolean',default: 'false'},
					{name: 'maxlength',exalpin: '最大输入长度',type: 'String',default: '-1'},
					{name: 'count',exalpin: '字数统计',type: 'Booolean',default: 'false'}],
			password: true,
			icon: '/static/images/view.png'
		}
	},
	watch: {
		password() {
			this.icon = this.password ? '/static/images/view.png' : '/static/images/hide.png'
		},
	},
	methods: {
		
	},
	onLoad() {
		
	}
}
</script>

<style lang="scss" scoped>

</style>
