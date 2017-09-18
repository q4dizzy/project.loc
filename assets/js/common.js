(function ($) {

    $(function () {

        $(document).on('click', '.navbar-nav .dropdown-menu', function (e) {
            e.stopPropagation()
        });

        $(document).on('click', '.navbar-nav .dropdown-toggle.more-items', function (e) {
            e.preventDefault();
        });

        /*SLIDERS*/
        if ($('.main-slider').length) {
            $('.main-slider .slick').slick({
                infinite: true,
                autoplay: false,
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: true
            });
        }
        if ($('.project-slider').length) {
            $('.project-slider .slick').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 1,
                arrows: false,
                dots: true,
                appendDots: $('.project-slick-dots'),
                adaptiveHeight: true,
                responsive: [
                    {
                        breakpoint: 1199,
                        settings: {
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 531,
                        settings: {
                            slidesToShow: 1
                        }
                    }
                ]
            });
        }
        if ($('.works-slider').length) {
            $('.works-slider .slick').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                arrows: false,
                rows: 2,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 2
                        }
                    },
                    {
                        breakpoint: 531,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });
        }
        if ($('.video-slider').length) {
            $('.works-page .video-slider .slick').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 531,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

            $('.reviews-page .video-slider .slick').slick({
                infinite: true,
                slidesToShow: 3,
                slidesToScroll: 3,
                dots: true,
                arrows: false,
                rows: 2,
                responsive: [
                    {
                        breakpoint: 767,
                        settings: {
                            slidesToShow: 2,
                            slidesToScroll: 1
                        }
                    },
                    {
                        breakpoint: 531,
                        settings: {
                            slidesToShow: 1,
                            slidesToScroll: 1
                        }
                    }
                ]
            });

        }
        /*FANCYBOX*/
        if ($('.fancybox').length) {
            $(".fancybox").fancybox();
        }

        /*VIDEO*/
        $(document).on('click', '.video-slider .item > a', function (e) {
            e.preventDefault();
            var id = $(this).attr('data-id');

            $('#video_modal').find('.modal-body').append('' +
                '<iframe width="100%" height="300"' +
                ' src="https://www.youtube.com/embed/' + id + '?autoplay=1" frameborder="0"' +
                'allowfullscreen></iframe>');

            $('#video_modal').modal('show');

        });


        $('#video_modal').on('hidden.bs.modal', function (e) {
            $(this).find('.modal-body').empty();
        });

        /*JQUERY UI*/

        if ($('#slider').length) {
            $('#slider').slider({
                range: "min",
                min: 1,
                max: 150,
                slide: function (event, ui) {
                    $("#slider-amount").val(ui.value);
                }
            });
        }
        if ($('#slider-amount').length) {
            $("#slider-amount").val($("#slider").slider("value"));
        }

        /*TOOLTIP*/
        $('body').tooltip({
            selector: '[data-toggle="tooltip"]',
            template: '<div class="tooltip custom-tooltip">' +
            '<div class="tooltip-header">' +
            '<i class="fa fa-question-circle" aria-hidden="true"></i>' +
            '</div>' +
            '<div class="tooltip-inner"></div>' +
            '</div>'
        });

        /*$('[data-toggle="tooltip"]').tooltip('show', {
            template: '<div class="tooltip foo-tooltip"><div class="tooltip-arrow"></div><div class="tooltip-inner"></div></div>'

        });*/

        /*FUNCTIONS*/

        function CheckMainBannerSliderVText(slider) {
            if (slider.length) {
                var sh = slider.height();
                slider.find('.item').each(function () {
                    var curSlideTextInner = $(this).find('.inner');
                    if (curSlideTextInner.length) {
                        var ith = curSlideTextInner.height();
                        var p = (ith >= sh ? 0 : Math.floor((sh - ith) / 2));
                        curSlideTextInner.css('padding-top', p + 'px');
                    }
                });
            }
        }

        function eqHeightBlock() {
            var prHeight = $('.your-project').height();
            $('.help-box').height(prHeight - 2);
        }

        function dropdownDirection() {
            $('.navbar-nav > li.dropdown').each(function () {
                $(this).find('.dropdown-menu').each(function () {
                    var dropdown = $(this),
                        dropdownW = dropdown.width(),
                        dropdownOffsetLeft = dropdown.offset().left,
                        dropdownOffsetRight = dropdownOffsetLeft + dropdownW,
                        menu = $('.navbar-nav'),
                        menuW = menu.width(),
                        menuOffsetLeft = menu.offset().left,
                        menuOffsetRight = menuOffsetLeft + menuW;

                    if (dropdownOffsetRight > menuOffsetRight) {
                        dropdown.addClass('dropdown-menu-right');
                        console.log('1');
                    } else {
                        dropdown.addClass('dropdown-menu-left');
                        console.log('0');
                    }
                });

            });
        }

        function CheckFilterSelectSizes() {
            $('.bx-filter-select-block').each(function () {
                var popup = $("#smartFilterDropDown" + $(this).data('id'));
                if (popup.length) {
                    popup.css({'width': $(this).css('width')});
                }
            })
        }

        $(document).on('click', '.bx-filter-select-block', function(){
            $(window).trigger('resize');
        });


        $(window).resize(function () {
            if ($('body').hasClass('catalog-page')) {
                eqHeightBlock()
            }
            dropdownDirection();
            CheckMainBannerSliderVText($('.main-slider .slick'));
            CheckFilterSelectSizes();
        }).resize();

    })

})(jQuery);
