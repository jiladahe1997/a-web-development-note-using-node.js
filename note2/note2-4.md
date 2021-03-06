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

#### Document接口

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


#### EVENT接口

<br/>
<br/>
<br/>
<br/>
<br/>
<br/>
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

<br>
<br>

#### 2.JavaScript闭包

JavaScript闭包（closure）是JavaScript不同于其他语言的一种特性。

简单的来说，在JavaScript中可以进行函数嵌套，在这个过程中，子函数可以访问并维持父函数的变量。

闭包在我个人使用中最明显的作用是在处理回调函数时，需要用到一些“全局的变量”，比如以下这个回调函数:
``` javascript
var counter = 0;
var example = document.getElementById("example");
example.addEventListenser("click",function(){console.log(counter++)});
```

为了避免“全局污染”，可以改成如下：
``` javascript
function test(){
  var counter = 0;
  var example = document.getElementById("example");
  example.addEventListenser("click",function(){console.log(counter++)});
}

test();
```

如果是C语言或者其他语言，那么每次点击example元素后会都会提示“*变量不存在*”的错误出错，因为在注册完回调函数后，counter变量就会被释放。而在JavaScript中，在定义函数时就会形成闭包，counter变量将不会被释放，每次点击后输出1、2、3、4、5...

当然我认为这是很大因为JavaScript可以进行函数的嵌套（C语言是不能进行嵌套的，回调函数只能传入那个回调函数的指针）。

#####闭包的使用

闭包通常使用在回调函数中，这是因为回调函数通常会用到一些“全局变量”，比如：计数器、id等。下面是一个常用的回调操作。

``` javascript
window.onload = function(){
  var img_data = {          //使用对象字面量创建JS对象。此对象将通过闭包作为“全局变量”使用，这个“全局变量”仅供子函数访问。
    counter : 0,
    order : [[1,3,5],[2,6],[4]]
  }
  var example = document.getElementsByClassName("example")[0];

  //虽然在定义回调函数时没有实际的使用到img_data对象，只有在触发回调事件时才会触发回调函数，从而使用到img_data对象。
  //但是闭包是在函数定义时就建立好的，因此回调才使用并不影响。
  eaxmple.addEventListener("click",function(e){
    for(let i=0 ; i<img_data.order[counter].length ; i++){
      var order = img_data.order[counter][i];
      var img = document.getElementsByClassName( "img-"+order )[0];

      img.style.opacity = "1";
    }
  })
}
```

#####闭包的原理

>Javascript 中，每个函数都有一个与之相关联的作用域链。每次调用 JavaScript 函数的时候，都会为之创建一个新的对象用来保存局部变量，并把这个对象添加至作用域链中。当函数返回时，再将这个对象删除，此对象会被当做垃圾回收。但如果这个函数定义了嵌套的函数，并将它存储在某处的属性里，就意味着有了一个外部引用指向这个嵌套的函数。它就不会被当作垃圾回收，它所指向的变量绑定对象同样不会被回收。
作者：天方夜
链接：https://www.zhihu.com/question/19554716/answer/23064179
来源：知乎
著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。

上面这段话中的作用域链在JavaScript中实质是一个隐藏的变量[[scopes]]，并且由于只有函数能产生作用域；链，而对象不行，因此对象没有闭包。下面以两个例子来说明这个问题：

``` javascript
function test(age){
    this.age = age;
    this.greeting = function(){
        console.log("打招呼:",age);
    }
}
test1 = new test(1);//实例化对象

let test_Obj = {
    age:1,
    greeting:function(){
        console.log(age);
    }
}

test1.greeting();  //输出1
test_Obj.greeting(); //输出 undefined
```

如果在vs中调试，可以分别查看两个greeting的作用域如下：

![closure1](note2-4_closure1.png)

![closure2](note2-4_closure2.png)

因此：在对象的方法中，如果需要访问对象的变量，就需要使用this。如下面 * 3.JavaScript中的this * 中所示


<br>
<br>

#### 3.JavaScript中的this

>参考：https://www.cnblogs.com/pssp/p/5216085.html

在类似于C++这种面向对象的编程语言中，经常会用到this。比如在c++中：
``` c
//C++
class test{
  int a;

  void resetA(void){
    this.a=0;
  }
}
```
在JavaScript中也经常见到，那么这个this到底是什么意思呢？
``` javascript
//JavaScript，使用对象字面量创建对象
var test = {
    a:"Good Morning",
    resetA:function(){
        console.log(this.a); 
    }
}
test.resetA();
//输出结果："Good Morning"
//即此时this指代对象test

function test(){
    var a = "Good Morning";
    console.log(this.a); 
    console.log(this); 
}
test();
//输出结果："undefined","Window"
//即此时this指代默认对象window

document.getElementById("test").addEventListener("click",function(){
    console.log(this.id); 
})
//输出结果："test"
//即此时this指代默认对象为getElementById("test")返回的对象


//构造函数
function test(){
　　　　this.x = 1;
　　}
　　var o = new test();
alert(o.x); // 1
```
因此，总结如下：
>  情况1：如果一个函数中有this，但是它没有被上一级的对象所调用，那么this指向的就是window。(**构造函数除外，构造函数中this还是指新构造出的对象**)<br><br>
情况2：如果一个函数中有this，这个函数有被上一级的对象所调用，那么this指向的就是上一级的对象。（**如上面第三段代码：回调函数通常由某个对象回调，this就指代这个调用对象**）<br><br>
情况3：如果一个函数中有this，这个函数中包含多个对象，尽管这个函数是被最外层的对象所调用，this指向的也只是它上一级的对象，

<br>
<br>

#### 4:”==“和”===“

1)不同类型间比较，==之比较“转化成同一类型后的值”看“值”是否相等，===如果类型不同，其结果就是不等<br>
2）同类型比较，直接进行“值”比较，两者结果一样  