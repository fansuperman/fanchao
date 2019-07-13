$(".banner2").banner({
    aimg:$(".banner2").find("img"),			//必传
    left:$(".banner2").find("#left"),		//可选,传了有功能，不传没有功能
    right:$(".banner2").find("#right"),		//可选,传了有功能，不传没有功能
    isList:false,			//可选，默认为true
    
    autoPlay:false,			//可选，默认为true
    delayTime:1000,			//可选，默认为2000
    moveTime:100,			//可选，默认为200
    index:0
})