

<文件介绍>

项目名称：爱出发旅游网

项目地址：https://github.com/fansuperman/fanchao

<html>

首页html ---- http://localhost/xiangmu/index.html/index.html

登录html----http://localhost/xiangmu/LoginRegin/login.html

注册html----http://localhost/xiangmu/LoginRegin/reginster.html

商品列表html----http://localhost/xiangmu/shopping/list.html

购物车html-----http://localhost/xiangmu/shopping/car.html

商品详情html----http://localhost/xiangmu/xiangqingye/xiangqing.html


<css>
外部引用文件 
首页css 
xiangmu/css/style.css
xiangmu/css/pulic.css

登录注册css
xiangmu/LoginRegin/login.css
xiangmu/LoginRegin/reginster.css

购物车/商品列表
xiangmu/shopping/libs/car.css
xiangmu/shopping/libs/list.css

商品详情
xiangmu/xiangqingye/css/xiangqing.css

<js>
内部js文件
xiangmu/js/jquery.js
xiangmu/js/ajax.js

<图片>
xiangmu/image
xiangmu/shopping/img

功能介绍：
1.首页功能：
	1.轮播图
	2.三级菜单
	3.楼层效果
	4.返回顶部
	5.登录注册
	6.订单查询

2.商品列表功能
	1.json数据渲染商品列表
	2.点击加入购物车，结算可以跳转购物车列表
	3.可以点击首页，即可返回首页
3.商品详情页
	1.banner图滚动轮播
	2.可以点击首页，即可返回首页

4.购物车页面
	1.可以删除
  	2.增删商品
	3.也可以返回继续购物
	4.可以点击首页，即可返回首页

5.登录注册
	1.登录和注册页面随意切换
	2.配合php验证，账号密码一直，才可以登录成功，并跳转主页
	3.使用正则对每一项进行基础验证
	4.注册的时候密码需要二次验证
	5.注册页面加入手机号验证码效果
	6.登录页面加入随机验证码验证，不能为空

6.轮播图
	1.插件开发功能，实现banner图渲染
	2.可以左右列换。下面选项页切换
	3.自动轮播
7.三级菜单
	1.使用animate，操作三级菜单
	2.点击body、或document即可消失

8.楼层切换
	1.js实现根据索引获取对应的楼层
	2.计算楼层距离顶部的位置，
	3.将这个位置设置给滚动条

9.返回顶部
	1.当滚动条的位置处于距顶部100像素以下时，跳转链接出现，否则消失
	2.当点击跳转链接后，回到页面顶部位置
	3.使用animate





