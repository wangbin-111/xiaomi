
        var allche = document.getElementById("quanxuan")
        var che = document.getElementsByName("check")

        
        var jia=document.getElementsByName("jia")
        var count=document.getElementsByName("count")
        var jian=document.getElementsByName("jian")
        var monery=document.getElementsByName("monery")

        var allmonery=document.getElementById("allmonery")
        var Buycount=document.getElementById("Buycount")

        function fun1() {
            // var che=document.getElementsByName("check")
            for (var i = 0; i < che.length; i++) {
                if (allche.checked == true) {
                    che[i].checked = true
                } else {
                    che[i].checked = false
                }
            }


            // 全选是 总价
            var allMon=0

            // 总数
            var allcount=0
            for (var i = 0; i < che.length; i++) {
                // 设置总计
                if(che[i].checked==true){
                    allMon+= parseInt(monery[i].innerHTML)
                    allmonery.innerHTML=allMon
                    allcount+=parseInt(count[i].value)
                    Buycount.innerHTML=allcount
                }

                if(che[i].checked==false){
                    Buycount.innerHTML=allcount
                    allmonery.innerHTML=allMon
                }
                
            }
        }
        function fun(a) {
            var allMon=0
            var flag = true
            var allcount=0

            for (var i = 0; i < che.length; i++) {
                if (che[i].checked != true) {
                    flag = false
                }
                if (flag == false) {
                    allche.checked=false
                }else{
                    allche.checked=true
                }

                // 设置总计
                if(che[i].checked==true){
                    allMon+= parseInt(monery[i].innerHTML)
                    allmonery.innerHTML=allMon

                    allcount+=parseInt(count[i].value)
                    Buycount.innerHTML=allcount
                }

                if(che[i].checked==false){
                    allmonery.innerHTML=allMon
                    Buycount.innerHTML=allcount
                }
                
            }


        }


        for(let i=0;i<jia.length;i++){
            var mon=5999
            var all=0
            jia[i].onclick=function(){
                var allMon=0
                var allcount=0
                var val=parseInt(count[i].value)
                count[i].value=val+1
                all=mon*count[i].value
                monery[i].innerHTML=all+"元"
                for (var j = 0; j < che.length; j++) {
                // 设置总计
                if(che[j].checked==true){
                    allMon+= parseInt(monery[j].innerHTML)
                    allmonery.innerHTML=allMon
                    allcount+= parseInt(count[j].value)
                    Buycount.innerHTML=allcount
                }
            }
            }


            jian[i].onclick=function(){

                var allMon=0
                var allcount=0
                var val=parseInt(count[i].value)

                if(val-1<1){
                    alert("亲不能再减了")
                }else{
                    count[i].value=val-1
                    all=mon*count[i].value
                    monery[i].innerHTML=all+"元"
                }
                for (var j = 0; j < che.length; j++) {
                // 设置总计
                if(che[j].checked==true){
                    allMon+= parseInt(monery[j].innerHTML)
                    allmonery.innerHTML=allMon
                    allcount+= parseInt(count[j].value)
                    Buycount.innerHTML=allcount
                }
            }
            }
        }


        // 删除按钮
        var remove=document.getElementsByName("remove")

        for(let i=0;i<remove.length;i++){
            remove[i].onclick=function(){
                if(confirm("您是否要删除此商品")==true){
                    remove[i].parentNode.parentNode.remove()
                }
            }
        }
  