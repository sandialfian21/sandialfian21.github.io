$(document).ready(function(){
    // event pada saat link di klik
    $('.halamans').on('click', function(e) {

        // ambil isi href
        let tujuan = $(this).attr('href');
        // tangkap elemen yang bersangkutan
        let elemenTujuan = $(tujuan);

        // pindahkan scroll
        $('html, body').animate({
            scrollTop: elemenTujuan.offset().top - 57
        },1700, 'easeOutBounce');

        e.preventDefault();
    });
});



// Parallax
// About
$(window).on('load', function() {
    $('.kiri').addClass('pMuncul')
    $('.kanan').addClass('pMuncul')
});

$(window).scroll(function() {
    var wScroll = $(this).scrollTop();
    
    // Jumbotron
    $('.jumbotron img').css({
        'transform' :'translate(0px , '+ wScroll/2.2 +'%)'
    });
    $('.jumbotron h1').css({
        'transform' :'translate(0px , '+ wScroll/1.3 +'%)'
    });
    $('.jumbotron p').css({
        'transform' :'translate(0px , '+ wScroll*1.5 +'%)'
    });

    // Portfolio
    if(wScroll > $('.portfolio').offset().top -200 ) {
        $('.portfolio .img-thumbnail').each(function(i) {
            setTimeout(function() {
                
                $('.portfolio .img-thumbnail').eq(i).addClass('muncul');

            }, 300 * (i+1));
        });

    }
});






// self invoking anonymous function
// (function() {

// }){};