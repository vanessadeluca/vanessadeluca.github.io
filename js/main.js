$(function() {
    let randomNumber = Math.floor(Math.random()*7);
    console.log(randomNumber);

    // $(".main-section").css("background", `linear-gradient(to right, transparent, #1B1822), url(../images/header-image${randomNumber}.jpg);`);



    // $(window).resize(function() {
    //     if ( $(window).width() > 800 ) {
    //
    //         $(".main-section").css("background","#1B1822");
    //
    //     } else {
    //
    //         $(".main-section").css("background", `linear-gradient(to right, transparent, #1B1822), url(images/header-image${randomNumber}.jpg)`);
    //
    //         $(".main-section").css("background-size","100vw 100vh, auto 100vh");
    //
    //         $(".main-section").css("background-repeat","no-repeat, no-repeat");
    //
    //     }
    // });


    // testando o tamanho da pagina no inicio
    checkSize();

    // rodando o test quando reajusta o tamanho
    $( window ).resize( checkSize );

    function checkSize() {
        if ($(".main-wrapper").css("display") === "grid" ) {
            $(".main-section").css("background", `linear-gradient(to right, transparent, #1B1822), url(images/header-image${randomNumber}.jpg)`);

            $(".main-section").css("background-size","100vw 100vh, auto 100vh");

            $(".main-section").css("background-repeat","no-repeat, no-repeat");
        } else {
            $(".main-section").css("background","#1B1822");
        }
    }


    let decorator = `
    <div id="main-video-container">

    <div style="padding:56.25% 0 0 0;position:relative;">
    <iframe src="https://player.vimeo.com/video/815799933?autoplay=1&color=ffffff&title=0&byline=0&portrait=0" style="position:absolute;top:0;left:0;width:100%;height:100vh;" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
    </div>

    <script src="https://player.vimeo.com/api/player.js"></script>

    </div>
    `

    $("#play-video").on("click", function() {
        $(".portfolio-video").css("display", "block");
        $(".portfolio-video").append(decorator);


        $("body").css("overflow", "hidden");
    })

    $("#close-video").on("click", function() {
        $(".portfolio-video").css("display", "none");
        $("#main-video-container").remove();

        $("body").css("overflow", "visible")
    })


    // show the video when click
























    // SMOOTH SCROLL --------------------------------------

    // Select all links with hashes
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '')
            &&
            location.hostname == this.hostname
        ) {
            // Figure out element to scroll to
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            // Does a scroll target exist?
            if (target.length) {
                // Only prevent default if animation is actually gonna happen
                event.preventDefault();
                $('html, body').animate({
                    scrollTop: target.offset().top
                }, 500, function() {
                    // Callback after animation
                    // Must change focus!
                    var $target = $(target);
                    $target.focus();
                    if ($target.is(":focus")) { // Checking if the target was focused
                        return false;
                    } else {
                        $target.attr('tabindex','-1'); // Adding tabindex for elements not focusable
                        $target.focus(); // Set focus again
                    };
                });
            }
        }
    });






})
