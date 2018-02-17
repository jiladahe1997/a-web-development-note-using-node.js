# 下拉菜单

 下拉菜单是很常见的前端组件。

 参考百度翻译的下拉菜单: [http://fanyi.baidu.com](http://fanyi.baidu.com/)

 ![note4-2_example.gif](note4-2_example.gif)

 下拉菜单分为两个部分：触发按钮 和 弹出菜单。

 *弹出菜单* 可以设置为position:absolute，以免弹出对整个文档流造成影响（重排），并且与 *触发按钮* 位于同一个父标签下，当不需要时设置为 display:none ，需要时设置为 block。 

 以下是我模仿 百度翻译 页面的一个下拉菜单，没有什么特别的，仅供个人复习用：

 **代码请见本页面最后附录部分**

<br>
<br>

![note4-2_dropdown.gif](note4-2_dropdown.gif)



# 轮播组件

待补充

# 选项卡切换

待补充



# 附录：代码

## 1.下拉菜单

HTML
``` HTML
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Drop down menu</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <link rel="stylesheet" type="text/css" media="screen" href="note4-2_dropdown.css" />
    <script src="main.js"></script>
</head>
<body>
    <div class="main">
        <span class="triggerButton">触发按钮</span>
        <!--这里的i标签标准应该用来表示斜体，但是通常用来表示图标(icon)-->
        <i></i>
        <ol class="dropDownMenu">
            <div class="dropDownMenu-headerBlank"></div>
            <span class="dropDownMenu-border">
                <span class="dropDownMenu-title">选项：</span>
                <li>选项1</li>
                <li>选项2</li>
            </span>
        </ol>
    </div>
</body>
</html>
```


CSS
``` CSS
.main{
    position: relative;                 /*为absolute定位提供基础元素*/
    text-align: center;
}
.main:hover > .triggerButton{
    padding: 10px;
    border-color: #dedede;
    border-width: 1px 1px 0 1px;
    border-style: solid;
}

.main > i{      /*使用i标签表示图标，这里表示三角形图标*/
    position: relative;
    top: 10px;
    border-width: 6px;
    border-color: #777 transparent transparent;
    border-style: solid;
}


.main:hover > .dropDownMenu {
    display: block;
}



/*下拉菜单部分CSS*/
.dropDownMenu {
    display: none;
    position: absolute;         /*下拉菜单为absolute定位，防止收起时对其他元素影响*/
    top: 10px;
    left: 559px;
    list-style: none;
}

.dropDownMenu > .dropDownMenu-headerBlank{  /*设置一个顶部空白遮挡，看起来更好看*/
    position: absolute;         /*这里需要注意，absolute元素也可以为子absolute元素提供定位*/
    left: 44px;
    top: -4px;
    background-color: white;
    width: 81px;
    height: 20px;
}
.dropDownMenu > .dropDownMenu-border{
    display: inline-block;
    padding: 20px;
    border: 1px solid #dedede;
    border-radius: 2px;
}

.dropDownMenu  .dropDownMenu-title{
    display: inline-block;
    margin: 20px;
}

.dropDownMenu > .dropDownMenu-border > li{
    margin: 10px;
}
```