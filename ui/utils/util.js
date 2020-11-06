var textReg = /^[\u4e00-\u9fa5]+$/;
var mobilereg = /^[1][3,4,5,7,8,9][0-9]{9}$/;
var numberReg = /^\d+$|^\d+[.]?\d+$/;
var specialReg = new RegExp("[`~!@#$^&*()=|{}':;',\\[\\].<>《》/?~！@#￥……&*（）——|{}【】‘；：”“'。，、？ ]");
var regIdNo = /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/;
export default {
	navigateTo(url) {
		uni.navigateTo({
			url: '/pages'+url+url
		})
	},
	test(require,type,value,text,test) {
		if((require && !value) || (test && !value)){
			return '请输入'+text
		}
		switch(type){
			case 'text':
				if(value && !textReg.test(value)) return text+'有误，请重新输入';
				break;
			case 'number':
				if(value && !Number(value)) return text+'有误，请重新输入';
				break;
			case 'phone':
				if(value && !mobilereg.test(value)) return text+'有误，请重新输入';
				break;
			case 'idcard':
				if(value && !regIdNo.test(value)) return text+'有误，请重新输入';
				break;
			case 'bankcard':
				if(value && value.length !== 12 && value.length !== 15 && value.length !== 16 && value.length !== 19) return text+'有误，请重新输入';
				break;
			default:
				return true
		}
	},
}