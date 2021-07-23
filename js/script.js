// Toggle effect between icons and descriptions
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


    // Form validate onsubmit
    $("form").submit(function(event){

        var inputText = document.getElementById("input-text").value;

        if ($(".input-text").val() === "" || $(".input-text").val().length < 3 ){
            $(".input-text").addClass("error");
            $(".name-error").show();
            $(".input-email").removeClass("error");
            $(".email-error").hide();
            $("#message").removeClass("error");
            $(".message-error").hide();
            document.getElementById("input-text").focus();
            return false
        }

        else if ($(".input-email").val() === ""){
            $(".input-email").addClass("error");
            $(".email-error").show();
            $(".input-text").removeClass("error");
            $(".name-error").hide();
            $("#message").removeClass("error");
            $(".message-error").hide();
            document.getElementById("input-email").focus();
            return false;
        }

        else if ($("#message").val() === ""){
            $("#message").addClass("error");
            $(".message-error").show();
            $(".input-email").removeClass("error");
            $(".email-error").hide();
            $(".input-text").removeClass("error");
            $(".name-error").hide();
            document.getElementById("message").focus();
            return false;
        }

        else {
            $(".input-text").removeClass("error");
            $(".name-error").hide();
            $(".input-email").removeClass("error");
            $(".email-error").hide();
            $("#message").removeClass("error");
            $(".message-error").hide();
            alert(`Hello ${inputText}!Your message has been sent`);
            $(".form form").trigger("reset");
        }

        event.preventDefault();
    })


    $(".girraffe").hover(function(){
         $(".bailey-show").removeClass("bailey-show");
         $(".bailey-show").attr("id", "bailey-div");
         $(".bailey-img").addClass("bailey-filter");
    })
    $(".girraffe").mouseleave(function(){
        $("#bailey-div").removeAttr("bailey-div");
        $("#bailey-div").addClass("bailey-show");
        $(".bailey-img").removeClass("bailey-filter");
   })


   $(".img1").hover(function(){
       $(".img1-box").show();
       $(".img-miw").addClass("img-filter");
   })
   $(".img1").mouseleave(function(){
       $(".img1-box").hide();
       $(".img-miw").removeClass("img-filter");
   })

   $(".img2").hover(function(){
       $(".img2-box").show();
       $(".img-arch").addClass("img-filter");
   })
    $(".img2").mouseleave(function(){
        $(".img2-box").hide();
        $(".img-arch").removeClass("img-filter");
    })

    $(".img3").hover(function(){
        $(".img3-box").show();
        $(".img-ds").addClass("img-filter");
    })
     $(".img3").mouseleave(function(){
         $(".img3-box").hide();
         $(".img-ds").removeClass("img-filter");
     })

     $(".img4").hover(function(){
        $(".img4-box").show();
        $(".img-rr").addClass("img-filter");
    })
     $(".img4").mouseleave(function(){
         $(".img4-box").hide();
         $(".img-rr").removeClass("img-filter");
     })

     $(".img5").hover(function(){
        $(".img5-box").show();
        $(".img-taa").addClass("img-filter");
    })
     $(".img5").mouseleave(function(){
         $(".img5-box").hide();
         $(".img-taa").removeClass("img-filter");
     })

     $(".img6").hover(function(){
        $(".img6-box").show();
        $(".img-lp").addClass("img-filter");
    })
     $(".img6").mouseleave(function(){
         $(".img6-box").hide();
         $(".img-lp").removeClass("img-filter");
     })

     $(".img7").hover(function(){
        $(".img7-box").show();
        $(".img-andrea").addClass("img-filter");
    })
     $(".img7").mouseleave(function(){
         $(".img7-box").hide();
         $(".img-andrea").removeClass("img-filter");
     })
    
 })

