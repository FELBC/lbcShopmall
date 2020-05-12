import Mock from 'mockjs'

Mock.setup({
  timeout: 1000
})

// 登录
Mock.mock(/user\/login/, 'post', {
	"status":0,
	"msg":"登录成功",
	"data":{
			"id":7,
			"username":"lbc",
			"password":"",
			"email":"lbc@163.com",
			"phone":null,
			"question":null,
			"answer":null,
			"role":0,
			"createTime":1567429971000,
			"updateTime":1567429971000
	}
});

// 退出登录
Mock.mock(/user\/logout/, 'post', {
	"status":0,
	"msg":"退出成功",
});

// 注册
Mock.mock(/user\/register/, 'post', {
	"status":0,
	"msg":"注册成功"
});

// 产品列表
Mock.mock(/products(|\?\S*)$/, 'get', {
	"status":0,
	"data":{
			"total":19,
			"list":[
					{
							"id":30,
							"categoryId":100012,
							"name":"小米CC9",
							"subtitle":"3200万+4800万 前后双旗舰相机",
							"mainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png",
							"price":1799,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":31,
							"categoryId":100012,
							"name":"小米CC9e",
							"subtitle":"3200万+4800万 前后双旗舰相机",
							"mainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png",
							"price":1299,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":32,
							"categoryId":100012,
							"name":"小米CC9 美图定制版",
							"subtitle":"直出超质感美颜",
							"mainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/b02f50c9dd2e01c139a06a12502755ef.png",
							"price":2599,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":33,
							"categoryId":100012,
							"name":"小米9",
							"subtitle":"小米9 战斗天使",
							"mainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png",
							"price":2599,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":34,
							"categoryId":100012,
							"name":"小米9 Pro 5G",
							"subtitle":"快的不只是5G",
							"mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/41c566d825a3ae3b5751a78d4c7cffdb.png",
							"price":3699,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":35,
							"categoryId":100012,
							"name":"小米MIX Alpha",
							"subtitle":"5G环绕屏概念手机",
							"mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/5d19da60f9f62eb2aa5dcdbd7df19f0f.png",
							"price":19999,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":36,
							"categoryId":100012,
							"name":"Redmi Note 8 Pro",
							"subtitle":"6400万全场景四摄",
							"mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6f2493e6c6fe8e2485c407e5d75e3651.jpg",
							"price":1399,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":37,
							"categoryId":100012,
							"name":"Redmi Note 8",
							"subtitle":"千元4800万四摄",
							"mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg",
							"price":999,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":38,
							"categoryId":100012,
							"name":"Redmi K20 Pro 尊享版",
							"subtitle":"骁龙855 Plus， 弹出全面屏",
							"mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/8737a33c78a94bc36afb860ab23b3939.jpg",
							"price":2699,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":39,
							"categoryId":100012,
							"name":"Redmi Note 7",
							"subtitle":"4800万拍照千元机",
							"mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/0ce61b71e2f81df62bd0c05aaa901d22.jpg",
							"price":1099,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":40,
							"categoryId":100012,
							"name":"Redmi 7 ",
							"subtitle":"4000mAh超长续航",
							"mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/9aab8a7fa9005ef918c9aa2d5f17c806.jpg",
							"price":699,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":41,
							"categoryId":100012,
							"name":"Redmi 7A",
							"subtitle":"小巧大电量 持久流畅",
							"mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/3c1af9783bdc53ed843af5655ca92009.jpg",
							"price":579,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":42,
							"categoryId":100012,
							"name":"小米CC9",
							"subtitle":"3200万自拍，4800万三摄",
							"mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/bd25cc614a670f4d5546fe82e239ef86.jpg",
							"price":1799,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					},
					{
							"id":43,
							"categoryId":100012,
							"name":"小米9 Pro 5G",
							"subtitle":"5G双卡全网通，骁龙855Plus",
							"mainImage":"https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg",
							"price":3699,
							"status":1,
							"imageHost":"http://img.springboot.cn"
					}
			],
			"pageNum":1,
			"pageSize":14,
			"size":14,
			"startRow":1,
			"endRow":14,
			"pages":2,
			"prePage":0,
			"nextPage":2,
			"isFirstPage":true,
			"isLastPage":false,
			"hasPreviousPage":false,
			"hasNextPage":true,
			"navigatePages":8,
			"navigatepageNums":[
					1,
					2
			],
			"navigateFirstPage":1,
			"navigateLastPage":2
	}
});

// 用户信息
Mock.mock(/user/, 'get',{
	"status":0,
	"data":{
			"id":654,
			"username":"qiufeng",
			"password":"",
			"email":"qiufeng@163.com",
			"phone":null,
			"question":null,
			"answer":null,
			"role":0,
			"createTime":1588802124000,
			"updateTime":1588802124000
	}
});

// 购物车商品件数
Mock.mock(/carts\/products\/sum(|\?\S*)$/, 'get',{
	"status":0,
	"data":0
});

// 产品详情
Mock.mock(/products\/id(|\?\S*)$/, 'get',{
	"status":0,
	"data":{
			"id":33,
			"categoryId":100012,
			"name":"小米9",
			"subtitle":"小米9 战斗天使",
			"mainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png",
			"subImages":null,
			"detail":null,
			"price":2599,
			"stock":9530,
			"status":1,
			"createTime":"2019-09-06 01:09:26",
			"updateTime":"2019-09-06 01:09:29",
			"imageHost":"http://img.springboot.cn",
			"parentCategoryId":100002
	}
});

// 购物车商品列表
Mock.mock(/carts(|\?\S*)$/, 'get',{
	"status":0,
	"data":{
			"cartProductVoList":[
					{
							"productId":33,
							"quantity":1,
							"productName":"小米9",
							"productSubtitle":"小米9 战斗天使",
							"productMainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png",
							"productPrice":2599,
							"productStatus":1,
							"productTotalPrice":2599,
							"productStock":9522,
							"productSelected":true
					},
					{
							"productId":31,
							"quantity":1,
							"productName":"小米CC9e",
							"productSubtitle":"3200万+4800万 前后双旗舰相机",
							"productMainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png",
							"productPrice":1299,
							"productStatus":1,
							"productTotalPrice":1299,
							"productStock":9062,
							"productSelected":true
					}
			],
			"cartTotalPrice":3898,
			"imageHost":"http://img.springboot.cn",
			"selectedAll":true,
			"cartTotalQuantity":2
	}
});

// 购物车添加商品
Mock.mock(/carts/, 'post',{
	"status":0,
	"data":{
			"cartProductVoList":[
					{
							"productId":33,
							"quantity":221,
							"productName":"小米9",
							"productSubtitle":"小米9 战斗天使",
							"productMainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png",
							"productPrice":2599,
							"productStatus":1,
							"productTotalPrice":2599,
							"productStock":9529,
							"productSelected":true
					}
			],
			"cartTotalPrice":2599,
			"imageHost":"http://img.springboot.cn",
			"selectedAll":true,
			"cartTotalQuantity":1
	}
});

// 全选中
Mock.mock(/carts\/selectAll/, 'put',{
	"status":0,
	"data":{
			"cartProductVoList":[
					{
							"productId":33,
							"quantity":14,
							"productName":"小米9",
							"productSubtitle":"小米9 战斗天使",
							"productMainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png",
							"productPrice":2599,
							"productStatus":1,
							"productTotalPrice":36386,
							"productStock":9529,
							"productSelected":true
					},
					{
							"productId":30,
							"quantity":6,
							"productName":"小米CC9",
							"productSubtitle":"3200万+4800万 前后双旗舰相机",
							"productMainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png",
							"productPrice":1799,
							"productStatus":1,
							"productTotalPrice":10794,
							"productStock":8691,
							"productSelected":true
					}
			],
			"cartTotalPrice":47180,
			"imageHost":"http://img.springboot.cn",
			"selectedAll":true,
			"cartTotalQuantity":20
	}
});

// 全不选中
Mock.mock(/carts\/unSelectAll/, 'put',{
	"status":0,
	"data":{
			"cartProductVoList":[
					{
							"productId":33,
							"quantity":14,
							"productName":"小米9",
							"productSubtitle":"小米9 战斗天使",
							"productMainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png",
							"productPrice":2599,
							"productStatus":1,
							"productTotalPrice":36386,
							"productStock":9529,
							"productSelected":false
					},
					{
							"productId":30,
							"quantity":6,
							"productName":"小米CC9",
							"productSubtitle":"3200万+4800万 前后双旗舰相机",
							"productMainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png",
							"productPrice":1799,
							"productStatus":1,
							"productTotalPrice":10794,
							"productStock":8691,
							"productSelected":false
					}
			],
			"cartTotalPrice":0,
			"imageHost":"http://img.springboot.cn",
			"selectedAll":false,
			"cartTotalQuantity":20
	}
});

// 更新购物车某个产品数量 /\/goods\/\d+/
Mock.mock(/carts\/\d+/, 'put',{
	"status":0,
	"data":{
			"cartProductVoList":[
					{
							"productId":33,
							"quantity":1,
							"productName":"小米9",
							"productSubtitle":"小米9 战斗天使",
							"productMainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png",
							"productPrice":2599,
							"productStatus":1,
							"productTotalPrice":2599,
							"productStock":9529,
							"productSelected":true
					},
					{
							"productId":30,
							"quantity":6,
							"productName":"小米CC9",
							"productSubtitle":"3200万+4800万 前后双旗舰相机",
							"productMainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/f515ab05232ed14ccd78ec67e024495a.png",
							"productPrice":1799,
							"productStatus":1,
							"productTotalPrice":10794,
							"productStock":8691,
							"productSelected":true
					}
			],
			"cartTotalPrice":13393,
			"imageHost":"http://img.springboot.cn",
			"selectedAll":true,
			"cartTotalQuantity":7
	}
});

// 移除购物车某个产品
Mock.mock(/carts\/\d+/, 'delete',{
	"status":0,
	"data":{
			"cartProductVoList":[
					{
							"productId":33,
							"quantity":1,
							"productName":"小米9d",
							"productSubtitle":"小米9 战斗天使",
							"productMainImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png",
							"productPrice":2599,
							"productStatus":1,
							"productTotalPrice":2599,
							"productStock":9528,
							"productSelected":true
					}
			],
			"cartTotalPrice":2599,
			"imageHost":"http://img.springboot.cn",
			"selectedAll":true,
			"cartTotalQuantity":1
	}
});

// 地址列表
Mock.mock(/shippings/, 'get', {
	"status":0,
	"data":{
			"total":2,
			"list":[
					{
							"id":1934,
							"userId":654,
							"receiverName":"张三",
							"receiverPhone":null,
							"receiverMobile":"18989898887",
							"receiverProvince":"河北",
							"receiverCity":"天津",
							"receiverDistrict":"天津",
							"receiverAddress":"顶顶顶",
							"receiverZip":"111111",
							"createTime":null,
							"updateTime":null
					},
					{
							"id":1935,
							"userId":654,
							"receiverName":"士大夫",
							"receiverPhone":null,
							"receiverMobile":"11111111111",
							"receiverProvince":"天津",
							"receiverCity":"天津",
							"receiverDistrict":"天津",
							"receiverAddress":"s'd'fa",
							"receiverZip":"111111",
							"createTime":null,
							"updateTime":null
					}
			],
			"pageNum":1,
			"pageSize":10,
			"size":2,
			"startRow":1,
			"endRow":2,
			"pages":1,
			"prePage":0,
			"nextPage":0,
			"isFirstPage":true,
			"isLastPage":true,
			"hasPreviousPage":false,
			"hasNextPage":false,
			"navigatePages":8,
			"navigatepageNums":[
					1
			],
			"navigateFirstPage":1,
			"navigateLastPage":1
	}
});

// 添加地址
Mock.mock(/shippings/, 'post', {
	"status":0,
	"msg":"新建地址成功",
	"data":{
			"shippingId":1936
	}
});

// 更新地址
Mock.mock(/shippings\/\d+/, 'put', {
	"status":0,
	"data":"更新地址成功"
});

// 删除地址
Mock.mock(/shippings\/\d+/, 'delete', {
	"status":0,
	"data":"删除地址成功"
});

// 创建订单
Mock.mock(/orders/, 'post', {
	"status":0,
	"data":{
			"orderNo":1589089391898,
			"payment":4597,
			"paymentType":1,
			"paymentTypeDesc":"在线支付",
			"postage":0,
			"status":10,
			"statusDesc":"未支付",
			"paymentTime":"",
			"sendTime":"",
			"endTime":"",
			"closeTime":"",
			"createTime":"",
			"orderItemVoList":[
					{
							"orderNo":1589089391898,
							"productId":33,
							"productName":"小米9",
							"productImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png",
							"currentUnitPrice":2599,
							"quantity":1,
							"totalPrice":2599,
							"createTime":""
					},
					{
							"orderNo":1589089391898,
							"productId":45,
							"productName":"红米Note 7",
							"productImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-shopapi-pms/pms_1551869450.61563110.jpg",
							"currentUnitPrice":999,
							"quantity":2,
							"totalPrice":1998,
							"createTime":""
					}
			],
			"imageHost":null,
			"shippingId":1936,
			"receiverName":"测试",
			"shippingVo":{
					"receiverName":"测试",
					"receiverPhone":null,
					"receiverMobile":"11111111111",
					"receiverProvince":"河北",
					"receiverCity":"天津",
					"receiverDistrict":"河北",
					"receiverAddress":"测试",
					"receiverZip":"111111"
			}
	}
});

// 订单详情
// 订单状态：0已取消 10未付款 20已付款 40已发货 50交易成功 60交易关闭
Mock.mock(/orders\/orderNo(|\?\S*)$/, 'get',{
	"status":0,
	"data":{
			"orderNo":1589090903888,
			"payment":3898,
			"paymentType":1,
			"paymentTypeDesc":"在线支付",
			"postage":0,
			"status":10,
			"statusDesc":"未支付",
			"paymentTime":"",
			"sendTime":"",
			"endTime":"",
			"closeTime":"",
			"createTime":"2020-05-11 03:08:23",
			"orderItemVoList":[
					{
							"orderNo":1589090903888,
							"productId":33,
							"productName":"小米9",
							"productImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/2c9307e9690dfbca39d8de770a7a8664.png",
							"currentUnitPrice":2599,
							"quantity":1,
							"totalPrice":2599,
							"createTime":"2020-05-11 03:08:23"
					},
					{
							"orderNo":1589090903888,
							"productId":31,
							"productName":"小米CC9e",
							"productImage":"https://cdn.cnbj0.fds.api.mi-img.com/b2c-mimall-media/df9b3e7a562e02a33eb069b3f0119815.png",
							"currentUnitPrice":1299,
							"quantity":1,
							"totalPrice":1299,
							"createTime":"2020-05-11 03:08:23"
					}
			],
			"imageHost":null,
			"shippingId":1934,
			"receiverName":"张三",
			"shippingVo":{
					"receiverName":"张三",
					"receiverPhone":null,
					"receiverMobile":"18989898887",
					"receiverProvince":"河北",
					"receiverCity":"天津",
					"receiverDistrict":"天津",
					"receiverAddress":"顶顶顶",
					"receiverZip":"111111"
			}
	}
});

// 支付
// 支付宝支付：content是html源码，渲染到页面上后自动跳转到支付页面
// 微信支付：content内容是支付链接，转换为二维码即可扫码支付
Mock.mock(/pay/, 'post', {
	// 支付宝
	"status":0,
	"data":{
		"content":"<form id='bestPayForm' name=\"punchout_form\" method=\"post\" action=\"https://openapi.alipay.com//gateway.do?charset=utf-8&method=alipay.trade.page.pay&sign=ZybIoAfOnu%2BToF7nmYb9j4CTe4CuHfHFZVMdkv8RyXn0NZuYdxGHHG2ENMmVKELVVqgAZL0uXnmzQ3bKVr6dHP5BGFewoIFLPvBxhXFEXQx%2BRQpIpCSts1lZtPC49jbOCDT3rEVnzM7IVACCgAMvL3CwgVUdNjk5nsWTYB3S%2BOzya7IucARbbh8EYu%2B5RrYbd%2BX2vX2n0RYaY3kqdbkc3dV5n5JFyqSpuTSPiLXJEBWY9kAHZKWmaPeYDEUoNE4dPqIv58VcjVQWk4sUB3kq1nTQpobDJ1vQnINUkL%2BFb0qBI11w5GrwmuvFPfC%2BtG5rR1DYju2rhFE0aDTHu6NzUQ%3D%3D&return_url=http%3A%2F%2Fmi.futurefe.com%2F%23%2Forder%2Flist&notify_url=http%3A%2F%2Fmall-pre.springboot.cn%2Fpay%2Fnotify&app_id=2018062960540016&sign_type=RSA2&version=1.0&timestamp=2020-05-11+10%3A29%3A05\">\n<input type=\"hidden\" name=\"biz_content\" value=\"{&quot;out_trade_no&quot;:&quot;1589160772644&quot;,&quot;total_amount&quot;:&quot;0.01&quot;,&quot;subject&quot;:&quot;景云商城&quot;,&quot;product_code&quot;:&quot;FAST_INSTANT_TRADE_PAY&quot;}\">\n<input type=\"submit\" value=\"立即支付\" style=\"display:none\" >\n</form>\n<script>document.getElementById('bestPayForm').submit();</script>"
	}

	// 微信
  // "status":0,
  // "data":{
  //   "content":"weixin://wxpay/bizpayurl?pr=LAH2UH7"
  // }

});
