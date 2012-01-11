//左边菜单

$(function () {

    //控制菜单的显示和隐藏
    $(".expand_container").bind("click", function () {
        $(this).parent().parent().find("li").toggle("500");
        $(this).find(".icon").toggleClass("cssicon").toggleClass("icon_shrink");
    });
    //隐藏或显示左菜单面板
    var hasleft = true;
    $("#resize").bind("click", function () {
        if (hasleft == true) {
            $("#left").hide();
            $("#right").css("margin-left", 5);
            hasleft = false;
            $("#control_icon").attr("src", "../Style/image/expand.gif");
        } else {
            $("#right").css("margin-left", 205);
            $("#left").show();
            hasleft = true;
            $("#control_icon").attr("src", "../Style/image/reduce.gif");
        }

    });

})