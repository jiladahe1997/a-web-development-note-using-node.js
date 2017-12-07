# Note 1:什么是web开发？

###### ⑤亲手写第一个前端网页-2

- ### 第二步：
不论你看没看我刚刚写的前端与后端渲染...，如果你看了没看懂，我表示抱歉，毕竟我的水平有限。第二步我们开始创建我们的第一个html文件，当然关于html的语法还请大家度娘找教程，这里我向大家推荐一个我个人觉得比较好的 [https://developer.mozilla.org/zh-CN/](https://developer.mozilla.org/zh-CN/)。

我们的html文件应该像这里一样：[点我]（我不知道怎么在md文件中插入html...插入的html代码都被无视了！）

然后使用第一步中的SendFile函数，但是这个函数又怎么用呢，返回值是什么？参数我又该怎么填呢？ 还是那句话，谁的函数找谁，[http://www.expressjs.com.cn/4x/api.html#res.sendFile](http://www.expressjs.com.cn/4x/api.html#res.sendFile) <br />
这里有个小小的难点
>path must be an absolute path of the file.

sendFile()最少只需要一个文件名参数就可以了，但是这个参数必须要是文件的绝对路径。这就很尴尬了，因为我们的当前路径可能很复杂，比如我的路径就在E:\学习\1\1\1\12\3\4\1\1，非要手动填也可以，但是这里我推荐大家一个小小的方法。 <br/>
在javascript语言中，变量__dirname表示当前文件的路径，比如我要当前的目录结构如下 E:\......\1\ app.js example.html，那么__dirname的值就等于E:\......\1\app.js。而我们的目标应该是:E:\......\1\example.html,因此这里就巧妙的使用path.dirname()函数，用于获取当前的上级路径名。

因此代码就应该像这样：<br/>
>var path = require("path"); //要先引入path模块，path模块是javascript自带的<br/>
...这里有其他代码，这里省略<br/>
var html_path = path.direname(__dirname)+"example.html"; <br/>
res.sendFile(html_path); <br/>

在我的代码中我是这样写的：参见[http://www.expressjs.com.cn/4x/api.html#res.sendFile](http://www.expressjs.com.cn/4x/api.html#res.sendFile)
>var path = require("path"); //要先引入path模块，path模块是javascript自带的<br/>
...这里有其他代码，这里省略<br/>
var options = {<br/>
&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;root: path.direname(__dirname),<br/>
&nbsp&nbsp;&nbsp;&nbsp;&nbsp;;}<br/>
res.sendFile(example.html,options); <br/><br/>

最后重新访问localhost:3000 就可以看到我们新建立的example.html啦！
