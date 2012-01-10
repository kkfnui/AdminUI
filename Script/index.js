$(function () {
    //设置分块的大小及间距
    function SetItemsWidth() {
        var itemcontainer_a_width = $("#itemscontainer").width() - 35.5;
        $(".items").width(itemcontainer_a_width / 3);
    }
    setInterval(SetItemsWidth, 200);

    //拖动
    $(".items").sortable({
        connectWith: ".items",
		delay:100,
		handle:"h3",
		placeholder:"ui-sortable-placeholder"
    });  
	
    //每月之星滚动显示
    if ($("#stars").length != 0) {
        var speed = 30;
        var parent = $(".stars_container");
        var stars_clone = $("#stars_clone");
        var stars = $("#stars");
        stars_clone[0].innerHTML = stars[0].innerHTML

        function Marquee() {

            if (stars_clone[0].offsetWidth - parent[0].scrollLeft <= 0)

                parent[0].scrollLeft -= stars[0].offsetWidth;

            else {

                parent[0].scrollLeft++

            }

        }

        var MyMar = setInterval(Marquee, speed)

        parent[0].onmouseover = function () { clearInterval(MyMar) }

        parent[0].onmouseout = function () { MyMar = setInterval(Marquee, speed) }

    }
})