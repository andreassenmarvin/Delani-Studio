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

    $("form").submit(function(event){

        var inputText = document.getElementById("input-text").value;

        if ($(".input-text").val() === "" || $(".input-text").val().length < 3 ){
            $(".input-text").addClass("error");
            $(".name-error").show();
            $(".input-email").removeClass("error");
            $(".email-error").hide();
            $("#message").removeClass("error");
            $(".message-error").hide();
            return false;
        }

        else if ($(".input-email").val() === ""){
            $(".input-email").addClass("error");
            $(".email-error").show();
            $(".input-text").removeClass("error");
            $(".name-error").hide();
            $("#message").removeClass("error");
            $(".message-error").hide();
            return false;
        }

        else if ($("#message").val() === ""){
            $("#message").addClass("error");
            $(".message-error").show();
            $(".input-email").removeClass("error");
            $(".email-error").hide();
            $(".input-text").removeClass("error");
            $(".name-error").hide();
        }

        else {
            $(".input-text").removeClass("error");
            $(".name-error").hide();
            $(".input-email").removeClass("error");
            $(".email-error").hide();
            $("#message").removeClass("error");
            $(".message-error").hide();
            alert(`Hello ${inputText}!Your message has been sent`)
        }


        event.preventDefault();
    })
    
})

