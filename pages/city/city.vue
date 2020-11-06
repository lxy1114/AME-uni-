<template>
   <view class="container">
		<ame-search radius cancel border @getInput="getInput"></ame-search>
		<scroll-view scroll-y :scroll-into-view="id" @scroll="scroll" :style="'height:'+height+'px'">
			<view class="con" v-for="(item,index) in cityList" :key="index" :id="item.name == '★热门城市' ? 'hot' : item.name">
			  <view class="title">{{item.name}}</view>
			  <view class="con">
				 <view class="city"  v-for="(items,index1) in item.cities" :key="index1" @click="getClick(items)">{{items.name}}</view>
			  </view>
			</view>
		</scroll-view>
		<view class="letter">
			<text class="letter-text" v-for="(item,index) in letterList" :key="index" @click="goCity(item)">{{item}}</text>
		</view>
   </view>
</template>

<script>
import cityList from '@/ui/utils/city.js'

export default {
   data () {
		return {
			cityList: [],
			id: '',
			letterList: [],
			height: ''
		}
   },
   methods: {
		getClick(items) {
			uni.setStorageSync('city',items.name)
			uni.navigateBack()
		},
		goCity(item) {
			this.id = item == '★' ? 'hot' :item
		},
		scroll() {
			this.id = ''
		},
		getInput(value) {
			value = value.toUpperCase()
			if(!value){
				return this.cityList = cityList
			}
			var result = [{
				name: '搜索结果',
				cities: []
			}]
			cityList.map(item => {
				item.cities.map(items => {
					if(items.tags.indexOf(value) != -1){
						result[0].cities.push(items)
					}
				})
			})
			this.cityList = result
		},
   },
   onLoad() {
		this.height = wx.getSystemInfoSync().windowHeight
		this.cityList = cityList
		for(var i in cityList){
			var name = cityList[i].name == '★热门城市' ? '★' : cityList[i].name
			this.letterList.push(name)
		}
   }
}
</script>

<style lang="scss" scoped>
scroll-view{
  height: 800rpx;
}
.title{
  font-size: 26rpx;
  color: #333333;
  line-height: 48rpx;
  font-weight: bold;
  margin-top: 20rpx;
}
.city{
  display: block;
  width: 640rpx;
  border-bottom: 2rpx solid #EEEEEE;
  font-size: 26rpx;
  color: #666666;
  line-height: 88rpx;
}
.letter{
  position: fixed;
  right: 20rpx;
  top: 20%;
  &-text{
    display: block;
    line-height: 40rpx;
    margin: 0rpx auto;
    text-align: center;
    font-size: 24rpx;
    color: #666666;
  }
}

</style>
