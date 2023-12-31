(function ($) {
    "use strict";
    
    // Dropdown on mouse hover
    $(document).ready(function () {
        function toggleNavbarMethod() {
            if ($(window).width() > 992) {
                $('.navbar .dropdown').on('mouseover', function () {
                    $('.dropdown-toggle', this).trigger('click');
                }).on('mouseout', function () {
                    $('.dropdown-toggle', this).trigger('click').blur();
                });
            } else {
                $('.navbar .dropdown').off('mouseover').off('mouseout');
            }
        }
        toggleNavbarMethod();
        $(window).resize(toggleNavbarMethod);
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Vendor carousel
    $('.vendor-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:2
            },
            576:{
                items:3
            },
            768:{
                items:4
            },
            992:{
                items:5
            },
            1200:{
                items:6
            }
        }
    });


    // Related carousel
    $('.related-carousel').owlCarousel({
        loop: true,
        margin: 29,
        nav: false,
        autoplay: true,
        smartSpeed: 1000,
        responsive: {
            0:{
                items:1
            },
            576:{
                items:2
            },
            768:{
                items:3
            },
            992:{
                items:4
            }
        }
    });
   

    // Product Quantity
  
    $('.quantity button').on('click', function () {
        var button = $(this);
        var oldValue = button.parent().parent().find('input').val();
        var price = $('#price').html()
        var priceNumber = parseInt(price)
        // var allPrice = $('#allPrice').html()
        var delveryPrice = $('#delvery-price').html()
        var delveryPriceNumber = parseInt(delveryPrice)
        // var allPriceNumber = parseInt(allPrice)
        if (button.hasClass('btn-plus')) {
            var newVal = parseFloat(oldValue) + 1;
            var incrVal = newVal * priceNumber
            var equalVal = incrVal
            var allPricePlus = equalVal+delveryPriceNumber
            // var allPriceTotal = allPriceNumber + delveryPriceNumber
            $('#allPrice').html(allPricePlus)
            $('#subtotal').html(equalVal)
        } else {
            if (oldValue > 1) {
                var newVal = parseFloat(oldValue) - 1;
                var equalValPrice = $('#subtotal').html()
                var equalValNumber = parseInt(equalValPrice)
                var subtotalVal = equalValNumber -priceNumber
                var allPriceMinus = subtotalVal-delveryPriceNumber
                $('#subtotal').html(subtotalVal)
                $('#allPrice').html(allPriceMinus)
                if (newVal === 1) {
                    $('#allPrice').html(110000)
                }
            } else {
                newVal = 1;
            }
        }

        button.parent().parent().find('input').val(newVal);
    });
    
})(jQuery);

