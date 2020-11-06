<template>
	<view class="container">
		<view class="logo">logo</view>
		<!-- <image class="logo"></image> -->
		<view class="container">
			<block v-if="!register && !reset">
				<ame-input title="用户名" placeholder="请输入用户名"></ame-input>
				<ame-input title="密码" placeholder="请输入密码"></ame-input>
			</block>
			<block v-else>
				<ame-input title="手机号" placeholder="请输入手机号"></ame-input>
				<ame-input title="验证码" placeholder="请输入验证码" code></ame-input>
				<block>
					<ame-input title="密码" placeholder="请输入密码" :password="password" @click="password = !password" :icon="icon"></ame-input>
					<ame-input title="确认密码" placeholder="请再次输入" :password="password" @click="password = !password" :icon="icon"></ame-input>
				</block>
			</block>
			<view class="btn" v-if="!reset">
				<ame-button type="text" :text="register ? '已有账号，点击登录' : '还没有账号，点击注册'" @click="register = !register"></ame-button>
				<ame-button type="text" text="忘记密码？" @click="reset = true"></ame-button>
			</view>
			<view class="btn" v-else>
				<ame-button type="text" text="取消重置" @click="reset = false"></ame-button>
			</view>
			<ame-button type="info" percent="100"></ame-button>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		
	},
	watch: {
		password() {
			this.icon = this.password ? '/static/images/view.png' : '/static/images/hide.png'
		},
	},
	data() {
		return {
			register: false,
			reset: false,
			password: true,
			icon: '/static/images/view.png'
		}
	},
	methods: {
		
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.logo{
	width: 150rpx;
	height: 150rpx;
	line-height: 150rpx;
	background: $uni-color-info;
	border-radius: 100%;
	margin: 100rpx auto;
	font-size: 38rpx;
	color: #FFFFFF;
	text-align: center;
}
.input:nth-last-child(1){
	border-bottom: 2rpx solid $uni-border-color;
}
.btn{
	display: flex;
	justify-content: space-between;
	margin-bottom: 100rpx;
}
.button-text{
	margin: 0rpx;
}
</style>
