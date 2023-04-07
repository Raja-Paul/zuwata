 
    $(".step").click( function() {
        $(this).addClass("active").prevAll().addClass("active");
        $(this).nextAll().removeClass("active");
    });
    
    $(".step01").click( function() {
        $("#line-progress").css("width", "3%");
        $(".discovery").addClass("active").siblings().removeClass("active");
    });
    
    $(".step02").click( function() {
        $("#line-progress").css("width", "20%");
        $(".strategy").addClass("active").siblings().removeClass("active");
    });
    
    $(".step03").click( function() {
        $("#line-progress").css("width", "30%");
        $(".creative").addClass("active").siblings().removeClass("active");
    });
    
    $(".step04").click( function() {
        $("#line-progress").css("width", "40%");
        $(".production").addClass("active").siblings().removeClass("active");
    });
    
    $(".step05").click( function() {
        $("#line-progress").css("width", "50%");
        $(".analysis").addClass("active").siblings().removeClass("active");
    });

    $(".step06").click( function() {
        $("#line-progress").css("width", "60%");
        $(".tokenisation").addClass("active").siblings().removeClass("active");
    });

    $(".step07").click( function() {
        $("#line-progress").css("width", "70%");
        $(".technical").addClass("active").siblings().removeClass("active");
    });

    $(".step08").click( function() {
        $("#line-progress").css("width", "80%");
        $(".web3").addClass("active").siblings().removeClass("active");
    });

    $(".step09").click( function() {
        $("#line-progress").css("width", "90%");
        $(".legal").addClass("active").siblings().removeClass("active");
    });

    $(".step010").click( function() {
        $("#line-progress").css("width", "100%");
        $(".transition").addClass("active").siblings().removeClass("active");
    });
    
     