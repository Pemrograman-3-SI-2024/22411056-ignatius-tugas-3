$(document).ready(function(){
    $(window).scroll(function(){
        // navbar berjalan sampai bawah
        if(this.scrollY > 20){
            $('.navbar').addClass("sticky");
        }else{
            $('.navbar').removeClass("sticky");
        }
        
        // tombol gulir ke atas tampilkan/sembunyikan skrip
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    });

    // skrip geser ke atas
    $('.scroll-up-btn').click(function(){
        $('html').animate({scrollTop: 0});
        // menghapus gulir halus pada klik tombol geser ke atas
        $('html').css("scrollBehavior", "auto");
    });

    $('.navbar .menu li a').click(function(){
        // menerapkan lagi gulir halus pada item menu klik
        $('html').css("scrollBehavior", "smooth");
    });

    // beralih menu/skrip navbar
    $('.menu-btn').click(function(){
        $('.navbar .menu').toggleClass("active");
        $('.menu-btn i').toggleClass("active");
    });

    // mengetik skrip animasi teks
    var typed = new Typed(".typing", {
        strings: ["Desainer Grafis", "Instruktur", "Blogger", "YouTuber", "Staf IT"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    var typed = new Typed(".typing-2", {
        strings: ["Desainer Grafis", "Instruktur", "Blogger", "YouTuber", "Staf IT"],
        typeSpeed: 100,
        backSpeed: 60,
        loop: true
    });

    // owl carousel script
    $('.carousel').owlCarousel({
        margin: 20,
        loop: true,
        autoplayTimeOut: 2000,
        autoplayHoverPause: true,
        responsive: {
            0:{
                items: 1,
                nav: false
            },
            600:{
                items: 2,
                nav: false
            },
            1000:{
                items: 3,
                nav: false
            }
        }
    });
});