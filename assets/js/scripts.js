$(document).ready(function(){

    $("#sidebarCollapse").click(function() {
        $(".sidebar").addClass("sidebar-active");
        $(".sidebar").removeClass("sidebar-close");
    });
    $("#sidebarCollapse2").click(function() {
        $(".sidebar").addClass("sidebar-active");
        $(".sidebar").removeClass("sidebar-close");
    });
  
    $("#sidebar-close").click(function() {
        $(".sidebar").addClass("sidebar-close");
        $(".sidebar").removeClass("sidebar-active");

    });

    $("#menu-mobile").click(function() {
        $(".sidebar").toggleClass("sidebar-active");
        $(".home").toggleClass("home--hidden");
        $(".home-close").toggleClass("home-close--visible");

    });
});

