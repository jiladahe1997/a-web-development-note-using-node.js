# Note2 前端开发

## 2-2 Javascript-为我们的第一个网页增加JS

学习web开发最显著的特征是会同时用到三种形式的“语言”（或许html和css简单到不能称作语言），但是我们实实在在使用到的确实有三种语言：</br>
>html-HyperText Markup Language 超文本标记语言 </br>
CSS - Cascading Style Sheets 层叠样式表 </br>
JS - JavaScript  </br>

下面是我个人的理解：</br>
html是web开发中的“躯干”，用于存放主要的内容，如文字、图片、超链接等； </br>
css是“衣服”，为html的文字、图片增加排版或一些简单的效果；</br>
javascript是“特效” ，为html增加一些css所不能达到的效果，例如点击一个元素将其隐藏、计算时间等。

总之一句话，javascript和css都是在为html服务。（在一些情况下，javascript还可以用于表单提交等操作）

#### 2-2 为我们的第一个网页增加JS

就拿我们刚才的那个网页来说:

![合影](note2-1_picture.png)

假设现在我们要下面的4个导航按钮点击后能跳转到相应的页面，这是css无法办到的。因此就要用到javascript。*关于javascript的基础知识，请参考 Note4 - javascript总结*

这里我假设你了解一些javascript的基础知识，包括DOM接口。下面就让我们用DOM接口中的EVENT（事件）来对这4个导航按钮添加一个点击跳转的效果。

带注释的代码如下：

```javascript
  var nav_button1 = document.getElementById("nav_button1");        //通过DOM接口获取到第一个按钮
  nav_button1.addEventListener("click",function(event){
     location.href="/index"
  })
    //通过DOM接口的EVENT为按纽添加一个事件监听器，这里添加的是“click”单击事件，每次单击这个button就会出发点击事件，执行后面的回调函数。 回调函数中同样通过DOM接口的location interface，实现跳转到/index页面。
```

剩下的三个按钮就同理啦！

这里我要说的是，其实用不着这么麻烦，因为在html中有一个*a*标签，专门用于跳转，只需要在a标签的href属性赋值，单击这个a标签就会跳转到href属性对应的页面。什么？你说早知道有这种方便的方法，还要写那么多js干什么，这不是坑你吗。其实通过这个例子，可以看到javascript中的所有操作都是“依赖于”DOM接口的，因此最后来一句话总结：**javascript的作用实际就是通过DOM接口为html添加特效**。



