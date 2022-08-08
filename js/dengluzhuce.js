var btn1=document.getElementById("btn1")
var btn2=document.getElementById("btn2")
var cencontain=document.getElementById("cencontain")
var dengluForm=document.getElementById("dengluForm")
var zhuceForm=document.getElementById("zhuceForm")
var dengluFoot=document.getElementById("dengluFoot")
var zhuceFoot=document.getElementById("zhuceFoot")
var img=document.getElementById("zuo")
btn1.onclick=function(){
    this.style.borderBottom="3px solid rgb(255, 90, 2)"
    btn2.style.borderBottom="none"
    dengluForm.style.display="block"
    dengluFoot.style.display="block"
    zhuceFoot.style.display="none"
    zhuceForm.style.display="none"
    cencontain.style.height=""
    img.style.height="794px"



    this.style.fontWeight= "bold";
    this.style.color= "black";
    btn2.style.fontWeight= "";
    btn2.style.color= "";
}

// 注册按钮
btn2.onclick=function(){
    this.style.borderBottom="3px solid rgb(255, 90, 2)"
    btn1.style.borderBottom="none"
    dengluForm.style.display="none"
    dengluFoot.style.display="none"
    zhuceFoot.style.display="block"
    zhuceForm.style.display="block"
    cencontain.style.height="570px"
    img.style.height="876px"

    this.style.fontWeight= "bold";
    this.style.color= "black";
    btn1.style.fontWeight= "";
    btn1.style.color= "#9e9a97";
}

var sanjiao=document.getElementById("sanjiao")

sanjiao.onmouseover=function(){
    // alert(1)
    // this.style.borderColor="rgb(113, 114, 114) transparent  transparent  transparent"
}

var q=document.getElementById("q")
var langu=document.getElementById("langu")

q.onmouseover=function(){
    langu.style.display="block"
}
langu.onmouseover=function(){
    langu.style.display="block"
}
q.onmouseout=function(){
    langu.style.display="none"
}
langu.onmouseout=function(){
    langu.style.display="none"
}

// 判断点了那个按钮
// 定义一个判断符号
        window.onload=function(){
           var flag
            var a=window.location.href
            for(var i=window.location.href.length-1;i>window.location.href.length-2;i--){
                flag=a[i]
            }
            if(flag=="2"){
                btn2.style.borderBottom="3px solid rgb(255, 90, 2)"
                btn1.style.borderBottom="none"
                dengluForm.style.display="none"
                dengluFoot.style.display="none"
                zhuceFoot.style.display="block"
                zhuceForm.style.display="block"
                cencontain.style.height="570px"
                img.style.height="876px"

                btn2.style.fontWeight= "bold";
                btn2.style.color= "black";
                btn1.style.fontWeight= "";
                btn1.style.color= "#9e9a97";
            }
        }
