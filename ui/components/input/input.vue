<template>
	<view class="input" ref="input">
		<view class="input-title">
			<view class="request" v-if="request">*</view>
			{{title}}
		</view>
		<view 
			class="input-right"
			:class="[{
				'code': code
			}]">
			<input 
				class="input-right-text" 
				:placeholder="placeholder" 
				placeholder-class="placeholder"
				:disabled="disabled"
				:type="password ? 'password' : ''"
				style="border:none;outline: none;"
				:style="left || code ? 'text-align:left' : ''"
				@blur="getTest"
				v-model="value"
				v-if="!area"/>
			<textarea 
				class="textarea"
				:class="{'textarea1': count}"
				:placeholder="placeholder"
				auto-height="true"
				placeholder-class="placeholder"
				:maxlength="maxlength"
				v-model="textarea"
				v-if="area">
			</textarea>
			<view class="count" v-if="count">{{textarea.length}}{{maxlength != -1 ? '/'+maxlength : ''}}</view>
			<image 
				class="input-right-more"
				:class="[{
					'view': icon
				}]"
				:src="icon || '/static/images/more.png'" 
				v-if="more" 
				@click="click">
			</image>
		</view>
		<view class="msg" v-if="msg">{{msg}}</view>
		<ame-button text="发送验证码" type="success" height="30" v-if="code"></ame-button>
	</view>
</template>

<script>
export default {
	props: {
		//标题
		title: {
			type: String,
			default: '标题'
		},
		//提示文字
		placeholder: {
			type: String,
			default: '请输入内容'
		},
		//显示箭头
		more: Boolean,
		//禁用、只读
		disabled: Boolean,
		//明文、密文
		password: Boolean,
		//自定义图标
		icon: String,
		//input左对齐
		left: Boolean,
		//验证码模式
		code: Boolean,
		//必填项
		request: Boolean,
		//校验类型
		reg: String,
		//文本域
		area: Boolean,
		//最大输入长度
		maxlength: {
			type: String,
			default: '-1'
		},
		//字数统计
		count: Boolean,
		//是否校验
		test: Boolean
	},
	data() {
		return {
			value: '',
			msg: '',
			textarea: '',
			userName: ''
		}
	},
	methods: {
		click() {
			this.$emit('click')
		},
		getTest() {
			//request,reg,test任意一项为true都会开启校验
			if(!this.request && !this.reg && !this.test) return
			this.msg = this.$utils.test(this.request,this.reg,this.value,this.title,this.test)
			this.$emit('getTest')
		},
	},
	mounted() {
		console.log(this.$props)
	}
}
</script>

<style lang="scss" scoped>
.input{
	display: flex;
	align-items: flex-start;
	justify-content: space-between;
	width: 100%;
	min-height: 100rpx;
	border-bottom: 2rpx solid $uni-border-color;
	font-size: 28rpx;
	color: #333333;
	position: relative;
	&-title{
		line-height: 100rpx;
	}
	&-right{
		display: flex;
		align-items: center;
		justify-content: flex-end;
		width: 75%;
		min-height: 100rpx;
		color: #666666;
		&-text{
			width: 90%;
			text-align: right;
		}
		&-more{
			width: 24rpx;
			height: 24rpx;
			margin-left: 20rpx;
		}
	}
}
.input:nth-last-child(1){
	border: none;
}
.view{
	width: 36rpx;
	height: 36rpx;
}
.code{
	width: 50%;
}
.button{
	margin: 18rpx 0rpx;
}
.msg{
	font-size: 20rpx;
	color: red;
	position: absolute;
	bottom: -36rpx;
	left: 0rpx;
}
.textarea{
	padding: 20rpx 0rpx;
}
.textarea.textarea1{
	margin: 10rpx 0rpx 50rpx;
}
.count{
	position: absolute;
	bottom: 10rpx;
	right: 0rpx;
}
</style>
