window.onload = function(){
    let carousel_control = document.getElementsByClassName("carouselMove_control")[0];
    let carousel_Buttons = [];

    //将获取到的HTMLCollection保存在数组carousel_Buttons中。
    //这样每次使用每个li标签的时候,相比之前更快
    //比如在回调函数中，就要改变对应标签的li，这个时候直接调用carousel_Buttons，比重新查询更快。
    let carousel_choose = document.getElementsByClassName("carouselChoose")[0].children;
    for(let i=0;i<carousel_choose.length;i++){
        carousel_Buttons[i] = carousel_choose[i]; //缓存到数组中

        //添加回调
        carousel_Buttons[i].addEventListener("click",function(e){
            //回调函数中使用this，代表触发的元素。
            let index = this.getAttribute("index");
            //图片左移
            carousel_control.style.left = "-" + 960*(index-1) + "px";
            //按钮样式改变
            for(let i=0;i<carousel_Buttons.length;i++){
                carousel_Buttons[i].classList.remove("carouselChoose-active");
            }
            carousel_Buttons[index-1].classList.add("carouselChoose-active");
        })
    }

    //初始化：
    carousel_Buttons[0].click();

    //定时切换
    let autoChange_index = 1;
    setInterval(function(){
        carousel_Buttons[autoChange_index].click();
        autoChange_index++;
        if(autoChange_index==5) autoChange_index=0;
    },5000);
}