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
        },1250, 'easeOutBounce');

        e.preventDefault();
    });
});




// self invoking anonymous function
// (function() {

// }){};