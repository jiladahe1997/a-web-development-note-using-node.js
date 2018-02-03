# 前端开发

## 动画

本篇中的动画并不是指html中嵌入的第三方动画，例如：FLASH、嵌入的视频等。

本篇中的动画指的是html中的某个元素的CSS值连续快速的变化，以产生类似于动画的效果。

例如：假设一架飞机从屏幕上飞过，实质上是一个img标签的left值不断的变化（前提是position值不是static）。由于html和css并不具备像C、C++编程语言的特性；而动画要求对一个值（比如之前提到的left值），在一段时间进行连续的变化，因此绝大多数动画都需要借助JavaScript来进行。

>在以前，实现一个动画需要借助JavaScript的 *setInterval(code,millisec)* 函数，这个函数的作用是：每经过 *millisec* 时间，就执行一次 *code* 里面的语句。 如果将一个img标签的left值每1/24s增加一定值，那么久由于人眼的暂留效应，就会形成帧数为1秒24帧的连贯的动画。

读到这里，你一定会想，我就是简单的想实现一个飞机从左到右的动画都需要写10多行，甚至更多行的代码，那简直太麻烦！ 很幸运的是，现在，通过 *trasition* 和 *animation* 这两个CSS属性，我们可以很简单的实现动画。下面是这两个属性具体的用法：

>虽然说 *trasition* 和 *animation* 让动画变得非常简单，但是最原始的、最复杂，但也是最灵活的 JavaScript 动画在某些时候也可以展现他的风采。因此下面我分别将一个动画 使用JavaScript、CSS的 *trasition* 属性、 *animation* 属性三种方式分别实现，

#### 三种类型分别实现

假设我们的HTML和CSS文件如下：

``` html
<!DOCTYPE html>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="note2-7_example.css" />
    <script src="note2-7_example.js"></script>
</head>
<body>
    <img src="./note2-7_example.png" alt="" class="example">
</body>
</html>
```
``` CSS
.example {
    position:relative;
    top:0px;
    left:0px;
}
```

#### JavaScript原生实现
``` JavaScript
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
    
    //判断当前时间是否超过了动画应该持续的总时间
    if(duration_now <= duration){
        //letf的值根据目前持续时间呈线性比例
        left_now = left*(duration_now/duration);
        img.style.left = left_now + "px";
    }
    else{
        clearInterval(img_timer);
    }
}
```


#### 使用trasition属性实现

首先修改css文件
``` CSS
.example {
    position:relative;
    top:0px;
    left:0px;
+   transition:left 10s;
}
```

然后修改JS文件
``` javascript
    img = document.getElementsByClassName("example")[0];
    img.style.left = "1920px";
```


#### 使用animation实现
修改css文件
``` css
.example {
    position:relative;
    top:0px;
    left:0px;
+   animation:10s example_move;
}

@keyframes example_move{
+   0%{left:0px}
+   100%{left:1920px}
}
```


