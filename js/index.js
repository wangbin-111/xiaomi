var lunbo = document.getElementById("img")
var arrtu = ["./fa/222.jpeg", "./fa/333.jpeg", "./fa/111.jpeg"]
var i = 0
var index=0

var t1=document.getElementById("t1")
var t2=document.getElementById("t2")
var t3=document.getElementById("t3")
var btn=[t1,t2,t3]

// 默认打开 第一个按钮高亮
btn[0].style.backgroundColor="white"
btn[0].style.borderColor="rgb(121, 123, 128)"

    
show()

for(var i=0;i<btn.length;i++){
    btn[i].num=i
    btn[i].onclick=function(){
        index=this.num
        // 点击切换图片
        lunbo.src = arrtu[index]

        // 设置点击按钮变为白色，且上一个点击的恢复
      ax()
}
function ax(){
    
    for(var i=0;i<btn.length;i++){
            btn[i].style.backgroundColor=""
            btn[i].style.borderColor=""
        }
        btn[index].style.backgroundColor="white"
        btn[index].style.borderColor="rgb(121, 123, 128)"
    }
}
var timer
function show(){
     timer=setInterval(function () {
    i++
    index++
    index%=arrtu.length
    if(i>=3){
        i=0
    }
    lunbo.src = arrtu[i]
    ax()
}, 2000)
}



// 设置固定条
var list=document.querySelectorAll(".mouse")
var listsp=document.querySelectorAll(".xianshi")

    list[0].onmouseover=function(){
        listsp[0].style.display="block"
    }
    list[0].onmouseout=function(){
        listsp[0].style.display="none"
        
    }
    list[1].onmouseover=function(){
        listsp[1].style.display="block"
    }
    list[1].onmouseout=function(){
        listsp[1].style.display="none"
        
    }
    list[2].onmouseover=function(){
        listsp[2].style.display="block"
    }
    list[2].onmouseout=function(){
        listsp[2].style.display="none"
        
    }
    list[3].onmouseover=function(){
        listsp[3].style.display="block"
    }
    list[3].onmouseout=function(){
        listsp[3].style.display="none"
        
    }
    list[4].onmouseover=function(){
        listsp[4].style.display="block"
    }
    list[4].onmouseout=function(){
        listsp[4].style.display="none"
        
    }

