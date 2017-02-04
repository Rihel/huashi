$(function(){
//加载的时候执行
    $("body").prepend("<div id=\"share_qr\">"
        +"<div id=\"share_qr_qr\">"
        +"<img id=\"share_qr_img\" src=\"./upload/loading.gif\"></div>"
        +"</div>");
});

//显示加载层
function divshow(){
    $("body" ).prepend( '<div style="width:100%; height:100%; background:#000; position:absolute;filter: alpha(opacity=80); opacity:0.0; z-index:3000;" id="zg_div"></div>' ).css( "position", "relative" );
    $("#share_qr").show();
}

//隐藏加载层
function divhide(){
    $("#zg_div").remove();
    $("#share_qr").hide();
}

//显示弹出框
function payDivShow(){
    $("body" ).prepend( '<div style="width:100%; height:100%; background:#000; position:absolute;filter: alpha(opacity=80); opacity:0.5; z-index:3000;" id="pay_zg_div"></div>' ).css( "position", "relative" );
    $("#share_qr_pay").show();
}

//隐藏弹出框
function payDivHide(){
    $("#pay_zg_div").remove();
    $("#share_qr_pay").hide();
}
//投标层
function tbdivshow(){
    $( "body" ).prepend( '<div style="width:100%; height:100%; background:#000; position:absolute;filter: alpha(opacity=80); opacity:0.5; z-index:3000;" id="zg_div"></div>' ).css( "position", "relative" );
    $("#share_qr_pay").show();
}
function tbdivhide(){
    $("#zg_div").remove();
    $("#share_qr_pay").hide();
}
//投标成功层
function tbdivshowsuccess(){
    $( "body" ).prepend( '<div style="width:100%; height:100%; background:#000; position:absolute;filter: alpha(opacity=80); opacity:0.5; z-index:3000;" id="zg_div"></div>' ).css( "position", "relative" );
    $("#share_success").show();
}
function tbdivhidesuccess(){
    $("#zg_div").remove();
    $("#share_success").hide();
}
