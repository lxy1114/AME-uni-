<template>
	<view class="box">
		<view class="city" v-if="city" @click="$utils.navigateTo('/city')">
			<view class="city-text">{{city}}</view>
			<image class="city-icon" :src="cityIcon"></image>
		</view>
		<view 
			class="search"
			:class="{
				search1: text,
				search2: city,
				radius: radius,
				border: border
			}">
			<image class="search-icon" src="/static/images/search.png"></image>
			<input 
				class="search-input"
				:style="cancel ? 'width: 80%;margin-right: 20rpx' : ''"
				:placeholder="placeholder" 
				placeholder-class="placeholder"
				v-model="value"
				@confirm="getSearch"
				@input="getInput"/>
			<image 
				class="search-cancel" 
				src="/static/images/cancel.png" 
				v-if="cancel" 
				@click="getReset">
			</image>
		</view>
		<view class="text" @click="getReset" v-if="text">{{text}}</view>
	</view>
</template>

<script>
export default {
	props: {
		placeholder: {
			type: String,
			default: '请输入'
		},
		//重置按钮
		cancel: Boolean,
		//框后文字
		text: String,
		//圆角
		radius: Boolean,
		//城市选择
		city: String,
		//边框
		border: Boolean
	},
	data() {
		return {
			value: '',
			cityIcon: '/static/images/down.png'
		}
	},
	methods: {
		getSearch() {
			this.$emit('getSearch',this.value)
		},
		getInput() {
			this.$emit('getInput',this.value)
		},
		getReset() {
			if(this.text == '取消' || this.cancel){
				this.value = ''
			}
			this.getSearch()
			this.getInput()
		},
	},
	created() {
		
	}
}
</script>

<style lang="scss" scoped>
.box{
	display: flex;
	align-items: center;
	justify-content: space-between;
	margin-bottom: 30rpx;
}
.search{
	display: flex;
	align-items: center;
	width: 100%;
	background: #f5f5f5;
	border-radius: 12rpx;
	padding: 20rpx;
	&-icon{
		width: 40rpx;
		height: 40rpx;
		margin-right: 20rpx;
	}
	&-input{
		width: 90%;
	}
	&-cancel{
		width: 40rpx;
		height: 40rpx;
	}
}
.search.search1{
	width: 80%;
}
.search.search2{
	width: 75%;
}
.search.radius{
	border-radius: 60rpx;
}
.search.border{
	background: none;
	border: 2rpx solid $uni-border-color;
}
.text{
	margin-left: 30rpx;
}
.city{
	display: flex;
	align-items: center;
	margin-right: 0rpx;
	&-text{
		max-width: 100rpx;
		white-space: nowrap;
		overflow: hidden;
		text-overflow: ellipsis;
	}
	&-icon{
		width: 20rpx;
		height: 20rpx;
		margin-left: 10rpx;
	}
}
</style>
