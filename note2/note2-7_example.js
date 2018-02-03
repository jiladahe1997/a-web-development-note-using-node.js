var img = document.getElementsByClassName("example")[0];

//动画持续总时间10s
var duration = 1000*10;     
//动画目前持续时间
var duration_now = null;       
//动画执行总过程,图片移动1920px;
var left = 1920;
//动画目前执行过程
var left_now =null;  

var img_timer = setInterval(img_animation,1000/24);

function img_animation(){
    duration_now += 1000/24;
    if(duration_now <= duration){
        left_now = left*(duration_now/duration);
        img.style.left = left_now + "px";
    }
    else{
        clearInterval(img_timer);
    }
}