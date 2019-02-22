console.log("加载完毕");

require.config({
	paths:{
		"index":"index",
		"jquery-cookie": "jquery.cookie",
		"jquery": "jquery-1.11.3"
	},
	shim:{
		//配置jquery-cookie依赖于jquery
		"jquery-cookie": ["jquery"]
		//声明不适用AMD规范的模块

	}
})

require(["index"], function(index){
	index.index();

})














