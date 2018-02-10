$(document).ready(function(){
    // 首页导航栏下拉收缩
    $(".drop-down").each(function(index, el) {
        $(this).hover(function() {
            $(this).find(".dropdown-menu").slideDown();
            $(this).find("a:first-child").addClass("active");
        }, function() {
            $(this).find(".dropdown-menu").slideUp();
            $(this).find("a:first-child").removeClass("active");
        });
    });
});