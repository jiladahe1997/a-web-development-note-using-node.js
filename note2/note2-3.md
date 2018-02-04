# 前端开发

## CSS开发总结

CSS是HTML的“孪生兄弟”。HTML作为一种标记语言，本身只能用来标记网页中的各个部分；而CSS用于将标记好的各个部分“样式化”。如果说HTML相当于word中的文字，那么CSS就相当于word中的“排版”按钮。在CSS中，可以更改各个元素的距离、位置、大小等等。

在一篇网页中，存在众多的元素，每个元素都有自己的CSS属性。因此，在使用CSS对HTML进行排版布局时，需要一套“统一的”的标准来进行，否则对每个元素都设置CSS时将是非常大的工作量。

![example-1]()

>举一个例子：假设我们现在需要一个导航条，就像上图中那样，那么我们需要的html和css分别如下:

``` html
<ul className="nav">
    <li>
        <a  href="/index" className="navButton-left button button-glow button-rounded button-raised button-primary">首页</a>
    </li>
    <li>
        <a  href="/note" className="navButton button button-glow button-border button-rounded button-primary">学习笔记</a>
    </li>
    <li>
        <a  href="" className="navButton button button-glow button-border button-rounded button-primary">web开发推荐</a>
    </li>
    <li>
        <a  href="/login" className="navButton-right button button-glow button-border button-rounded button-primary">Private</a>
    </li>
</ul>
```
``` CSS
ul.nav{
	display: block;          /*父元素设置为block，配合margin:auto 进行居中*/
	width: 1000px;
	margin: 150px auto;      /*父元素设置为block，配合margin:auto 进行居中*/
	list-style: none;
	padding: 0;
}

li{
	display: inline-block;  /*子元素设置为inline—block，一行多列布局*/
}
.navButton-left{
	width:250px;            /*子元素宽度250px，inline父元素高度默认由子元素撑开*/
	height: 40px;           /*子元素高度40px，父元素高度默认由子元素撑开*/
	border-width: 1px 0px 1px 1px;
	border-radius: 4px 0px 0px 4px;
}
.navButton-right{
	width:250px;            /*子元素宽度250px，inline父元素高度默认由子元素撑开*/
	height: 40px;           /*子元素高度40px，父元素高度默认由子元素撑开*/
	border-width: 2px 2px 2px 2px;
	border-radius: 0px 4px 4px 0px;
}
.navButton{
	width:250px;            /*子元素宽度250px，inline父元素高度默认由子元素撑开*/
	height: 40px;           /*子元素高度40px，父元素高度默认由子元素撑开*/
	border-width: 2px 0px 2px 2px;
	border-radius: 0px;
}
```

不难看到，在使用CSS时，不仅仅对每个元素的CSS都需要考虑，同时父元素、子元素的相互影响关系也需要考虑到。因此对一张有很多元素的网页来说，一套使用CSS的整体规范就很重要。

## CSS布局

首先最开始普遍使用的是table布局：即所有元素都用table标签来包裹，例如
``` html
<body>
    <table>
        <table-cell>
        <table-cell>
        <table-cell>
```
这样做甚至不需要CSS可以做到简单的排版、居中等操作，具体的实现笔者就没有去深究了，如果大家有兴趣可以去度娘搜索。 
 
其次是开始了div+css的布局，因为提出这种布局的人认为，table标签本身是用来进行描述表格的，用来布局实在是牛头不对马嘴。因此才提出了使用div+css的布局模式，例如
``` html
<body>
    <div class=”header”>
        <div class=”header-element”>
            ...
        </div>
    </div>
</body>
```
 
Div+css的布局沿用到至今（2017.11），但是其中的具体实现又有很多变化。 
 
div是html的一个标签，这个标签没有任何的实际意义，只是在逻辑上表示一个“块”。每个div块都默认占用整行的宽度。因此重点就放在了在一个div块内（在一行内）布置多个元素。

#### float布局

最开始使用的是叫做float布局，float是css的一个属性，顾名思义，就是要求这个元素浮动起来，但是这种浮动会对其他元素造成影响，详情就请大家度娘了。总之呢，通过这个float属性，可以在一行内包括多个元素。例如我们之前提到的那个导航条，就可以用float去实现，只需要把每个按钮都设置为 *float:left* 这样每个元素就会根据自身的宽度依次从左到右排列起来了。
 
#### inline布局

由于float布局十分的不方便，因为float元素会对其他元素造成干扰，会出现各种莫名其妙的bug，例如某个元素被float顶掉了啊，被float元素占高度了啊等等。

因此就出现了inline布局，inline是css中display：的一个属性。原本css对html中每个元素都进行了inline或block的分类，其中block就代表这个元素会占用一行，例如div，p等等；inline则代表不占用一行，而是从一行的从左到右排列，但是inline元素没有margin等属性。因此后来还出现了inline-block这种属性，用于支持margin等属性，相当于就是支持margin的inline。 这样通过对一个元素设置为inline-block，同样可以进行行内布局。

【2018.1更新：inline属性不支持width属性，因此99%的情况都要把inline重写成inline-block】 

#### 其他布局
 
到现在又出现了多种新的css布局，例如flex布局，grid布局。等等，这些布局综合了以前布局的不便之处，例如饱受诟病的 元素水平垂直居中 ，等等。但是这些新的css由于各个浏览器的支持性各不相同。例如笔者有一次就使用了flex布局，然而在手机上使用QQ浏览器访问居然直接无视了flex布局。因此大家在使用这些最新的布局方法时，一定要注意这些问题。  



## 我自己使用的CSS布局规则

1.在html中，尽量少使用div标签，尽量多使用span、p、ul以及其他语义化的标签。因为过多的div标签使得html看起来非常的复杂，难以维护。

2.在设计网页阶段，先分析好每个元素是否占用“文档流”，占用文档流的元素在html中依次排列，position默认为static（或者relative）使用margin、padding调整间距；不占用文档流的元素放在html末尾，position设置为absolute或者fix，使用top、left调整间距。

3.动画元素都采用absolute定位，因为动画往往需要各种移动、变化，设置在文档流中的话，每次移动、变化都会对整个文档流造成影响。

4.单列布局一般需要居中，居中有两种方式：第一种是父元素block，子元素也block同时设置左右 *margin* 为 *auto* ；第二种是父元素设置为block同时设置 *text-align:center* ，子元素设置为inline-block。

5.多列布局一般也需要居中，就只能将父元素设置 *text-align:center* ，每个子元素都设置为inline-block，同时设置每个子元素的宽度width为一个固定值。（*注：span默认为inline，设置width无效，必须重写为inline-block）

6.分辨率优化：在最外层使用一个div作为背景容器（container）,容器宽度为100%;然后在容器内再使用一个div作为主页面（main），主页面宽度一般为960px，1080px等。这样的话在分辨率宽度小于1080px的设备上主页面显示效果都一样，不同的只是最外层背景容器的宽度。