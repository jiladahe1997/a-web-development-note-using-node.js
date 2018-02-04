# Note 2:前端开发

## javascript总结

javascript是一种编程语言，和c语言、python类似，同样有变量、函数、对象等定义，但是最大的不同之处在于：javascript的输入输出依赖于宿主环境。

>大家在学习c语言时，无独有偶，第一课就是输出hello world！，回想一下，在运行hello world时，会弹出一个对话框，在对话框中输出。而javascript则没有这种对话框，而是输出到宿主环境中，一般情况下就是*浏览器*。<br/>

<br/>

在web开发中，javascript除了拥有编程语言本身的特性，比如定义函数、定义对象、维护计数器、定时等，还有一个最重要的功能就是和HTML交互。可以理解为，javascript本身只是一种与c语言类似的语言（除了以上提到的宿主环境不同以外），而我们将javascript嵌入到“浏览器”宿主环境中，同时提供一系列的“DOM接口”来与html进行交互。

*DOM接口看起来就像C语言中的stdlib.c一样，拥有一些预先定义好的变量、函数、对象。*

*例如以下javascript代码就是将一个id属性为“example”的html元素内容变为hello world*


```javascript
document.getElementById("example").innerHTML = "hello world";   //通过DOM接口获取到一个元素，并将其内容变为hello world
```

javascript的最终目的是给html赋予编程语言的特性，html只是简单的HyperText Markup Language，也就是说html只是简单的标记了文本，并没有做其他的事。而javascript正是通过DOM接口来实现目的的。

### Web API接口
Web API接口是由W3C开发并维护的接口，详细介绍：[W3C官网]()<br/>
Web API接口只是一套html与外界接口的标准，具体的实现还跟使用的浏览器有关系，比如有些Web API接口虽然定义了，但是有些浏览器不一定去实现了;有些接口定义的方式根据浏览器也会有所不同，但是大体上说是大同小异。详情见：[MDN介绍]()

当大家在使用Web API接口时遇到问题，例如使用EVENT的addEventListener()函数，阅读由Web API开发者-W3C 写的文档无疑比去百度或者谷歌找答案好。

下面是我使用Web API接口时遇到的一些关于Web API接口的常见问题，记录下来以备随时查看：

##### Document接口

引用MDN上 
>Document 接口提供了一些在浏览器服务中作为页面内容入口点而加载的一些页面，也就是 DOM 树。 DOM 树包括诸如 body 和 table 之类的元素，及其他元素。其也为文档（document）提供了全局性的函数，例如获取页面的 URL、在文档中创建新的 element 的函数。

Document接口是用的非常多的接口。我们可以通过Document接口获取到html树中的任意一个元素，并将其保存为一个 **Element** 对象。例如获取id为“example”的img标签
``` javascript
var example = document.getElementById("example")；
```

获取到这个 **Element** 对象后，就可以进行一系列的操作：
``` javascript
var example = document.getElementById("example")；
example.innerHTML = "test";        //替换example元素的所有内容为test（string）
example.addEventListener("click",function(){alert("点击！")});  //添加单击事件
example.classList.add("example-show");    //添加类
```
可以说，与HTML文档所有的交互几乎都依赖于 **Element** 对象，熟练掌握 **Element** 对象非常有用。
>MDN上关于  **Element** 对象的详细描述 ： https://developer.mozilla.org/zh-CN/docs/Web/API/Element

##### 一些常用的DOM操作
>

<br/>

### javascript本身特性
javascript最大的特点除了依赖于宿主环境外，还有许多地方都与其他编程语言不同。下面是我平时遇到的关键处，记录下来以备随时查看：

#### 1.javascript匿名函数：
javascript中可以定义匿名函数，即“没有名字的函数”。函数的作用是代码复用，使重复的代码减少，每次需要使用重复的代码时都用函数名代替。然而匿名函数这种东西的存在不是违反了这个定义吗？下面我们考虑一种情况，就是这个函数只需要使用一次。这种情况通常是在使用**回调函数**时。
>回调函数：<br/>
当特定的事件或条件发生的时候，调用者调用回调函数对事件进行处理。

比如我要在一个按钮被点击时，弹出一个窗口：
```javascript
function example_func(){
  alert("弹出这个窗口"!);
}
document.getElementById("example").addEventListener("cilck",example_func)
```

使用匿名函数的写法：
```javascript

document.getElementById("example").addEventListener("cilck",function(){
  alert("弹出这个窗口"!);
})
```

通过这个例子，大家可以看到，使用匿名函数不需要预先定义回调函数，无疑是简化了回调函数的写法，尤其是当我们需要很多回调函数时会感到很方便。

下面是两个简单常见的误区（虽然很简单，但是我果然还是都上当了......）

#####误区1：为什么不直接写表达式呢？

*以前的我*：楼主楼主，我这样写是不是很巧妙，特别是只有一句语句的时候，简直比匿名函数还巧妙呢！<br/>
*现在的我*：是的，明天你就可以去开发javascript的Ecma国际那里上班了 （坏笑(*^__^*) ）<br/>
这样写相当于将alert()函数的返回值(null)，当作回调函数。是一个逻辑上很容易犯的错误。<br/>
回调函数之所以要求是函数，而不是语句，是因为调用函数的参数必须是一个变量，即回调函数作为参数必须是一个**变量**，而不是语句，在JavaScript中函数也是一种变量(*在C语言中通过函数指针*)。
```javascript
document.getElementById("example").addEventListener("cilck",alert("弹出这个窗口"!))
```

#####误区2：不小心加了个括号

这样写相当于将exaple_func()函数的返回值undefined，当作回调函数。原理和误区1一样
```javascript
function example_func(){
  alert("弹出这个窗口"!);
}
document.getElementById("example").addEventListener("cilck",example_func())
```



