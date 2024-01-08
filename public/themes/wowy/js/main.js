! function (e) {
    "use strict";
    var s = "rtl" === e("body").prop("dir");
    e(window).on("load", (function () {
        e("#preloader-active").fadeOut(), e("body").css({
            overflow: "visible"
        })
    }));
    var a = e(".sticky-bar"),
        i = e(window),
        o = e("header.header-area");

    function t(e, s, a) {
        var i = e.closest(".widget-filter-item"),
            o = s,
            t = a;
        i.length && "price" == i.data("type") && (o = o.format_price(), t = t.format_price());
        var n = e.find(".from"),
            l = e.find(".to");
        e.find("input.min-range").val(s), e.find("input.max-range").val(a), n.text(o), l.text(t)
    }
    i.on("scroll", (function () {
        i.scrollTop() < 200 ? (a.removeClass("stick"), o.find(".categories-dropdown-active-large").hasClass("default-open") && (o.find(".categories-dropdown-active-large").addClass("open"), o.find(".categories-button-active").addClass("open"))) : (o.find(".categories-dropdown-active-large").removeClass("open"), o.find(".categories-button-active").removeClass("open"), a.addClass("stick"))
    })), (new WOW).init(), e(".sticky-sidebar").length && e(".sticky-sidebar").theiaStickySidebar(), Number.prototype.format_price = function (e, s) {
        var a = window.currencies || {};
        e || (e = null != a.number_after_dot ? a.number_after_dot : 2);
        var i = "\\d(?=(\\d{" + (s || 3) + "})+$)",
            o = "",
            t = this;
        return a.show_symbol_or_title && (o = a.symbol || a.title), a.display_big_money && (t >= 1e6 && t < 1e9 ? (t /= 1e6, o = a.million + (o ? " " + o : "")) : t >= 1e9 && (t /= 1e9, o = a.billion + (o ? " " + o : ""))), t = (t = (t = t.toFixed(Math.max(0, ~~e))).toString().split("."))[0].toString().replace(new RegExp(i, "g"), "$&" + a.thousands_separator) + (t[1] ? a.decimal_separator + t[1] : ""), a.show_symbol_or_title && (a.is_prefix_symbol ? t = o + t : t += o), t
    }, e(".slider-range").length && e(".slider-range").map((function (s, a) {
        var i = e(a),
            o = i.closest(".range"),
            n = o.find("input.min-range"),
            l = o.find("input.max-range");
        i.slider({
            range: !0,
            min: n.data("min") || 0,
            max: l.data("max") || 500,
            values: [n.val() || 0, l.val() || 500],
            slide: function (e, s) {
                t(o, s.values[0], s.values[1])
            }
        }), t(o, i.slider("values", 0), i.slider("values", 1))
    }));
    var n = e(".hero-slider-1");
    n.slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: s,
        speed: 500,
        autoplay: "yes" === n.data("autoplay"),
        infinite: "yes" === n.data("autoplay"),
        autoplaySpeed: n.data("autoplay-speed") ? n.data("autoplay-speed") : 3e3,
        fade: !0,
        loop: !0,
        dots: !0,
        arrows: !0,
        prevArrow: '<span class="slider-btn slider-prev"><i class="far fa-chevron-left"></i></span>',
        nextArrow: '<span class="slider-btn slider-next"><i class="far fa-chevron-right"></i></span>',
        appendArrows: ".hero-slider-1-arrow"
    }), e(".carousel-6-columns").each((function () {
        var a = e(this).attr("id"),
            i = "#" + a,
            o = "#" + a + "-arrows",
            t = e(this).data("slick") || {};
        e(i).slick({
            dots: !1,
            rtl: s,
            arrows: !0,
            autoplay: "yes" === t.autoplay,
            infinite: "yes" === t.infinite,
            speed: t.speed ? t.speed : 1e3,
            autoplaySpeed: t.autoplaySpeed ? t.autoplaySpeed : 3e3,
            slidesToShow: 6,
            slidesToScroll: 1,
            loop: !0,
            adaptiveHeight: !0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }],
            prevArrow: '<span class="slider-btn slider-prev"><i class="far fa-chevron-left"></i></span>',
            nextArrow: '<span class="slider-btn slider-next"><i class="far fa-chevron-right"></i></span>',
            appendArrows: o
        })
    })), e(".carousel-4-columns").each((function () {
        var a = e(this).attr("id"),
            i = "#" + a + "-arrows";
        e("#" + a).slick({
            dots: !1,
            infinite: !0,
            rtl: s,
            speed: 1e3,
            arrows: !0,
            autoplay: !1,
            slidesToShow: 4,
            slidesToScroll: 1,
            loop: !0,
            adaptiveHeight: !0,
            responsive: [{
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }],
            prevArrow: '<span class="slider-btn slider-prev"><i class="far fa-chevron-left"></i></span>',
            nextArrow: '<span class="slider-btn slider-next"><i class="far fa-chevron-right"></i></span>',
            appendArrows: i
        })
    })), e('button[data-bs-toggle="tab"]').on("shown.bs.tab", (function () {
        e(".carousel-4-columns").slick("setPosition")
    }));
    var l = function (e) {
        return window.trans = window.trans || {}, "undefined" !== window.trans[e] && window.trans[e] ? window.trans[e] : e
    };
    e("[data-countdown]").each((function () {
        var s = e(this),
            a = e(this).data("countdown");
        s.countdown(a, (function (s) {
            e(this).html(s.strftime('<span class="countdown-section"><span class="countdown-amount hover-up">%D</span><span class="countdown-period"> ' + l("days") + ' </span></span><span class="countdown-section"><span class="countdown-amount hover-up">%H</span><span class="countdown-period"> ' + l("hours") + ' </span></span><span class="countdown-section"><span class="countdown-amount hover-up">%M</span><span class="countdown-period"> ' + l("mins") + ' </span></span><span class="countdown-section"><span class="countdown-amount hover-up">%S</span><span class="countdown-period"> ' + l("sec") + " </span></span>"))
        }))
    })), e(".categories-button-active").on("click", (function (s) {
        if (s.preventDefault(), o.find(".categories-button-active").hasClass("cant-close") && !a.hasClass("stick")) return !1;
        e(this).hasClass("open") ? (e(this).removeClass("open"), e(this).siblings(".categories-dropdown-active-large").removeClass("open"), o.find(".categories-button-active").hasClass("cant-close") || e(this).siblings(".categories-dropdown-active-large").removeClass("default-open")) : (e(this).addClass("open"), e(this).siblings(".categories-dropdown-active-large").addClass("open"))
    }));
    var r, c, d, p = e("#slider-range"),
        u = e("#amount");
    if (p.length && e((function () {
        p.slider({
            range: !0,
            min: 16,
            max: 400,
            values: [0, 300],
            slide: function (e, s) {
                u.val("$" + s.values[0] + " - $" + s.values[1])
            }
        }), u.val("$" + p.slider("values", 0) + " - $" + p.slider("values", 1))
    })), e(".sort-by-product-area").length) {
        var v = e("body"),
            g = e(".sort-by-product-area"),
            h = g.find(".sort-by-dropdown");
        v.on("click", ".sort-by-product-area .sort-by-product-wrap", (function (s) {
            s.preventDefault();
            var a = e(this);
            a.parent().hasClass("show") ? a.siblings(".sort-by-dropdown").removeClass("show").closest(".sort-by-product-area").removeClass("show") : a.siblings(".sort-by-dropdown").addClass("show").closest(".sort-by-product-area").addClass("show")
        })), v.on("click", (function (s) {
            var a = s.target;
            e(a).is(".sort-by-product-area") || e(a).parents().is(".sort-by-product-area") || !g.hasClass("show") || (g.removeClass("show"), h.removeClass("show"))
        }))
    }
    e(".shop-filter-toggle").on("click", (function (s) {
        s.preventDefault(), e(".shop-product-filter-header").slideToggle(), e(".shop-filter-toggle").toggleClass("active")
    })), window.closeShopFilterSection = function () {
        e(".shop-filter-toggle").hasClass("active") && (e(".shop-product-filter-header").slideToggle(), e(".shop-filter-toggle").removeClass("active"))
    }, e(".pro-dec-big-img-slider").slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        rtl: s,
        arrows: !1,
        draggable: !1,
        fade: !1,
        asNavFor: ".product-dec-slider-small , .product-dec-slider-small-2"
    }), e(".product-dec-slider-small").slick({
        slidesToShow: 4,
        slidesToScroll: 1,
        rtl: s,
        asNavFor: ".pro-dec-big-img-slider",
        dots: !1,
        focusOnSelect: !0,
        fade: !1,
        arrows: !1,
        responsive: [{
            breakpoint: 991,
            settings: {
                slidesToShow: 3
            }
        }, {
            breakpoint: 767,
            settings: {
                slidesToShow: 4
            }
        }, {
            breakpoint: 575,
            settings: {
                slidesToShow: 2
            }
        }]
    }), e(".img-popup").length && e(".img-popup").magnificPopup({
        type: "image",
        gallery: {
            enabled: !0
        }
    }), e(".grid").length && e(".grid").imagesLoaded((function () {
        e(".grid").isotope({
            itemSelector: ".grid-item",
            percentPosition: !0,
            layoutMode: "masonry",
            masonry: {
                columnWidth: ".grid-item"
            }
        })
    })), r = e(".search-active"), c = e(".search-close"), d = e(".main-search-active"), r.on("click", (function (e) {
        e.preventDefault(), d.addClass("search-visible")
    })), c.on("click", (function () {
        d.removeClass("search-visible")
    })),
        function () {
            var s = e(".burger-icon"),
                a = e(".mobile-menu-close"),
                i = e(".mobile-header-active"),
                o = e("body");
            o.prepend('<div class="body-overlay-1"></div>'), s.on("click", (function (e) {
                e.preventDefault(), i.addClass("sidebar-visible"), o.addClass("mobile-menu-active")
            })), a.on("click", (function () {
                i.removeClass("sidebar-visible"), o.removeClass("mobile-menu-active")
            })), e(".body-overlay-1").on("click", (function () {
                i.removeClass("sidebar-visible"), o.removeClass("mobile-menu-active")
            }))
        }();
    var f = e(".mobile-menu"),
        m = f.find(".dropdown");
    m.parent().prepend('<span class="menu-expand"><i class="far fa-chevron-down"></i></span>'), m.slideUp(), f.on("click", "li a, li .menu-expand", (function (s) {
        var a = e(this);
        a.parent().attr("class").match(/\b(menu-item-has-children|has-children|has-sub-menu)\b/) && ("#" === a.attr("href") || a.hasClass("menu-expand")) && (s.preventDefault(), a.siblings("ul:visible").length ? (a.parent("li").removeClass("active"), a.siblings("ul").slideUp()) : (a.parent("li").addClass("active"), a.closest("li").siblings("li").removeClass("active").find("li").removeClass("active"), a.closest("li").siblings("li").find("ul:visible").slideUp(), a.siblings("ul").slideDown()))
    })), e(".mobile-language-active").on("click", (function (s) {
        s.preventDefault(), e(this).closest(".single-mobile-header-info").find(".lang-dropdown-active").slideToggle(900)
    })), e(".categories-button-active-2").on("click", (function (s) {
        s.preventDefault(), e(".categories-dropdown-active-small").slideToggle(900)
    })), e(".mobile-menu-wrap .main-categories-wrap .categories-dropdown-wrap .menu-expand").on("click", (function (s) {
        s.preventDefault(), e(this).closest("li").find(".dropdown").slideToggle(900)
    })), e(".more_slide_open").slideUp(), e(".more_categories").on("click", (function () {
        e(this).toggleClass("show"), e(".more_slide_open").slideToggle()
    })), e("#news-flash").vTicker({
        speed: 500,
        pause: 3e3,
        animation: "fade",
        mousePause: !1,
        showItems: 1
    }), (new WOW).init(), e(document).ready((function () {
        var a, i;
        ! function () {
            var a = e(".product-image-slider");
            if (a.length) {
                a.slick({
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    rtl: s,
                    arrows: !1,
                    fade: !1,
                    asNavFor: ".slider-nav-thumbnails"
                }), e(".slider-nav-thumbnails").slick({
                    slidesToShow: 5,
                    slidesToScroll: 1,
                    rtl: s,
                    asNavFor: ".product-image-slider",
                    dots: !1,
                    focusOnSelect: !0,
                    prevArrow: '<button type="button" class="slick-prev"><i class="fa fa-angle-left"></i></button>',
                    nextArrow: '<button type="button" class="slick-next"><i class="fa fa-angle-right"></i></button>'
                });
                var i = e(".slider-nav-thumbnails .slick-slide");
                i.removeClass("slick-active"), i.eq(0).addClass("slick-active"), a.on("beforeChange", (function (e, s, a, o) {
                    var t = o;
                    i.removeClass("slick-active"), i.eq(t).addClass("slick-active")
                })), a.lightGallery({
                    selector: ".slick-slide:not(.slick-cloned) a",
                    thumbnail: !0,
                    share: !1,
                    fullScreen: !1,
                    autoplay: !1,
                    autoplayControls: !1,
                    actualSize: !1
                })
            }
            e(".list-filter").each((function () {
                e(this).find("a").on("click", (function (s) {
                    s.preventDefault(), e(this).parent().siblings().removeClass("active"), e(this).parent().toggleClass("active"), e(this).parents(".attr-detail").find(".current-size").text(e(this).text()), e(this).parents(".attr-detail").find(".current-color").text(e(this).attr("data-color"))
                }))
            })), e(document).on("click", ".dropdown-menu .cart_list", (function (e) {
                e.stopPropagation()
            })), e(".ps-list--categories").length > 0 && e(".ps-list--categories .menu-item-has-children > .sub-toggle").on("click", (function (s) {
                s.preventDefault();
                var a = e(this).parent(".menu-item-has-children");
                e(this).toggleClass("active"), a.siblings().find(".sub-toggle").removeClass("active"), a.children(".sub-menu").slideToggle(350), a.siblings().find(".sub-menu").slideUp(350), a.hasClass("has-mega-menu") && (a.children(".mega-menu").slideToggle(350), a.siblings(".has-mega-menu").find(".mega-menu").slideUp(350))
            }))
        }(), a = 0, i = e("#scrollUp"), e(window).scroll((function () {
            var s = e(window).scrollTop();
            s > a && s > 500 ? i.addClass("active") : i.removeClass("active"), a = s
        })), i.on("click", (function () {
            e("html, body").animate({
                scrollTop: "0px"
            }, 0)
        }))
    }))
}(jQuery);
