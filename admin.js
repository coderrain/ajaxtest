var express = require('express');
var app = express();
var bodyPaeser =require('body-parser')

app.use(bodyPaeser.urlencoded({
   extended: false, //扩展模式
   limit:2*1024*1024  //限制-2M
}));


app.use(express.static('./'))

var data = [{
		title: '小说',
		id: 1,
		des: '佛挡杀佛解释了发送的佛挡',
		url: 'http://f.hiphotos.baidu.com/image/h%3D300/sign=f888027cebdde711f8d245f697eecef4/71cf3bc79f3df8dcfcea3de8c311728b461028f7.jpg'
	},{
		title: '修真',
		id: 2,
		des: '修真修真修真修真修真',
		url: 'http://g.hiphotos.baidu.com/image/h%3D300/sign=1ae574b8e8cd7b89f66c3c833f254291/1e30e924b899a90182ea2f4413950a7b0308f5e1.jpg'
	}
]


app.post('/login', function(req, res, next){
	console.log(req.body)
	console.log(req.body.username)
	if(req.body.username == 'admin' && req.body.password == '123456'){
		return res.send(req.body.username)
	}else{
		return res.send('登录失败')
	}
})


app.get('/news', function(req, res, next){
	res.json({
		code:1,
		data: [{
			id:1,
			title: '第一条新闻'
		},{
			id:2,
			title: '第2条新闻'
		},{
			id:2,
			title: '第3条新闻'
		},{
			id:3,
			title: '第4条新闻'
		}]
	})
})

app.get('/login', function(req, res, next){
	if(req.query.username == 'admin' && req.query.password == '123456'){
		return res.send(req.query.username)
	}else{
		return res.send('登录失败')
	}
	//res.send('测试get方式的登录接口')
})


app.listen(8080, function(){
	console.log('服务已经开启端口是8080')
})