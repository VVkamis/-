function notice1(){
    $.ajax("choose.json",{
            data:{},
            dataType:'json',
            type:'get',
            async:'false',
            success:function(data){				         
                if(data.length>0){   //项目列表
                    var listInfo="";
                    $.each(data,function(){
                        listInfo+=
                        '<div class="question" id="s'+this.no+'">'+
                            '<p class="wen">'+
                                this.number+'&emsp;'+this.question+
                            '</p>'+
                            '<div class="answer">'+
                                '<button type="button" id="'+'c0k'+this.answer+'s'+this.no+ '"class="A">' + this.A + '</button>' +
                                '<button type="button" id="'+'c1k'+this.answer+'s'+this.no+ '"class="B">' + this.B + '</button>' +
                                '<button type="button" id="'+'c2k'+this.answer+'s'+this.no+ '"class="C">' + this.C + '</button>' +
                                '<button type="button" id="'+'c3k'+this.answer+'s'+this.no+ '"class="D">' + this.D + '</button>' +
                            '</div>'+
                        '</div>';
                    });
                    $("#Select")[0].innerHTML=listInfo;	
                }
            }
    //		error:function(xhr,type,errorThrown){			
    //			alert("系统繁忙，请联系管理员");
    //		}
        })
    }
    function notice2(){
        $.ajax("TF.json",{
            data:{},
            dataType:'json',
            type:'get',
            async:'false',
            success:function(data){				         
                if(data.length>0){   //项目列表
                    var listInfo="";
                    $.each(data,function(){
                        listInfo+=
                        '<div class="question" id="s'+this.no+'">'+
                            '<p class="wen">'+
                                this.number+'&emsp;'+this.question+
                            '</p>'+
                            '<div class="answer">'+
                                '<button type="button" id="'+'c0k'+this.answer+'s'+this.no+ '"class="A">' + this.T + '</button>' +
                                '<button type="button" id="'+'c1k'+this.answer+'s'+this.no+ '"class="B">' + this.F + '</button>' +
                            '</div>'+
                        '</div>';
                    });
                    $("#Select")[0].innerHTML=listInfo;
                }
            }
        })
    }
    