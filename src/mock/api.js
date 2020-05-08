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
			"username":"jack",
			"password":"",
			"email":"jack@163.com",
			"phone":null,
			"question":null,
			"answer":null,
			"role":0,
			"createTime":1567429971000,
			"updateTime":1567429971000
	}
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

// 购物车商品列表
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