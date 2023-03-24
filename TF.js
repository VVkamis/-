$(document).on("click",".A",function(){ //通过document绑定对应的事件
    id = $(this).attr('id')
    no = id.substr(5);
    key = id.substr(3,1);
    c = id.substr(1,1);
    for (i = 0; i < 4; i++) { 
        $('#c'+i+'k'+key+'s'+no).removeClass('true1');
        $('#c'+i+'k'+key+'s'+no).removeClass('false1');
    }
    if(key==c)
        $("#"+id).addClass('true1');
    else{
        $("#"+id).addClass('false1');
        $('#c'+key+'k'+key+'s'+no).addClass('true1');
    }
    $("#s"+no).addClass('done');
});
$(document).on("click",".B",function(){ //通过document绑定对应的事件
    id = $(this).attr('id')
    no = id.substr(5);
    key = id.substr(3,1);
    c = id.substr(1,1);
    for (i = 0; i < 4; i++) { 
        $('#c'+i+'k'+key+'s'+no).removeClass('true1');
        $('#c'+i+'k'+key+'s'+no).removeClass('false1');
    }
    if(key==c)
        $("#"+id).addClass('true1');
    else{
        $("#"+id).addClass('false1');
        $('#c'+key+'k'+key+'s'+no).addClass('true1');
        console.log('#c'+c+'k'+key+'s'+no)
    }
    $("#s"+no).addClass('done');
});
$(document).on("click",".C",function(){ //通过document绑定对应的事件
    id = $(this).attr('id')
    no = id.substr(5);
    key = id.substr(3,1);
    c = id.substr(1,1);
    for (i = 0; i < 4; i++) { 
        $('#c'+i+'k'+key+'s'+no).removeClass('true1');
        $('#c'+i+'k'+key+'s'+no).removeClass('false1');
    }
    if(key==c)
        $("#"+id).addClass('true1');
    else{
        $("#"+id).addClass('false1');
        $('#c'+key+'k'+key+'s'+no).addClass('true1');
    }
    $("#s"+no).addClass('done');
});
$(document).on("click",".D",function(){ //通过document绑定对应的事件
    id = $(this).attr('id')
    no = id.substr(5);
    key = id.substr(3,1);
    c = id.substr(1,1);
    for (i = 0; i < 4; i++) { 
        $('#c'+i+'k'+key+'s'+no).removeClass('true1');
        $('#c'+i+'k'+key+'s'+no).removeClass('false1');
    }
    if(key==c)
        $("#"+id).addClass('true1');
    else{
        $("#"+id).addClass('false1');
        $('#c'+key+'k'+key+'s'+no).addClass('true1');
    }
    $("#s"+no).addClass('done');
});
