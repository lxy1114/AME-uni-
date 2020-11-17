<template>
	<view class="container">
		<ame-table :nav="nav" :list="list"></ame-table>
	</view>
</template>

<script>
export default {
	data() {
		return {
			nav: {name: '姓名',phone: '手机号',idcard: '身份证号',bank: '银行卡'},
			list: [{name: '姓名111',phone: '手机号222',idcard: '身份证号33333333',bank: '银行卡444444444'},
					{name: '姓名111',phone: '手机号2222222222222222222222',idcard: '身份证号333',bank: '银行卡444444444'},
					{name: '姓名111',phone: '手机号222',idcard: '身份证号333',bank: '银行卡444444444'}]
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
