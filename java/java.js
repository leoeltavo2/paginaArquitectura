$(document).ready(function () {
    $('.collapse').collapse()

    $(window).resize(function () {
        cambio()
    })


    function cambio() {
        if ($(Window).width() <= 1200) {
            $(".icono-menu").on("click", function () {
                $('#aside').toggle()
            })
        } else {
            $('#aside').show()
        }
    }

    // $(".main").on("click", function () {
    //     $('#aside').fadeout()
    // })
    // alert($('#imagen-web').offset().top)
    // alert($(window).height())

    // $(window).scroll(function (event) {
    //     let altura = $('#imagen-web').offset().top
    //     if (altura = $(window).scrollTop()) {

    //     } else {

    //         // $("#imagen-web").hide()
    //     }
    // })



    $('.cursor').css("cursor", "pointer")
    $('#modal').on('shown.bs.modal', function () {
        $('#exampleModal').trigger('focus')
    })
    $('.carousel').carousel({
        interval: 8000
    })
})