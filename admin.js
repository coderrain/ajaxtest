var express = require('express');
var app = express();
var swig = require('swig');
var bodyPaeser =require('body-parser')

app.use(bodyPaeser.urlencoded({
   extended: false, //扩展模式
   limit:2*1024*1024  //限制-2M
}));


swig.setDefaults({
  cache: false
})
app.set('view cache', false);
app.set('views','./views/');
app.set('view engine','html');
app.engine('html', swig.renderFile);


app.use(express.static('./'))

// 路由（控制器）
app.get('/about', function(req, res, next){
	res.render('about',{
		title: 'about月面'
	})
})


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

app.get('/shop', function(req, res, next){
	var pageSize = req.query.pageSize || 0;
	var count = req.query.count || 5;
	console.log(pageSize)
	console.log(count)

	var data = [{
		id:1,
		title: '连衣裙女士',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:2,
		title: '连衣裙女士132',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:3,
		title: '连衣裙女士130',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:4,
		title: '连衣裙女士129',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:5,
		title: '连衣裙女士128',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:6,
		title: '连衣裙女士127',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:7,
		title: '连衣裙女士126',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:8,
		title: '连衣裙女士125',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:9,
		title: '连衣裙女士124',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:10,
		title: '连衣裙女士123',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:11,
		title: '连衣裙女士122',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:12,
		title: '连衣裙女士121',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:13,
		title: '连衣裙女士120',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:14,
		title: '连衣裙女士119',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:15,
		title: '连衣裙女士118',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:16,
		title: '连衣裙女士117',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:17,
		title: '连衣裙女士116',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:18,
		title: '连衣裙女士115',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:19,
		title: '连衣裙女士114',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:20,
		title: '连衣裙女士113',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:21,
		title: '连衣裙女士112',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	},{
		id:22,
		title: '连衣裙女士111',
		imgUrl: 'https://img14.360buyimg.com/mobilecms/s372x372_jfs/t1/14775/9/13071/56020/5c9deb5eE2faae72e/a128fde5d88ad47b.jpg!q70.dpg'
	}]
	res.json({
		code: 1,
		data: data.slice(pageSize*count,pageSize*count+parseInt(count))
	})

})


app.get('/news', function(req, res, next){
	res.json({
		code:0,
		data: []
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