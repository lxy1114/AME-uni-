<template>
	<view 
		class="table"
		:style="{
			display: !row ? 'flex' : ''
		}">
		<view 
			class="nav"
			:class="{
				'row': row,
				'tr': !row
			}">
			<view 
				:class="[
					`tr-${index}`,
					{
						'tr-row': row,
						'tr-text': !row
					}
				]"
				:style="{
					height: form[index] ? form[index]*2+'rpx' : '',
					width: row ? 100/(Object.keys(nav).length)+'%' : ''
				}"
				v-for="(item,index) in nav" 
				:key="index">
				{{item}}
			</view>
		</view>
		<view 
			class="scroll"
			:style="{
				width: !row ? '460rpx' : '',
				overflowX: !row ? 'scroll' : ''
			}">
			<view 
				v-for="(item,index) in list" 
				:key="index"
				:class="{
					'row': row,
					'tr': !row
				}">
				<view
					:class="[
						`tr-${index1}`,
						{
							'tr-row': row,
							'tr-text': !row
						}
					]"
					:style="{
						height: form[index1] ? form[index1]*2+'rpx' : '',
						width: row ? 100/(Object.keys(item).length)+'%' : ''
					}"
					v-for="(items,index1) in item" 
					:key="index1">
					{{items}}
				</view>
			</view>
		</view>
	</view>
</template>

<script>
export default {
	props: {
		nav: Object,
		list: Array,
		row: {
			type: Boolean,
			default: false
		}
	},
	data() {
		return {
			form: {},
			top: 0
		}
	},
	mounted() {
		this.top = uni.getSystemInfoSync().windowTop
		console.log(top)
		if(this.row) return
		for(var i in this.nav){
			var className = '.tr-'+i
			const query = uni.createSelectorQuery().in(this);
			query.selectAll(className).boundingClientRect(data => {
				var max = data[0].height
				data.map(item => {
					if(item.height > max){
						max = item.height
					}
				})
				this.form[i] = max
			  this.$forceUpdate()
			}).exec();
		}
	}
}
</script>

<style lang="scss" scoped>
.table{
	white-space: nowrap;
	position: relative;
}
.tr{
	display: inline-block;
	width: 230rpx;
	border-right: 2rpx solid #EEEEEE;
	&-text{
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		white-space: normal;
		word-break: break-all;
		text-align: center;
		border-bottom: 2rpx solid #EEEEEE;
		vertical-align: middle;
	}
	&-text:nth-last-child(1){
		border-bottom: none;
	}
}
.scroll{
	display: inline-block;
	overflow-x: scroll;
	border: 2rpx solid #EEEEEE;
}
.tr.nav{
	border: 2rpx solid #EEEEEE;
	border-right: none;
}
.row{
	display: block;
	background: #FFFFFF;
	border: 2rpx solid #EEEEEE;
	border-bottom: none;
	.tr-row{
		display: inline-block;
		width: 230rpx;
		height: 100%;
		box-sizing: border-box;
		padding: 20rpx;
		white-space: normal;
		word-break: break-all;
		vertical-align: middle;
		text-align: center;
	}
}
.scroll .row:nth-child(1){
	border-style: none;
}
</style>
