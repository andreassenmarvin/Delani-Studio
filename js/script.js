$(function(){
    $(".design-img").click(function(){
        $(".design-p").show();
        $(".design-img").toggle();
    })
    $(".design-p").click(function(){
        $(".design-p").hide();
        $(".design-img").toggle();
    })


    $(".dev-img").click(function(){
        $(".dev-p").show();
        $(".dev-img").toggle();
    })
    $(".dev-p").click(function(){
        $(".dev-p").hide();
        $(".dev-img").toggle();
    })
    

    $(".mgt-img").click(function(){
        $(".p-mgt-p").show();
        $(".mgt-img").toggle();
    })
    $(".p-mgt-p").click(function(){
        $(".p-mgt-p").hide();
        $(".mgt-img").toggle();
    })
    
})