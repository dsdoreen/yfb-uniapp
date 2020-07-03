//发送请求的次数
let ajaxTimes = 0;
const request = (options) => {
	ajaxTimes++;
	//显示loading
	uni.showLoading({
		title: '玩命加载中...',
		mask: true
	})

	//定义公共的接口路径
	const baseUrl = 'https://api-hmugo-web.itheima.net/api/public/v1';
	return new Promise((resolve, reject) => {
		uni.request({
			url: baseUrl + options.url,
			data: options.data || {},
			method: options.method || 'GET',
			success: (res) => {
				
				resolve(res);
			},
			fail: (err) => {
				uni.showToast({
					icon:'none',
					title: '请求接口失败'
				})
				reject(err);
			},
			complete: () => {
				ajaxTimes--;
				if (ajaxTimes === 0) {
					uni.hideLoading({
						success: (res) => {},
					})
				}
			}
		})
	})

}
export default request;