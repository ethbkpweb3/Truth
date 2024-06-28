(function(t) {
    "use strict";
    var e = {
            init: function() {
                var i = {
                    "wpr-nav-menu.default": e.widgetNavMenu,
                    "wpr-mega-menu.default": e.widgetMegaMenu,
                    "wpr-onepage-nav.default": e.widgetOnepageNav,
                    "wpr-grid.default": e.widgetGrid,
                    "wpr-magazine-grid.default": e.widgetMagazineGrid,
                    "wpr-media-grid.default": e.widgetGrid,
                    "wpr-woo-grid.default": e.widgetGrid,
                    "wpr-woo-category-grid-pro.default": e.widgetGrid,
                    "wpr-category-grid-pro.default": e.widgetGrid,
                    "wpr-featured-media.default": e.widgetFeaturedMedia,
                    "wpr-countdown.default": e.widgetCountDown,
                    "wpr-google-maps.default": e.widgetGoogleMaps,
                    "wpr-before-after.default": e.widgetBeforeAfter,
                    "wpr-mailchimp.default": e.widgetMailchimp,
                    "wpr-advanced-slider.default": e.widgetAdvancedSlider,
                    "wpr-testimonial.default": e.widgetTestimonialCarousel,
                    "wpr-search.default": e.widgetSearch,
                    "wpr-advanced-text.default": e.widgetAdvancedText,
                    "wpr-progress-bar.default": e.widgetProgressBar,
                    "wpr-image-hotspots.default": e.widgetImageHotspots,
                    "wpr-flip-box.default": e.widgetFlipBox,
                    "wpr-content-ticker.default": e.widgetContentTicker,
                    "wpr-tabs.default": e.widgetTabs,
                    "wpr-content-toggle.default": e.widgetContentToogle,
                    "wpr-back-to-top.default": e.widgetBackToTop,
                    "wpr-lottie-animations.default": e.widgetLottieAnimations,
                    "wpr-posts-timeline.default": e.widgetPostsTimeline,
                    "wpr-sharing-buttons.default": e.widgetSharingButtons,
                    "wpr-twitter-feed.default": e.widgetTwitterFeed,
                    "wpr-instagram-feed.default": e.widgetInstagramFeed,
                    "wpr-facebook-feed.default": e.widgetFacebookFeed,
                    "wpr-flip-carousel.default": e.widgetFlipCarousel,
                    "wpr-feature-list.default": e.widgetFeatureList,
                    "wpr-advanced-accordion.default": e.widgetAdvancedAccordion,
                    "wpr-image-accordion.default": e.widgetImageAccordion,
                    "wpr-product-media.default": e.widgetProductMedia,
                    "wpr-product-add-to-cart.default": e.widgetProductAddToCart,
                    "wpr-product-mini-cart.default": e.widgetProductMiniCart,
                    "wpr-product-filters.default": e.widgetProductFilters,
                    "wpr-page-cart.default": e.widgetPageCart,
                    "wpr-my-account-pro.default": e.widgetPageMyAccount,
                    "wpr-reading-progress-bar.default": e.widgetReadingProgressBar,
                    "wpr-data-table.default": e.widgetDataTable,
                    "wpr-charts.default": e.widgetCharts,
                    "wpr-taxonomy-list.default": e.widgetTaxonomyList,
                    "wpr-offcanvas.default": e.widgetOffcanvas,
                    "wpr-wishlist-button-pro.default": e.widgetWishlistButton,
                    "wpr-mini-wishlist-pro.default": e.widgetMiniWishlist,
                    "wpr-wishlist-pro.default": e.widgetWishlist,
                    "wpr-compare-button-pro.default": e.widgetCompareButton,
                    "wpr-mini-compare-pro.default": e.widgetMiniCompare,
                    "wpr-compare-pro.default": e.widgetCompare,
                    "wpr-form-builder.default": e.widgetFormBuilder,
                    global: e.widgetSection,
                    "wpr-post-media.default": e.widgetPostMedia
                };
                t.each(i, function(e, t) {
                    window.elementorFrontend.hooks.addAction("frontend/element_ready/" + e, t)
                }), e.changeAdminBarMenu()
            },
            widgetPostMedia: function(i) {
                var a = t(".wpr-featured-media-image").attr("data-lightbox");
                if (typeof a != typeof void 0 && !1 !== a && !e.editorCheck()) {
                    var r = i.find(".wpr-featured-media-wrap");
                    a = JSON.parse(a), r.lightGallery(a), r.on("onAferAppendSlide.lg, onAfterSlide.lg", function() {
                        var e = t("#lg-actual-size, #lg-zoom-in, #lg-zoom-out, #lg-download"),
                            i = t("#lg-download").attr("href");
                        t("#lg-download").length && (-1 === i.indexOf("wp-content") ? e.addClass("wpr-hidden-element") : e.removeClass("wpr-hidden-element")), "" === a.autoplay && t(".lg-autoplay-button").css({
                            width: "0",
                            height: "0",
                            overflow: "hidden"
                        })
                    })
                }
            },
            widgetSection: function(i) {
                function a(t) {
                    var a = JSON.parse(t),
                        r = e.editorCheck() ? i.find(".wpr-particle-wrapper").attr("wpr-quantity") : i.attr("wpr-quantity"),
                        s = e.editorCheck() ? i.find(".wpr-particle-wrapper").attr("wpr-color") ? i.find(".wpr-particle-wrapper").attr("wpr-color") : "#000000" : i.attr("wpr-color") || "#000000",
                        n = e.editorCheck() ? i.find(".wpr-particle-wrapper").attr("wpr-speed") : i.attr("wpr-speed"),
                        o = e.editorCheck() ? i.find(".wpr-particle-wrapper").attr("wpr-shape") : i.attr("wpr-shape"),
                        d = e.editorCheck() ? i.find(".wpr-particle-wrapper").attr("wpr-size") : i.attr("wpr-size");
                    return a.particles.size.value = d, a.particles.number.value = r, a.particles.color.value = s, a.particles.shape.type = o, a.particles.line_linked.color = s, a.particles.move.speed = n, a
                }(i.attr("data-wpr-particles") || i.find(".wpr-particle-wrapper").attr("data-wpr-particles-editor")) && function() {
                    var t = i.data("element_type"),
                        r = i.data("id"),
                        s = e.editorCheck() ? i.find(".wpr-particle-wrapper").attr("data-wpr-particles-editor") : i.attr("data-wpr-particles");
                    ("section" === t || "container" === t) && void 0 !== s && (e.editorCheck() ? i.hasClass("wpr-particle-yes") ? (particlesJS("wpr-particle-" + r, "wpr_particle_json_custom" == i.find(".wpr-particle-wrapper").attr("particle-source") ? JSON.parse(s) : a(s)), i.find(".elementor-column").css("z-index", 9), setTimeout(function() {
                        window.dispatchEvent(new Event("resize"))
                    }, 500), setTimeout(function() {
                        window.dispatchEvent(new Event("resize"))
                    }, 1500)) : i.find(".wpr-particle-wrapper").remove() : (i.prepend("<div class=\"wpr-particle-wrapper\" id=\"wpr-particle-" + r + "\"></div>"), particlesJS("wpr-particle-" + r, "wpr_particle_json_custom" == i.attr("particle-source") ? JSON.parse(s) : a(s)), setTimeout(function() {
                        window.dispatchEvent(new Event("resize"))
                    }, 500), setTimeout(function() {
                        window.dispatchEvent(new Event("resize"))
                    }, 1500)))
                }(), (i.hasClass("wpr-jarallax") || i.hasClass("wpr-jarallax-yes")) && function() {
                    i.hasClass("wpr-jarallax-yes") && (!e.editorCheck() && i.hasClass("wpr-jarallax") ? (i.css("background-image", "url(\"" + i.attr("bg-image") + "\")"), i.jarallax({
                        type: i.attr("scroll-effect"),
                        speed: i.attr("speed-data")
                    })) : e.editorCheck() && (i.css("background-image", "url(\"" + i.find(".wpr-jarallax").attr("bg-image-editor") + "\")"), i.jarallax({
                        type: i.find(".wpr-jarallax").attr("scroll-effect-editor"),
                        speed: i.find(".wpr-jarallax").attr("speed-data-editor")
                    })))
                }(), i.hasClass("wpr-parallax-yes") && function() {
                    if (i.hasClass("wpr-parallax-yes")) {
                        var a = document.getElementsByClassName("wpr-parallax-multi-layer"),
                            r = Array.from(a).map(e => new Parallax(e, {
                                invertY: "yes" == e.getAttribute("direction"),
                                invertX: "yes" == e.getAttribute("direction"),
                                scalarX: e.getAttribute("scalar-speed"),
                                scalarY: e.getAttribute("scalar-speed"),
                                hoverOnly: !0,
                                pointerEvents: !0
                            }));
                        r.forEach(e => {
                            e.friction(.2, .2)
                        })
                    }
                    if (!e.editorCheck()) {
                        var s = [];
                        document.querySelectorAll(".wpr-parallax-multi-layer").forEach(e => {
                            e.parentElement.style.position = "relative", e.style.position = "absolute", s.push(e), e.remove()
                        }), document.querySelectorAll(".wpr-parallax-ml-children").forEach(e => {
                            e.style.position = "absolute", e.style.top = e.getAttribute("style-top"), e.style.left = e.getAttribute("style-left")
                        }), t(".wpr-parallax-yes").each(function(e) {
                            t(this).append(s[e])
                        })
                    }
                }(), i.hasClass("wpr-sticky-section-yes") && function() {
                    function a() {
                        if (!i.hasClass("wpr-sticky-section-yes") && !i.find(".wpr-sticky-section-yes-editor")) return void(x = "relative");
                        var e = c.includes("widescreen_sticky") ? 2400 : 4e3,
                            a = [],
                            s = [
                                ["mobile_sticky", 768],
                                ["mobile_extra_sticky", 881],
                                ["tablet_sticky", 1025],
                                ["tablet_extra_sticky", 1201],
                                ["laptop_sticky", 1216],
                                ["desktop_sticky", 4e3],
                                ["widescreen_sticky", 4e3]
                            ].filter(e => -1 != c.indexOf(e[0])).reverse();
                        s.forEach((e, t) => {
                            if (e[1] > l) {
                                var r = e[0].replace("_sticky", "");
                                w = "desktop" == r ? i.data("settings") ? _ + i.data("settings").wpr_sticky_effects_offset : _ + i.find(".wpr-sticky-section-yes-editor").attr("data-wpr-offset-settings") : i.data("settings") ? _ + i.data("settings")["wpr_sticky_effects_offset_" + r] : _ + i.find(".wpr-sticky-section-yes-editor").attr("data-wpr-offset-settings"), -1 === p.indexOf(e[0]) ? (x = -1 === c ? .indexOf(e[0]) ? a[t - 1] ? a[t - 1] : n : "relative", a[t] = x) : -1 !== p.indexOf(e[0]) && (x = n)
                            }
                        });
                        var o = function() {
                            let e = m.scrollTop();
                            "fixed" != x && (e > _ ? r() : e <= _ && i.css({
                                position: "relative"
                            })), "relative" !== x && (e > w ? "yes" == i.data("wpr-replace-header") ? "yes" === i.data("wpr-sticky-hide") ? (e >= _ && i.addClass("wpr-visibility-hidden"), e < h && i.next().addClass(v).addClass("wpr-" + u + "-in")) : (i.addClass("wpr-visibility-hidden"), i.next().addClass(v).addClass("wpr-" + u + "-in")) : i.addClass("wpr-sticky-header") : e <= w && ("yes" == i.data("wpr-replace-header") ? (i.next().removeClass(v), i.removeClass("wpr-visibility-hidden"), i.next().removeClass("wpr-" + u + "-in")) : i.removeClass("wpr-sticky-header"))), "yes" === i.data("wpr-sticky-hide") && e >= _ && (e < h ? "yes" === i.data("wpr-replace-header") ? (i.next().removeClass("wpr-" + u + "-out"), i.next().addClass("wpr-" + u + "-in")) : (i.removeClass("wpr-" + u + "-out"), i.addClass("wpr-" + u + "-in")) : "yes" === i.data("wpr-replace-header") ? (i.next().removeClass("wpr-" + u + "-in"), i.next().addClass("wpr-" + u + "-out")) : (i.removeClass("wpr-" + u + "-in"), i.addClass("wpr-" + u + "-out"))), clearTimeout(d), d = setTimeout(() => {
                                h = e
                            }, 10)
                        };
                        "sticky" == x ? t(window).scroll(o) : "fixed" == x && (r(), t(window).scroll(o)), "yes" == i.data("wpr-replace-header") && 0 != i.next().length && i.next().get(0).style.setProperty("--wpr-animation-duration", k);
                        let d
                    }

                    function r() {
                        var e = +window.innerHeight - (+i.css("top").slice(0, -2) + i.height()),
                            t = +window.innerHeight - (+i.css("bottom").slice(0, -2) + i.height());
                        "yes" === i.data("wpr-sticky-hide") && h < m.scrollTop() || ("" == b && (b = "fixed"), i.css({
                            position: b
                        }))
                    }

                    function s() {
                        t("#wpadminbar").length && (C = t("#wpadminbar").css("height").slice(0, t("#wpadminbar").css("height").length - 2), "top" === o && "fixed" == i.css("position") && (i.css("top", +C + T + "px"), i.css("bottom", "auto")))
                    }
                    var n = e.editorCheck() ? i.find(".wpr-sticky-section-yes-editor").attr("data-wpr-position-type") : i.attr("data-wpr-position-type"),
                        o = e.editorCheck() ? i.find(".wpr-sticky-section-yes-editor").attr("data-wpr-position-location") : i.attr("data-wpr-position-location"),
                        d = e.editorCheck() ? i.find(".wpr-sticky-section-yes-editor").attr("data-wpr-position-offset") : i.attr("data-wpr-position-offset"),
                        l = t("body").prop("clientWidth") + 17,
                        p = e.editorCheck() ? i.find(".wpr-sticky-section-yes-editor").attr("data-wpr-sticky-devices") : i.attr("data-wpr-sticky-devices"),
                        c = e.editorCheck() ? i.find(".wpr-sticky-section-yes-editor").attr("data-wpr-active-breakpoints") : i.attr("data-wpr-active-breakpoints"),
                        f = !!(i.hasClass("wpr-sticky-section-yes") || i.find(".wpr-sticky-section-yes-editor")),
                        w = 0,
                        m = t(window),
                        h = m.scrollTop(),
                        g = "",
                        u = "none",
                        y = e.editorCheck() ? i.find(".wpr-sticky-section-yes-editor").attr("data-wpr-z-index") : i.attr("data-wpr-z-index"),
                        b = e.editorCheck() ? i.find(".wpr-sticky-section-yes-editor").attr("data-wpr-sticky-type") : i.attr("data-wpr-sticky-type"),
                        v = i.next().hasClass("e-con") ? "wpr-hidden-header-flex" : "wpr-hidden-header",
                        _ = i.offset().top,
                        x, C;
                    u = i.data("settings") && i.data("settings").sticky_animation ? i.data("settings").sticky_animation : i.find(".wpr-sticky-section-yes-editor").attr("data-wpr-sticky-animation");
                    var k = i.attr("data-wpr-animation-duration") ? i.attr("data-wpr-animation-duration") + "s" : "500s";
                    if (0 < i.closest("div[data-elementor-type=\"wp-post\"]").length ? g = i.closest("div[data-elementor-type=\"wp-post\"]") : 0 < i.closest("div[data-elementor-type=\"header\"]").length ? g = i.closest("div[data-elementor-type=\"header\"]") : 0 < i.closest("div[data-elementor-type=\"footer\"]").length && (g = i.closest("div[data-elementor-type=\"footer\"]")), i.find(".wpr-sticky-section-yes-editor").length || (n = i.attr("data-wpr-position-type"), o = i.attr("data-wpr-position-location"), d = i.attr("data-wpr-position-offset"), p = i.attr("data-wpr-sticky-devices"), c = i.attr("data-wpr-active-breakpoints"), y = i.attr("data-wpr-z-index")), "top" === o && "auto" === i.css("top")) {
                        var T = 0;
                        i.css("top", 0)
                    } else var T = +i.css("top").slice(0, -2);
                    if (0 == p.length && (n = "relative"), e.editorCheck() && p) {
                        var S = i.find(".wpr-sticky-section-yes-editor").attr("data-wpr-sticky-devices");
                        i.attr("data-wpr-sticky-devices", S), p = i.attr("data-wpr-sticky-devices")
                    }
                    a(), s(), t(window).smartresize(function() {
                        _ = i.offset().top, l = t("body").prop("clientWidth") + 17, t(window).scrollTop() <= w && a()
                    }), f || (x = "relative")
                }()
            },
            widgetNavMenu: function(i) {
                function a() {
                    if (i.hasClass("wpr-mobile-menu-full-width") && (i.closest(".elementor-column").length || i.closest(".e-con").length)) {
                        var e = i.closest(".elementor-top-section"),
                            a = i.closest(".elementor-column").length ? i.closest(".elementor-column") : i.closest(".elementor-element"),
                            r = e.length ? e.outerWidth() - 2 * l.offset().left : t(window).outerWidth() - 2 * l.offset().left,
                            s = a.offset().left + parseInt(a.css("padding-left"), 10);
                        l.css({
                            width: r + "px",
                            left: -s + "px"
                        })
                    }
                }

                function r(e, t) {
                    !0 === t ? i.hasClass("wpr-sub-menu-fx-slide") ? e.stop().slideDown() : e.stop().fadeIn() : i.hasClass("wpr-sub-menu-fx-slide") ? e.stop().slideUp() : e.stop().fadeOut()
                }
                var s = i.find(".wpr-nav-menu-container"),
                    n = i.find(".wpr-mobile-nav-menu-container"),
                    o = s.find(".wpr-nav-menu > li.menu-item-has-children"),
                    d = s.find(".wpr-sub-menu li.menu-item-has-children");
                i.find(".wpr-mobile-toggle").length && i.find("a").on("click", function() {
                    this.pathname != window.location.pathname || 1 < t(this).parent("li").children().length || i.find(".wpr-mobile-toggle").trigger("click")
                }), "click" === s.attr("data-trigger") ? (o.children("a").on("click", function(a) {
                    var e = t(this).parent(),
                        n = e.children(".wpr-sub-menu");
                    o.not(e).removeClass("wpr-sub-open"), (s.hasClass("wpr-nav-menu-horizontal") || s.hasClass("wpr-nav-menu-vertical") && i.hasClass("wpr-sub-menu-position-absolute")) && r(o.children(".wpr-sub-menu"), !1), e.hasClass("wpr-sub-open") ? (e.removeClass("wpr-sub-open"), r(n, !1)) : (a.preventDefault(), e.addClass("wpr-sub-open"), r(n, !0))
                }), d.on("click", function(i) {
                    var e = t(this),
                        a = e.children(".wpr-sub-menu");
                    s.hasClass("wpr-nav-menu-horizontal") && r(d.find(".wpr-sub-menu"), !1), e.hasClass("wpr-sub-open") ? (e.removeClass("wpr-sub-open"), r(a, !1)) : (i.preventDefault(), e.addClass("wpr-sub-open"), r(a, !0))
                }), t(document).mouseup(function(t) {
                    o.is(t.target) || 0 !== o.has(t.target).length || (o.not().removeClass("wpr-sub-open"), r(o.children(".wpr-sub-menu"), !1)), d.is(t.target) || 0 !== d.has(t.target).length || (d.removeClass("wpr-sub-open"), r(d.children(".wpr-sub-menu"), !1))
                })) : (o.on("mouseenter", function() {
                    s.hasClass("wpr-nav-menu-vertical") && i.hasClass("wpr-sub-menu-position-absolute") && s.find("li").not(this).children(".wpr-sub-menu").hide(), r(t(this).children(".wpr-sub-menu"), !0)
                }), d.on("mouseenter", function() {
                    r(t(this).children(".wpr-sub-menu"), !0)
                }), s.hasClass("wpr-nav-menu-horizontal") ? (o.on("mouseleave", function() {
                    r(t(this).children(".wpr-sub-menu"), !1)
                }), d.on("mouseleave", function() {
                    r(t(this).children(".wpr-sub-menu"), !1)
                })) : s.on("mouseleave", function() {
                    r(t(this).find(".wpr-sub-menu"), !1)
                }));
                var l = n.find(".wpr-mobile-nav-menu");
                n.find(".wpr-mobile-toggle").on("click", function() {
                    t(this).toggleClass("wpr-mobile-toggle-fx"), t(this).hasClass("wpr-mobile-toggle-open") ? (t(this).removeClass("wpr-mobile-toggle-open"), t(this).trigger("focusout"), t(this).find(".wpr-mobile-toggle-text").length && (t(this).children().eq(1).hide(), t(this).children().eq(0).show())) : (t(this).addClass("wpr-mobile-toggle-open"), t(this).find(".wpr-mobile-toggle-text").length && (t(this).children().eq(0).hide(), t(this).children().eq(1).show())), t(this).parent().next().stop().slideToggle(), a()
                }), l.find(".sub-menu").removeClass("wpr-sub-menu").addClass("wpr-mobile-sub-menu"), l.find(".menu-item-has-children").children("a").on("click", function(i) {
                    var e = t(this).closest("li");
                    e.hasClass("wpr-mobile-sub-open") ? (e.removeClass("wpr-mobile-sub-open"), e.children(".wpr-mobile-sub-menu").first().stop().slideUp()) : (i.preventDefault(), e.addClass("wpr-mobile-sub-open"), e.children(".wpr-mobile-sub-menu").first().stop().slideDown())
                }), a(), t(window).smartresize(function() {
                    a()
                })
            },
            widgetMegaMenu: function(i) {
                function a() {
                    let e = i.find(".wpr-mega-menu-true");
                    e.each(function() {
                        let e = t(this).find(".wpr-sub-mega-menu");
                        if (t(this).hasClass("wpr-mega-menu-width-full")) e.css({
                            "max-width": t(window).width() + "px",
                            left: -i.find(".wpr-nav-menu-container").offset().left + "px"
                        });
                        else if (t(this).hasClass("wpr-mega-menu-width-stretch")) {
                            if (0 === t(this).closest(".e-con").length) {
                                var a = t(this).closest(".elementor-section");
                                a = a.hasClass("elementor-inner-section") ? a : a.children(".elementor-container");
                                var r = a.hasClass("elementor-inner-section") ? "0" : a.find(".elementor-element-populated").css("padding");
                                r = parseInt(r.replace("px", ""), 10)
                            } else var a = t(this).closest(".e-con-inner"),
                                r = a.find(".elementor-element.e-con").css("padding"),
                                r = parseInt(r, 10);
                            var s = a.outerWidth() - 2 * r,
                                n = -(i.offset().left - a.offset().left) + r;
                            e.css({
                                width: s + "px",
                                left: n + "px"
                            })
                        } else t(this).hasClass("wpr-mega-menu-width-custom") ? e.css({
                            width: t(this).data("custom-width") + "px"
                        }) : t(this).hasClass("wpr-mega-menu-width-default") && t(this).hasClass("wpr-mega-menu-pos-relative") && e.css({
                            width: t(this).closest(".elementor-column").outerWidth() + "px"
                        })
                    })
                }

                function r() {
                    if (i.hasClass("wpr-mobile-menu-full-width") && (i.closest(".elementor-column").length || i.closest(".e-con").length)) {
                        var e = i.closest(".elementor-top-section").length ? i.closest(".elementor-top-section") : i.closest(".e-con-inner"),
                            t = i.closest(".elementor-column").length ? i.closest(".elementor-column") : i.closest(".elementor-element"),
                            a = e.outerWidth() - 2 * c.offset().left,
                            r = t.offset().left + parseInt(t.css("padding-left"), 10);
                        e.hasClass("e-con-inner") && (r = t.offset().left - 2 * parseInt(e.parent().css("padding-left"), 10), a = e.outerWidth() - 2 * parseInt(e.parent().css("padding-left"), 10)), c.parent("div").css({
                            width: a + "px",
                            left: -r + "px"
                        })
                    }
                }

                function s(e, t) {
                    !0 === t ? e.stop().addClass("wpr-animate-sub") : e.stop().removeClass("wpr-animate-sub")
                }

                function n(e) {
                    let a = e.children("a").clone().children().remove().end().text();
                    e.closest(".wpr-mobile-mega-menu").addClass("wpr-mobile-sub-offcanvas-open"), e.find(".wpr-menu-offcanvas-back").find("h3").text(a);
                    let r = i.find(".wpr-mobile-mega-menu").children(".wpr-mobile-sub-open"),
                        s = r.children("ul").length ? r.children("ul") : r.children(".wpr-mobile-sub-mega-menu"),
                        n = s.outerHeight();
                    n > t(window).height() && (i.find(".wpr-mobile-sub-mega-menu").not(e.find(".wpr-mobile-sub-mega-menu")).hide(), i.find(".wpr-mobile-mega-menu-wrap").css("overflow-y", "scroll"))
                }
                var o = i.find(".wpr-nav-menu-container"),
                    d = i.find(".wpr-mobile-nav-menu-container"),
                    l = o.find(".wpr-nav-menu > li.menu-item-has-children"),
                    p = o.find(".wpr-sub-menu li.menu-item-has-children");
                i.find(".wpr-mobile-toggle").length && i.find("a").on("click", function() {
                    this.pathname != window.location.pathname || 1 < t(this).parent("li").children().length || 0 < t(this).closest(".wpr-sub-mega-menu").length || i.find(".wpr-mobile-toggle").trigger("click")
                }), "click" === o.attr("data-trigger") ? (l.children("a").on("click", function(i) {
                    var e = t(this).parent(),
                        a = e.children(".wpr-sub-menu, .wpr-sub-mega-menu");
                    l.not(e).removeClass("wpr-sub-open"), (o.hasClass("wpr-nav-menu-horizontal") || o.hasClass("wpr-nav-menu-vertical")) && s(l.children(".wpr-sub-menu, .wpr-sub-mega-menu"), !1), e.hasClass("wpr-sub-open") ? (e.removeClass("wpr-sub-open"), s(a, !1)) : (i.preventDefault(), e.addClass("wpr-sub-open"), s(a, !0))
                }), p.on("click", function(i) {
                    var e = t(this),
                        a = e.children(".wpr-sub-menu");
                    o.hasClass("wpr-nav-menu-horizontal") && s(p.find(".wpr-sub-menu"), !1), e.hasClass("wpr-sub-open") ? (e.removeClass("wpr-sub-open"), s(a, !1)) : (i.preventDefault(), e.addClass("wpr-sub-open"), s(a, !0))
                }), t(document).mouseup(function(t) {
                    l.is(t.target) || 0 !== l.has(t.target).length || (l.not().removeClass("wpr-sub-open"), s(l.children(".wpr-sub-menu, .wpr-sub-mega-menu"), !1)), p.is(t.target) || 0 !== p.has(t.target).length || (p.removeClass("wpr-sub-open"), s(p.children(".wpr-sub-menu"), !1))
                })) : (l.on("mouseenter", function() {
                    s(t(this).children(".wpr-sub-menu, .wpr-sub-mega-menu"), !0)
                }), p.on("mouseenter", function() {
                    s(t(this).children(".wpr-sub-menu"), !0)
                }), l.on("mouseleave", function() {
                    s(t(this).children(".wpr-sub-menu, .wpr-sub-mega-menu"), !1)
                }), p.on("mouseleave", function() {
                    s(t(this).children(".wpr-sub-menu"), !1)
                }));
                var c = d.find(".wpr-mobile-nav-menu");
                d.find(".wpr-mobile-toggle").on("click", function() {
                    t(this).hasClass("wpr-mobile-toggle-open") ? (t(this).removeClass("wpr-mobile-toggle-open"), t(this).trigger("focusout"), t(this).find(".wpr-mobile-toggle-text").length && (t(this).children().eq(1).hide(), t(this).children().eq(0).show())) : (t(this).addClass("wpr-mobile-toggle-open"), t(this).find(".wpr-mobile-toggle-text").length && (t(this).children().eq(0).hide(), t(this).children().eq(1).show())), i.hasClass("wpr-mobile-menu-display-offcanvas") ? (t(this).closest(".elementor-top-section").addClass("wpr-section-full-height"), t("body").css("overflow", "hidden"), t(this).parent().siblings(".wpr-mobile-mega-menu-wrap").toggleClass("wpr-mobile-mega-menu-open")) : t(this).parent().siblings(".wpr-mobile-mega-menu-wrap").stop().slideToggle(), i.find(".mobile-mega-menu-close").on("click", function() {
                        t(this).closest(".wpr-mobile-mega-menu-wrap").removeClass("wpr-mobile-mega-menu-open"), t("body").css("overflow", "visible"), t(this).closest(".elementor-top-section").removeClass("wpr-section-full-height")
                    }), i.find(".wpr-mobile-mega-menu-overlay").on("click", function() {
                        t(this).siblings(".wpr-mobile-mega-menu-wrap").removeClass("wpr-mobile-mega-menu-open"), t("body").css("overflow", "visible"), t(this).closest(".elementor-top-section").removeClass("wpr-section-full-height")
                    }), r()
                }), c.find(".sub-menu").removeClass("wpr-sub-menu").addClass("wpr-mobile-sub-menu");
                let f = c.find(".wpr-mobile-sub-icon"),
                    w = "fas ";
                i.hasClass("wpr-sub-icon-caret-down") ? w += "fa-caret-down" : i.hasClass("wpr-sub-icon-angle-down") ? w += "fa-angle-down" : i.hasClass("wpr-sub-icon-chevron-down") ? w += "fa-chevron-down" : i.hasClass("wpr-sub-icon-plus") && (w += "fa-plus"), f.addClass(w), c.find(".menu-item-has-children > a .wpr-mobile-sub-icon, .menu-item-has-children > a[href=\"#\"]").on("click", function(a) {
                    a.preventDefault(), a.stopPropagation();
                    var e = t(this).closest("li.menu-item");
                    if (!!e.hasClass("wpr-mobile-sub-open")) e.removeClass("wpr-mobile-sub-open"), i.hasClass("wpr-mobile-menu-display-offcanvas") || (e.children(".wpr-mobile-sub-menu").slideUp(), e.children(".wpr-mobile-sub-mega-menu").slideUp());
                    else if (a.preventDefault(), e.addClass("wpr-mobile-sub-open"), i.hasClass("wpr-mobile-menu-display-offcanvas") || (t(window).trigger("resize"), e.children(".wpr-mobile-sub-menu").first().stop().slideDown()), !e.hasClass("wpr-mega-menu-true")) i.hasClass("wpr-mobile-menu-display-offcanvas") && n(e);
                    else if (e.hasClass("wpr-mega-menu-ajax") && !e.find(".wpr-mobile-sub-mega-menu").find(".elementor").length) {
                        let a = e.find(".wpr-mobile-sub-icon");
                        t.ajax({
                            type: "GET",
                            url: WprConfig.resturl + "/wprmegamenu/",
                            data: {
                                item_id: e.data("id")
                            },
                            beforeSend: function() {
                                a.removeClass(w).addClass("fas fa-circle-notch fa-spin")
                            },
                            success: function(r) {
                                a.removeClass("fas fa-circle-notch fa-spin").addClass(w), i.hasClass("wpr-mobile-menu-display-offcanvas") ? (e.find(".wpr-menu-offcanvas-back").after(r), n(e)) : (e.find(".wpr-mobile-sub-mega-menu").html(r), e.children(".wpr-mobile-sub-mega-menu").slideDown()), e.find(".wpr-mobile-sub-mega-menu").find(".elementor-element").each(function() {
                                    elementorFrontend.elementsHandler.runReadyTrigger(t(this))
                                })
                            }
                        })
                    } else i.hasClass("wpr-mobile-menu-display-offcanvas") ? n(e) : e.children(".wpr-mobile-sub-mega-menu").slideDown()
                }), i.find(".wpr-menu-offcanvas-back").on("click", function() {
                    t(this).closest(".wpr-mobile-mega-menu").removeClass("wpr-mobile-sub-offcanvas-open"), t(this).closest(".menu-item").removeClass("wpr-mobile-sub-open"), i.find(".wpr-mobile-mega-menu-wrap").removeAttr("style"), i.find(".wpr-mobile-sub-mega-menu").removeAttr("style")
                }), a(), r(), t(window).smartresize(function() {
                    a(), r()
                })
            },
            widgetOnepageNav: function(e) {
                t(document).ready(function() {
                    var i = e.find(".wpr-onepage-nav-item"),
                        a = parseInt(e.find(".wpr-onepage-nav").attr("data-speed"), 10),
                        r = [];
                    i.each(function() {
                        r.push(t(t(this).find("a").attr("href")))
                    });
                    var s = t(r),
                        n = window.location.href,
                        o = n.split("#")[1];
                    if (o) {
                        var d = t("#" + o),
                            l = d.offset().top;
                        t("html, body").animate({
                            scrollTop: l
                        }, a)
                    }
                    i.each(function() {
                        -1 !== n.indexOf(t(this).find("a").attr("href")) && t(this).addClass("wpr-onepage-active-item")
                    }), i.each(function() {
                        t(this).click(function(e) {
                            e.preventDefault(), e.stopPropagation(), i.removeClass("wpr-onepage-active-item"), t(this).addClass("wpr-onepage-active-item");
                            var r = t(this).find("a").attr("href"),
                                s = t(r),
                                n = s.offset().top;
                            t("html, body").animate({
                                scrollTop: n
                            }, a)
                        })
                    }), t(window).on("scroll", function(e) {
                        e.preventDefault(), e.stopPropagation();
                        var a = t(this).scrollTop();
                        t.isEmptyObject(s) || s.each(function() {
                            if (0 < t(this).length) {
                                var e = t(this).offset().top,
                                    r = e + t(this).outerHeight();
                                if (a >= e - 50 && a < e + r - 50) {
                                    var s = "#" + t(this).attr("id");
                                    i.removeClass("wpr-onepage-active-item"), i.filter(function() {
                                        return t(this).find("a[href=" + s + "]").length
                                    }).addClass("wpr-onepage-active-item")
                                }
                            }
                        })
                    })
                })
            },
            widgetGrid: function(a) {
                function r() {
                    if (a.find(".wpr-sharing-trigger").length) {
                        var e = a.find(".wpr-sharing-trigger"),
                            i = a.find(".wpr-post-sharing-inner"),
                            r = 5;
                        i.first().find("a").each(function() {
                            r += t(this).outerWidth() + parseInt(t(this).css("margin-right"), 10)
                        });
                        var s = parseInt(i.find("a").css("margin-right"), 10);
                        "left" === e.attr("data-direction") ? (i.css("width", r + "px"), i.css("left", -(s + r) + "px")) : "right" === e.attr("data-direction") ? (i.css("width", r + "px"), i.css("right", -(s + r) + "px")) : "top" === e.attr("data-direction") ? (i.find("a").css({
                            "margin-right": "0",
                            "margin-top": s + "px"
                        }), i.css({
                            top: -s + "px",
                            left: "50%",
                            "-webkit-transform": "translate(-50%, -100%)",
                            transform: "translate(-50%, -100%)"
                        })) : "right" === e.attr("data-direction") ? (i.css("width", r + "px"), i.css({
                            left: s + "px"
                        })) : "bottom" === e.attr("data-direction") && (i.find("a").css({
                            "margin-right": "0",
                            "margin-bottom": s + "px"
                        }), i.css({
                            bottom: -s + "px",
                            left: "50%",
                            "-webkit-transform": "translate(-50%, 100%)",
                            transform: "translate(-50%, 100%)"
                        })), "click" === e.attr("data-action") ? e.on("click", function() {
                            var e = t(this).next();
                            "hidden" === e.css("visibility") ? (e.css("visibility", "visible"), e.find("a").css({
                                opacity: "1",
                                top: "0"
                            }), setTimeout(function() {
                                e.find("a").addClass("wpr-no-transition-delay")
                            }, 100 * e.find("a").length)) : (e.find("a").removeClass("wpr-no-transition-delay"), e.find("a").css({
                                opacity: "0",
                                top: "-5px"
                            }), setTimeout(function() {
                                e.css("visibility", "hidden")
                            }, 100 * e.find("a").length))
                        }) : (e.on("mouseenter", function() {
                            var e = t(this).next();
                            e.css("visibility", "visible"), e.find("a").css({
                                opacity: "1",
                                top: "0"
                            }), setTimeout(function() {
                                e.find("a").addClass("wpr-no-transition-delay")
                            }, 100 * e.find("a").length)
                        }), a.find(".wpr-grid-item-sharing").on("mouseleave", function() {
                            var e = t(this).find(".wpr-post-sharing-inner");
                            e.find("a").removeClass("wpr-no-transition-delay"), e.find("a").css({
                                opacity: "0",
                                top: "-5px"
                            }), setTimeout(function() {
                                e.css("visibility", "hidden")
                            }, 100 * e.find("a").length)
                        }))
                    }
                }

                function s() {
                    if ("yes" === a.find(".wpr-grid-image-wrap").data("img-on-hover")) {
                        h.find(".wpr-grid-media-wrap").on("mouseover", function() {
                            void 0 !== t(this).find("img:nth-of-type(2)").attr("src") && "" !== t(this).find("img:nth-of-type(2)").attr("src") && (t(this).find("img:first-of-type").addClass("wpr-hidden-img"), t(this).find("img:nth-of-type(2)").removeClass("wpr-hidden-img"))
                        }), h.find(".wpr-grid-media-wrap").on("mouseleave", function() {
                            void 0 !== t(this).find("img:nth-of-type(2)").attr("src") && "" !== t(this).find("img:nth-of-type(2)").attr("src") && (t(this).find("img:nth-of-type(2)").addClass("wpr-hidden-img"), t(this).find("img:first-of-type").removeClass("wpr-hidden-img"))
                        })
                    }
                    "yes" !== h.find(".wpr-grid-media-wrap").attr("data-overlay-link") || e.editorCheck() || (h.find(".wpr-grid-media-wrap").css("cursor", "pointer"), h.find(".wpr-grid-media-wrap").on("click", function(e) {
                        var i = e.target.className;
                        if (-1 !== i.indexOf("inner-block") || -1 !== i.indexOf("wpr-cv-inner") || -1 !== i.indexOf("wpr-grid-media-hover")) {
                            e.preventDefault();
                            var a = t(this).find(".wpr-grid-media-hover-bg").attr("data-url"),
                                a = a.replace("#new_tab", "");
                            "_blank" === h.find(".wpr-grid-item-title a").attr("target") ? window.open(a, "_blank").focus() : window.location.href = a
                        }
                    }))
                }

                function n(i) {
                    if (-1 !== a.find(".wpr-grid-item-lightbox").length) {
                        var r = a.find(".wpr-grid-item-lightbox"),
                            s = r.find(".wpr-grid-lightbox-overlay").first();
                        r.each(function() {
                            var e = t(this).find(".inner-block > span").attr("data-src"),
                                i = t(this).closest("article").not(".slick-cloned");
                            h.hasClass("wpr-media-grid") || i.find(".wpr-grid-image-wrap").attr("data-src", e);
                            var a = i.find(".wpr-grid-image-wrap").attr("data-src");
                            "undefined" != typeof a && !1 !== a && -1 === a.indexOf("wp-content") && i.find(".wpr-grid-image-wrap").attr("data-iframe", "true")
                        }), h.lightGallery(i.lightbox), h.on("onAfterOpen.lg", function() {
                            t(".lg-outer").find(".lg-thumb-item").length && t(".lg-outer").find(".lg-thumb-item").each(function() {
                                var e = t(this).find("img").attr("src"),
                                    i = e,
                                    a = e.lastIndexOf("."),
                                    r = e.slice(a),
                                    s = e.lastIndexOf("-"),
                                    n = !!/\d{3,}x\d{3,}/.test(e.substring(a, s)) && e.substring(a, s);
                                42 <= e.substring(a, s).length && (n = ""), "" !== n && (!1 === n ? i = [e.slice(0, a), "-150x150", e.slice(a)].join("") : i = e.replace(n, "-150x150")), t(this).find("img").attr("src", i)
                            })
                        }), a.find(".wpr-grid").on("onAferAppendSlide.lg, onAfterSlide.lg", function() {
                            var e = t("#lg-actual-size, #lg-zoom-in, #lg-zoom-out, #lg-download"),
                                a = t("#lg-download").attr("href");
                            t("#lg-download").length && (-1 === a.indexOf("wp-content") ? e.addClass("wpr-hidden-element") : e.removeClass("wpr-hidden-element")), "" === i.lightbox.autoplay && t(".lg-autoplay-button").css({
                                width: "0",
                                height: "0",
                                overflow: "hidden"
                            })
                        }), s.length ? (a.find(".wpr-grid-media-hover-bg").after(s.remove()), a.find(".wpr-grid-lightbox-overlay").on("click", function() {
                            e.editorCheck() ? alert("Lightbox is Disabled in the Editor! Please Preview this Page to see it in action.") : t(this).closest("article").find(".wpr-grid-image-wrap").trigger("click")
                        })) : r.find(".inner-block > span").on("click", function() {
                            if (!e.editorCheck()) {
                                var i = t(this).closest("article").find(".wpr-grid-image-wrap");
                                i.trigger("click")
                            } else alert("Lightbox is Disabled in the Editor! Please Preview this Page to see it in action.")
                        })
                    }
                }

                function o() {
                    a.find(".wpr-post-like-button").length && a.on("click", ".wpr-post-like-button", function(i) {
                        i.preventDefault();
                        var e = t(this);
                        return "" !== e.attr("data-post-id") && t.ajax({
                            type: "POST",
                            url: e.attr("data-ajax"),
                            data: {
                                action: "wpr_likes_init",
                                post_id: e.attr("data-post-id"),
                                nonce: e.attr("data-nonce")
                            },
                            beforeSend: function() {
                                e.fadeTo(500, .5)
                            },
                            success: function(t) {
                                var i = e.attr("data-icon"),
                                    a = t.count;
                                "" === a.replace(/<\/?[^>]+(>|$)/g, "") ? (a = "<span class=\"wpr-post-like-count\">" + e.attr("data-text") + "</span>", !e.hasClass("wpr-likes-zero") && e.addClass("wpr-likes-zero")) : e.removeClass("wpr-likes-zero"), e.hasClass("wpr-already-liked") ? (e.prop("title", "Like"), e.removeClass("wpr-already-liked"), e.html("<i class=\"" + i.replace("fas", "far") + "\"></i>" + a)) : (e.prop("title", "Unlike"), e.addClass("wpr-already-liked"), e.html("<i class=\"" + i.replace("far", "fas") + "\"></i>" + a)), e.fadeTo(500, 1)
                            }
                        }), !1
                    })
                }

                function d(e) {
                    for (var r = a.find(".wpr-grid"), s = r.find(".wpr-grid-item"), n = s.filter(":visible"), o = e.layout, d = e.layout, l = e.media_align, p = e.media_width, c = e.media_distance, f = 3, w = 1, m = 2, h = parseInt(e.columns_desktop, 10), g = e.gutter_hr, u = e.gutter_vr, y = e.gutter_hr_mobile, b = e.gutter_vr_mobile, v = e.gutter_hr_mobile_extra, _ = e.gutter_vr_mobile_extra, x = e.gutter_hr_tablet, C = e.gutter_vr_tablet, k = e.gutter_hr_tablet_extra, T = e.gutter_vr_tablet_extra, S = e.gutter_hr_widescreen, z = e.gutter_vr_widescreen, j = e.gutter_hr_laptop, P = e.gutter_vr_laptop, O = r.width() + g - .3, A = t(window).outerWidth(), q = 400, I = a.attr("class"), I = I.split(" "), D = 0, W, E, L, B, d; D < I.length - 1; D++) - 1 !== I[D].search(/mobile\d/) && (w = I[D].slice(-1)), -1 !== I[D].search(/mobile_extra\d/) && (W = I[D].slice(-1)), -1 !== I[D].search(/tablet\d/) && (m = I[D].slice(-1)), -1 !== I[D].search(/tablet_extra\d/) && (E = I[D].slice(-1)), -1 !== I[D].search(/widescreen\d/) && (B = I[D].slice(-1)), -1 !== I[D].search(/laptop\d/) && (L = I[D].slice(-1));
                    var M = +elementorFrontend.config.responsive.breakpoints.mobile.value,
                        V = +elementorFrontend.config.responsive.breakpoints.mobile_extra.value,
                        H = +elementorFrontend.config.responsive.breakpoints.tablet.value,
                        R = +elementorFrontend.config.responsive.breakpoints.tablet_extra.value,
                        N = +elementorFrontend.config.responsive.breakpoints.laptop.value,
                        F = +elementorFrontend.config.responsive.breakpoints.widescreen.value,
                        U = elementorFrontend.config.responsive.activeBreakpoints;
                    M >= A && null != U.mobile ? (f = w, g = y, u = b) : V >= A && null != U.mobile_extra ? (f = W ? W : m, g = v, u = _) : H >= A && null != U.tablet ? (f = m, g = x, u = C) : R >= A && null != U.tablet_extra ? (f = E ? E : m, g = k, u = T) : N >= A && null != U.laptop ? (f = L ? L : h, g = j, u = P) : F > A ? (f = h, g = e.gutter_hr, u = e.gutter_vr) : (f = B ? B : h, g = S, u = z), 8 < f && (f = 8), "string" == typeof f && -1 !== f.indexOf("pro") && (f = 3), O = r.width() + g - .3, s.outerWidth(Math.floor(O / f - g)), s.css("margin-bottom", u + "px"), 1 === f && s.last().css("margin-bottom", "0");
                    var G = -1;
                    if (n.each(function() {
                            var e = t(this).outerHeight(),
                                i = parseInt(t(this).css("top"), 10);
                            i > G && (G = i)
                        }), "fitRows" === o && n.each(function() {
                            parseInt(t(this).css("top")) === G && t(this).addClass("rf-last-row")
                        }), "list" === o) {
                        var X = s.find(".wpr-grid-image-wrap").outerHeight();
                        if (s.find(".wpr-grid-item-below-content").css("min-height", X + "px"), 480 > t("body").prop("clientWidth")) s.find(".wpr-grid-media-wrap").css({
                            float: "none",
                            width: "100%"
                        }), s.find(".wpr-grid-item-below-content").css({
                            float: "none",
                            width: "100%"
                        }), s.find(".wpr-grid-image-wrap").css("padding", "0"), s.find(".wpr-grid-item-below-content").css("min-height", "0"), "zigzag" === l && s.find("[class*=\"elementor-repeater-item\"]").css("text-align", "center");
                        else if ("zigzag" !== l) {
                            s.find(".wpr-grid-media-wrap").css({
                                float: l,
                                width: p + "%"
                            });
                            var Y = "left" === l ? "margin-right" : "margin-left";
                            s.find(".wpr-grid-media-wrap").css(Y, c + "px"), s.find(".wpr-grid-item-below-content").css({
                                float: l,
                                width: "calc((100% - " + p + "%) - " + c + "px)"
                            })
                        } else s.filter(":even").find(".wpr-grid-media-wrap").css({
                            float: "left",
                            width: p + "%"
                        }), s.filter(":even").find(".wpr-grid-item-below-content").css({
                            float: "left",
                            width: "calc((100% - " + p + "%) - " + c + "px)"
                        }), s.filter(":even").find(".wpr-grid-media-wrap").css("margin-right", c + "px"), s.filter(":odd").find(".wpr-grid-media-wrap").css({
                            float: "right",
                            width: p + "%"
                        }), s.filter(":odd").find(".wpr-grid-item-below-content").css({
                            float: "right",
                            width: "calc((100% - " + p + "%) - " + c + "px)"
                        }), s.filter(":odd").find(".wpr-grid-media-wrap").css("margin-left", c + "px"), r.hasClass("wpr-grid-list-ready") || s.each(function(e) {
                            var i = t(this).find("[class*=\"elementor-repeater-item\"]");
                            0 == e % 2 ? i.each(function() {
                                if (!t(this).hasClass("wpr-grid-item-align-center")) {
                                    "none" === t(this).css("float") ? t(this).css("text-align", "left") : t(this).css("float", "left");
                                    t(this).find(".inner-block")
                                }
                            }) : i.each(function(e) {
                                if (!t(this).hasClass("wpr-grid-item-align-center")) {
                                    "none" === t(this).css("float") ? t(this).css("text-align", "right") : t(this).css("float", "right");
                                    var i = t(this).find(".inner-block");
                                    "0px" !== i.css("margin-left") && (i.css("margin-right", i.css("margin-left")), i.css("margin-left", "0")), 0 === e && "0px" !== i.css("margin-right") && (i.css("margin-left", i.css("margin-right")), i.css("margin-right", "0"))
                                }
                            })
                        }), setTimeout(function() {
                            r.hasClass("wpr-grid-list-ready") || r.addClass("wpr-grid-list-ready")
                        }, 500)
                    }
                    d = o, "list" === o && (o = "fitRows"), "default" !== e.filters_animation && (q = 0);
                    r.isotopewpr({
                        layoutMode: o,
                        masonry: {
                            gutter: g
                        },
                        fitRows: {
                            gutter: g
                        },
                        transitionDuration: q,
                        percentPosition: !0
                    })
                }

                function l(e) {
                    let i = a.find(".wpr-grid"),
                        r = i.children("article"),
                        s = Math.floor(i.outerWidth() / r.outerWidth());
                    if ("fitRows" === e.layout && 1 < s) {
                        let i = Math.max.apply(null, r.map(function() {
                            return t(this).outerHeight()
                        }));
                        r.each(function() {
                            t(this).css("height", i + "px")
                        }), "yes" === e.stick_last_element_to_bottom && a.addClass("wpr-grid-last-element-yes")
                    }
                }

                function p() {
                    setTimeout(function() {
                        let e = new IntersectionObserver(e => {
                            e.forEach(e => {
                                e.isIntersecting && e.target.src.includes("icon-256x256") && setTimeout(function() {
                                    e.target.src = e.target.parentElement.dataset.src, e.target.classList.toggle("wpr-hidden-image"), t(window).trigger("resize")
                                }, 100)
                            })
                        }, {});
                        a.find(".wpr-grid-image-wrap img:first-of-type").each(function() {
                            e.observe(t(this)[0])
                        })
                    }, 100)
                }

                function c(e) {
                    if ("yes" === e.filters_count && a.find(".wpr-grid-filters a, .wpr-grid-filters span").each(function() {
                            "*" === t(this).attr("data-filter") ? t(this).find("sup").text(a.find(".wpr-grid-filters").next().find("article").length) : t(this).find("sup").text(a.find(t(this).attr("data-filter")).length)
                        }), "yes" !== e.filters_linkable) {
                        if ("yes" === e.deeplinking) {
                            var i = window.location.hash.replace("#filter:", ".");
                            window.location.hash.match("#filter:all") && (i = "*");
                            var r = a.find(".wpr-grid-filters span[data-filter=\"" + i + "\"]:not(.wpr-back-filter)"),
                                s = r.parent();
                            "parent" === r.parent().attr("data-role") ? s.parent("ul").find("ul[data-parent=\"" + i + "\"]").length && (s.parent("ul").children("li").css("display", "none"), s.siblings("ul[data-parent=\"" + i + "\"]").css("display", "block")) : "sub" === r.parent().attr("data-role") && (s.closest(".wpr-grid-filters").children("li").css("display", "none"), s.parent("ul").css("display", "inline-block")), a.find(".wpr-grid-filters span").removeClass("wpr-active-filter"), r.addClass("wpr-active-filter"), a.find(".wpr-grid").isotopewpr({
                                filter: i
                            }), e.lightbox.selector = "*" === i ? " .wpr-grid-image-wrap" : i + " .wpr-grid-image-wrap", n(e)
                        }
                        "yes" === e.filters_hide_empty && a.find(".wpr-grid-filters span").each(function() {
                            var e = t(this).attr("data-filter");
                            "*" !== e && (0 === h.find(e).length ? t(this).parent("li").addClass("wpr-hidden-element") : t(this).parent("li").removeClass("wpr-hidden-element"))
                        }), a.hasClass("elementor-widget-wpr-woo-category-grid-pro") || a.hasClass("elementor-widget-wpr-category-grid-pro") || "" === e.filters_default_filter || setTimeout(function() {
                            a.find(".wpr-grid-filters").find("span[data-filter*=\"-" + e.filters_default_filter + "\"]")[0].click()
                        }, 100), a.find(".wpr-grid-filters span").on("click", function() {
                            v = 0;
                            var i = t(this).data("filter"),
                                r = t(this).parent("li"),
                                s = r.attr("data-role");
                            if (a.find(".wpr-grid-filters span").removeClass("wpr-active-filter"), t(this).addClass("wpr-active-filter"), "parent" === s ? r.parent("ul").find("ul[data-parent=\"" + i + "\"]").length && (r.parent("ul").children("li").css("display", "none"), r.siblings("ul[data-parent=\"" + i + "\"]").css("display", "block")) : "back" === s && (r.closest(".wpr-grid-filters").children("li").css("display", "inline-block"), r.parent().css("display", "none")), "yes" === e.deeplinking) {
                                var n = "#filter:" + i.replace(".", "");
                                "*" === i && (n = "#filter:all"), window.location.href = window.location.pathname + window.location.search + n
                            }
                            "infinite-scroll" === e.pagination_type && 0 === h.find(t(this).attr("data-filter")).length && a.find(".wpr-grid").infiniteScroll("loadNextPage"), "load-more" === e.pagination_type && 0 === h.find(t(this).attr("data-filter")).length && a.find(".wpr-grid").infiniteScroll("loadNextPage"), "default" !== e.filters_animation && a.find(".wpr-grid-item-inner").css({
                                opacity: "0",
                                transition: "none"
                            }), "fade-slide" === e.filters_animation ? a.find(".wpr-grid-item-inner").css("top", "20px") : "zoom" === e.filters_animation ? a.find(".wpr-grid-item-inner").css("transform", "scale(0.01)") : a.find(".wpr-grid-item-inner").css({
                                top: "0",
                                transform: "scale(1)"
                            }), a.find(".wpr-grid").isotopewpr({
                                filter: i
                            }), e.lightbox.selector = "*" === i ? " .wpr-grid-image-wrap" : i + " .wpr-grid-image-wrap", h.data("lightGallery").destroy(!0), h.lightGallery(e.lightbox)
                        })
                    }
                }

                function f() {
                    var e;
                    if (h.find(".wpr-wishlist-add").length && (t.ajax({
                            url: WprConfig.ajaxurl,
                            type: "POST",
                            data: {
                                action: "check_product_in_wishlist_grid"
                            },
                            success: function(t) {
                                e = t
                            }
                        }), h.find(".wpr-wishlist-add").each(function() {
                            var i = t(this); - 1 !== t.inArray(i.data("product-id"), e) && (!i.hasClass("wpr-button-hidden") && i.addClass("wpr-button-hidden"), i.next().hasClass("wpr-button-hidden") && i.next().removeClass("wpr-button-hidden"))
                        })), 0 < h.find(".wpr-compare-add").length) {
                        var i = [];
                        t.ajax({
                            url: WprConfig.ajaxurl,
                            type: "POST",
                            data: {
                                action: "check_product_in_compare_grid"
                            },
                            success: function(e) {
                                i = e
                            },
                            error: function(e) {
                                console.log(e)
                            }
                        }), h.find(".wpr-compare-add").each(function() {
                            var e = t(this); - 1 !== t.inArray(e.data("product-id"), i) && (!e.hasClass("wpr-button-hidden") && e.addClass("wpr-button-hidden"), e.next().hasClass("wpr-button-hidden") && e.next().removeClass("wpr-button-hidden"))
                        })
                    }
                }

                function w() {
                    h.find(".wpr-compare-add").length && (a.find(".wpr-compare-add").click(function(i) {
                        i.preventDefault();
                        var r = t(this),
                            s = t(this).data("product-id");
                        r.fadeTo(500, 0), t.ajax({
                            url: WprConfig.ajaxurl,
                            type: "POST",
                            data: {
                                action: "add_to_compare",
                                nonce: WprConfig.nonce,
                                product_id: s
                            },
                            success: function() {
                                if (a.find(".wpr-compare-add[data-product-id=\"" + s + "\"]").hide(), a.find(".wpr-compare-remove[data-product-id=\"" + s + "\"]").show(), a.find(".wpr-compare-remove[data-product-id=\"" + s + "\"]").fadeTo(500, 1), e.changeActionTargetProductId(s), t(document).trigger("added_to_compare"), "sidebar" === r.data("atcompare-popup")) t(".wpr-compare-toggle-btn").length && t(".wpr-compare-toggle-btn").each(function() {
                                    "none" === t(this).next(".wpr-compare").css("display") && t(this).trigger("click")
                                });
                                else if ("popup" === r.data("atcompare-popup")) {
                                    var i = r.closest(".wpr-grid-item"),
                                        n = i.find(".wpr-grid-item-title").text(),
                                        o = WprConfig.comparePageURL,
                                        d = "yes" == r.data("open-in-new-tab") ? "_blank" : "_self",
                                        l = i.find(".wpr-grid-image-wrap").length ? i.find(".wpr-grid-image-wrap").data("src") : "",
                                        p = r.data("atcompare-animation"),
                                        c = r.data("atcompare-fade-out-in"),
                                        f = r.data("atcompare-animation-time"),
                                        w = "wpr-added-to-compare-default",
                                        m, h;
                                    "slide-left" === p ? (w = "wpr-added-to-compare-slide-in-left", h = "wpr-added-to-compare-slide-out-left") : "scale-up" === p ? (w = "wpr-added-to-compare-scale-up", h = "wpr-added-to-compare-scale-down") : "skew" === p ? (w = "wpr-added-to-compare-skew", h = "wpr-added-to-compare-skew-off") : "fade" === p ? (w = "wpr-added-to-compare-fade", h = "wpr-added-to-compare-fade-out") : h = "wpr-added-to-compare-popup-hide", m = "" === l ? "" : "<div class=\"wpr-added-tcomp-popup-img\"><img src=" + l + " alt=\"\" /></div>", 0 < a.find(".wpr-grid").find("#wpr-added-to-comp-" + s).length || (a.find(".wpr-grid").append("<div id=\"wpr-added-to-comp-" + s + "\" class=\"wpr-added-to-compare-popup " + w + "\">" + m + "<div class=\"wpr-added-tc-title\"><p>" + n + " was added to Compare</p><p><a target=" + d + " href=" + o + ">View Compare</a></p></div></div>"), setTimeout(() => {
                                        a.find("#wpr-added-to-comp-" + s).addClass(h), setTimeout(() => {
                                            a.find("#wpr-added-to-comp-" + s).remove()
                                        }, 1e3 * f)
                                    }, 1e3 * c))
                                }
                            },
                            error: function(e) {
                                var t = e.responseJSON.message;
                                alert(t)
                            }
                        })
                    }), a.find(".wpr-compare-remove").click(function(i) {
                        i.preventDefault();
                        var r = t(this).data("product-id");
                        t(this).fadeTo(500, 0), t.ajax({
                            url: WprConfig.ajaxurl,
                            type: "POST",
                            data: {
                                action: "remove_from_compare",
                                nonce: WprConfig.nonce,
                                product_id: r
                            },
                            success: function() {
                                a.find(".wpr-compare-remove[data-product-id=\"" + r + "\"]").hide(), a.find(".wpr-compare-add[data-product-id=\"" + r + "\"]").show(), a.find(".wpr-compare-add[data-product-id=\"" + r + "\"]").fadeTo(500, 1), e.changeActionTargetProductId(r), t(document).trigger("removed_from_compare")
                            }
                        })
                    }), t(document).on("removed_from_compare", function() {
                        a.find(".wpr-compare-remove[data-product-id=\"" + i + "\"]").hide(), a.find(".wpr-compare-add[data-product-id=\"" + i + "\"]").show(), a.find(".wpr-compare-add[data-product-id=\"" + i + "\"]").fadeTo(500, 1)
                    }))
                }

                function m() {
                    let r = !1;
                    h.find(".wpr-wishlist-add").length && (a.find(".wpr-wishlist-add").click(function(i) {
                        i.preventDefault();
                        var s = t(this),
                            n = t(this).data("product-id");
                        s.fadeTo(500, 0), t.ajax({
                            url: WprConfig.ajaxurl,
                            type: "POST",
                            data: {
                                action: "add_to_wishlist",
                                nonce: WprConfig.nonce,
                                product_id: n
                            },
                            success: function() {
                                if (a.find(".wpr-wishlist-add[data-product-id=\"" + n + "\"]").hide(), a.find(".wpr-wishlist-remove[data-product-id=\"" + n + "\"]").show(), a.find(".wpr-wishlist-remove[data-product-id=\"" + n + "\"]").fadeTo(500, 1), e.changeActionTargetProductId(n), t(document).trigger("added_to_wishlist"), "sidebar" === s.data("atw-popup")) t(".wpr-wishlist-toggle-btn").length && t(".wpr-wishlist-toggle-btn").each(function() {
                                    "none" === t(this).next(".wpr-wishlist").css("display") && t(this).trigger("click")
                                });
                                else if ("popup" === s.data("atw-popup")) {
                                    var i = s.closest(".wpr-grid-item"),
                                        o = i.find(".wpr-grid-item-title").text(),
                                        d = WprConfig.wishlistPageURL,
                                        l = "yes" == s.data("open-in-new-tab") ? "_blank" : "_self",
                                        p = i.find(".wpr-grid-image-wrap").length ? i.find(".wpr-grid-image-wrap").data("src") : "",
                                        c = s.data("atw-animation"),
                                        f = s.data("atw-fade-out-in"),
                                        w = s.data("atw-animation-time"),
                                        m = "wpr-added-to-wishlist-default",
                                        h, g;
                                    "slide-left" === c ? (m = "wpr-added-to-wishlist-slide-in-left", g = "wpr-added-to-wishlist-slide-out-left") : "scale-up" === c ? (m = "wpr-added-to-wishlist-scale-up", g = "wpr-added-to-wishlist-scale-down") : "skew" === c ? (m = "wpr-added-to-wishlist-skew", g = "wpr-added-to-wishlist-skew-off") : "fade" === c ? (m = "wpr-added-to-wishlist-fade", g = "wpr-added-to-wishlist-fade-out") : g = "wpr-added-to-wishlist-popup-hide", h = "" === p ? "" : "<div class=\"wpr-added-tw-popup-img\"><img src=" + p + " alt=\"\" /></div>", r || (r = !0, !(0 < a.find(".wpr-grid").find("#wpr-added-to-wish-" + n).length) && (a.find(".wpr-grid").append("<div id=\"wpr-added-to-wish-" + n + "\" class=\"wpr-added-to-wishlist-popup " + m + "\">" + h + "<div class=\"wpr-added-tw-title\"><p>" + o + " was added to Wishlist</p><p><a target=\"" + l + "\" href=" + d + ">View Wishlist</a></p></div></div>"), setTimeout(() => {
                                        a.find("#wpr-added-to-wish-" + n).addClass(g), setTimeout(() => {
                                            a.find("#wpr-added-to-wish-" + n).remove()
                                        }, 1e3 * w)
                                    }, 1e3 * f)))
                                }
                            },
                            error: function(e) {
                                var t = e.responseJSON.message;
                                alert(t)
                            }
                        })
                    }), a.find(".wpr-wishlist-remove").on("click", function(i) {
                        i.preventDefault();
                        var r = t(this).data("product-id");
                        t(this).fadeTo(500, 0), t.ajax({
                            url: WprConfig.ajaxurl,
                            type: "POST",
                            data: {
                                action: "remove_from_wishlist",
                                nonce: WprConfig.nonce,
                                product_id: r
                            },
                            success: function() {
                                a.find(".wpr-wishlist-remove[data-product-id=\"" + r + "\"]").hide(), a.find(".wpr-wishlist-add[data-product-id=\"" + r + "\"]").show(), a.find(".wpr-wishlist-add[data-product-id=\"" + r + "\"]").fadeTo(500, 1), e.changeActionTargetProductId(r), t(document).trigger("removed_from_wishlist")
                            }
                        })
                    }), t(document).on("removed_from_wishlist", function() {
                        a.find(".wpr-wishlist-remove[data-product-id=\"" + i + "\"]").hide(), a.find(".wpr-wishlist-add[data-product-id=\"" + i + "\"]").show(), a.find(".wpr-wishlist-add[data-product-id=\"" + i + "\"]").fadeTo(500, 1)
                    }))
                }
                var h = a.find(".wpr-grid"),
                    g;
                if (h.length) {
                    if (a.find(".woocommerce-result-count").length) {
                        var u = a.find(".woocommerce-result-count").text();
                        u = u.replace(/\d\u2013\d+/, "1\u2013" + a.find(".wpr-grid-item").length), a.find(".woocommerce-result-count").text(u)
                    }
                    var y = h.attr("data-settings");
                    if (a.find(".wpr-grid-orderby form").length) {
                        var b = a.find(".wpr-grid-orderby form");
                        a.find(".orderby").on("change", function() {
                            b.trigger("submit")
                        })
                    }
                    if ("undefined" != typeof y && !1 !== y) {
                        y = JSON.parse(h.attr("data-settings")), d(y), setTimeout(function() {
                            d(y)
                        }, 100), e.editorCheck() && (setTimeout(function() {
                            d(y)
                        }, 500), setTimeout(function() {
                            d(y)
                        }, 1e3)), t(window).on("load", function() {
                            setTimeout(function() {
                                d(y)
                            }, 100)
                        }), t(document).ready(function() {
                            setTimeout(function() {
                                d(y)
                            }, 100)
                        }), t(window).smartresize(function() {
                            setTimeout(function() {
                                d(y)
                            }, 200)
                        }), c(y);
                        var v = 0;
                        if (h.on("arrangeComplete", function(e, i) {
                                var r = 0,
                                    s = 0,
                                    n = 0,
                                    o = y.animation_duration,
                                    d = y.filters_animation_duration;
                                if (h.hasClass("grid-images-loaded")) n = 0;
                                else if (h.css("opacity", "1"), "default" === y.animation && "default" === y.filters_animation) return;
                                for (var l in i) {
                                    (0 == v || l > v - 1) && (n += y.animation_delay, a.find(i[l].element).find(".wpr-grid-item-inner").css({
                                        opacity: "1",
                                        top: "0",
                                        transform: "scale(1)",
                                        transition: "all " + o + "s ease-in " + n + "s"
                                    })), s += y.filters_animation_delay, h.hasClass("grid-images-loaded") && a.find(i[l].element).find(".wpr-grid-item-inner").css({
                                        transition: "all " + d + "s ease-in " + s + "s"
                                    });
                                    var p = window.location.hash;
                                    0 <= p.indexOf("#filter:") && 0 > p.indexOf("#filter:*") && (p = p.replace("#filter:", ""), a.find(i[l].element).filter(function() {
                                        if (t(this).hasClass(p)) return r += y.filters_animation_delay, t(this)
                                    }).find(".wpr-grid-item-inner").css({
                                        "transition-delay": r + "s"
                                    }))
                                }
                                v = i.length
                            }), h.imagesLoaded(function() {
                                "1" !== h.css("opacity") && h.css("opacity", "1"), setTimeout(function() {
                                    h.addClass("grid-images-loaded")
                                }, 500), l(y)
                            }), "load-more" === y.pagination_type || "infinite-scroll" === y.pagination_type)
                            if (a.find(".wpr-grid-pagination").length && !e.editorCheck()) {
                                var _ = a.find(".wpr-grid-pagination"),
                                    x = ".elementor-element-" + a.attr("data-id"),
                                    C = !1,
                                    k = !1;
                                "infinite-scroll" === y.pagination_type && (k = 300, C = x + " .wpr-load-more-btn"), h.infiniteScroll({
                                    path: x + " .wpr-grid-pagination a",
                                    hideNav: C,
                                    append: !1,
                                    history: !1,
                                    scrollThreshold: k,
                                    status: x + " .page-load-status",
                                    onInit: function() {
                                        this.on("load", function() {
                                            h.removeClass("grid-images-loaded")
                                        })
                                    }
                                }), h.on("request.infiniteScroll", function() {
                                    _.find(".wpr-load-more-btn").hide(), _.find(".wpr-pagination-loading").css("display", "inline-block")
                                });
                                var T = 0;
                                h.on("load.infiniteScroll", function(e, i) {
                                    T++;
                                    var o = t(i).find(x).find(".wpr-grid-item");
                                    if (a.find(".woocommerce-result-count").length) {
                                        var f = a.find(".woocommerce-result-count").text(),
                                            w = f.replace(/\d\u2013\d+/, "1\u2013" + (a.find(".wpr-grid-item").length + o.length));
                                        a.find(".woocommerce-result-count").text(w)
                                    }
                                    if (h.infiniteScroll("appendItems", o), h.isotopewpr("appended", o), o.imagesLoaded().progress(function() {
                                            d(y), setTimeout(function() {
                                                d(y), c(y)
                                            }, 10), setTimeout(function() {
                                                h.addClass("grid-images-loaded")
                                            }, 500)
                                        }), _.find(".wpr-pagination-loading").hide(), y.pagination_max_pages - 1 === T) _.find(".wpr-pagination-finish").fadeIn(1e3), _.delay(2e3).fadeOut(1e3), setTimeout(function() {
                                        _.find(".wpr-pagination-loading").hide()
                                    }, 500);
                                    else if ("load-more" === y.pagination_type && (_.find(".wpr-load-more-btn").fadeIn(), a.find(".wpr-grid-filters").length && "*" !== a.find(".wpr-active-filter").attr("data-filter") && 0 < a.find(".wpr-active-filter").length)) {
                                        let e = a.find(".wpr-active-filter").attr("data-filter").substring(1);
                                        o.each(function() {
                                            return t(this).hasClass(e) ? (g = !0, !1) : void(g = !1)
                                        }), g || a.find(".wpr-grid").infiniteScroll("loadNextPage")
                                    }
                                    n(y), h.data("lightGallery").destroy(!0), h.lightGallery(y.lightbox), s(), r(), p(), setTimeout(function() {
                                        l(y), window.dispatchEvent(new Event("resize"))
                                    }, 500)
                                }), _.find(".wpr-load-more-btn").on("click", function() {
                                    return h.infiniteScroll("loadNextPage"), !1
                                })
                            } else a.find(".wpr-load-more-btn").on("click", function() {
                                alert("Load More is Disabled in the Editor! Please Preview this Page to see it in action")
                            })
                    } else {
                        h.animate({
                            opacity: "1"
                        }, 1e3), y = JSON.parse(h.attr("data-slick"));
                        var S = a.attr("class"),
                            z = S.match(/wpr-grid-slider-columns-\d/) ? +S.match(/wpr-grid-slider-columns-\d/).join().slice(-1) : 2,
                            j = S.match(/columns--widescreen\d/) ? +S.match(/columns--widescreen\d/).join().slice(-1) : z,
                            P = S.match(/columns--laptop\d/) ? +S.match(/columns--laptop\d/).join().slice(-1) : z,
                            O = S.match(/columns--tablet\d/) ? +S.match(/columns--tablet\d/).join().slice(-1) : 2,
                            A = S.match(/columns--tablet_extra\d/) ? +S.match(/columns--tablet_extra\d/).join().slice(-1) : O,
                            q = S.match(/columns--mobile_extra\d/) ? +S.match(/columns--mobile_extra\d/).join().slice(-1) : O,
                            I = S.match(/columns--mobile\d/) ? +S.match(/columns--mobile\d/).join().slice(-1) : 1,
                            D = y.sliderRows,
                            W = y.sliderSlidesToScroll;
                        h.slick({
                            appendDots: a.find(".wpr-grid-slider-dots"),
                            rows: D,
                            customPaging: function(e, t) {
                                e.slideCount;
                                return "<span class=\"wpr-grid-slider-dot\"></span>"
                            },
                            slidesToShow: z,
                            responsive: [{
                                breakpoint: 1e4,
                                settings: {
                                    slidesToShow: j,
                                    slidesToScroll: W > j ? 1 : W
                                }
                            }, {
                                breakpoint: 2399,
                                settings: {
                                    slidesToShow: z,
                                    slidesToScroll: W > z ? 1 : W
                                }
                            }, {
                                breakpoint: 1221,
                                settings: {
                                    slidesToShow: P,
                                    slidesToScroll: W > P ? 1 : W
                                }
                            }, {
                                breakpoint: 1200,
                                settings: {
                                    slidesToShow: A,
                                    slidesToScroll: W > A ? 1 : W
                                }
                            }, {
                                breakpoint: 1024,
                                settings: {
                                    slidesToShow: O,
                                    slidesToScroll: W > O ? 1 : W
                                }
                            }, {
                                breakpoint: 880,
                                settings: {
                                    slidesToShow: q,
                                    slidesToScroll: W > q ? 1 : W
                                }
                            }, {
                                breakpoint: 768,
                                settings: {
                                    slidesToShow: I,
                                    slidesToScroll: W > I ? 1 : W
                                }
                            }]
                        });
                        var E = a.find(".wpr-grid-slider-prev-arrow"),
                            L = a.find(".wpr-grid-slider-next-arrow");
                        if (0 < E.length && 0 < L.length) {
                            var B = -2 * E.position().left;
                            0 < B && (t(window).on("load", function() {
                                t(window).width() <= a.outerWidth() + E.outerWidth() + L.outerWidth() + B && (E.addClass("wpr-adjust-slider-prev-arrow"), L.addClass("wpr-adjust-slider-next-arrow"))
                            }), t(window).smartresize(function() {
                                t(window).width() <= a.outerWidth() + E.outerWidth() + L.outerWidth() + B ? (E.addClass("wpr-adjust-slider-prev-arrow"), L.addClass("wpr-adjust-slider-next-arrow")) : (E.removeClass("wpr-adjust-slider-prev-arrow"), L.removeClass("wpr-adjust-slider-next-arrow"))
                            }))
                        }
                        if (a.find(".slick-dots").length && a.hasClass("wpr-grid-slider-dots-horizontal")) {
                            var M = a.find(".slick-dots li").outerWidth() * a.find(".slick-dots li").length - parseInt(a.find(".slick-dots li span").css("margin-right"), 10);
                            a.find(".slick-dots").length && a.find(".slick-dots").css("width", M), t(window).smartresize(function() {
                                setTimeout(function() {
                                    var e = a.find(".slick-dots li").outerWidth() * a.find(".slick-dots li").length - parseInt(a.find(".slick-dots li span").css("margin-right"), 10);
                                    a.find(".slick-dots").css("width", e)
                                }, 300)
                            })
                        }
                    }
                    f(), w(), m();
                    var V = new MutationObserver(function() {
                        w(), m()
                    });
                    if (V.observe(a[0], {
                            childList: !0,
                            subtree: !0
                        }), h.find(".wpr-grid-item-add-to-cart").length) {
                        var H = h.find(".wpr-grid-item-add-to-cart").find("i"),
                            R = H.attr("class");
                        H.length && (R = R.substring(R.indexOf("fa-"), R.length)), t("body").on("adding_to_cart", function(e, t) {
                            t.fadeTo("slow", 0)
                        }), t("body").on("added_to_cart", function(e, i, r, s) {
                            var n = s.data("product_id");
                            if (s.next().fadeTo(700, 1), s.css("display", "none"), "sidebar" === s.data("atc-popup")) t(".wpr-mini-cart-toggle-wrap a").length && t(".wpr-mini-cart-toggle-wrap a").each(function() {
                                "none" === t(this).closest(".wpr-mini-cart-inner").find(".wpr-mini-cart").css("display") && t(this).trigger("click")
                            });
                            else if ("popup" === s.data("atc-popup")) {
                                var o = s.closest(".wpr-grid-item"),
                                    d = o.find(".wpr-grid-item-title").text(),
                                    l = s.next().attr("href"),
                                    p = o.find(".wpr-grid-image-wrap").length ? o.find(".wpr-grid-image-wrap").data("src") : "",
                                    c = s.data("atc-animation"),
                                    f = s.data("atc-fade-out-in"),
                                    w = s.data("atc-animation-time"),
                                    m = "wpr-added-to-cart-default",
                                    h, g;
                                "slide-left" === c ? (m = "wpr-added-to-cart-slide-in-left", g = "wpr-added-to-cart-slide-out-left") : "scale-up" === c ? (m = "wpr-added-to-cart-scale-up", g = "wpr-added-to-cart-scale-down") : "skew" === c ? (m = "wpr-added-to-cart-skew", g = "wpr-added-to-cart-skew-off") : "fade" === c ? (m = "wpr-added-to-cart-fade", g = "wpr-added-to-cart-fade-out") : g = "wpr-added-to-cart-popup-hide", h = "" === p ? "" : "<div class=\"wpr-added-tc-popup-img\"><img src=" + p + " alt=\"\" /></div>", 0 < a.find(".wpr-grid").find("#wpr-added-to-cart-" + n).length || (a.find(".wpr-grid").append("<div id=\"wpr-added-to-cart-" + n + "\" class=\"wpr-added-to-cart-popup " + m + "\">" + h + "<div class=\"wpr-added-tc-title\"><p>" + d + " " + WprConfig.addedToCartText + "</p><p><a href=" + l + ">" + WprConfig.viewCart + "</a></p></div></div>"), setTimeout(() => {
                                    t(this).find("#wpr-added-to-cart-" + n).addClass(g), setTimeout(() => {
                                        t(this).find("#wpr-added-to-cart-" + n).remove()
                                    }, 1e3 * w)
                                }, 1e3 * f))
                            }
                            H.length && (s.find("i").removeClass(R).addClass("fa-check"), setTimeout(function() {
                                s.find("i").removeClass("fa-check").addClass(R)
                            }, 3500))
                        })
                    }
                    r(), s(), a.hasClass("elementor-widget-wpr-woo-category-grid-pro") || a.hasClass("elementor-widget-wpr-category-grid-pro") || n(y), o(y), p()
                }
            },
            widgetMagazineGrid: function(i) {
                var a = i.find(".wpr-magazine-grid-wrap"),
                    r = a.attr("data-slick"),
                    s = a.attr("data-slide-effect");
                typeof r != "undefined" && !1 !== r && a.slick({
                    fade: "fade" === s
                }), t(document).ready(function() {
                    a.css("opacity", 1)
                });
                a.find(".wpr-mgzn-grid-item").length;
                if ("yes" !== a.find(".wpr-grid-media-wrap").attr("data-overlay-link") || e.editorCheck() || (a.find(".wpr-grid-media-wrap").css("cursor", "pointer"), a.find(".wpr-grid-media-wrap").on("click", function(e) {
                        var i = e.target.className;
                        if (-1 !== i.indexOf("inner-block") || -1 !== i.indexOf("wpr-cv-inner") || -1 !== i.indexOf("wpr-grid-media-hover")) {
                            e.preventDefault();
                            var r = t(this).find(".wpr-grid-media-hover-bg").attr("data-url");
                            a.find(".wpr-grid-item-title a").length && ("_blank" === a.find(".wpr-grid-item-title a").attr("target") ? window.open(r, "_blank").focus() : window.location.href = r)
                        }
                    })), i.find(".wpr-sharing-trigger").length) {
                    var n = i.find(".wpr-sharing-trigger"),
                        o = i.find(".wpr-post-sharing-inner"),
                        d = 5;
                    o.first().find("a").each(function() {
                        d += t(this).outerWidth() + parseInt(t(this).css("margin-right"), 10)
                    });
                    var l = parseInt(o.find("a").css("margin-right"), 10);
                    "left" === n.attr("data-direction") ? (o.css("width", d + "px"), o.css("left", -(l + d) + "px")) : "right" === n.attr("data-direction") ? (o.css("width", d + "px"), o.css("right", -(l + d) + "px")) : "top" === n.attr("data-direction") ? (o.find("a").css({
                        "margin-right": "0",
                        "margin-top": l + "px"
                    }), o.css({
                        top: -l + "px",
                        left: "50%",
                        "-webkit-transform": "translate(-50%, -100%)",
                        transform: "translate(-50%, -100%)"
                    })) : "right" === n.attr("data-direction") ? (o.css("width", d + "px"), o.css({
                        left: l + "px"
                    })) : "bottom" === n.attr("data-direction") && (o.find("a").css({
                        "margin-right": "0",
                        "margin-bottom": l + "px"
                    }), o.css({
                        bottom: -l + "px",
                        left: "50%",
                        "-webkit-transform": "translate(-50%, 100%)",
                        transform: "translate(-50%, 100%)"
                    })), "click" === n.attr("data-action") ? n.on("click", function() {
                        var e = t(this).next();
                        "hidden" === e.css("visibility") ? (e.css("visibility", "visible"), e.find("a").css({
                            opacity: "1",
                            top: "0"
                        }), setTimeout(function() {
                            e.find("a").addClass("wpr-no-transition-delay")
                        }, 100 * e.find("a").length)) : (e.find("a").removeClass("wpr-no-transition-delay"), e.find("a").css({
                            opacity: "0",
                            top: "-5px"
                        }), setTimeout(function() {
                            e.css("visibility", "hidden")
                        }, 100 * e.find("a").length))
                    }) : (n.on("mouseenter", function() {
                        var e = t(this).next();
                        e.css("visibility", "visible"), e.find("a").css({
                            opacity: "1",
                            top: "0"
                        }), setTimeout(function() {
                            e.find("a").addClass("wpr-no-transition-delay")
                        }, 100 * e.find("a").length)
                    }), i.find(".wpr-grid-item-sharing").on("mouseleave", function() {
                        var e = t(this).find(".wpr-post-sharing-inner");
                        e.find("a").removeClass("wpr-no-transition-delay"), e.find("a").css({
                            opacity: "0",
                            top: "-5px"
                        }), setTimeout(function() {
                            e.css("visibility", "hidden")
                        }, 100 * e.find("a").length)
                    }))
                }
                i.find(".wpr-post-like-button").length && i.find(".wpr-post-like-button").on("click", function() {
                    var e = t(this);
                    return "" !== e.attr("data-post-id") && t.ajax({
                        type: "POST",
                        url: e.attr("data-ajax"),
                        data: {
                            action: "wpr_likes_init",
                            post_id: e.attr("data-post-id"),
                            nonce: e.attr("data-nonce")
                        },
                        beforeSend: function() {
                            e.fadeTo(500, .5)
                        },
                        success: function(t) {
                            var i = e.attr("data-icon"),
                                a = t.count;
                            "" === a.replace(/<\/?[^>]+(>|$)/g, "") ? (a = "<span class=\"wpr-post-like-count\">" + e.attr("data-text") + "</span>", !e.hasClass("wpr-likes-zero") && e.addClass("wpr-likes-zero")) : e.removeClass("wpr-likes-zero"), e.hasClass("wpr-already-liked") ? (e.prop("title", "Like"), e.removeClass("wpr-already-liked"), e.html("<i class=\"" + i.replace("fas", "far") + "\"></i>" + a)) : (e.prop("title", "Unlike"), e.addClass("wpr-already-liked"), e.html("<i class=\"" + i.replace("far", "fas") + "\"></i>" + a)), e.fadeTo(500, 1)
                        }
                    }), !1
                })
            },
            widgetFeaturedMedia: function(i) {
                var a = i.find(".wpr-gallery-slider"),
                    r = a.attr("data-slick");
                a.animate({
                    opacity: "1"
                }, 1e3), "[]" !== r && a.slick({
                    appendDots: i.find(".wpr-gallery-slider-dots"),
                    customPaging: function(e, t) {
                        e.slideCount;
                        return "<span class=\"wpr-gallery-slider-dot\"></span>"
                    }
                });
                var s = t(".wpr-featured-media-image").attr("data-lightbox");
                if (typeof s != typeof void 0 && !1 !== s && !e.editorCheck()) {
                    var n = i.find(".wpr-featured-media-wrap");
                    s = JSON.parse(s), n.lightGallery(s), n.on("onAferAppendSlide.lg, onAfterSlide.lg", function() {
                        var e = t("#lg-actual-size, #lg-zoom-in, #lg-zoom-out, #lg-download"),
                            i = t("#lg-download").attr("href");
                        t("#lg-download").length && (-1 === i.indexOf("wp-content") ? e.addClass("wpr-hidden-element") : e.removeClass("wpr-hidden-element")), "" === s.autoplay && t(".lg-autoplay-button").css({
                            width: "0",
                            height: "0",
                            overflow: "hidden"
                        })
                    })
                }
            },
            widgetProductMedia: function(i) {
                t(document).ready(function(e) {
                    e(window).trigger("resize"), setTimeout(function() {
                        e(window).trigger("resize"), i.find(".wpr-product-media-wrap").removeClass("wpr-zero-opacity")
                    }, 1e3)
                });
                var a = i.find(".wpr-gallery-slider-arrows-wrap");
                a.remove(), i.find(".woocommerce-product-gallery__trigger").length && i.find(".woocommerce-product-gallery__trigger").remove(), i.find(".flex-viewport").append(a), i.find(".wpr-gallery-slider-arrow").on("click", function() {
                    t(this).hasClass("wpr-gallery-slider-prev-arrow") ? i.find("a.flex-prev").trigger("click") : t(this).hasClass("wpr-gallery-slider-next-arrow") && i.find("a.flex-next").trigger("click")
                });
                var r = t(".wpr-product-media-wrap").attr("data-lightbox");
                if (typeof r != typeof void 0 && !1 !== r && !e.editorCheck()) {
                    i.find(".woocommerce-product-gallery__image").each(function() {
                        t(this).attr("data-lightbox", r), t(this).attr("data-src", t(this).find("a").attr("href"))
                    }), i.find(".woocommerce-product-gallery__image").on("click", function(t) {
                        t.stopPropagation()
                    }), i.find(".wpr-product-media-lightbox").on("click", function() {
                        i.find(".woocommerce-product-gallery__image").trigger("click")
                    });
                    var s = i.find(".woocommerce-product-gallery__wrapper");
                    r = JSON.parse(r), s.lightGallery(r), s.on("onAferAppendSlide.lg, onAfterSlide.lg", function() {
                        var e = t("#lg-actual-size, #lg-zoom-in, #lg-zoom-out, #lg-download"),
                            i = t("#lg-download").attr("href");
                        t("#lg-download").length && (-1 === i.indexOf("wp-content") ? e.addClass("wpr-hidden-element") : e.removeClass("wpr-hidden-element")), "" === r.autoplay && t(".lg-autoplay-button").css({
                            width: "0",
                            height: "0",
                            overflow: "hidden"
                        })
                    })
                }
                if (i.hasClass("wpr-product-media-thumbs-slider") && i.hasClass("wpr-product-media-thumbs-vertical")) {
                    var n = i.find(".wpr-product-media-wrap").data("slidestoshow"),
                        o = +i.find(".wpr-product-media-wrap").data("slidestoscroll");
                    i.find(".flex-control-nav").css("height", 100 / n * i.find(".flex-control-nav li").length + "%"), i.find(".flex-control-nav").wrap("<div class=\"wpr-fcn-wrap\"></div>");
                    var d = i.find(".wpr-thumbnail-slider-prev-arrow"),
                        l = i.find(".wpr-thumbnail-slider-next-arrow");
                    d.remove(), l.remove(), i.find(".wpr-product-media-wrap").data("slidestoshow") < i.find(".flex-control-nav li").length && (i.find(".wpr-fcn-wrap").prepend(d), i.find(".wpr-fcn-wrap").append(l));
                    var p = 0,
                        c = 0;
                    i.find(".wpr-thumbnail-slider-next-arrow").on("click", function() {
                        c + o < i.find(".flex-control-nav li").length - 1 ? (p++, c += o, i.find(".flex-control-nav").css("transform", "translateY(" + parseInt(-p) * (parseInt(i.find(".flex-control-nav li:last-child").css("height").slice(0, -2)) + parseInt(i.find(".flex-control-nav li").css("margin-bottom"))) * o + "px)"), 1 <= p ? i.find(".wpr-thumbnail-slider-prev-arrow").attr("disabled", !1) : i.find(".wpr-thumbnail-slider-prev-arrow").attr("disabled", !0)) : (p = 0, c = 0, i.find(".flex-control-nav").css("transform", `translateY(0)`), i.find(".wpr-thumbnail-slider-prev-arrow").attr("disabled", !0))
                    }), i.find(".wpr-thumbnail-slider-prev-arrow").on("click", function() {
                        1 <= p ? (p--, 0 == p && t(this).attr("disabled", !0), c -= o, i.find(".flex-control-nav").css("transform", "translateY(" + parseInt(-p) * (parseInt(i.find(".flex-control-nav li").css("height").slice(0, -2)) + parseInt(i.find(".flex-control-nav li:last-child").css("margin-top"))) * o + "px)"), c < i.find(".flex-control-nav li").length - 1 ? i.find(".wpr-thumbnail-slider-next-arrow").attr("disabled", !1) : i.find(".wpr-thumbnail-slider-next-arrow").attr("disabled", !0)) : t(this).attr("disabled", !0)
                    })
                }
                if (i.hasClass("wpr-product-media-thumbs-slider") && i.find(".wpr-product-media-wrap").hasClass("wpr-product-media-thumbs-horizontal")) {
                    var n = i.find(".wpr-product-media-wrap").data("slidestoshow"),
                        o = +i.find(".wpr-product-media-wrap").data("slidestoscroll");
                    i.find(".flex-control-nav").css("width", 100 / n * i.find(".flex-control-nav li").length + "%"), i.find(".flex-control-nav").wrap("<div class=\"wpr-fcn-wrap\"></div>");
                    var d = i.find(".wpr-thumbnail-slider-prev-arrow"),
                        l = i.find(".wpr-thumbnail-slider-next-arrow");
                    d.remove(), l.remove(), i.find(".wpr-product-media-wrap").data("slidestoshow") < i.find(".flex-control-nav li").length && (i.find(".wpr-fcn-wrap").prepend(d), i.find(".wpr-fcn-wrap").append(l), i.find(".wpr-thumbnail-slider-arrow").removeClass("wpr-tsa-hidden"));
                    var f = 0,
                        c = 0;
                    i.find(".wpr-thumbnail-slider-prev-arrow").attr("disabled", !0), i.find(".wpr-thumbnail-slider-next-arrow").on("click", function() {
                        c + o < i.find(".flex-control-nav li").length - 1 ? (f++, c += o, i.find(".flex-control-nav").css("transform", "translateX(" + parseInt(-f) * (parseInt(i.find(".flex-control-nav li:last-child").css("width").slice(0, -2)) + parseInt(i.find(".flex-control-nav li").css("margin-right"))) * o + "px)"), 1 <= f ? i.find(".wpr-thumbnail-slider-prev-arrow").attr("disabled", !1) : i.find(".wpr-thumbnail-slider-prev-arrow").attr("disabled", !0)) : (f = 0, c = 0, i.find(".flex-control-nav").css("transform", `translateX(0)`), i.find(".wpr-thumbnail-slider-prev-arrow").attr("disabled", !0))
                    }), i.find(".wpr-thumbnail-slider-prev-arrow").on("click", function() {
                        1 <= f ? (f--, 0 == f && t(this).attr("disabled", !0), c -= o, i.find(".flex-control-nav").css("transform", "translateX(" + parseInt(-f) * (parseInt(i.find(".flex-control-nav li").css("width").slice(0, -2)) + parseInt(i.find(".flex-control-nav li").css("margin-right"))) * o + "px)"), c < i.find(".flex-control-nav li").length - 1 ? i.find(".wpr-thumbnail-slider-next-arrow").attr("disabled", !1) : i.find(".wpr-thumbnail-slider-next-arrow").attr("disabled", !0)) : t(this).attr("disabled", !0)
                    })
                }
            },
            widgetCountDown: function(i) {
                function a() {
                    var e = l - new Date,
                        a = {
                            days: Math.floor(e / 86400000),
                            hours: Math.floor(e / 3600000 % 24),
                            minutes: Math.floor(e / 1e3 / 60 % 60),
                            seconds: Math.floor(e / 1e3 % 60)
                        };
                    (0 > a.days || 0 > a.hours || 0 > a.minutes) && (a = {
                        days: 0,
                        hours: 0,
                        minutes: 0,
                        seconds: 0
                    }), i.find(".wpr-countdown-number").each(function() {
                        var e = a[t(this).attr("data-item")];
                        1 === e.toString().length && (e = "0" + e), t(this).text(e);
                        var i = t(this).next();
                        if (i.length && !t(this).hasClass("wpr-countdown-seconds")) {
                            var r = i.data("text");
                            "01" == e ? i.text(r.singular) : i.text(r.plural)
                        }
                    }), 0 > e && (clearInterval(n), r())
                }

                function r() {
                    var a = s.data("actions");
                    e.editorCheck() || (a.hasOwnProperty("hide-timer") && s.hide(), a.hasOwnProperty("hide-element") && t(a["hide-element"]).hide(), a.hasOwnProperty("message") && !i.children(".elementor-widget-container").children(".wpr-countdown-message").length && s.after("<div class=\"wpr-countdown-message\">" + a.message + "</div>"), a.hasOwnProperty("redirect") && (window.location.href = a.redirect), a.hasOwnProperty("load-template") && s.next(".elementor").show())
                }
                var s = i.children(".elementor-widget-container").children(".wpr-countdown-wrap"),
                    n = null,
                    o = s.data("interval"),
                    d = s.data("show-again"),
                    l = new Date(1e3 * o);
                if ("evergreen" === s.data("type")) {
                    var p = new Date,
                        c = i.attr("data-id"),
                        f = JSON.parse(localStorage.getItem("WprCountDownSettings")) || {};
                    l = f.hasOwnProperty(c) ? 0 === Object.keys(f).length || o !== f[c].interval ? p.setSeconds(p.getSeconds() + o) : f[c].endTime : p.setSeconds(p.getSeconds() + o), l + d < p.setSeconds(p.getSeconds()) && (l = p.setSeconds(p.getSeconds() + o)), f[c] = {
                        interval: o,
                        endTime: l
                    }, localStorage.setItem("WprCountDownSettings", JSON.stringify(f))
                }!e.editorCheck(), a(), n = setInterval(a, 1e3)
            },
            widgetGoogleMaps: function(e) {
                function t(e, t) {
                    var i = "<div class=\"wpr-gm-iwindow\"><h3>" + t.gm_location_title + "</h3><p>" + t.gm_location_description + "</p></div>",
                        a = new google.maps.InfoWindow({
                            content: i,
                            maxWidth: t.gm_info_window_width.size
                        });
                    "load" === t.gm_show_info_window ? a.open(p, e) : e.addListener("click", function() {
                        a.open(p, e)
                    })
                }

                function a(e) {
                    var t;
                    switch (e.style) {
                        case "simple":
                            t = JSON.parse("[{\"featureType\":\"road\",\"elementType\":\"geometry\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"landscape\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#fffffa\"}]},{\"featureType\":\"water\",\"stylers\":[{\"lightness\":50}]},{\"featureType\":\"road\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry\",\"stylers\":[{\"lightness\":40}]}]");
                            break;
                        case "white-black":
                            t = JSON.parse("[{\"featureType\":\"road\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"poi\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#000000\"},{\"weight\":1}]},{\"featureType\":\"road\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#000000\"},{\"weight\":0.8}]},{\"featureType\":\"landscape\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"water\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit\",\"stylers\":[{\"visibility\":\"off\"}]},{\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"elementType\":\"labels.text\",\"stylers\":[{\"visibility\":\"on\"}]},{\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#000000\"}]},{\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"on\"}]}]");
                            break;
                        case "light-silver":
                            t = JSON.parse("[{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#e9e9e9\"},{\"lightness\":17}]},{\"featureType\":\"landscape\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#f5f5f5\"},{\"lightness\":20}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#ffffff\"},{\"lightness\":17}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#ffffff\"},{\"lightness\":29},{\"weight\":0.2}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#ffffff\"},{\"lightness\":18}]},{\"featureType\":\"road.local\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#ffffff\"},{\"lightness\":16}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#f5f5f5\"},{\"lightness\":21}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#dedede\"},{\"lightness\":21}]},{\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#ffffff\"},{\"lightness\":16}]},{\"elementType\":\"labels.text.fill\",\"stylers\":[{\"saturation\":36},{\"color\":\"#333333\"},{\"lightness\":40}]},{\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#f2f2f2\"},{\"lightness\":19}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#fefefe\"},{\"lightness\":20}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#fefefe\"},{\"lightness\":17},{\"weight\":1.2}]}]");
                            break;
                        case "light-grayscale":
                            t = JSON.parse("[{\"featureType\":\"all\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"weight\":\"2.00\"}]},{\"featureType\":\"all\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#9c9c9c\"}]},{\"featureType\":\"all\",\"elementType\":\"labels.text\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"landscape\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#f2f2f2\"}]},{\"featureType\":\"landscape\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"landscape.man_made\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"poi\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road\",\"elementType\":\"all\",\"stylers\":[{\"saturation\":-100},{\"lightness\":45}]},{\"featureType\":\"road\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#eeeeee\"}]},{\"featureType\":\"road\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#7b7b7b\"}]},{\"featureType\":\"road\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"simplified\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"water\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#46bcec\"},{\"visibility\":\"on\"}]},{\"featureType\":\"water\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#c8d7d4\"}]},{\"featureType\":\"water\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#070707\"}]},{\"featureType\":\"water\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#ffffff\"}]}]");
                            break;
                        case "subtle-grayscale":
                            t = JSON.parse("[{\"featureType\":\"administrative\",\"elementType\":\"all\",\"stylers\":[{\"saturation\":\"-100\"}]},{\"featureType\":\"administrative.province\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"landscape\",\"elementType\":\"all\",\"stylers\":[{\"saturation\":-100},{\"lightness\":65},{\"visibility\":\"on\"}]},{\"featureType\":\"poi\",\"elementType\":\"all\",\"stylers\":[{\"saturation\":-100},{\"lightness\":\"50\"},{\"visibility\":\"simplified\"}]},{\"featureType\":\"road\",\"elementType\":\"all\",\"stylers\":[{\"saturation\":\"-100\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"simplified\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"all\",\"stylers\":[{\"lightness\":\"30\"}]},{\"featureType\":\"road.local\",\"elementType\":\"all\",\"stylers\":[{\"lightness\":\"40\"}]},{\"featureType\":\"transit\",\"elementType\":\"all\",\"stylers\":[{\"saturation\":-100},{\"visibility\":\"simplified\"}]},{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"hue\":\"#ffff00\"},{\"lightness\":-25},{\"saturation\":-97}]},{\"featureType\":\"water\",\"elementType\":\"labels\",\"stylers\":[{\"lightness\":-25},{\"saturation\":-100}]}]");
                            break;
                        case "mostly-white":
                            t = JSON.parse("[{\"featureType\":\"administrative\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#6195a0\"}]},{\"featureType\":\"landscape\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#f2f2f2\"}]},{\"featureType\":\"landscape\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"poi\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#e6f3d6\"},{\"visibility\":\"on\"}]},{\"featureType\":\"road\",\"elementType\":\"all\",\"stylers\":[{\"saturation\":-100},{\"lightness\":45},{\"visibility\":\"simplified\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"simplified\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#f4d2c5\"},{\"visibility\":\"simplified\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels.text\",\"stylers\":[{\"color\":\"#4e4e4e\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#f4f4f4\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#787878\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"water\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#eaf6f8\"},{\"visibility\":\"on\"}]},{\"featureType\":\"water\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#eaf6f8\"}]}]");
                            break;
                        case "mostly-green":
                            t = JSON.parse("[{\"featureType\":\"landscape.man_made\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#f7f1df\"}]},{\"featureType\":\"landscape.natural\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#d0e3b4\"}]},{\"featureType\":\"landscape.natural.terrain\",\"elementType\":\"geometry\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.business\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.medical\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#fbd3da\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#bde6ab\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#ffe15f\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#efd151\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"road.local\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"black\"}]},{\"featureType\":\"transit.station.airport\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#cfb2db\"}]},{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#a2daf2\"}]}]");
                            break;
                        case "neutral-blue":
                            t = JSON.parse("[{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#193341\"}]},{\"featureType\":\"landscape\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#2c5a71\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#29768a\"},{\"lightness\":-37}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#406d80\"}]},{\"featureType\":\"transit\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#406d80\"}]},{\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#3e606f\"},{\"weight\":2},{\"gamma\":0.84}]},{\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry\",\"stylers\":[{\"weight\":0.6},{\"color\":\"#1a3541\"}]},{\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#2c5a71\"}]}]");
                            break;
                        case "blue-water":
                            t = JSON.parse("[{\"featureType\":\"administrative\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#444444\"}]},{\"featureType\":\"landscape\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#f2f2f2\"}]},{\"featureType\":\"poi\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road\",\"elementType\":\"all\",\"stylers\":[{\"saturation\":-100},{\"lightness\":45}]},{\"featureType\":\"road.highway\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"simplified\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit\",\"elementType\":\"all\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"water\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#46bcec\"},{\"visibility\":\"on\"}]}]");
                            break;
                        case "blue-essense":
                            t = JSON.parse("[{\"featureType\":\"landscape.natural\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#e0efef\"}]},{\"featureType\":\"poi\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"visibility\":\"on\"},{\"hue\":\"#1900ff\"},{\"color\":\"#c0e8e8\"}]},{\"featureType\":\"road\",\"elementType\":\"geometry\",\"stylers\":[{\"lightness\":100},{\"visibility\":\"simplified\"}]},{\"featureType\":\"road\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"transit.line\",\"elementType\":\"geometry\",\"stylers\":[{\"visibility\":\"on\"},{\"lightness\":700}]},{\"featureType\":\"water\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#7dcdcd\"}]}]");
                            break;
                        case "golden-brown":
                            t = JSON.parse("[{\"featureType\":\"all\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#ff7000\"},{\"lightness\":\"69\"},{\"saturation\":\"100\"},{\"weight\":\"1.17\"},{\"gamma\":\"2.04\"}]},{\"featureType\":\"all\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#cb8536\"}]},{\"featureType\":\"all\",\"elementType\":\"labels\",\"stylers\":[{\"color\":\"#ffb471\"},{\"lightness\":\"66\"},{\"saturation\":\"100\"}]},{\"featureType\":\"all\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"gamma\":0.01},{\"lightness\":20}]},{\"featureType\":\"all\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"saturation\":-31},{\"lightness\":-33},{\"weight\":2},{\"gamma\":0.8}]},{\"featureType\":\"all\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"landscape\",\"elementType\":\"all\",\"stylers\":[{\"lightness\":\"-8\"},{\"gamma\":\"0.98\"},{\"weight\":\"2.45\"},{\"saturation\":\"26\"}]},{\"featureType\":\"landscape\",\"elementType\":\"geometry\",\"stylers\":[{\"lightness\":30},{\"saturation\":30}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"saturation\":20}]},{\"featureType\":\"poi.park\",\"elementType\":\"geometry\",\"stylers\":[{\"lightness\":20},{\"saturation\":-20}]},{\"featureType\":\"road\",\"elementType\":\"geometry\",\"stylers\":[{\"lightness\":10},{\"saturation\":-30}]},{\"featureType\":\"road\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"saturation\":25},{\"lightness\":25}]},{\"featureType\":\"water\",\"elementType\":\"all\",\"stylers\":[{\"lightness\":-20},{\"color\":\"#ecc080\"}]}]");
                            break;
                        case "midnight-commander":
                            t = JSON.parse("[{\"featureType\":\"all\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"all\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":13}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#000000\"}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#144b53\"},{\"lightness\":14},{\"weight\":1.4}]},{\"featureType\":\"landscape\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#08304b\"}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#0c4152\"},{\"lightness\":5}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#000000\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#0b434f\"},{\"lightness\":25}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#000000\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#0b3d51\"},{\"lightness\":16}]},{\"featureType\":\"road.local\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"}]},{\"featureType\":\"transit\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#146474\"}]},{\"featureType\":\"water\",\"elementType\":\"all\",\"stylers\":[{\"color\":\"#021019\"}]}]");
                            break;
                        case "shades-of-grey":
                            t = JSON.parse("[{\"featureType\":\"all\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"saturation\":36},{\"color\":\"#000000\"},{\"lightness\":40}]},{\"featureType\":\"all\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#000000\"},{\"lightness\":16}]},{\"featureType\":\"all\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":20}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":17},{\"weight\":1.2}]},{\"featureType\":\"landscape\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":20}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":21}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":17}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":29},{\"weight\":0.2}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":18}]},{\"featureType\":\"road.local\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":16}]},{\"featureType\":\"transit\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":19}]},{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":17}]}]");
                            break;
                        case "yellow-black":
                            t = JSON.parse("[{\"featureType\":\"all\",\"elementType\":\"labels\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"all\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"saturation\":36},{\"color\":\"#000000\"},{\"lightness\":40}]},{\"featureType\":\"all\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"visibility\":\"on\"},{\"color\":\"#000000\"},{\"lightness\":16}]},{\"featureType\":\"all\",\"elementType\":\"labels.icon\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":20}]},{\"featureType\":\"administrative\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":17},{\"weight\":1.2}]},{\"featureType\":\"administrative.country\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#e5c163\"}]},{\"featureType\":\"administrative.locality\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#c4c4c4\"}]},{\"featureType\":\"administrative.neighborhood\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#e5c163\"}]},{\"featureType\":\"landscape\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":20}]},{\"featureType\":\"poi\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":21},{\"visibility\":\"on\"}]},{\"featureType\":\"poi.business\",\"elementType\":\"geometry\",\"stylers\":[{\"visibility\":\"on\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#e5c163\"},{\"lightness\":\"0\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"geometry.stroke\",\"stylers\":[{\"visibility\":\"off\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"road.highway\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#e5c163\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":18}]},{\"featureType\":\"road.arterial\",\"elementType\":\"geometry.fill\",\"stylers\":[{\"color\":\"#575757\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#ffffff\"}]},{\"featureType\":\"road.arterial\",\"elementType\":\"labels.text.stroke\",\"stylers\":[{\"color\":\"#2c2c2c\"}]},{\"featureType\":\"road.local\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":16}]},{\"featureType\":\"road.local\",\"elementType\":\"labels.text.fill\",\"stylers\":[{\"color\":\"#999999\"}]},{\"featureType\":\"transit\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":19}]},{\"featureType\":\"water\",\"elementType\":\"geometry\",\"stylers\":[{\"color\":\"#000000\"},{\"lightness\":17}]}]");
                            break;
                        case "custom":
                            t = JSON.parse(e.custom_style);
                            break;
                        default:
                            t = "";
                    }
                    return t
                }
                for (var r = e.find(".wpr-google-map"), s = r.data("settings"), n = r.data("controls"), o = r.data("locations"), d = [], l = new google.maps.LatLngBounds, p = new google.maps.Map(r[0], {
                        mapTypeId: s.type,
                        styles: a(s),
                        zoom: s.zoom_depth,
                        gestureHandling: s.zoom_on_scroll,
                        mapTypeControl: n.type,
                        fullscreenControl: n.fullscreen,
                        zoomControl: n.zoom,
                        streetViewControl: n.streetview
                    }), c = 0; c < o.length; c++) {
                    var f = o[c],
                        w = "",
                        m = f.gm_marker_icon_size_width.size,
                        h = f.gm_marker_icon_size_height.size;
                    if ("" != f.gm_latitude && "" != f.gm_longtitude) {
                        "yes" === f.gm_custom_marker && (w = {
                            url: f.gm_marker_icon.url,
                            scaledSize: new google.maps.Size(m, h)
                        });
                        var g = new google.maps.Marker({
                            map: p,
                            position: new google.maps.LatLng(parseFloat(f.gm_latitude), parseFloat(f.gm_longtitude)),
                            animation: google.maps.Animation[f.gm_marker_animation],
                            icon: w
                        });
                        "none" !== f.gm_show_info_window && t(g, f), d.push(g), l.extend(g.position)
                    }
                }
                if (1 < o.length ? p.fitBounds(l) : p.setCenter(l.getCenter()), "yes" === s.cluster_markers) new MarkerClusterer(p, d, {
                    imagePath: s.clusters_url
                })
            },
            widgetBeforeAfter: function(e) {
                function i() {
                    var e = a.find(".wpr-ba-label-1 div"),
                        t = a.find(".wpr-ba-label-2 div");
                    if (e.length || t.length)
                        if (a.hasClass("wpr-ba-horizontal")) {
                            var i = e.position().left + e.outerWidth(),
                                r = t.position().left + t.outerWidth();
                            i + 15 >= parseInt(n.css("left"), 10) ? e.stop().css("opacity", 0) : e.stop().css("opacity", 1), a.outerWidth() - (r + 15) <= parseInt(n.css("left"), 10) ? t.stop().css("opacity", 0) : t.stop().css("opacity", 1)
                        } else {
                            var i = e.position().top + e.outerHeight(),
                                r = t.position().top + t.outerHeight();
                            i + 15 >= parseInt(n.css("top"), 10) ? e.stop().css("opacity", 0) : e.stop().css("opacity", 1), a.outerHeight() - (r + 15) <= parseInt(n.css("top"), 10) ? t.stop().css("opacity", 0) : t.stop().css("opacity", 1)
                        }
                }
                var a = e.find(".wpr-ba-image-container"),
                    r = a.find(".wpr-ba-image-1"),
                    s = a.find(".wpr-ba-image-2"),
                    n = a.find(".wpr-ba-divider"),
                    o = a.attr("data-position");
                a.hasClass("wpr-ba-horizontal") ? (n.css("left", o + "%"), s.css("left", o + "%"), s.find("img").css("right", o + "%"), n.on("move", function(t) {
                    var e = t.pageX - a.offset().left;
                    n.css({
                        left: "auto",
                        right: "auto"
                    }), s.css({
                        left: "auto",
                        right: "auto"
                    }), 0 < e && e < a.outerWidth() ? (n.css("left", e), s.css("left", e), s.find("img").css("right", e)) : 0 >= e ? (n.css("left", 0), s.css("left", 0), s.find("img").css("right", 0)) : e >= a.outerWidth() && (n.css("right", -n.outerWidth() / 2), s.css("right", 0), s.find("img").css("right", "100%")), i()
                })) : (n.css("top", o + "%"), s.css("top", o + "%"), s.find("img").css("bottom", o + "%"), n.on("move", function(t) {
                    var e = t.pageY - a.offset().top;
                    n.css({
                        top: "auto",
                        bottom: "auto"
                    }), s.css({
                        top: "auto",
                        bottom: "auto"
                    }), 0 < e && e < a.outerHeight() ? (n.css("top", e), s.css("top", e), s.find("img").css("bottom", e)) : 0 >= e ? (n.css("top", 0), s.css("top", 0), s.find("img").css("bottom", 0)) : e >= a.outerHeight() && (n.css("bottom", -n.outerHeight() / 2), s.css("bottom", 0), s.find("img").css("bottom", "100%")), i()
                })), "mouse" === a.attr("data-trigger") && a.on("mousemove", function(e) {
                    if (a.hasClass("wpr-ba-horizontal")) {
                        var r = e.pageX - t(this).offset().left;
                        n.css("left", r), s.css("left", r), s.find("img").css("right", r)
                    } else {
                        var r = e.pageY - t(this).offset().top;
                        n.css("top", r), s.css("top", r), s.find("img").css("bottom", r)
                    }
                    i()
                }), i()
            },
            widgetMailchimp: function(e) {
                var i = e.find("form");
                i.on("submit", function(a) {
                    a.preventDefault();
                    var r = t(this).find("button").text();
                    t(this).find("button").text(t(this).find("button").data("loading")), t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "mailchimp_subscribe",
                            fields: t(this).serialize(),
                            listId: i.data("list-id")
                        },
                        success: function(a) {
                            "yes" == i.data("clear-fields") && i.find("input").each(function() {
                                t(this).val("")
                            }), i.find("button").text(r), "subscribed" === a.status ? e.find(".wpr-mailchimp-success-message").show() : e.find(".wpr-mailchimp-error-message").show(), e.find(".wpr-mailchimp-message").fadeIn()
                        }
                    })
                })
            },
            widgetAdvancedSlider: function(e) {
                function i() {
                    n.find("iframe").attr("width", e.find(".wpr-slider-item").width()), n.find("iframe").attr("height", e.find(".wpr-slider-item").height());
                    var i = t(window).outerWidth(),
                        a = +elementorFrontend.config.responsive.breakpoints.mobile.value,
                        r = +elementorFrontend.config.responsive.breakpoints.mobile_extra.value,
                        s = +elementorFrontend.config.responsive.breakpoints.tablet.value,
                        o = +elementorFrontend.config.responsive.breakpoints.tablet_extra.value,
                        l = +elementorFrontend.config.responsive.breakpoints.laptop.value,
                        p = +elementorFrontend.config.responsive.breakpoints.widescreen.value,
                        c = elementorFrontend.config.responsive.activeBreakpoints;
                    [...e[0].classList].forEach(t => {
                        t.startsWith("wpr-slider-video-icon-size-") && e[0].classList.remove(t)
                    }), a >= i && null != c.mobile ? e.addClass("wpr-slider-video-icon-size-" + d.mobile) : r >= i && null != c.mobile_extra ? e.addClass("wpr-slider-video-icon-size-" + d.mobile_extra) : s >= i && null != c.tablet ? e.addClass("wpr-slider-video-icon-size-" + d.tablet) : o >= i && null != c.tablet_extra ? e.addClass("wpr-slider-video-icon-size-" + d.tablet_extra) : l >= i && null != c.laptop ? e.addClass("wpr-slider-video-icon-size-" + d.laptop) : p > i ? e.addClass("wpr-slider-video-icon-size-" + d.desktop) : e.addClass("wpr-slider-video-icon-size-" + d.widescreen)
                }

                function a() {
                    n.find(".slick-current").each(function() {
                        var a = t(this).find(".wpr-slider-item").attr("data-video-src"),
                            r = t(this).find(".wpr-slider-item").attr("data-video-autoplay");
                        if (1 !== t(this).find(".wpr-slider-video").length && "yes" === r) {
                            if (a.includes("vimeo") || a.includes("youtube")) 1 == p ? t(this).find(".wpr-cv-inner").prepend("<div class=\"wpr-slider-video\"><iframe src=\"" + a + "\"  frameborder=\"0\" allow=\"autoplay\" allowfullscreen></iframe></div>") : t(this).find(".wpr-cv-container").prepend("<div class=\"wpr-slider-video\"><iframe src=\"" + a + "\" width=\"100%\" height=\"100%\"  frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture\" allowfullscreen></iframe></div>"), i();
                            else {
                                var s = t(this).find(".wpr-slider-item").attr("data-video-mute"),
                                    o = t(this).find(".wpr-slider-item").attr("data-video-controls"),
                                    d = t(this).find(".wpr-slider-item").attr("data-video-loop");
                                t(this).find(".wpr-cv-inner").prepend("<div class=\"wpr-slider-video wpr-custom-video\"><video autoplay " + d + " " + s + " " + o + " src=\"" + a + "\" width=\"100%\" height=\"100%\"></video></div>"), n.find("video").attr("width", e.find(".wpr-slider-item").width()), n.find("video").attr("height", e.find(".wpr-slider-item").height())
                            }
                            t(this).find(".wpr-slider-content") && t(this).find(".wpr-slider-content").fadeOut(300)
                        }
                    })
                }

                function r() {
                    1 == p && n.find(".wpr-slider-item").not(".slick-active").find(".wpr-slider-animation").removeClass("wpr-animation-enter")
                }

                function s() {
                    n.find(".slick-active").find(".wpr-slider-content").fadeIn(0), n.find(".slick-cloned").find(".wpr-slider-content").fadeIn(0), n.find(".slick-current").find(".wpr-slider-content").fadeIn(0), 1 == p && n.find(".slick-active").find(".wpr-slider-animation").addClass("wpr-animation-enter")
                }
                var n = e.find(".wpr-advanced-slider"),
                    o = n.data("slick"),
                    d = n.data("video-btn-size"),
                    l = e.attr("class"),
                    p = l.match(/wpr-adv-slider-columns-\d/) ? +l.match(/wpr-adv-slider-columns-\d/).join().slice(-1) : 2,
                    c = l.match(/columns--widescreen\d/) ? +l.match(/columns--widescreen\d/).join().slice(-1) : p,
                    f = l.match(/columns--laptop\d/) ? +l.match(/columns--laptop\d/).join().slice(-1) : p,
                    w = l.match(/columns--tablet\d/) ? +l.match(/columns--tablet\d/).join().slice(-1) : 2,
                    m = l.match(/columns--tablet_extra\d/) ? +l.match(/columns--tablet_extra\d/).join().slice(-1) : w,
                    h = l.match(/columns--mobile_extra\d/) ? +l.match(/columns--mobile_extra\d/).join().slice(-1) : w,
                    g = l.match(/columns--mobile\d/) ? +l.match(/columns--mobile\d/).join().slice(-1) : 1,
                    u = +l.match(/wpr-adv-slides-to-scroll-\d/).join().slice(-1),
                    y = n.attr("data-slide-effect");
                if (n.slick({
                        appendArrows: e.find(".wpr-slider-controls"),
                        appendDots: e.find(".wpr-slider-dots"),
                        customPaging: function(e, t) {
                            e.slideCount;
                            return "<span class=\"wpr-slider-dot\"></span>"
                        },
                        slidesToShow: p,
                        responsive: [{
                            breakpoint: 1e4,
                            settings: {
                                slidesToShow: c,
                                slidesToScroll: u > c ? 1 : u,
                                fade: 1 == c && "fade" === y
                            }
                        }, {
                            breakpoint: 2399,
                            settings: {
                                slidesToShow: p,
                                slidesToScroll: u > p ? 1 : u,
                                fade: 1 == p && "fade" === y
                            }
                        }, {
                            breakpoint: 1221,
                            settings: {
                                slidesToShow: f,
                                slidesToScroll: u > f ? 1 : u,
                                fade: 1 == f && "fade" === y
                            }
                        }, {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: m,
                                slidesToScroll: u > m ? 1 : u,
                                fade: 1 == m && "fade" === y
                            }
                        }, {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: w,
                                slidesToScroll: u > w ? 1 : u,
                                fade: 1 == w && "fade" === y
                            }
                        }, {
                            breakpoint: 880,
                            settings: {
                                slidesToShow: h,
                                slidesToScroll: u > h ? 1 : u,
                                fade: 1 == h && "fade" === y
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: g,
                                slidesToScroll: u > g ? 1 : u,
                                fade: 1 == g && "fade" === y
                            }
                        }]
                    }), t(document).ready(function() {
                        e.find(".slick-current").addClass("wpr-slick-visible");
                        0 !== e.find(".wpr-slider-img").length && (e.find(".wpr-advanced-slider").css("height", e.find(".slick-current").outerHeight()), e.find(".wpr-slider-arrow").on("click", function() {
                            e.find(".wpr-advanced-slider").css("height", e.find(".slick-current").outerHeight())
                        }), t(window).smartresize(function() {
                            e.find(".wpr-advanced-slider").css("height", e.find(".slick-current").outerHeight())
                        }))
                    }), t(window).on("load resize", function() {
                        i()
                    }), t(document).ready(function() {
                        e.find(".wpr-advanced-slider").length && (e.find(".wpr-advanced-slider").css("opacity", 1), a())
                    }), s(), n.on("click", ".wpr-slider-video-btn", function() {
                        var a = t(this).closest(".slick-slide"),
                            r = a.find(".wpr-slider-item").attr("data-video-src");
                        console.log(r), console.log(a, r);
                        var s = "";
                        if (r.includes("youtube")) r += "&autoplay=1", s = "allowfullscreen=\"allowfullscreen\"";
                        else if (r.includes("vimeo")) s = "allowfullscreen";
                        else {
                            var o = a.find(".wpr-slider-item").attr("data-video-mute"),
                                d = a.find(".wpr-slider-item").attr("data-video-controls"),
                                l = a.find(".wpr-slider-item").attr("data-video-loop");
                            return void(1 !== a.find(".wpr-slider-video").length && (a.find(".wpr-cv-container").prepend("<div class=\"wpr-slider-video wpr-custom-video\"><video " + l + " " + o + " " + d + " src=\"" + r + "\" width=\"100%\" height=\"100%\"></video></div>"), n.find("video").attr("width", e.find(".wpr-slider-item").width()), n.find("video").attr("height", e.find(".wpr-slider-item").height()), a.find(".wpr-slider-content").fadeOut(300), a.find("video")[0].play()))
                        }
                        1 !== a.find(".wpr-slider-video").length && (a.find(".wpr-cv-container").prepend("<div class=\"wpr-slider-video\"><iframe src=\"" + r + "\" width=\"100%\" height=\"100%\"  frameborder=\"0\" allow=\"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture;\"" + s + "></iframe></div>"), i(), a.find(".wpr-slider-content").fadeOut(300))
                    }), n.on({
                        beforeChange: function() {
                            n.find(".wpr-slider-item").not(".slick-active").find(".wpr-slider-video").remove(), n.find(".wpr-animation-enter").find(".wpr-slider-content").fadeOut(300), r()
                        },
                        afterChange: function() {
                            s(), a(), e.find(".slick-slide").removeClass("wpr-slick-visible"), e.find(".slick-current").addClass("wpr-slick-visible"), e.find(".slick-current").nextAll().slice(0, p - 1).addClass("wpr-slick-visible"), e.find(".wpr-advanced-slider").css("height", e.find(".slick-current").outerHeight())
                        }
                    }), e.find(".slick-dots").length && e.hasClass("wpr-slider-dots-horizontal")) {
                    var b = e.find(".slick-dots li").outerWidth() * e.find(".slick-dots li").length - parseInt(e.find(".slick-dots li span").css("margin-right"), 10);
                    e.find(".slick-dots").length && e.find(".slick-dots").css("width", b), t(window).smartresize(function() {
                        setTimeout(function() {
                            var t = e.find(".slick-dots li").outerWidth() * e.find(".slick-dots li").length - parseInt(e.find(".slick-dots li span").css("margin-right"), 10);
                            e.find(".slick-dots").css("width", t)
                        }, 300)
                    })
                }
            },
            widgetTestimonialCarousel: function(e) {
                var i = e.find(".wpr-testimonial-carousel"),
                    a = JSON.parse(i.attr("data-slick")),
                    r = e.attr("class"),
                    s = r.match(/wpr-testimonial-slider-columns-\d/) ? +r.match(/wpr-testimonial-slider-columns-\d/).join().slice(-1) : 2,
                    n = r.match(/columns--widescreen\d/) ? +r.match(/columns--widescreen\d/).join().slice(-1) : s,
                    o = r.match(/columns--laptop\d/) ? +r.match(/columns--laptop\d/).join().slice(-1) : s,
                    d = r.match(/columns--tablet\d/) ? +r.match(/columns--tablet\d/).join().slice(-1) : 2,
                    l = r.match(/columns--tablet_extra\d/) ? +r.match(/columns--tablet_extra\d/).join().slice(-1) : d,
                    p = r.match(/columns--mobile_extra\d/) ? +r.match(/columns--mobile_extra\d/).join().slice(-1) : d,
                    c = r.match(/columns--mobile\d/) ? +r.match(/columns--mobile\d/).join().slice(-1) : 1,
                    f = a.sliderSlidesToScroll,
                    w = i.attr("data-slide-effect");
                if (i.slick({
                        appendArrows: e.find(".wpr-testimonial-controls"),
                        appendDots: e.find(".wpr-testimonial-dots"),
                        customPaging: function(e, t) {
                            e.slideCount;
                            return "<span class=\"wpr-testimonial-dot\"></span>"
                        },
                        slidesToShow: s,
                        responsive: [{
                            breakpoint: 1e4,
                            settings: {
                                slidesToShow: n,
                                slidesToScroll: f > n ? 1 : f,
                                fade: 1 == n && "fade" === w
                            }
                        }, {
                            breakpoint: 2399,
                            settings: {
                                slidesToShow: s,
                                slidesToScroll: f > s ? 1 : f,
                                fade: 1 == s && "fade" === w
                            }
                        }, {
                            breakpoint: 1221,
                            settings: {
                                slidesToShow: o,
                                slidesToScroll: f > o ? 1 : f,
                                fade: 1 == o && "fade" === w
                            }
                        }, {
                            breakpoint: 1200,
                            settings: {
                                slidesToShow: l,
                                slidesToScroll: f > l ? 1 : f,
                                fade: 1 == l && "fade" === w
                            }
                        }, {
                            breakpoint: 1024,
                            settings: {
                                slidesToShow: d,
                                slidesToScroll: f > d ? 1 : f,
                                fade: 1 == d && "fade" === w
                            }
                        }, {
                            breakpoint: 880,
                            settings: {
                                slidesToShow: p,
                                slidesToScroll: f > p ? 1 : f,
                                fade: 1 == p && "fade" === w
                            }
                        }, {
                            breakpoint: 768,
                            settings: {
                                slidesToShow: c,
                                slidesToScroll: f > c ? 1 : f,
                                fade: 1 == c && "fade" === w
                            }
                        }]
                    }), e.hasClass("wpr-testimonial-nav-fade") && (e.on("mouseover", function() {
                        e.closest("section").find(".wpr-testimonial-arrow").css({
                            opacity: 1
                        })
                    }), e.closest("section").on("mouseout", function() {
                        e.find(".wpr-testimonial-arrow").css({
                            opacity: 0
                        })
                    })), e.find(".slick-dots").length) {
                    var m = e.find(".slick-dots li").outerWidth() * e.find(".slick-dots li").length - parseInt(e.find(".slick-dots li span").css("margin-right"), 10);
                    e.find(".slick-dots").css("width", m)
                }
                t(window).smartresize(function() {
                    setTimeout(function() {
                        if (e.find(".slick-dots").length) {
                            var t = e.find(".slick-dots li").outerWidth() * e.find(".slick-dots li").length - parseInt(e.find(".slick-dots li span").css("margin-right"), 10);
                            e.find(".slick-dots").css("width", t)
                        }
                    }, 300)
                })
            },
            widgetSearch: function(i) {
                function a(a, r, o) {
                    if (13 === o.which) return !1;
                    null != s && clearTimeout(s);
                    var e = 0 < i.find(".wpr-category-select").length && i.find(".wpr-category-select").find("option:selected").data("post-type"),
                        d = i.find(".wpr-search-form-input").attr("wpr-taxonomy-type");
                    0 < i.find(".wpr-category-select").length && !d && ("product" == i.find(".wpr-search-form-input").attr("wpr-query-type") ? d = "product_cat" : d = "category"), s = setTimeout(() => {
                        var s = a.val();
                        t.ajax({
                            type: "POST",
                            url: WprConfig.ajaxurl,
                            data: {
                                action: "wpr_data_fetch",
                                nonce: WprConfig.nonce,
                                wpr_keyword: i.find(".wpr-search-form-input").val(),
                                wpr_query_type: i.find(".wpr-search-form-input").attr("wpr-query-type"),
                                wpr_option_post_type: e ? i.find(".wpr-category-select").find("option:selected").data("post-type") : "",
                                wpr_taxonomy_type: d,
                                wpr_category: 0 < i.find(".wpr-category-select").length ? i.find(".wpr-category-select").val() : "",
                                wpr_number_of_results: i.find(".wpr-search-form-input").attr("number-of-results"),
                                wpr_search_results_offset: r,
                                wpr_show_description: i.find(".wpr-search-form-input").attr("show-description"),
                                wpr_number_of_words: i.find(".wpr-search-form-input").attr("number-of-words"),
                                wpr_show_ajax_thumbnail: i.find(".wpr-search-form-input").attr("show-ajax-thumbnails"),
                                wpr_show_view_result_btn: i.find(".wpr-search-form-input").attr("show-view-result-btn"),
                                wpr_view_result_text: i.find(".wpr-search-form-input").attr("view-result-text"),
                                wpr_no_results: i.find(".wpr-search-form-input").attr("no-results"),
                                wpr_exclude_without_thumb: i.find(".wpr-search-form-input").attr("exclude-without-thumb"),
                                wpr_ajax_search_link_target: i.find(".wpr-search-form-input").attr("link-target")
                            },
                            success: function(e) {
                                i.closest("section").addClass("wpr-section-z-index"), "" === i.find(".wpr-data-fetch ul").html() ? (i.find(".wpr-pagination-loading").hide(), i.find(".wpr-data-fetch ul").html(e), i.find(".wpr-no-more-results").fadeOut(100), setTimeout(function() {
                                    e.includes("wpr-no-results") ? i.find(".wpr-ajax-search-pagination").css("display", "none") : (i.find(".wpr-ajax-search-pagination").css("display", "flex"), i.find(".wpr-data-fetch ul").find("li").length < i.find(".wpr-search-form-input").attr("number-of-results") || i.find(".wpr-data-fetch ul").find("li").length == i.find(".wpr-data-fetch ul").find("li").data("number-of-results") ? (i.find(".wpr-ajax-search-pagination").css("display", "none"), i.find(".wpr-load-more-results").fadeOut(100)) : (i.find(".wpr-ajax-search-pagination").css("display", "flex"), i.find(".wpr-load-more-results").fadeIn(100)))
                                }, 100), n = e) : e != n && (n = e, e.includes("wpr-no-results") ? (i.find(".wpr-ajax-search-pagination").css("display", "none"), i.find(".wpr-data-fetch ul").html(""), i.closest("section").removeClass("wpr-section-z-index")) : i.find(".wpr-ajax-search-pagination").css("display", "flex"), i.find(".wpr-data-fetch ul").append(e), "" == e ? (i.find(".wpr-load-more-results").fadeOut(100), setTimeout(function() {
                                    i.find(".wpr-pagination-loading").hide(), i.find(".wpr-no-more-results").fadeIn(100)
                                }, 100)) : (i.find(".wpr-pagination-loading").hide(), i.find(".wpr-load-more-results").show()), i.find(".wpr-data-fetch ul").find("li").length < i.find(".wpr-search-form-input").attr("number-of-results") ? (i.find(".wpr-load-more-results").fadeOut(100), setTimeout(function() {
                                    i.find(".wpr-pagination-loading").hide(), i.find(".wpr-no-more-results").fadeIn(100)
                                }, 100)) : i.find(".wpr-load-more-results").show(), i.find(".wpr-data-fetch ul").find("li").length == i.find(".wpr-data-fetch ul").find("li").data("number-of-results") ? (i.find(".wpr-load-more-results").fadeOut(100), setTimeout(function() {
                                    i.find(".wpr-pagination-loading").hide(), i.find(".wpr-no-more-results").fadeIn(100)
                                }, 100)) : i.find(".wpr-load-more-results").show()), e.includes("wpr-no-results") ? (i.find(".wpr-ajax-search-pagination").css("display", "none"), i.find(".wpr-load-more-results").fadeOut()) : i.find(".wpr-ajax-search-pagination").css("display", "flex"), 2 < s.length ? (i.find(".wpr-data-fetch").slideDown(200), i.find(".wpr-data-fetch ul").fadeTo(200, 1)) : (i.find(".wpr-data-fetch").slideUp(200), i.find(".wpr-data-fetch ul").fadeTo(200, 0), setTimeout(function() {
                                    i.find(".wpr-data-fetch ul").html(""), i.find(".wpr-no-results").remove(), i.closest("section").removeClass("wpr-section-z-index")
                                }, 600), r = 0)
                            },
                            error: function(e) {
                                console.log(e)
                            }
                        })
                    }, 400)
                }
                var r = !1;
                i.find(".wpr-search-form-input").on({
                    focus: function() {
                        i.addClass("wpr-search-form-input-focus")
                    },
                    blur: function() {
                        i.removeClass("wpr-search-form-input-focus")
                    }
                }), 0 < i.find(".wpr-category-select").length && (t(document).ready(function() {
                    var e = localStorage.getItem("wprSelectedCategory");
                    e && i.find(".wpr-category-select option").each(function() {
                        return t(this).val() === e ? (r = !0, i.find(".wpr-category-select").val(e), !1) : void i.find(".wpr-category-select").val(0)
                    })
                }), i.find(".wpr-category-select").on("change", function(r) {
                    var e = t(this).val();
                    localStorage.setItem("wprSelectedCategory", e), "yes" === i.find(".wpr-search-form-input").attr("ajax-search") && (o = 0, i.find(".wpr-data-fetch").hide(), i.find(".wpr-data-fetch ul").html(""), a(i.find(".wpr-search-form-input"), o, r))
                }));
                var s = null,
                    n;
                if ("yes" === i.find(".wpr-search-form-input").attr("ajax-search")) {
                    i.find(".wpr-search-form").attr("autocomplete", "off");
                    var o = 0;
                    i.find(".wpr-load-more-results").on("click", function(t) {
                        o += +i.find(".wpr-search-form-input").attr("number-of-results"), i.find(".wpr-load-more-results").hide(), i.find(".wpr-pagination-loading").css("display", "inline-block"), a(i.find(".wpr-search-form-input"), o, t)
                    }), i.find(".wpr-search-form-input").on("keyup", function(r) {
                        o = 0, i.find(".wpr-data-fetch").hide(), i.find(".wpr-data-fetch ul").html(""), a(t(this), o, r)
                    }), i.find(".wpr-data-fetch").on("click", ".wpr-close-search", function() {
                        i.find(".wpr-search-form-input").val(""), i.find(".wpr-data-fetch").slideUp(200), setTimeout(function() {
                            i.find(".wpr-data-fetch ul").html(""), i.find(".wpr-no-results").remove(), i.closest("section").removeClass("wpr-section-z-index")
                        }, 400), o = 0
                    }), t("body").on("click", function(t) {
                        t.target.classList.value.includes("wpr-data-fetch") || t.target.closest(".wpr-data-fetch") || t.target.classList.value.includes("wpr-search-form") || t.target.closest(".wpr-search-form") || (i.find(".wpr-search-form-input").val(""), i.find(".wpr-data-fetch").slideUp(200), setTimeout(function() {
                            i.find(".wpr-data-fetch ul").html(""), i.find(".wpr-no-results").remove(), i.closest("section").removeClass("wpr-section-z-index")
                        }, 400), o = 0)
                    });
                    var d = new MutationObserver(function() {
                        i.find(".wpr-data-fetch li").on("click", function() {
                            var e = t(this).find("a").attr("href"),
                                i = t(this).find("a").attr("target");
                            window.open(e, i).focus()
                        })
                    });
                    d.observe(i[0], {
                        childList: !0,
                        subtree: !0
                    })
                }
            },
            widgetAdvancedText: function(e) {
                function i() {
                    var t = e.find(".wpr-clipped-text"),
                        i = t.data("clipped-options"),
                        a = elementorFrontend.getCurrentDeviceMode();
                    if (i) {
                        var r = i.longShadowSize,
                            s = i.longShadowSizeTablet,
                            n = i.longShadowSizeMobile;
                        "desktop" === a && (r = i.longShadowSize), "tablet" === a && s && (r = s), "mobile" === a && n && (r = n), t.find(".wpr-clipped-text-long-shadow").attr("style", "text-shadow:" + f(i.longShadowColor, r, i.longShadowDirection))
                    }
                }

                function a() {
                    r(m.find("b")), s(w)
                }

                function r(e) {
                    e.each(function() {
                        var e = t(this),
                            a = e.text().split(""),
                            r = e.hasClass("wpr-anim-text-visible");
                        for (var s in a) {
                            var i = a[s].replace(/ /g, "&nbsp;");
                            a[s] = r ? "<i class=\"wpr-anim-text-in\">" + i + "</i>" : "<i>" + i + "</i>"
                        }
                        var n = a.join("");
                        e.html(n).css("opacity", 1)
                    })
                }

                function s(e) {
                    e.each(function() {
                        var e = t(this),
                            i = e.find(".wpr-anim-text-inner");
                        if (e.hasClass("wpr-anim-text-type-clip")) {
                            var a = i.outerWidth();
                            i.css("width", a)
                        }
                        setTimeout(function() {
                            n(e.find(".wpr-anim-text-visible").eq(0))
                        }, v), e.hasClass("wpr-anim-text-type-rotate-1") && i.find("b").each(function() {
                            t(this).outerWidth() > i.outerWidth() && i.css("width", t(this).outerWidth())
                        })
                    })
                }

                function n(e) {
                    var t = p(e);
                    if (!("yes" !== u && (b++, b === y)))
                        if (e.parents(".wpr-anim-text").hasClass("wpr-anim-text-type-typing")) {
                            var i = e.parent(".wpr-anim-text-inner");
                            i.addClass("wpr-anim-text-selected").removeClass("waiting"), setTimeout(function() {
                                i.removeClass("wpr-anim-text-selected"), e.removeClass("wpr-anim-text-visible").addClass("wpr-anim-text-hidden").children("i").removeClass("wpr-anim-text-in").addClass("wpr-anim-text-out")
                            }, _), setTimeout(function() {
                                o(t, h)
                            }, x)
                        } else if (e.parents(".wpr-anim-text").hasClass("wpr-anim-text-letters")) {
                        var a = !!(e.children("i").length >= t.children("i").length);
                        d(e.find("i").eq(0), e, a, h), l(t.find("i").eq(0), t, a, h)
                    } else e.parents(".wpr-anim-text").hasClass("wpr-anim-text-type-clip") ? e.parents(".wpr-anim-text-inner").animate({
                        width: "2px"
                    }, h, function() {
                        c(e, t), o(t)
                    }) : (c(e, t), setTimeout(function() {
                        n(t)
                    }, v))
                }

                function o(e, t) {
                    e.parents(".wpr-anim-text").hasClass("wpr-anim-text-type-typing") ? (l(e.find("i").eq(0), e, !1, t), e.addClass("wpr-anim-text-visible").removeClass("wpr-anim-text-hidden")) : e.parents(".wpr-anim-text").hasClass("wpr-anim-text-type-clip") && e.parents(".wpr-anim-text-inner").animate({
                        width: e.outerWidth()
                    }, h, function() {
                        setTimeout(function() {
                            n(e)
                        }, v)
                    })
                }

                function d(e, t, i, a) {
                    if (e.removeClass("wpr-anim-text-in").addClass("wpr-anim-text-out"), e.is(":last-child") ? i && setTimeout(function() {
                            n(p(t))
                        }, v) : setTimeout(function() {
                            d(e.next(), t, i, a)
                        }, a), e.is(":last-child")) {
                        var r = p(t);
                        c(t, r)
                    }
                }

                function l(e, t, i, a) {
                    e.addClass("wpr-anim-text-in").removeClass("wpr-anim-text-out"), e.is(":last-child") ? (t.parents(".wpr-anim-text").hasClass("wpr-anim-text-type-typing") && setTimeout(function() {
                        t.parents(".wpr-anim-text-inner").addClass("waiting")
                    }, 200), !i && setTimeout(function() {
                        n(t)
                    }, v)) : setTimeout(function() {
                        l(e.next(), t, i, a)
                    }, a)
                }

                function p(e) {
                    return e.is(":last-child") ? e.parent().children().eq(0) : e.next()
                }

                function c(e, t) {
                    e.removeClass("wpr-anim-text-visible").addClass("wpr-anim-text-hidden"), t.removeClass("wpr-anim-text-hidden").addClass("wpr-anim-text-visible")
                }

                function f(e, t, a) {
                    for (var r = "", s = 0; s < t; s++) r += "top" === a ? "0 -" + s + "px 0 " + e + "," : "right" === a ? s + "px 0 0 " + e + "," : "bottom" === a ? "0 " + s + "px 0 " + e + "," : "left" === a ? "-" + s + "px 0 0 " + e + "," : "top-left" === a ? "-" + s + "px -" + s + "px 0 " + e + "," : "top-right" === a ? s + "px -" + s + "px 0 " + e + "," : "bottom-left" === a ? "-" + s + "px " + s + "px 0 " + e + "," : "bottom-right" === a ? s + "px " + s + "px 0 " + e + "," : s + "px " + s + "px 0 " + e + ",";
                    return r = r.slice(0, -1), r
                }
                if (e.hasClass("wpr-advanced-text-style-animated")) {
                    var w = e.find(".wpr-anim-text"),
                        m = e.find(".wpr-anim-text-letters"),
                        h = w.attr("data-anim-duration"),
                        g = h.split(","),
                        u = w.attr("data-anim-loop"),
                        y = w.find("b").length,
                        b = 0;
                    w.find("b").first().addClass("wpr-anim-text-visible");
                    var h = parseInt(g[0], 10),
                        v = parseInt(g[1], 10),
                        _ = 500,
                        x = 1300;
                    a()
                }
                i(), t(window).on("resize", function() {
                    i()
                })
            },
            widgetProgressBar: function(e) {
                function i(e) {
                    if (e.length) {
                        var i = e.offset().top,
                            a = i + e.outerHeight(),
                            r = t(window).scrollTop(),
                            s = r + t(window).height();
                        return i > t(window).height() && (i += 50), a > r && i < s
                    }
                }

                function a() {
                    if (i(p) && p.css({
                            height: h + "%"
                        }), i(l) && l.css({
                            width: h + "%"
                        }), i(s)) {
                        var e = f.circleOffset;
                        d.css({
                            "stroke-dashoffset": e
                        })
                    }(i(p) || i(l) || i(s)) && setTimeout(function() {
                        w.numerator(v)
                    }, u)
                }
                var r = e.find(".wpr-progress-bar"),
                    s = e.find(".wpr-prbar-circle"),
                    n = s.find(".wpr-prbar-circle-svg"),
                    o = n.find(".wpr-prbar-circle-line"),
                    d = e.find(".wpr-prbar-circle-prline"),
                    l = r.find(".wpr-prbar-hr-line-inner"),
                    p = r.find(".wpr-prbar-vr-line-inner"),
                    c = r.data("options"),
                    f = s.data("circle-options"),
                    w = r.find(".wpr-prbar-counter-value"),
                    m = c.counterValue,
                    h = c.counterValuePersent,
                    g = c.animDuration,
                    u = c.animDelay,
                    y = +c.loopDelay,
                    b = elementorFrontend.getCurrentDeviceMode(),
                    v = {
                        toValue: m,
                        duration: g
                    };
                "yes" === c.counterSeparator && (v.delimiter = ",");
                a(), "yes" === c.loop && setInterval(function() {
                    if (i(p) && p.css({
                            height: "0%"
                        }), i(l) && l.css({
                            width: "0%"
                        }), i(s)) {
                        f.circleOffset;
                        d.css({
                            "stroke-dashoffset": d.css("stroke-dasharray")
                        })
                    }(i(p) || i(l) || i(s)) && setTimeout(function() {
                        w.numerator({
                            toValue: 0,
                            duration: g
                        })
                    }, u), setTimeout(function() {
                        a()
                    }, g + u)
                }, (g + u) * y), t(window).on("scroll", function() {
                    a()
                })
            },
            widgetImageHotspots: function(e) {
                var i = e.find(".wpr-image-hotspots"),
                    a = i.data("options"),
                    r = i.find(".wpr-hotspot-item"),
                    s = a.tooltipTrigger;
                "click" === s ? (r.on("click", function() {
                    t(this).hasClass("wpr-tooltip-active") ? t(this).removeClass("wpr-tooltip-active") : (r.removeClass("wpr-tooltip-active"), t(this).addClass("wpr-tooltip-active")), event.stopPropagation()
                }), t(window).on("click", function() {
                    r.removeClass("wpr-tooltip-active")
                })) : "hover" === s ? (r.on("mouseenter", function() {
                    t(this).addClass("wpr-tooltip-active")
                }), r.on("mouseleave", function() {
                    t(this).removeClass("wpr-tooltip-active")
                })) : r.addClass("wpr-tooltip-active")
            },
            widgetFlipBox: function(e) {
                var i = e.find(".wpr-flip-box"),
                    a = i.data("trigger");
                "box" === a ? (i.find(".wpr-flip-box-front").on("click", function() {
                    t(this).closest(".wpr-flip-box").addClass("wpr-flip-box-active")
                }), t(window).on("click", function() {
                    0 === t(event.target).closest(".wpr-flip-box").length && i.removeClass("wpr-flip-box-active")
                })) : "btn" == a ? (i.find(".wpr-flip-box-btn").on("click", function() {
                    t(this).closest(".wpr-flip-box").addClass("wpr-flip-box-active")
                }), t(window).on("click", function(e) {
                    0 === t(e.target).closest(".wpr-flip-box").length && i.removeClass("wpr-flip-box-active")
                })) : "hover" == a && i.hover(function() {
                    t(this).toggleClass("wpr-flip-box-active")
                })
            },
            widgetContentTicker: function(e) {
                var t = e.find(".wpr-ticker-slider"),
                    i = e.find(".wpr-ticker-marquee"),
                    a = i.data("options"),
                    r = e.attr("class"),
                    s = r.match(/wpr-ticker-slider-columns-\d/) ? +r.match(/wpr-ticker-slider-columns-\d/).join().slice(-1) : 2,
                    n = r.match(/columns--widescreen\d/) ? +r.match(/columns--widescreen\d/).join().slice(-1) : s,
                    o = r.match(/columns--laptop\d/) ? +r.match(/columns--laptop\d/).join().slice(-1) : s,
                    d = r.match(/columns--tablet\d/) ? +r.match(/columns--tablet\d/).join().slice(-1) : 2,
                    l = r.match(/columns--tablet_extra\d/) ? +r.match(/columns--tablet_extra\d/).join().slice(-1) : d,
                    p = r.match(/columns--mobile_extra\d/) ? +r.match(/columns--mobile_extra\d/).join().slice(-1) : d,
                    c = r.match(/columns--mobile\d/) ? +r.match(/columns--mobile\d/).join().slice(-1) : 1,
                    f = t.attr("data-slide-effect"),
                    w = "hr-slide" === f && r.match(/wpr-ticker-slides-to-scroll-\d/) ? +r.match(/wpr-ticker-slides-to-scroll-\d/).join().slice(-1) : 1;
                t.slick({
                    appendArrows: e.find(".wpr-ticker-slider-controls"),
                    slidesToShow: s,
                    responsive: [{
                        breakpoint: 1e4,
                        settings: {
                            slidesToShow: "typing" === f || "fade" === f ? 1 : n,
                            slidesToScroll: w > n ? 1 : w,
                            fade: !("typing" !== f && "fade" !== f)
                        }
                    }, {
                        breakpoint: 2399,
                        settings: {
                            slidesToShow: "typing" === f || "fade" === f ? 1 : s,
                            slidesToScroll: w > s ? 1 : w,
                            fade: !("typing" !== f && "fade" !== f)
                        }
                    }, {
                        breakpoint: 1221,
                        settings: {
                            slidesToShow: "typing" === f || "fade" === f ? 1 : o,
                            slidesToScroll: w > o ? 1 : w,
                            fade: !("typing" !== f && "fade" !== f)
                        }
                    }, {
                        breakpoint: 1200,
                        settings: {
                            slidesToShow: "typing" === f || "fade" === f ? 1 : l,
                            slidesToScroll: w > l ? 1 : w,
                            fade: !("typing" !== f && "fade" !== f)
                        }
                    }, {
                        breakpoint: 1024,
                        settings: {
                            slidesToShow: "typing" === f || "fade" === f ? 1 : d,
                            slidesToScroll: w > d ? 1 : w,
                            fade: !("typing" !== f && "fade" !== f)
                        }
                    }, {
                        breakpoint: 880,
                        settings: {
                            slidesToShow: "typing" === f || "fade" === f ? 1 : p,
                            slidesToScroll: w > p ? 1 : w,
                            fade: !("typing" !== f && "fade" !== f)
                        }
                    }, {
                        breakpoint: 768,
                        settings: {
                            slidesToShow: "typing" === f || "fade" === f ? 1 : c,
                            slidesToScroll: w > c ? 1 : w,
                            fade: !("typing" !== f && "fade" !== f)
                        }
                    }]
                }), i.marquee(a), 0 < e.find(".wpr-marquee-hidden").length && e.find(".wpr-ticker-marquee").removeClass("wpr-marquee-hidden")
            },
            widgetTabs: function(e) {
                function i(e) {
                    var t = n.eq(e),
                        i = d.eq(e),
                        a = "auto";
                    o.css({
                        height: o.outerHeight(!0)
                    }), n.removeClass("wpr-tab-active"), t.addClass("wpr-tab-active"), d.removeClass("wpr-tab-content-active wpr-animation-enter"), a = i.outerHeight(!0), a += parseInt(o.css("border-top-width")) + parseInt(o.css("border-bottom-width")), i.addClass("wpr-tab-content-active wpr-animation-enter"), o.css({
                        height: a
                    }), setTimeout(function() {
                        o.css({
                            height: "auto"
                        })
                    }, 500)
                }

                function a() {
                    n.on("click", function() {
                        var e = t(this).data("tab") - 1;
                        clearInterval(w), i(e)
                    })
                }

                function r() {
                    n.hover(function() {
                        var e = t(this).data("tab") - 1;
                        clearInterval(w), i(e)
                    })
                }
                var s = t(".wpr-tabs", e).first(),
                    n = t(".wpr-tabs-wrap", s).first(),
                    o = t(".wpr-tabs-content-wrap", s).first(),
                    n = t("> .wpr-tab", n),
                    d = t("> .wpr-tab-content", o),
                    l = s.data("options"),
                    p = l.activeTab - 1,
                    c = window.location.href.indexOf("active_tab=");
                if (-1 < c && (p = +window.location.href.substring(c, window.location.href.lastIndexOf("#")).replace("active_tab=", "") - 1), n.eq(p).addClass("wpr-tab-active"), d.eq(p).addClass("wpr-tab-content-active wpr-animation-enter"), "yes" === l.autoplay) var f = p,
                    w = setInterval(function() {
                        f < n.length - 1 ? f++ : f = 0, i(f)
                    }, l.autoplaySpeed);
                "hover" === l.trigger ? r() : a()
            },
            widgetContentToogle: function(e) {
                function i(t) {
                    if (!e.hasClass("wpr-switcher-label-style-outer")) {
                        var i = 100 / l.length;
                        d.css({
                            width: i + "%",
                            left: t * i + "%"
                        })
                    }
                }

                function a(t) {
                    var a = l.eq(t),
                        r = p.eq(t),
                        n = "auto";
                    i(t), e.hasClass("wpr-switcher-label-style-outer") || (l.removeClass("wpr-switcher-active"), a.addClass("wpr-switcher-active"), e.hasClass("wpr-switcher-style-dual") && s.attr("data-active-switcher", t + 1)), o.css({
                        height: o.outerHeight(!0)
                    }), p.removeClass("wpr-switcher-content-active wpr-animation-enter"), n = r.outerHeight(!0), n += parseInt(o.css("border-top-width")) + parseInt(o.css("border-bottom-width")), r.addClass("wpr-switcher-content-active wpr-animation-enter"), o.css({
                        height: n
                    }), setTimeout(function() {
                        o.css({
                            height: "auto"
                        })
                    }, 500)
                }
                var r = t(".wpr-content-toggle", e).first(),
                    s = t(".wpr-switcher-container", r).first(),
                    n = t(".wpr-switcher-wrap", r).first(),
                    o = t(".wpr-switcher-content-wrap", r).first(),
                    d = t("> .wpr-switcher-bg", n),
                    l = t("> .wpr-switcher", n),
                    p = t("> .wpr-switcher-content", o),
                    c = parseInt(s.data("active-switcher")) - 1;
                l.eq(c).addClass("wpr-switcher-active"), p.eq(c).addClass("wpr-switcher-content-active wpr-animation-enter"), i(c),
                    function() {
                        e.hasClass("wpr-switcher-label-style-outer") ? n.on("click", function() {
                            var e = n.find(".wpr-switcher-active");
                            1 === parseInt(e.data("switcher"), 10) ? (n.children(".wpr-switcher").eq(0).removeClass("wpr-switcher-active"), n.children(".wpr-switcher").eq(1).addClass("wpr-switcher-active"), n.closest(".wpr-switcher-container").attr("data-active-switcher", 2), a(1)) : 2 === parseInt(e.data("switcher"), 10) && (n.children(".wpr-switcher").eq(1).removeClass("wpr-switcher-active"), n.children(".wpr-switcher").eq(0).addClass("wpr-switcher-active"), n.closest(".wpr-switcher-container").attr("data-active-switcher", 1), a(0))
                        }) : l.on("click", function() {
                            var e = t(this).data("switcher") - 1;
                            a(e)
                        })
                    }()
            },
            widgetBackToTop: function(e) {
                function i(e, t, i) {
                    e > i.animationOffset ? "fade" === i.animation ? a.stop().css("visibility", "visible").animate({
                        opacity: "1"
                    }, i.animationDuration) : "slide" === i.animation ? a.stop().css("visibility", "visible").animate({
                        opacity: "1",
                        "margin-bottom": 0
                    }, i.animationDuration) : a.css("visibility", "visible") : "fade" === i.animation ? a.stop().animate({
                        opacity: "0"
                    }, i.animationDuration) : "slide" === i.animation ? a.stop().animate({
                        "margin-bottom": "-100px",
                        opacity: "0"
                    }, i.animationDuration) : a.css("visibility", "hidden")
                }
                var a = e.find(".wpr-stt-btn"),
                    r = a.attr("data-settings");
                r = JSON.parse(r), "fixed" === r.fixed && ("none" !== r.animation && (a.css({
                    opacity: "0"
                }), "slide" === r.animation && a.css({
                    "margin-bottom": "-100px"
                })), i(t(window).scrollTop(), a, r), t(window).scroll(function() {
                    i(t(this).scrollTop(), a, r)
                })), a.on("click", function() {
                    return t("html, body").animate({
                        scrollTop: 0
                    }, r.scrolAnim), !1
                })
            },
            widgetLottieAnimations: function(e) {
                var i = e.find(".wpr-lottie-animations"),
                    a = e.find(".wpr-lottie-animations-wrapper"),
                    r = JSON.parse(i.attr("data-settings")),
                    s = lottie.loadAnimation({
                        container: i[0],
                        path: i.attr("data-json-url"),
                        renderer: r.lottie_renderer,
                        loop: !("yes" !== r.loop),
                        autoplay: !("yes" !== r.autoplay)
                    });
                s.setSpeed(r.speed), r.reverse && s.setDirection(-1), s.addEventListener("DOMLoaded", function() {
                    function e() {
                        if (s.pause(), "function" == typeof i[0].getBoundingClientRect) {
                            var e = document.documentElement.clientHeight,
                                a = 100 * (i[0].getBoundingClientRect().top / e),
                                n = 100 * (i[0].getBoundingClientRect().bottom / e),
                                o = a < r.scroll_end,
                                d = n > r.scroll_start;
                            if ("viewport" === r.trigger && (d && o ? s.play() : s.pause()), "scroll" === r.trigger && d && o) {
                                s.pause();
                                var l = 100 * t(window).scrollTop() / (t(document).height() - t(window).height()),
                                    p = Math.round(l);
                                s.goToAndStop(4e3 * (p / 100))
                            }
                        }
                    }
                    "hover" !== r.trigger && "none" !== r.trigger && (e("load"), t(window).on("scroll", e)), "hover" === r.trigger && (s.pause(), i.hover(function() {
                        s.play()
                    }, function() {
                        s.pause()
                    }))
                })
            },
            widgetCharts: function(e) {
                function i(t, i) {
                    var a = e.find(".wpr-chart"),
                        r = t.split(/\r?\n|\r/),
                        n = r.shift().split(i.separator),
                        o = {
                            labels: n,
                            datasets: []
                        };
                    l = {
                        type: "bar_horizontal" == i.chart_type ? "bar" : i.chart_type,
                        data: o,
                        options: c,
                        plugins: [i.inner_datalabels ? ChartDataLabels : "", {
                            beforeInit: function(e) {
                                e.legend.afterFit = function() {
                                    this.height += 50
                                }
                            }
                        }]
                    }, "bar_horizontal" == i.chart_type ? l.options.indexAxis = "y" : "", i.tooltips_percent && (l.options.plugins.tooltip.callbacks.label = function(e) {
                        var t = e.dataset.label + ": ";
                        ("pie" == i.chart_type || "doughnut" == i.chart_type || "polarArea" == i.chart_type) && (t = e.label + " (" + e.dataset.label + ") : ");
                        var a = e.dataset,
                            r = a.data.reduce(function(e, t) {
                                return parseFloat(e) + parseFloat(t)
                            }),
                            s = e.formattedValue,
                            n = (100 * (s / r)).toPrecision(3);
                        return t + (i.tooltips_percent ? n + "%" : e.formattedValue)
                    }), d = new Chart(a, l), r.forEach(function(e, t) {
                        if (0 !== e.length) {
                            var a = {};
                            a.data = e.split(i.separator), s[t] && (a.borderColor = s[t].borderColor, a.borderWidth = s[t].borderWidth, a.backgroundColor = s[t].backgroundColor, a.hoverBackgroundColor = s[t].hoverBackgroundColor, a.label = s[t].label, a.fill = s[t].fill), o.datasets.push(a), d.update()
                        }
                    })
                }
                var a = JSON.parse(e.find(".wpr-charts-container").attr("data-settings")),
                    r = a.chart_labels,
                    s = a.chart_datasets ? JSON.parse(a.chart_datasets) : "";
                var n = 768 <= window.innerWidth ? a.line_dots_radius : 767 >= window.innerWidth ? a.line_dots_radius_mobile : 0,
                    o = 768 <= window.innerWidth ? a.tooltip_caret_size : 767 >= window.innerWidth ? a.chart_tooltip_caret_size_mobile : 0,
                    d = "",
                    l = "",
                    p = ["bar", "bar_horizontal", "line"],
                    c = {
                        responsive: !0,
                        showLine: a.show_lines,
                        animation: "yes" === a.chart_animation,
                        animations: {
                            tension: {
                                duration: a.chart_animation_duration,
                                easing: a.animation_transition_type,
                                from: 1,
                                to: 0,
                                loop: "yes" == a.chart_animation_loop
                            }
                        },
                        events: [a.trigger_tooltip_on, "yes" === a.exclude_dataset_on_click ? "click" : ""],
                        interaction: {
                            mode: void 0 === a.chart_interaction_mode ? "nearest" : a.chart_interaction_mode
                        },
                        elements: {
                            point: {
                                radius: "yes" === a.line_dots ? n : 0
                            }
                        },
                        scales: {
                            x: {
                                reverse: "yes" == a.reverse_x,
                                stacked: "yes" == a.stacked_bar_chart,
                                type: "bar_horizontal" === a.chart_type ? a.data_type : "category",
                                min: void 0 === a.min_value ? null : a.min_value,
                                max: void 0 === a.max_value ? null : a.max_value,
                                grid: {
                                    display: a.display_x_axis,
                                    drawBorder: a.display_x_axis,
                                    drawOnChartArea: a.display_x_axis,
                                    drawTicks: a.display_x_axis,
                                    color: a.axis_grid_line_color_x,
                                    borderDash: [a.border_dash_length, a.border_dash_spacing],
                                    borderDashOffset: a.border_dash_offset,
                                    lineWidth: a.grid_line_width_x
                                },
                                title: {
                                    display: a.display_x_axis_title,
                                    text: a.x_axis_title,
                                    color: a.axis_title_color_x,
                                    font: {
                                        size: a.axis_title_font_size_x,
                                        family: a.axis_title_font_family_x,
                                        style: a.axis_title_font_style_x,
                                        weight: a.axis_title_font_weight_x
                                    }
                                },
                                ticks: {
                                    stepSize: "bar_horizontal" === a.chart_type ? a.x_step_size : "",
                                    display: a.display_x_ticks,
                                    padding: a.ticks_padding_x,
                                    autoSkip: !1,
                                    maxRotation: a.rotation_x,
                                    minRotation: a.rotation_x,
                                    color: a.ticks_color_x,
                                    font: {
                                        size: a.ticks_font_size_x,
                                        family: a.ticks_font_family_x,
                                        style: a.ticks_font_style_x,
                                        weight: a.ticks_font_weight_x
                                    }
                                }
                            },
                            y: {
                                reverse: "yes" == a.reverse_y,
                                stacked: "yes" == a.stacked_bar_chart,
                                type: "bar" === a.chart_type || "line" === a.chart_type ? a.data_type : "category",
                                min: void 0 === a.min_value ? null : a.min_value,
                                max: void 0 === a.max_value ? null : a.max_value,
                                grid: {
                                    display: a.display_y_axis,
                                    drawBorder: a.display_y_axis,
                                    drawOnChartArea: a.display_y_axis,
                                    drawTicks: a.display_y_axis,
                                    color: a.axis_grid_line_color_y,
                                    borderDash: [a.border_dash_length, a.border_dash_spacing],
                                    borderDashOffset: a.border_dash_offset,
                                    lineWidth: a.grid_line_width_y
                                },
                                title: {
                                    display: a.display_y_axis_title,
                                    text: a.y_axis_title,
                                    color: a.axis_title_color_y,
                                    font: {
                                        size: a.axis_title_font_size_y,
                                        family: a.axis_title_font_family_y,
                                        style: a.axis_title_font_style_y,
                                        weight: a.axis_title_font_weight_y
                                    }
                                },
                                ticks: {
                                    stepSize: a.y_step_size,
                                    display: a.display_y_ticks,
                                    padding: a.ticks_padding_y,
                                    autoSkip: !1,
                                    maxRotation: a.rotation_y,
                                    minRotation: a.rotation_y,
                                    color: a.ticks_color_y,
                                    font: {
                                        size: a.ticks_font_size_y,
                                        family: a.ticks_font_family_y,
                                        style: a.ticks_font_style_y,
                                        weight: a.ticks_font_weight_y
                                    }
                                }
                            }
                        },
                        plugins: {
                            datalabels: {
                                color: a.inner_datalabels_color,
                                font: {
                                    size: a.inner_datalabels_font_size,
                                    style: a.inner_datalabels_font_style,
                                    weight: a.inner_datalabels_font_weight
                                }
                            },
                            legend: {
                                onHover: e => {
                                    e.native.target.style.cursor = "pointer"
                                },
                                onLeave: e => {
                                    e.native.target.style.cursor = "default"
                                },
                                onClick: function(t, e, i) {
                                    if (p.includes(a.chart_type) || "radar" === a.chart_type) {
                                        const t = e.datasetIndex,
                                            a = i.chart;
                                        a.isDatasetVisible(t) ? (a.hide(t), e.hidden = !0) : (a.show(t), e.hidden = !1)
                                    }
                                },
                                reverse: "yes" === a.reverse_legend,
                                display: "yes" == a.show_chart_legend,
                                position: void 0 === a.legend_position ? "top" : a.legend_position,
                                align: void 0 === a.legend_align ? "center" : a.legend_align,
                                labels: {
                                    usePointStyle: "point" == a.legend_shape,
                                    padding: a.legend_padding,
                                    boxWidth: a.legend_box_width,
                                    boxHeight: a.legend_font_size,
                                    color: a.legend_text_color,
                                    font: {
                                        family: a.legend_font_family,
                                        size: a.legend_font_size,
                                        style: a.legend_font_style,
                                        weight: a.legend_font_weight
                                    }
                                }
                            },
                            title: {
                                display: "yes" === a.show_chart_title,
                                text: a.chart_title,
                                align: void 0 === a.chart_title_align ? "center" : a.chart_title_align,
                                position: void 0 === a.chart_title_position ? "top" : a.chart_title_position,
                                color: void 0 === a.chart_title_color ? "#000" : a.chart_title_color,
                                padding: a.title_padding,
                                font: {
                                    family: a.title_font_family,
                                    size: a.title_font_size,
                                    style: a.title_font_style,
                                    weight: a.title_font_weight
                                }
                            },
                            tooltip: {
                                callbacks: {
                                    footer: e => {
                                        let t = 0;
                                        return e.forEach(function(e) {
                                            t += e.parsed.y
                                        }), "bar_horizontal" === a.chart_type && (t = 0, e.forEach(function(e) {
                                            t += e.parsed.x
                                        })), "radar" != a.chart_type && "pie" != a.chart_type && "doughnut" != a.chart_type && "polarArea" != a.chart_type && "Sum: " + t
                                    }
                                },
                                enabled: "yes" === a.show_chart_tooltip,
                                position: void 0 === a.tooltip_position ? "nearest" : a.tooltip_position,
                                padding: void 0 === a.tooltip_padding ? 10 : a.tooltip_padding,
                                caretSize: o,
                                backgroundColor: void 0 === a.chart_tooltip_bg_color ? "rbga(0, 0, 0, 0.2)" : a.chart_tooltip_bg_color,
                                titleColor: void 0 === a.chart_tooltip_title_color ? "#FFF" : a.chart_tooltip_title_color,
                                titleFont: {
                                    family: a.chart_tooltip_title_font,
                                    size: a.chart_tooltip_title_font_size
                                },
                                titleAlign: a.chart_tooltip_title_align,
                                titleMarginBottom: a.chart_tooltip_title_margin_bottom,
                                bodyColor: void 0 === a.chart_tooltip_item_color ? "#FFF" : a.chart_tooltip_item_color,
                                bodyFont: {
                                    family: a.chart_tooltip_item_font,
                                    size: a.chart_tooltip_item_font_size
                                },
                                bodyAlign: a.chart_tooltip_item_align,
                                bodySpacing: a.chart_tooltip_item_spacing,
                                boxPadding: 3
                            }
                        }
                    };
                if (p.includes(a.chart_type) || delete c.scales, p.includes(a.chart_type) || "doughnut" === a.chart_type || "pie" === a.chart_type || (c.scales = {
                        r: {
                            angleLines: {
                                color: a.angle_lines_color
                            },
                            pointLabels: {
                                color: a.point_labels_color_r,
                                font: {
                                    size: a.point_labels_font_size_r,
                                    family: a.point_labels_font_family_r,
                                    style: a.point_labels_font_style_r,
                                    weight: a.point_labels_font_weight_r
                                }
                            },
                            ticks: {
                                stepSize: a.r_step_size,
                                display: a.display_r_ticks,
                                backdropColor: a.axis_labels_bg_color,
                                backdropPadding: +a.axis_labels_padding,
                                color: a.axis_labels_color
                            },
                            grid: {
                                display: a.display_r_axis,
                                drawBorder: a.display_r_axis,
                                drawOnChartArea: a.display_r_axis,
                                drawTicks: a.display_r_axis,
                                color: a.axis_grid_line_color_r,
                                borderDash: [a.border_dash_length_r, a.border_dash_spacing_r],
                                borderDashOffset: a.border_dash_offset_r,
                                lineWidth: a.grid_line_width_r
                            }
                        }
                    }), "custom" === a.data_source) {
                    const t = {
                        labels: r,
                        datasets: JSON.parse(a.chart_datasets)
                    };
                    l = {
                        plugins: [a.inner_datalabels ? ChartDataLabels : ""],
                        type: "bar_horizontal" == a.chart_type ? "bar" : a.chart_type,
                        data: t,
                        options: c
                    }, "bar_horizontal" == a.chart_type ? l.options.indexAxis = "y" : "", (a.tooltips_percent || "pie" == a.chart_type || "doughnut" == a.chart_type || "polarArea" == a.chart_type) && (l.options.plugins.tooltip.callbacks.label = function(e) {
                        var t = e.dataset.label + ": ";
                        ("pie" == a.chart_type || "doughnut" == a.chart_type || "polarArea" == a.chart_type) && (t = e.label + " (" + e.dataset.label + ") : ");
                        var i = e.dataset,
                            r = i.data.reduce(function(e, t) {
                                return parseFloat(e) + parseFloat(t)
                            }),
                            s = e.formattedValue,
                            n = (100 * (s / r)).toPrecision(3);
                        return t + (a.tooltips_percent ? n + "%" : e.formattedValue)
                    }), d = new Chart(e.find(".wpr-chart"), l)
                } else a.url && (p.includes(a.chart_type) || "radar" === a.chart_type) ? t.ajax({
                    url: a.url,
                    type: "GET",
                    success: function(t) {
                        e.find(".wpr-rotating-plane").remove(), i(t, a)
                    },
                    error: function(e) {
                        console.log(e)
                    }
                }) : !a.url && (p.includes(a.chart_type) || "radar" === a.chart_type) ? (e.find(".wpr-rotating-plane").remove(), e.find(".wpr-charts-container").html("<p class=\"wpr-charts-error-notice\">Provide a csv file or remote URL</p>")) : (e.find(".wpr-rotating-plane").remove(), e.find(".wpr-charts-container").html("<p class=\"wpr-charts-error-notice\">doughnut, pie and polareArea charts only work with custom data source</p>"));
                t(window).resize(function() {
                    n = 768 <= window.innerWidth ? a.line_dots_radius : 767 >= window.innerWidth ? a.line_dots_radius_mobile : 0, l.options.elements.point.radius = n, l.options.plugins.tooltip.caretSize = o
                })
            },
            widgetTaxonomyList: function(e) {
                var i = e.find(".wpr-taxonomy-list");
                "yes" == i.data("show-on-click") && (i.find(".wpr-taxonomy i.wpr-tax-dropdown").on("click", function(a) {
                    a.preventDefault(), i.find(".wpr-sub-taxonomy[data-term-id=\"child-" + t(this).closest("li").data("term-id") + "\"]").hasClass("wpr-sub-hidden") ? (t(this).removeClass("fa-caret-right").addClass("fa-caret-down"), i.find(".wpr-sub-taxonomy[data-term-id=\"child-" + t(this).closest("li").data("term-id") + "\"]").removeClass("wpr-sub-hidden")) : (t(this).removeClass("fa-caret-down").addClass("fa-caret-right"), i.find(".wpr-sub-taxonomy[data-term-id=\"child-" + t(this).closest("li").data("term-id") + "\"]").addClass("wpr-sub-hidden"), i.find(".wpr-inner-sub-taxonomy[data-term-id=\"grandchild-" + t(this).closest("li").data("term-id") + "\"]").each(function() {
                        t(this).hasClass("wpr-sub-hidden") || (i.find(".wpr-sub-taxonomy[data-id=\"" + t(this).data("parent-id") + "\"] i.wpr-tax-dropdown").removeClass("fa-caret-down").addClass("fa-caret-right"), t(this).addClass("wpr-sub-hidden"))
                    }), i.find(".wpr-inner-sub-taxonomy-2[data-term-id=\"great-grandchild-" + t(this).closest("li").data("term-id") + "\"]").each(function() {
                        t(this).hasClass("wpr-sub-hidden") || (i.find(".wpr-sub-taxonomy[data-id=\"" + t(this).data("parent-id") + "\"] i.wpr-tax-dropdown").removeClass("fa-caret-down").addClass("fa-caret-right"), t(this).addClass("wpr-sub-hidden"))
                    })), i.find(".wpr-inner-sub-taxonomy[data-term-id=\"grandchild-" + t(this).closest("li").data("term-id") + "\"] i.wpr-tax-dropdown").removeClass("fa-caret-down").addClass("fa-caret-right"), i.find(".wpr-inner-sub-taxonomy-2[data-term-id=\"great-grandchild-" + t(this).closest("li").data("term-id") + "\"]").hasClass("wpr-sub-hidden") || i.find(".wpr-inner-sub-taxonomy-2[data-term-id=\"great-grandchild-" + t(this).closest("li").data("term-id") + "\"]").addClass("wpr-sub-hidden")
                }), i.find(".wpr-sub-taxonomy i.wpr-tax-dropdown").on("click", function(a) {
                    a.preventDefault(), i.find(".wpr-inner-sub-taxonomy[data-parent-id=\"" + t(this).closest("li").data("id") + "\"]").hasClass("wpr-sub-hidden") ? (t(this).removeClass("fa-caret-right").addClass("fa-caret-down"), i.find(".wpr-inner-sub-taxonomy[data-parent-id=\"" + t(this).closest("li").data("id") + "\"]").removeClass("wpr-sub-hidden")) : (t(this).removeClass("fa-caret-down").addClass("fa-caret-right"), i.find(".wpr-inner-sub-taxonomy[data-parent-id=\"" + t(this).closest("li").data("id") + "\"]").addClass("wpr-sub-hidden")), i.find(".wpr-inner-sub-taxonomy[data-parent-id=\"" + t(this).closest("li").data("id") + "\"] i.wpr-tax-dropdown").removeClass("fa-caret-down").addClass("fa-caret-right"), i.find(".wpr-inner-sub-taxonomy-2[data-term-id=\"great-grandchild-" + t(this).closest("li").data("term-id").replace("child-", "") + "\"]").hasClass("wpr-sub-hidden") || i.find(".wpr-inner-sub-taxonomy-2[data-term-id=\"great-grandchild-" + t(this).closest("li").data("term-id").replace("child-", "") + "\"]").addClass("wpr-sub-hidden")
                }), i.find(".wpr-inner-sub-taxonomy i.wpr-tax-dropdown").on("click", function(a) {
                    a.preventDefault(), i.find(".wpr-inner-sub-taxonomy-2[data-parent-id=\"" + t(this).closest("li").data("id") + "\"]").hasClass("wpr-sub-hidden") ? (t(this).removeClass("fa-caret-right").addClass("fa-caret-down"), i.find(".wpr-inner-sub-taxonomy-2[data-parent-id=\"" + t(this).closest("li").data("id") + "\"]").removeClass("wpr-sub-hidden")) : (t(this).removeClass("fa-caret-down").addClass("fa-caret-right"), i.find(".wpr-inner-sub-taxonomy-2[data-parent-id=\"" + t(this).closest("li").data("id") + "\"]").addClass("wpr-sub-hidden"))
                }))
            },
            widgetPostsTimeline: function(i) {
                function a() {
                    i.find(".wpr-centered").length && (767 >= window.innerWidth ? (i.find(".wpr-wrapper .wpr-timeline-centered").removeClass("wpr-both-sided-timeline").addClass("wpr-one-sided-timeline").addClass("wpr-remove-one-sided-later"), i.find(".wpr-wrapper .wpr-left-aligned").removeClass("wpr-left-aligned").addClass("wpr-right-aligned").addClass("wpr-remove-right-aligned-later")) : (i.find(".wpr-wrapper .wpr-timeline-centered.wpr-remove-one-sided-later").removeClass("wpr-one-sided-timeline").addClass("wpr-both-sided-timeline").removeClass("wpr-remove-one-sided-later"), i.find(".wpr-wrapper .wpr-remove-right-aligned-later").removeClass("wpr-right-aligned").addClass("wpr-left-aligned").removeClass("wpr-remove-right-aligned-later")))
                }

                function r(e, a) {
                    if (i.find(".wpr-timeline-fill").length && (0 < i.find(".wpr-timeline-entry:eq(0)").prev(".wpr-year-wrap").length && (a = i.find(".wpr-year-label").eq(0)), p.length)) {
                        var r = p.css("height").slice(0, -2),
                            s = document.documentElement.scrollTop,
                            n = document.documentElement.clientHeight / 2;
                        s + n - a.offset().top > e.offset().top - a.offset().top + parseInt(e.css("height").slice(0, -2)) || p.css("height", s + n - a.offset().top + "px"), i.find(".wpr-main-line-icon.wpr-icon").each(function() {
                            t(this).offset().top < parseInt(a.offset().top + parseInt(r)) ? t(this).addClass("wpr-change-border-color") : t(this).removeClass("wpr-change-border-color")
                        })
                    }
                }

                function s(e, t, a, r, s) {
                    if (s = i.find(".wpr-timeline-centered"), i.find(".wpr-both-sided-timeline").length || i.find(".wpr-one-sided-timeline").length || i.find(".wpr-one-sided-timeline-left").length) {
                        0 < i.find(".wpr-timeline-entry:eq(0)").prev(".wpr-year-wrap").length && (r = i.find(".wpr-year-label").eq(0));
                        var n = r.offset().top,
                            o = a.offset().top,
                            d = n - s.offset().top + "px",
                            l = o - n + parseInt(a.css("height").slice(0, -2));
                        e.css("top", d), e.css("height", l), "" === t ? "" : t.css("top", d)
                    }
                }
                var n = 0 < i.find(".wpr-timeline-centered").length ? i.find(".wpr-timeline-centered") : "",
                    o = 0 < i.find(".wpr-timeline-centered").length ? i.find(".wpr-timeline-centered") : "",
                    d = 0 < i.find(".wpr-grid-pagination").length ? i.find(".wpr-grid-pagination") : "",
                    l = 0 < i.find(".wpr-middle-line").length ? i.find(".wpr-middle-line") : "",
                    p = 0 < i.find(".wpr-timeline-fill").length ? i.find(".wpr-timeline-fill") : "",
                    c = 0 < i.find(".wpr-main-line-icon.wpr-icon:last").length ? i.find(".wpr-main-line-icon.wpr-icon:last") : "",
                    f = 0 < i.find(".wpr-main-line-icon.wpr-icon").length ? i.find(".wpr-main-line-icon.wpr-icon").first() : "",
                    w = ".elementor-element-" + i.attr("data-id"),
                    m = i.find(".wpr-story-info-vertical").attr("data-animation-offset") ? +i.find(".wpr-story-info-vertical").attr("data-animation-offset") : "",
                    h = i.find(".wpr-story-info-vertical").attr("data-animation-duration") ? +i.find(".wpr-story-info-vertical").attr("data-animation-duration") : "";
                if (0 < i.find(".wpr-timeline-centered").length && (t(window).resize(function() {
                        a()
                    }), t(window).smartresize(function() {
                        a()
                    }), setTimeout(function() {
                        a(), t(window).trigger("resize")
                    }, 500), s(l, p, c, f, o), setTimeout(function() {
                        s(l, p, c, f, o), t(window).trigger("resize")
                    }, 500), t(window).smartresize(function() {
                        s(l, p, c, f, o)
                    }), t(window).resize(function() {
                        s(l, p, c, f, o)
                    }), "load-more" !== n.attr("data-pagination") && i.find(".wpr-grid-pagination").css("visibility", "hidden"), AOS.init({
                        offset: parseInt(m),
                        duration: h,
                        once: !0
                    }), r(c, f), t(window).on("scroll", function() {
                        r(c, f)
                    }), !i.find(".elementor-repeater-items").length && !e.editorCheck() && ("load-more" === i.find(".wpr-timeline-centered").data("pagination") || "infinite-scroll" === i.find(".wpr-timeline-centered").data("pagination")))) {
                    var g = (void 0 === n || "load-more" !== n.attr("data-pagination")) && 10;
                    n.infiniteScroll({
                        path: w + " .wpr-grid-pagination a",
                        hideNav: !1,
                        append: w + ".wpr-timeline-entry",
                        history: !1,
                        scrollThreshold: g,
                        status: w + " .page-load-status"
                    }), n.on("request.infiniteScroll", function() {
                        i.find(".wpr-load-more-btn").hide(), i.find(".wpr-pagination-loading").css("display", "inline-block")
                    });
                    var u = 0;
                    n.on("load.infiniteScroll", function(e, a) {
                        u++;
                        var g = t(a).find(w).find(".wpr-timeline-entry");
                        n.infiniteScroll("appendItems", g), i.find(".wpr-one-sided-timeline").length || i.find(".wpr-one-sided-timeline-left").length || i.find(".wpr-timeline-entry").each(function(e) {
                            t(this).removeClass("wpr-right-aligned wpr-left-aligned"), 0 == e % 2 ? (t(this).addClass("wpr-left-aligned"), t(this).find(".wpr-story-info-vertical").attr("data-aos", t(this).find(".wpr-story-info-vertical").attr("data-aos-left"))) : (t(this).addClass("wpr-right-aligned"), t(this).find(".wpr-story-info-vertical").attr("data-aos", t(this).find(".wpr-story-info-vertical").attr("data-aos-right")))
                        }), AOS.init({
                            offset: parseInt(m),
                            duration: h,
                            once: !0
                        }), t(window).scroll(), i.find(".wpr-pagination-loading").hide(), n.data("max-pages") - 1 === u ? (i.find(".wpr-pagination-finish").fadeIn(1e3), d.delay(2e3).fadeOut(1e3)) : "load-more" === n.attr("data-pagination") && i.find(".wpr-load-more-btn").fadeIn(), l = i.find(".wpr-middle-line"), p = i.find(".wpr-timeline-fill"), c = i.find(".wpr-main-line-icon.wpr-icon:last"), f = i.find(".wpr-main-line-icon.wpr-icon").first(), o = i.find(".wpr-timeline-centered"), s(l, p, c, f, o), t(window).trigger("resize"), r(c, f)
                    }), e.editorCheck() || (i.find(".wpr-load-more-btn").on("click", function() {
                        return n.infiniteScroll("loadNextPage"), !1
                    }), "infinite-scroll" == n.attr("data-pagination") && n.infiniteScroll("loadNextPage"))
                }
                if (i.find(".swiper-wrapper").length) {
                    var y = function(e, t) {
                            var i = elementorFrontend.utils.swiper;
                            return new i(e, t).then(function(e) {
                                return e
                            })
                        },
                        b = i.find(".wpr-horizontal-bottom").length ? ".wpr-horizontal-bottom" : ".wpr-horizontal",
                        v = i.find(b + ".swiper-container"),
                        _ = v.data("slidestoshow");
                    y(v, {
                        spaceBetween: +v.data("swiper-space-between"),
                        loop: "yes" === v.data("loop"),
                        autoplay: "yes" === v.data("autoplay") && {
                            delay: +v.attr("data-swiper-delay"),
                            disableOnInteraction: !1,
                            pauseOnMouseEnter: "yes" === v.data("swiper-poh")
                        },
                        on: {
                            init: function() {
                                0 < i.find(".wpr-timeline-outer-container").length && i.find(".wpr-timeline-outer-container").css("opacity", 1)
                            }
                        },
                        speed: +v.attr("data-swiper-speed"),
                        slidesPerView: v.data("slidestoshow"),
                        direction: "horizontal",
                        pagination: {
                            el: ".wpr-swiper-pagination",
                            type: "progressbar"
                        },
                        navigation: {
                            nextEl: ".wpr-button-next",
                            prevEl: ".wpr-button-prev"
                        },
                        breakpoints: {
                            320: {
                                slidesPerView: 1
                            },
                            480: {
                                slidesPerView: 2
                            },
                            769: {
                                slidesPerView: _
                            }
                        }
                    })
                } else t(document).ready(function() {
                    i.find(".wpr-timeline-outer-container").length && i.find(".wpr-timeline-outer-container").css("opacity", 1)
                })
            },
            widgetSharingButtons: function(e) {
                e.find(".wpr-sharing-print").on("click", function(t) {
                    t.preventDefault(), window.print()
                })
            },
            widgetTwitterFeed: function(i) {
                function a(e) {
                    var a = i.find(".wpr-twitter-feed"),
                        r = a.find(".wpr-tweet"),
                        s = e.layout_select,
                        n = 3,
                        o = e.gutter_hr,
                        d = e.gutter_vr,
                        l = a.width() + o - .3,
                        p = t(window).outerWidth(),
                        c = +elementorFrontend.config.responsive.breakpoints.mobile.value,
                        f = +elementorFrontend.config.responsive.breakpoints.mobile_extra.value,
                        w = +elementorFrontend.config.responsive.breakpoints.tablet.value,
                        m = +elementorFrontend.config.responsive.breakpoints.tablet_extra.value,
                        h = +elementorFrontend.config.responsive.breakpoints.laptop.value,
                        g = +elementorFrontend.config.responsive.breakpoints.widescreen.value;
                    n = c >= p ? e.columns_mobile ? e.columns_mobile : 1 : f >= p ? e.columns_mobile_extra ? e.columns_mobile_extra : e.columns_tablet ? e.columns_tablet : e.columns : w >= p ? e.columns_tablet ? e.columns_tablet : 2 : m >= p ? e.columns_tablet_extra ? e.columns_tablet_extra : e.columns_tablet ? e.columns_tablet : e.columns : h >= p ? e.columns_laptop ? e.columns_laptop : e.columns : g - 1 >= p ? e.columns : g <= p ? e.columns_widescreen ? e.columns_widescreen : e.columns : e.columns, 8 < n && (n = 8), n = parseInt(n), "string" == typeof n && -1 !== n.indexOf("pro") && (n = 3), r.outerWidth(Math.floor(l / n - o)), r.css("margin-bottom", d + "px"), 1 === n && r.last().css("margin-bottom", "0");
                    a.isotopewpr({
                        layoutMode: s,
                        masonry: {
                            comlumnWidth: l / n,
                            gutter: o
                        },
                        transitionDuration: 400,
                        percentPosition: !0
                    });
                    "1" !== a.css("opacity") && a.css("opacity", "1")
                }

                function r() {
                    if (i.hasClass("wpr-twitter-feed-carousel")) {
                        var e = function(e, t) {
                            var i = elementorFrontend.utils.swiper;
                            return new i(e, t).then(function(e) {
                                return e
                            })
                        };
                        i.find(".wpr-twitter-feed").css("flexWrap", "nowrap");
                        var t = s.carousel;
                        i.find(".wpr-twitter-feed-cont").addClass("swiper"), i.find(".wpr-twitter-feed").addClass("swiper-wrapper"), i.find(".wpr-tweet").addClass("swiper-slide"), i.find(".wpr-twitter-feed-cont").css("overflow", "hidden");
                        var a = i.find(".wpr-twitter-feed-cont"),
                            r = +elementorFrontend.config.responsive.breakpoints.mobile.value + 1,
                            n = +elementorFrontend.config.responsive.breakpoints.mobile_extra.value + 1,
                            o = +elementorFrontend.config.responsive.breakpoints.tablet.value + 1,
                            d = +elementorFrontend.config.responsive.breakpoints.tablet_extra.value + 1,
                            l = +elementorFrontend.config.responsive.breakpoints.laptop.value + 1,
                            p = +elementorFrontend.config.responsive.breakpoints.widescreen.value;
                        e(a, {
                            autoplay: !("yes" !== t.wpr_cs_autoplay) && {
                                delay: +t.wpr_cs_delay
                            },
                            loop: !("yes" !== t.wpr_cs_loop),
                            slidesPerView: +t.wpr_cs_slides_to_show,
                            spaceBetween: +t.wpr_cs_space_between,
                            speed: +t.wpr_cs_speed,
                            pagination: !("yes" !== t.wpr_cs_pagination) && {
                                el: ".swiper-pagination",
                                type: t.wpr_cs_pagination_type
                            },
                            navigation: {
                                prevEl: ".wpr-swiper-button-prev",
                                nextEl: ".wpr-swiper-button-next"
                            },
                            breakpoints: {
                                320: {
                                    slidesPerView: +t.wpr_cs_slides_to_show_mobile
                                },
                                [r]: {
                                    slidesPerView: +t.wpr_cs_slides_to_show_mobile_extra
                                },
                                [n]: {
                                    slidesPerView: +t.wpr_cs_slides_to_show_tablet,
                                    spaceBetween: +t.wpr_cs_space_between_tablet
                                },
                                [o]: {
                                    slidesPerView: +t.wpr_cs_slides_to_show_tablet_extra,
                                    spaceBetween: +t.wpr_cs_space_between_tablet_extra
                                },
                                [d]: {
                                    slidesPerView: +t.wpr_cs_slides_to_show_laptop,
                                    spaceBetween: +t.wpr_cs_space_between_laptop
                                },
                                [l]: {
                                    slidesPerView: +t.wpr_cs_slides_to_show,
                                    spaceBetween: +t.wpr_cs_space_between
                                },
                                [p]: {
                                    slidesPerView: +t.wpr_cs_slides_to_show_widescreen,
                                    spaceBetween: +t.wpr_cs_space_between_widescreen
                                }
                            }
                        }), i.css("opacity", 1)
                    }
                }
                if (i.find(".wpr-twitter-feed").attr("data-settings")) var s = JSON.parse(i.find(".wpr-twitter-feed").attr("data-settings"));
                else return;
                let n = i.find(".wpr-twitter-feed");
                var s = JSON.parse(n.attr("data-settings")),
                    o = s.twitter_load_more_settings,
                    d = o.number_of_posts,
                    l = i.find(".wpr-grid-pagination");
                i.hasClass("wpr-twitter-feed-masonry") && (a(s), setTimeout(function() {
                    a(s)
                }, 100), e.editorCheck() && (setTimeout(function() {
                    a(s)
                }, 500), setTimeout(function() {
                    a(s)
                }, 1e3)), t(window).on("load", function() {
                    setTimeout(function() {
                        a(s)
                    }, 100)
                }), t(window).smartresize(function() {
                    setTimeout(function() {
                        a(s)
                    }, 200)
                })), e.editorCheck() || i.find(".wpr-load-more-twitter-posts").on("click", function() {
                    l.find(".wpr-load-more-btn").hide(), l.find(".wpr-pagination-loading").css("display", "inline-block"), t.ajax({
                        type: "POST",
                        url: WprConfig.ajaxurl,
                        data: {
                            action: "wpr_load_more_tweets",
                            nonce: WprConfig.nonce,
                            wpr_load_more_settings: o,
                            next_post_index: d
                        },
                        success: function(e) {
                            var a = t(e);
                            a.each(function() {
                                t(this).addClass("wpr-twitter-hidden-item")
                            }), i.find(".wpr-twitter-feed").append(a), setTimeout(function() {
                                i.hasClass("wpr-twitter-feed-masonry") && (n.isotopewpr("appended", a), n.isotopewpr("reloadItems"), n.isotopewpr("layout"), t(window).trigger("resize")), a.each(function() {
                                    var e = t(this);
                                    setTimeout(function() {
                                        e.removeClass("wpr-twitter-hidden-item")
                                    }, 300)
                                }), l.find(".wpr-pagination-loading").hide(), e.includes("wpr-tweet") ? l.find(".wpr-load-more-btn").fadeIn() : l.find(".wpr-pagination-finish").fadeIn(1e3)
                            }, 400), d += o.number_of_posts
                        },
                        error: function(e) {
                            console.log(e)
                        }
                    })
                }), r(), i.find(".wpr-grid").css("opacity", 1)
            },
            widgetInstagramFeed: function(i) {
                function a(e) {
                    var a = i.find(".wpr-instagram-feed"),
                        r = a.find(".wpr-insta-feed-content-wrap"),
                        s = e.insta_layout_select,
                        n = 3,
                        o = e.gutter_hr,
                        d = e.gutter_vr,
                        l = a.width() + o - .3,
                        p = t(window).outerWidth(),
                        c = +elementorFrontend.config.responsive.breakpoints.mobile.value,
                        f = +elementorFrontend.config.responsive.breakpoints.mobile_extra.value,
                        w = +elementorFrontend.config.responsive.breakpoints.tablet.value,
                        m = +elementorFrontend.config.responsive.breakpoints.tablet_extra.value,
                        h = +elementorFrontend.config.responsive.breakpoints.laptop.value,
                        g = +elementorFrontend.config.responsive.breakpoints.widescreen.value;
                    n = c >= p ? e.columns_mobile ? e.columns_mobile : 1 : f >= p ? e.columns_mobile_extra ? e.columns_mobile_extra : e.columns_tablet ? e.columns_tablet : e.columns : w >= p ? e.columns_tablet ? e.columns_tablet : 2 : m >= p ? e.columns_tablet_extra ? e.columns_tablet_extra : e.columns_tablet ? e.columns_tablet : e.columns : h >= p ? e.columns_laptop ? e.columns_laptop : e.columns : g - 1 >= p ? e.columns : g <= p ? e.columns_widescreen ? e.columns_widescreen : e.columns : e.columns, 8 < n && (n = 8), n = parseInt(n), "string" == typeof n && -1 !== n.indexOf("pro") && (n = 3), r.outerWidth(Math.floor(l / n - o)), r.css("margin-bottom", d + "px"), 1 === n && r.last().css("margin-bottom", "0");
                    a.isotopewpr({
                        layoutMode: s,
                        masonry: {
                            comlumnWidth: l / n,
                            gutter: o
                        },
                        transitionDuration: 400,
                        percentPosition: !0
                    })
                }

                function r(a) {
                    if (-1 !== i.find(".wpr-insta-feed-item-lightbox").length) {
                        var r = i.find(".wpr-insta-feed-item-lightbox"),
                            s = r.find(".wpr-insta-feed-lightbox-overlay");
                        r.each(function() {
                            var e = t(this).find(".inner-block > span").attr("data-src"),
                                i = t(this).closest(".wpr-insta-feed-content-wrap");
                            i.find(".wpr-insta-feed-image-wrap").attr("data-src", e);
                            i.find(".wpr-insta-feed-image-wrap").attr("data-src")
                        }), n.lightGallery(a.lightbox), n.on("onAfterOpen.lg", function() {
                            t(".lg-outer").find(".lg-thumb-item").length && t(".lg-outer").find(".lg-thumb-item").each(function() {
                                var e = t(this).find("img").attr("src"),
                                    i = e,
                                    a = e.lastIndexOf("."),
                                    r = e.slice(a),
                                    s = e.lastIndexOf("-"),
                                    n = !!/\d{3,}x\d{3,}/.test(e.substring(a, s)) && e.substring(a, s);
                                42 <= e.substring(a, s).length && (n = ""), "" !== n && (!1 === n ? i = [e.slice(0, a), "-150x150", e.slice(a)].join("") : i = e.replace(n, "-150x150")), t(this).find("img").attr("src", i), !1 == n && t(this).find("img").attr("src", e)
                            })
                        }), i.find(".wpr-insta-feed").on("onAferAppendSlide.lg, onAfterSlide.lg", function() {
                            var e = t("#lg-actual-size, #lg-zoom-in, #lg-zoom-out, #lg-download"),
                                i = t("#lg-download").attr("href");
                            t("#lg-download").length && (-1 === i.indexOf("wp-content") ? e.addClass("wpr-hidden-element") : e.removeClass("wpr-hidden-element")), "" === a.lightbox.autoplay && t(".lg-autoplay-button").css({
                                width: "0",
                                height: "0",
                                overflow: "hidden"
                            })
                        }), s.length ? (i.find(".wpr-insta-feed-media-hover-bg").after(s.remove()), i.find(".wpr-insta-feed-lightbox-overlay").on("click", function() {
                            e.editorCheck() ? alert("Lightbox is Disabled in the Editor! Please Preview this Page to see it in action.") : t(this).closest(".wpr-insta-feed-content-wrap").find(".wpr-insta-feed-image-wrap").trigger("click")
                        })) : r.find(".inner-block > span").on("click", function() {
                            if (!e.editorCheck()) {
                                var i = t(this).closest(".wpr-insta-feed-content-wrap").find(".wpr-insta-feed-image-wrap");
                                i.trigger("click")
                            } else alert("Lightbox is Disabled in the Editor! Please Preview this Page to see it in action.")
                        })
                    }
                }

                function s() {
                    "yes" !== n.find(".wpr-insta-feed-media-wrap").attr("data-overlay-link") || e.editorCheck() || (n.find(".wpr-insta-feed-media-wrap").css("cursor", "pointer"), n.find(".wpr-insta-feed-media-wrap").on("click", function(e) {
                        var i = e.target.className;
                        if (-1 !== i.indexOf("inner-block") || -1 !== i.indexOf("wpr-cv-inner") || -1 !== i.indexOf("wpr-insta-feed-media-hover")) {
                            e.preventDefault();
                            var a = t(this).find(".wpr-insta-feed-media-hover-bg").attr("data-url"),
                                a = a.replace("#new_tab", "");
                            "_blank" === n.find(".wpr-insta-feed-media-hover-bg").data("target") ? window.open(a, "_blank").focus() : window.location.href = a
                        }
                    }))
                }
                if (!(0 < i.find(".wpr-insta-feed-content-wrap").length)) return;
                let n = i.find(".wpr-instagram-feed");
                if (n.attr("data-settings")) var o = JSON.parse(n.attr("data-settings")),
                    d = o.insta_load_more_settings;
                var l = i.attr("data-id"),
                    p = d.limit,
                    c = i.find(".wpr-grid-pagination");
                if (i.hasClass("wpr-insta-feed-layout-full-width") && d.limit > i.find(".wpr-insta-feed-content-wrap").length && i.find(".wpr-layout-full-width").css("grid-template-columns", "repeat(" + i.find(".wpr-insta-feed-content-wrap").length + ", minmax(0, 1fr))"), i.hasClass("wpr-insta-feed-masonry") && (a(o), setTimeout(function() {
                        a(o)
                    }, 100), e.editorCheck() && (setTimeout(function() {
                        a(o)
                    }, 500), setTimeout(function() {
                        a(o)
                    }, 1e3)), t(window).on("load", function() {
                        setTimeout(function() {
                            a(o)
                        }, 100)
                    }), t(window).smartresize(function() {
                        setTimeout(function() {
                            a(o)
                        }, 200)
                    })), i.hasClass("wpr-insta-feed-layout-list")) {
                    var f = o.media_align,
                        w = o.media_width,
                        m = o.media_distance;
                    i.find(".wpr-insta-feed-item-below-content").css({
                        float: f,
                        width: "calc((100% - " + w + "%) - " + m + "px)"
                    }), t(window).smartresize(function() {
                        f = o.media_align, w = o.media_width, m = o.media_distance, i.find(".wpr-insta-feed-item-below-content").css({
                            float: f,
                            width: "calc((100% - " + w + "%) - " + m + "px)"
                        })
                    })
                }
                e.editorCheck() || i.find(".wpr-load-more-insta-posts").on("click", function() {
                        c.find(".wpr-load-more-btn").hide(), c.find(".wpr-pagination-loading").css("display", "inline-block"), t.ajax({
                            type: "POST",
                            url: WprConfig.ajaxurl,
                            data: {
                                action: "wpr_load_more_instagram_posts",
                                nonce: WprConfig.nonce,
                                wpr_load_more_settings: d,
                                wpr_insta_feed_widget_id: l,
                                next_post_index: p
                            },
                            success: function(e) {
                                var a = t(e);
                                a.each(function() {
                                    t(this).addClass("wpr-instagram-hidden-item")
                                }), i.find(".wpr-instagram-feed").append(a), i.hasClass("wpr-insta-feed-layout-list") && (f = o.media_align, w = o.media_width, m = o.media_distance, i.find(".wpr-insta-feed-item-below-content").css({
                                    float: f,
                                    width: "calc((100% - " + w + "%) - " + m + "px)"
                                })), i.hasClass("wpr-insta-feed-masonry") && (n.isotopewpr("appended", a), n.isotopewpr("reloadItems"), n.isotopewpr("layout"), t(window).trigger("resize")), setTimeout(function() {
                                    a.each(function() {
                                        var e = t(this);
                                        setTimeout(function() {
                                            e.removeClass("wpr-instagram-hidden-item")
                                        }, 100)
                                    }), c.find(".wpr-pagination-loading").hide(), e.includes("wpr-insta-feed-content-wrap") ? setTimeout(function() {
                                        c.find(".wpr-load-more-btn").fadeIn()
                                    }, 400) : (c.find(".wpr-pagination-finish").fadeIn(1e3), c.delay(2e3).fadeOut(1e3), setTimeout(function() {
                                        c.find(".wpr-pagination-loading").hide()
                                    }, 500))
                                }, 400), p += d.limit, n.data("lightGallery") && n.data("lightGallery").destroy(!0), s()
                            },
                            error: function(e) {
                                console.log(e)
                            }
                        })
                    }), i.find(".wpr-layout-carousel") && function() {
                        if (i.hasClass("wpr-insta-feed-layout-carousel")) {
                            var e = function(e, t) {
                                var i = elementorFrontend.utils.swiper;
                                return new i(e, t).then(function(e) {
                                    return e
                                })
                            };
                            i.find(".wpr-instagram-feed").css("flexWrap", "nowrap");
                            var t = o.carousel;
                            i.find(".wpr-instagram-feed-cont").addClass("swiper"), i.find(".wpr-instagram-feed").addClass("swiper-wrapper"), i.find(".wpr-insta-feed-content-wrap").addClass("swiper-slide"), i.find(".wpr-instagram-feed-cont").css("overflow", "hidden");
                            var a = i.find(".wpr-instagram-feed-cont"),
                                r = +elementorFrontend.config.responsive.breakpoints.mobile.value + 1,
                                s = +elementorFrontend.config.responsive.breakpoints.mobile_extra.value + 1,
                                n = +elementorFrontend.config.responsive.breakpoints.tablet.value + 1,
                                d = +elementorFrontend.config.responsive.breakpoints.tablet_extra.value + 1,
                                l = +elementorFrontend.config.responsive.breakpoints.laptop.value + 1,
                                p = +elementorFrontend.config.responsive.breakpoints.widescreen.value;
                            e(a, {
                                autoplay: "yes" === t.wpr_cs_autoplay && {
                                    delay: +t.wpr_cs_delay
                                },
                                loop: "yes" === t.wpr_cs_loop,
                                slidesPerView: +t.wpr_cs_slides_to_show,
                                spaceBetween: +t.wpr_cs_space_between,
                                speed: +t.wpr_cs_speed,
                                pagination: "yes" === t.wpr_cs_pagination && {
                                    el: ".swiper-pagination",
                                    type: t.wpr_cs_pagination_type,
                                    clickable: "bullets" === t.wpr_cs_pagination_type
                                },
                                navigation: {
                                    prevEl: ".wpr-swiper-button-prev",
                                    nextEl: ".wpr-swiper-button-next"
                                },
                                breakpoints: {
                                    320: {
                                        slidesPerView: +t.wpr_cs_slides_to_show_mobile
                                    },
                                    [r]: {
                                        slidesPerView: +t.wpr_cs_slides_to_show_mobile_extra
                                    },
                                    [s]: {
                                        slidesPerView: +t.wpr_cs_slides_to_show_tablet,
                                        spaceBetween: +t.wpr_cs_space_between_tablet
                                    },
                                    [n]: {
                                        slidesPerView: +t.wpr_cs_slides_to_show_tablet_extra,
                                        spaceBetween: +t.wpr_cs_space_between_tablet_extra
                                    },
                                    [d]: {
                                        slidesPerView: +t.wpr_cs_slides_to_show_laptop,
                                        spaceBetween: +t.wpr_cs_space_between_laptop
                                    },
                                    [l]: {
                                        slidesPerView: +t.wpr_cs_slides_to_show,
                                        spaceBetween: +t.wpr_cs_space_between
                                    },
                                    [p]: {
                                        slidesPerView: +t.wpr_cs_slides_to_show_widescreen,
                                        spaceBetween: +t.wpr_cs_space_between_widescreen
                                    }
                                }
                            }), i.css("opacity", 1)
                        }
                    }(), t(document).ready(function() {
                        i.find(".wpr-grid-pagination").removeClass("wpr-pagination-hidden")
                    }), t(document).ready(function() {
                        n.length && n.css("opacity", 1)
                    }), e.editorCheck() && n.length && n.css("opacity", 1), s(), r(o),
                    function() {
                        if (i.find(".wpr-sharing-trigger").length) {
                            var e = i.find(".wpr-sharing-trigger"),
                                a = i.find(".wpr-post-sharing-inner"),
                                r = 5;
                            a.first().find("a").each(function() {
                                r += t(this).outerWidth() + parseInt(t(this).css("margin-right"), 10)
                            });
                            var s = parseInt(a.find("a").css("margin-right"), 10);
                            "left" === e.attr("data-direction") ? (a.css("width", r + "px"), a.css("left", -(s + r) + "px")) : "right" === e.attr("data-direction") ? (a.css("width", r + "px"), a.css("right", -(s + r) + "px")) : "top" === e.attr("data-direction") ? (a.find("a").css({
                                "margin-right": "0",
                                "margin-top": s + "px"
                            }), a.css({
                                top: -s + "px",
                                left: "50%",
                                "-webkit-transform": "translate(-50%, -100%)",
                                transform: "translate(-50%, -100%)"
                            })) : "right" === e.attr("data-direction") ? (a.css("width", r + "px"), a.css({
                                left: s + "px"
                            })) : "bottom" === e.attr("data-direction") && (a.find("a").css({
                                "margin-right": "0",
                                "margin-bottom": s + "px"
                            }), a.css({
                                bottom: -s + "px",
                                left: "50%",
                                "-webkit-transform": "translate(-50%, 100%)",
                                transform: "translate(-50%, 100%)"
                            })), "click" === e.attr("data-action") ? e.on("click", function() {
                                var e = t(this).next();
                                "hidden" === e.css("visibility") ? (e.css("visibility", "visible"), e.find("a").css({
                                    opacity: "1",
                                    top: "0"
                                }), setTimeout(function() {
                                    e.find("a").addClass("wpr-no-transition-delay")
                                }, 100 * e.find("a").length)) : (e.find("a").removeClass("wpr-no-transition-delay"), e.find("a").css({
                                    opacity: "0",
                                    top: "-5px"
                                }), setTimeout(function() {
                                    e.css("visibility", "hidden")
                                }, 100 * e.find("a").length))
                            }) : (e.on("mouseenter", function() {
                                var e = t(this).next();
                                e.css("visibility", "visible"), e.find("a").css({
                                    opacity: "1",
                                    top: "0"
                                }), setTimeout(function() {
                                    e.find("a").addClass("wpr-no-transition-delay")
                                }, 100 * e.find("a").length)
                            }), i.find(".wpr-insta-feed-item-sharing").on("mouseleave", function() {
                                var e = t(this).find(".wpr-post-sharing-inner");
                                e.find("a").removeClass("wpr-no-transition-delay"), e.find("a").css({
                                    opacity: "0",
                                    top: "-5px"
                                }), setTimeout(function() {
                                    e.css("visibility", "hidden")
                                }, 100 * e.find("a").length)
                            }))
                        }
                    }();
                var h = new MutationObserver(function() {
                    s(), r(o)
                });
                h.observe(i[0], {
                    childList: !0,
                    subtree: !0
                }), i.find(".elementor-widget-wrap").removeClass("e-swiper-container")
            },
            widgetFacebookFeed: function() {
                window.fbAsyncInit = function() {
                        FB.init({
                            appId: "1184287221975469",
                            xfbml: !0,
                            version: "v13.0"
                        }), FB.AppEvents.logPageView()
                    },
                    function(e, t, i) {
                        var a = e.getElementsByTagName(t)[0],
                            r;
                        e.getElementById(i) || (r = e.createElement(t), r.id = i, r.src = "https://connect.facebook.net/en_US/sdk.js", a.parentNode.insertBefore(r, a))
                    }(document, "script", "facebook-jssdk")
            },
            widgetFlipCarousel: function(e) {
                var i = JSON.parse(e.find(".wpr-flip-carousel").attr("data-settings"));
                e.find(".wpr-flip-carousel").css("opacity", 1), e.find(".wpr-flip-carousel").flipster({
                    itemContainer: "ul",
                    itemSelector: "li",
                    fadeIn: 400,
                    start: "yes" === i.starts_from_center ? "center" : 0,
                    style: i.carousel_type,
                    loop: !("yes" !== i.loop),
                    autoplay: "no" !== i.autoplay && i.autoplay_milliseconds,
                    pauseOnHover: !("yes" !== i.pause_on_hover),
                    click: !("yes" !== i.play_on_click),
                    scrollwheel: !("yes" !== i.play_on_scroll),
                    touch: !0,
                    nav: !("true" !== i.pagination_position) || !!i.pagination_position && i.pagination_position,
                    spacing: i.spacing,
                    buttons: "custom",
                    buttonPrev: i.button_prev,
                    buttonNext: i.button_next
                });
                var a = e.find(".wpr-flip-carousel").find(".flipster__nav__item").find(".flipster__nav__link");
                a.each(function() {
                    t(this).text(parseInt(t(this).text()) + 1)
                })
            },
            widgetFeatureList: function(e) {
                e.find(".wpr-feature-list-item:not(:last-of-type)").find(".wpr-feature-list-icon-wrap").each(function(i) {
                    var a = e.find(".wpr-feature-list-item").eq(i + 1).find(".wpr-feature-list-icon-wrap").offset().top;
                    t(this).find(".wpr-feature-list-line").height(a - t(this).offset().top + "px")
                }), t(window).resize(function() {
                    e.find(".wpr-feature-list-item:not(:last-of-type)").find(".wpr-feature-list-icon-wrap").each(function(i) {
                        var a = e.find(".wpr-feature-list-item").eq(i + 1).find(".wpr-feature-list-icon-wrap").offset().top;
                        t(this).find(".wpr-feature-list-line").height(a - t(this).offset().top + "px")
                    })
                })
            },
            widgetAdvancedAccordion: function(e) {
                var i = e.find(".wpr-acc-button"),
                    a = e.find(".wpr-accordion-item-wrap"),
                    r = e.find(".wpr-advanced-accordion").data("accordion-type"),
                    s = +e.find(".wpr-advanced-accordion").data("active-index") - 1,
                    n = e.find(".wpr-advanced-accordion").data("accordion-trigger"),
                    o = 1e3 * +e.find(".wpr-advanced-accordion").data("interaction-speed"),
                    d = window.location.href.indexOf("active_panel="); - 1 < d && (s = +window.location.href.substring(d, window.location.href.lastIndexOf("#")).replace("active_panel=", "") - 1), "click" === n ? ("accordion" == r ? i.on("click", function() {
                    var a = i.index(this);
                    i.each(function(e) {
                        e == a ? "" : t(this).removeClass("wpr-acc-active")
                    }), e.find(".wpr-acc-panel").each(function(e) {
                        e == a ? "" : t(this).removeClass("wpr-acc-panel-active") && t(this).slideUp(o)
                    }), t(this).toggleClass("wpr-acc-active");
                    var r = t(this).next();
                    r.hasClass("wpr-acc-panel-active") ? (r.slideUp(o), r.removeClass("wpr-acc-panel-active")) : (r.slideDown(o), r.addClass("wpr-acc-panel-active"))
                }) : i.each(function() {
                    t(this).on("click", function() {
                        t(this).toggleClass("wpr-acc-active");
                        var e = t(this).next();
                        e.hasClass("wpr-acc-panel-active") ? (e.slideUp(o), e.removeClass("wpr-acc-panel-active")) : (e.slideDown(o), e.addClass("wpr-acc-panel-active"))
                    })
                }), i && -1 < s && i.eq(s).trigger("click")) : "hover" == n && (a.on("mouseenter", function() {
                    var e = a.index(this);
                    t(this).find(".wpr-acc-button").addClass("wpr-acc-active");
                    var i = t(this).find(".wpr-acc-panel");
                    i.slideDown(o), i.addClass("wpr-acc-panel-active"), a.each(function(i) {
                        if (i != e) {
                            t(this).find(".wpr-acc-button").removeClass("wpr-acc-active");
                            var a = t(this).find(".wpr-acc-panel");
                            a.slideUp(o), a.removeClass("wpr-acc-panel-active")
                        }
                    })
                }), a && -1 < s && a.eq(s).trigger("mouseenter")), e.find(".wpr-acc-search-input").on({
                    focus: function() {
                        e.addClass("wpr-acc-search-input-focus")
                    },
                    blur: function() {
                        e.removeClass("wpr-search-form-input-focus")
                    }
                });
                let l = e.find(".wpr-advanced-accordion > *");
                e.find("i.fa-times").on("click", function() {
                    e.find(".wpr-acc-search-input").val(""), e.find(".wpr-acc-search-input").trigger("keyup")
                });
                var p = e.find(".wpr-acc-icon-box");
                p.each(function() {
                    t(this).find(".wpr-acc-icon-box-after").css({
                        "border-top": t(this).height() / 2 + "px solid transparent",
                        "border-bottom": t(this).height() / 2 + "px solid transparent"
                    })
                }), t(window).resize(function() {
                    p.each(function() {
                        t(this).find(".wpr-acc-icon-box-after").css({
                            "border-top": t(this).height() / 2 + "px solid transparent",
                            "border-bottom": t(this).height() / 2 + "px solid transparent"
                        })
                    })
                }), e.find(".wpr-acc-search-input").on("keyup", function() {
                    setTimeout(() => {
                        let i = t(this).val();
                        0 < i.length ? (e.find(".wpr-acc-search-input-wrap").find("i.fa-times").css("display", "inline-block"), l.each(function() {
                            if (t(this).hasClass("wpr-accordion-item-wrap")) {
                                var e = t(this); - 1 == e.text().toUpperCase().indexOf(i.toUpperCase()) ? (e.hide(), e.find(".wpr-acc-button").hasClass("wpr-acc-active") && e.find(".wpr-acc-panel").hasClass("wpr-acc-panel-active") && (e.find(".wpr-acc-button").removeClass("wpr-acc-active"), e.find(".wpr-acc-panel").removeClass("wpr-acc-panel-active"))) : (e.show(), !e.find(".wpr-acc-button").hasClass("wpr-acc-active") && !e.find(".wpr-acc-panel").hasClass("wpr-acc-panel-active") && (e.find(".wpr-acc-button").addClass("wpr-acc-active"), e.find(".wpr-acc-panel").addClass("wpr-acc-panel-active"), e.find(".wpr-acc-panel").slideDown(o)))
                            }
                        })) : (e.find(".wpr-acc-search-input-wrap").find("i.fa-times").css("display", "none"), l.each(function() {
                            t(this).hasClass("wpr-accordion-item-wrap") && (t(this).show(), t(this).find(".wpr-acc-panel").hasClass("wpr-acc-panel-active") && t(this).find(".wpr-acc-panel").removeClass("wpr-acc-panel-active"), t(this).find(".wpr-acc-button").hasClass("wpr-acc-active") && t(this).find(".wpr-acc-button").removeClass("wpr-acc-active"), t(this).find(".wpr-acc-panel").slideUp(o))
                        }))
                    }, 1e3)
                })
            },
            widgetImageAccordion: function(i) {
                var a = JSON.parse(i.find(".wpr-img-accordion-media-hover").attr("data-settings")),
                    r = i.find(".wpr-image-accordion"),
                    s = i.find(".wpr-image-accordion").attr("lightbox") ? JSON.parse(i.find(".wpr-image-accordion").attr("lightbox")) : "",
                    n = !1;
                if (i.find(".wpr-image-accordion-wrap").hasClass("wpr-acc-no-column")) {
                    if (!i.hasClass("wpr-image-accordion-row"));
                    i.removeClass("wpr-image-accordion-column").addClass("wpr-image-accordion-row"), i.find(".wpr-image-accordion").css("flex-direction", "row")
                }
                "" !== s && (r.lightGallery(s), r.on("onAfterOpen.lg", function() {
                    t(".lg-outer").find(".lg-thumb-item").length && t(".lg-outer").find(".lg-thumb-item").each(function() {
                        var e = t(this).find("img").attr("src"),
                            i = e,
                            a = e.lastIndexOf("."),
                            r = e.slice(a),
                            s = e.lastIndexOf("-"),
                            n = !!/\d{3,}x\d{3,}/.test(e.substring(a, s)) && e.substring(a, s);
                        42 <= e.substring(a, s).length && (n = ""), "" !== n && (!1 === n ? i = [e.slice(0, a), "-150x150", e.slice(a)].join("") : i = e.replace(n, "-150x150")), t(this).find("img").attr("src", i), (!1 == n || "-450x450" === n) && t(this).find("img").attr("src", e)
                    })
                }), i.find(".wpr-image-accordion").on("onAferAppendSlide.lg, onAfterSlide.lg", function() {
                    var e = t("#lg-actual-size, #lg-zoom-in, #lg-zoom-out, #lg-download"),
                        i = t("#lg-download").attr("href");
                    t("#lg-download").length && (-1 === i.indexOf("wp-content") ? e.addClass("wpr-hidden-element") : e.removeClass("wpr-hidden-element")), "" === s.autoplay && t(".lg-autoplay-button").css({
                        width: "0",
                        height: "0",
                        overflow: "hidden"
                    })
                })), r.css("cursor", "pointer");
                var o = i.find(".wpr-image-accordion-item");
                "hover" === a.activeItem.interaction ? (function() {
                    e.editorCheck() || i.find(".wpr-img-accordion-media-hover").on("click", function(e) {
                        var i = e.target.className.includes("wpr-img-accordion-media-hover") ? JSON.parse(t(this).attr("data-settings")) : JSON.parse(t(this).closest(".wpr-img-accordion-media-hover").attr("data-settings"));
                        if (!t(e.target).hasClass("wpr-img-accordion-item-lightbox") && 0 === t(e.target).closest(".wpr-img-accordion-item-lightbox").length) {
                            var a = i.activeItem.overlayLink;
                            "" != a && ("_blank" === i.activeItem.overlayLinkTarget ? window.open(a, "_blank").focus() : window.location.href = a)
                        }
                    })
                }(), o.on("mouseenter", function() {
                    o.removeClass("wpr-image-accordion-item-grow"), o.find(".wpr-animation-wrap").removeClass("wpr-animation-wrap-active"), t(this).addClass("wpr-image-accordion-item-grow"), t(this).find(".wpr-animation-wrap").addClass("wpr-animation-wrap-active")
                }), o.on("mouseleave", function() {
                    t(this).removeClass("wpr-image-accordion-item-grow"), t(this).find(".wpr-animation-wrap").removeClass("wpr-animation-wrap-active")
                })) : "click" === a.activeItem.interaction ? (i.find(".wpr-img-accordion-media-hover").removeClass("wpr-animation-wrap"), o.on("click", ".wpr-img-accordion-media-hover", function(a) {
                    if (n = a.target.className.includes("wpr-img-accordion-media-hover") ? a.target.className.includes("wpr-animation-wrap-active") : t(this).closest(".wpr-img-accordion-media-hover").hasClass("wpr-animation-wrap-active"), n && !e.editorCheck()) {
                        var r = a.target.className.includes("wpr-img-accordion-media-hover") ? JSON.parse(t(this).attr("data-settings")) : JSON.parse(t(this).closest(".wpr-img-accordion-media-hover").attr("data-settings"));
                        if (!t(a.target).hasClass("wpr-img-accordion-item-lightbox") && 0 === t(a.target).closest(".wpr-img-accordion-item-lightbox").length) {
                            var s = r.activeItem.overlayLink;
                            "" != s && ("_blank" === r.activeItem.overlayLinkTarget ? window.open(s, "_blank").focus() : window.location.href = s)
                        }
                    } else i.find(".wpr-img-accordion-media-hover").removeClass("wpr-animation-wrap").removeClass("wpr-animation-wrap-active"), o.removeClass("wpr-image-accordion-item-grow"), t(this).closest(".wpr-image-accordion-item").addClass("wpr-image-accordion-item-grow"), t(this).closest(".wpr-img-accordion-media-hover").addClass("wpr-animation-wrap-active")
                })) : i.find(".wpr-img-accordion-media-hover").removeClass("wpr-animation-wrap"), o.each(function() {
                    t(this).index() === a.activeItem.defaultActive - 1 && ("click" === a.activeItem.interaction ? setTimeout(() => {
                        t(this).find(".wpr-img-accordion-media-hover").trigger("click")
                    }, 400) : setTimeout(() => {
                        t(this).find(".wpr-img-accordion-media-hover").trigger("mouseenter")
                    }, 400))
                }), i.find(".wpr-image-accordion-wrap").css("opacity", 1)
            },
            widgetOffcanvas: function(i) {
                function a(e) {
                    i.hasClass("wpr-offcanvas-entrance-type-push") || i.find(".wpr-offcanvas-content").hasClass("wpr-offcanvas-content-relative") || t("body").addClass("wpr-offcanvas-body-overflow"), s = 1e3 * +e.find(".wpr-offcanvas-content").css("animation-duration").replace("s", ""), e.fadeIn(s), e.addClass("wpr-offcanvas-wrap-active"), i.hasClass("wpr-offcanvas-entrance-animation-slide") ? e.find(".wpr-offcanvas-content").hasClass("wpr-offcanvas-slide-in") ? e.find(".wpr-offcanvas-content").removeClass("wpr-offcanvas-slide-in").addClass("wpr-offcanvas-slide-out") : e.find(".wpr-offcanvas-content").removeClass("wpr-offcanvas-slide-out").addClass("wpr-offcanvas-slide-in") : i.hasClass("wpr-offcanvas-entrance-animation-grow") ? e.find(".wpr-offcanvas-content").hasClass("wpr-offcanvas-grow-in") ? e.find(".wpr-offcanvas-content").removeClass("wpr-offcanvas-grow-in").addClass("wpr-offcanvas-grow-out") : e.find(".wpr-offcanvas-content").removeClass("wpr-offcanvas-grow-out").addClass("wpr-offcanvas-grow-in") : i.hasClass("wpr-offcanvas-entrance-animation-fade") && (e.find(".wpr-offcanvas-content").hasClass("wpr-offcanvas-fade-in") ? e.find(".wpr-offcanvas-content").removeClass("wpr-offcanvas-fade-in").addClass("wpr-offcanvas-fade-out") : e.find(".wpr-offcanvas-content").removeClass("wpr-offcanvas-fade-out").addClass("wpr-offcanvas-fade-in")), t(window).trigger("resize")
                }

                function r(e) {
                    i.hasClass("wpr-offcanvas-entrance-type-push") || i.find(".wpr-offcanvas-content").hasClass("wpr-offcanvas-content-relative") || t("body").removeClass("wpr-offcanvas-body-overflow"), i.hasClass("wpr-offcanvas-entrance-animation-slide") ? e.find(".wpr-offcanvas-content").removeClass("wpr-offcanvas-slide-in").addClass("wpr-offcanvas-slide-out") : i.hasClass("wpr-offcanvas-entrance-animation-grow") ? e.find(".wpr-offcanvas-content").removeClass("wpr-offcanvas-grow-in").addClass("wpr-offcanvas-grow-out") : i.hasClass("wpr-offcanvas-entrance-animation-fade") && e.find(".wpr-offcanvas-content").removeClass("wpr-offcanvas-fade-in").addClass("wpr-offcanvas-fade-out"), e.fadeOut(s), e.removeClass("wpr-offcanvas-wrap-active")
                }
                let s;
                if (i.hasClass("wpr-offcanvas-entrance-animation-pro-sl") ? i.removeClass("wpr-offcanvas-entrance-animation-pro-sl").addClass("wpr-offcanvas-entrance-animation-fade") : i.hasClass("wpr-offcanvas-entrance-animation-pro-gr") && i.removeClass("wpr-offcanvas-entrance-animation-pro-gr").addClass("wpr-offcanvas-entrance-animation-fade"), i.hasClass("wpr-offcanvas-entrance-type-pro-ps") && i.removeClass("wpr-offcanvas-entrance-type-pro-ps").addClass("wpr-offcanvas-entrance-type-cover"), i.hasClass("wpr-offcanvas-entrance-type-push")) {
                    function e() {
                        if (1 > t(".wpr-offcanvas-body-inner-wrap-" + i.data("id")).length) {
                            var e = t(".wpr-offcanvas-wrap-" + i.data("id")).clone();
                            t(".wpr-offcanvas-wrap-" + i.data("id")).remove(), 0 < t(".wpr-offcanvas-body-inner-wrap-" + i.data("id")).length || t("body").wrapInner("<div class=\"wpr-offcanvas-body-inner-wrap-" + i.data("id") + "\" />"), n = t(".wpr-offcanvas-body-inner-wrap-" + i.data("id")), n.css("position", "relative"), 0 < n.prev(".wpr-offcanvas-wrap").length || (console.log(e), document.querySelector("body").insertBefore(e[0], document.querySelector(".wpr-offcanvas-body-inner-wrap-" + i.data("id")))), o = t(".wpr-offcanvas-wrap-" + i.data("id"))
                        }
                        a(o), t("body").addClass("wpr-offcanvas-body-overflow"), o.find(".wpr-offcanvas-content").hasClass("wpr-offcanvas-content-left") ? n.css({
                            "transition-duration": o.find(".wpr-offcanvas-content").css("animation-duration"),
                            transform: "translateX(" + o.find(".wpr-offcanvas-content").outerWidth() + "px)"
                        }) : o.find(".wpr-offcanvas-content").hasClass("wpr-offcanvas-content-right") ? n.css({
                            "transition-duration": o.find(".wpr-offcanvas-content").css("animation-duration"),
                            transform: "translateX(-" + o.find(".wpr-offcanvas-content").outerWidth() + "px)"
                        }) : o.find(".wpr-offcanvas-content").hasClass("wpr-offcanvas-content-top") && n.css({
                            "transition-duration": o.find(".wpr-offcanvas-content").css("animation-duration"),
                            "margin-top": o.find(".wpr-offcanvas-content").outerHeight() + "px"
                        })
                    }

                    function s() {
                        n || o || (n = t(".wpr-offcanvas-body-inner-wrap-" + i.data("id")), o = t(".wpr-offcanvas-wrap-" + i.data("id"))), r(o), o.find(".wpr-offcanvas-content").hasClass("wpr-offcanvas-content-left") ? n.css({
                            transform: "translateX(0px)"
                        }) : o.find(".wpr-offcanvas-content").hasClass("wpr-offcanvas-content-right") ? n.css({
                            transform: "translateX(0px)"
                        }) : o.find(".wpr-offcanvas-content").hasClass("wpr-offcanvas-content-top") && n.css({
                            "margin-top": 0
                        }), t("body").removeClass("wpr-offcanvas-body-overflow"), setTimeout(function() {
                            var e = t(".wpr-offcanvas-body-inner-wrap-" + i.data("id")).contents();
                            t(".wpr-offcanvas-body-inner-wrap-" + i.data("id")).replaceWith(e)
                        }, 1e3)
                    }

                    function l() {
                        o.on("click", function(t) {
                            t.target.classList.value.includes("wpr-offcanvas-content") || t.target.closest(".wpr-offcanvas-content") || s()
                        }), t(document).on("keyup", function(e) {
                            "Escape" == e.key && s()
                        }), o.find(".wpr-close-offcanvas").on("click", function() {
                            s()
                        })
                    }
                    0 < t(".wpr-offcanvas-body-inner-wrap-" + i.data("id")).length || t("body").wrapInner("<div class=\"wpr-offcanvas-body-inner-wrap-" + i.data("id") + "\" />");
                    var n = t(".wpr-offcanvas-body-inner-wrap-" + i.data("id"));
                    n.css("position", "relative"), 0 < n.prev(".wpr-offcanvas-wrap").length || (i.find(".wpr-offcanvas-wrap").addClass("wpr-offcanvas-wrap-" + i.data("id")), document.querySelector("body").insertBefore(i.find(".wpr-offcanvas-wrap")[0], document.querySelector(".wpr-offcanvas-body-inner-wrap-" + i.data("id"))));
                    var o = t(".wpr-offcanvas-wrap-" + i.data("id"));
                    i.find(".wpr-offcanvas-trigger").on("click", function() {
                        0 < t(".wpr-offcanvas-wrap-" + i.data("id")).length && 0 < i.find(".wpr-offcanvas-wrap").length && (t(".wpr-offcanvas-wrap-" + i.data("id")).remove(), i.find(".wpr-offcanvas-wrap").addClass("wpr-offcanvas-wrap-" + i.data("id")), document.querySelector("body").insertBefore(i.find(".wpr-offcanvas-wrap")[0], document.querySelector(".wpr-offcanvas-body-inner-wrap-" + i.data("id"))), o = t(".wpr-offcanvas-wrap-" + i.data("id"))), o.hasClass("wpr-offcanvas-wrap-active") ? s() : e()
                    }), "yes" === i.find(".wpr-offcanvas-container").data("offcanvas-open") && i.find(".wpr-offcanvas-trigger").trigger("click"), l(), t("body").on("click", function() {
                        l()
                    });
                    var d = new MutationObserver(function() {
                        l()
                    });
                    d.observe(i[0], {
                        childList: !0,
                        subtree: !0
                    })
                } else i.find(".wpr-offcanvas-trigger").on("click", function() {
                    i.find(".wpr-offcanvas-wrap").hasClass("wpr-offcanvas-wrap-active") ? i.find(".wpr-offcanvas-wrap").hasClass("wpr-offcanvas-wrap-active") && i.find(".wpr-offcanvas-wrap").hasClass("wpr-offcanvas-wrap-relative") && r(i.find(".wpr-offcanvas-wrap")) : a(i.find(".wpr-offcanvas-wrap"))
                }), i.find(".wpr-offcanvas-wrap").on("click", function(t) {
                    t.target.classList.value.includes("wpr-offcanvas-content") || t.target.closest(".wpr-offcanvas-content") || r(i.find(".wpr-offcanvas-wrap"))
                }), "yes" === i.find(".wpr-offcanvas-container").data("offcanvas-open") && i.find(".wpr-offcanvas-trigger").trigger("click"), t(document).on("keyup", function(e) {
                    "Escape" == e.key && r(i.find(".wpr-offcanvas-wrap"))
                }), i.find(".wpr-close-offcanvas").on("click", function() {
                    r(i.find(".wpr-offcanvas-wrap"))
                })
            },
            widgetWishlist: function(i) {
                t.ajax({
                    url: WprConfig.ajaxurl,
                    type: "POST",
                    data: {
                        action: "count_wishlist_items",
                        element_addcart_simple_txt: i.find(".wpr-wishlist-products").attr("element_addcart_simple_txt"),
                        element_addcart_grouped_txt: i.find(".wpr-wishlist-products").attr("element_addcart_grouped_txt"),
                        element_addcart_variable_txt: i.find(".wpr-wishlist-products").attr("element_addcart_variable_txt")
                    },
                    success: function(e) {
                        var a = i.find(".wpr-wishlist-product"),
                            r = a.map(function() {
                                return t(this).data("product-id")
                            }).get(),
                            s = e.wishlist_items.filter(function(e) {
                                return !r.includes(e.product_id)
                            }),
                            n = e.wishlist_items.map(function(e) {
                                return e.product_id
                            });
                        a.each(function() {
                            var e = t(this).data("product-id");
                            n.includes(e) || t(this).remove()
                        }), s.forEach(function(e) {
                            var t = "<tr class=\"wpr-wishlist-product\" data-product-id=\"" + e.product_id + "\">";
                            t += "<td><span class=\"wpr-wishlist-remove\" data-product-id=\"" + e.product_id + "\"></span></td>", t += "<td><a class=\"wpr-wishlist-img-wrap\" href=\"" + e.product_url + "\">" + e.product_image + "</a></td>", t += "<td><a class=\"wpr-wishlist-product-name\" href=\"" + e.product_url + "\">" + e.product_title + "</a></td>", t += "<td><div class=\"wpr-wishlist-product-price\">" + e.product_price + "</div></td>", t += "<td><div class=\"wpr-wishlist-product-status\">" + e.product_stock + "</div></td>", t += "<td><div class=\"wpr-wishlist-product-atc\">" + e.product_atc + "</div></td>", t += "</tr>", i.find(".wpr-wishlist-products tbody").append(t)
                        }), 0 < +e.wishlist_count ? (i.find(".wpr-wishlist-products").hasClass("wpr-wishlist-empty-hidden") && i.find(".wpr-wishlist-products").removeClass("wpr-wishlist-empty-hidden"), !i.find(".wpr-wishlist-empty").hasClass("wpr-wishlist-empty-hidden") && i.find(".wpr-wishlist-empty").addClass("wpr-wishlist-empty-hidden")) : (!i.find(".wpr-wishlist-products").hasClass("wpr-wishlist-empty-hidden") && i.find(".wpr-wishlist-products").addClass("wpr-wishlist-empty-hidden"), i.find(".wpr-wishlist-empty").hasClass("wpr-wishlist-empty-hidden") && i.find(".wpr-wishlist-empty").removeClass("wpr-wishlist-empty-hidden"))
                    },
                    error: function(e) {
                        console.log(e)
                    }
                }), i.on("click", ".wpr-wishlist-remove", function(a) {
                    a.preventDefault();
                    var r = t(this).data("product-id");
                    t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "remove_from_wishlist",
                            nonce: WprConfig.nonce,
                            product_id: r
                        },
                        success: function() {
                            1 === i.find(".wpr-wishlist-product").length && (!i.find(".wpr-wishlist-products").hasClass("wpr-wishlist-empty-hidden") && i.find(".wpr-wishlist-products").addClass("wpr-wishlist-empty-hidden"), i.find(".wpr-wishlist-empty").hasClass("wpr-wishlist-empty-hidden") && i.find(".wpr-wishlist-empty").removeClass("wpr-wishlist-empty-hidden")), i.find(".wpr-wishlist-product[data-product-id=\"" + r + "\"]").remove(), e.changeActionTargetProductId(r), t(document).trigger("removed_from_wishlist")
                        },
                        error: function(e) {
                            console.log(e)
                        }
                    })
                }), t("body").on("added_to_cart", function(e, t, i, a) {
                    a.next().fadeTo(700, 1), a.css("display", "none")
                })
            },
            widgetWishlistButton: function(a) {
                t.ajax({
                    url: WprConfig.ajaxurl,
                    type: "POST",
                    data: {
                        action: "check_product_in_wishlist",
                        product_id: a.find(".wpr-wishlist-add").data("product-id")
                    },
                    success: function(e) {
                        !0 == e && (!a.find(".wpr-wishlist-add").hasClass("wpr-button-hidden") && a.find(".wpr-wishlist-add").addClass("wpr-button-hidden"), a.find(".wpr-wishlist-remove").hasClass("wpr-button-hidden") && a.find(".wpr-wishlist-remove").removeClass("wpr-button-hidden"))
                    }
                }), a.find(".wpr-wishlist-add").click(function(i) {
                    i.preventDefault();
                    var r = t(this).data("product-id");
                    t(this).fadeTo(500, 0), t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "add_to_wishlist",
                            nonce: WprConfig.nonce,
                            product_id: r
                        },
                        success: function() {
                            a.find(".wpr-wishlist-add[data-product-id=\"" + r + "\"]").hide(), a.find(".wpr-wishlist-remove[data-product-id=\"" + r + "\"]").show(), a.find(".wpr-wishlist-remove[data-product-id=\"" + r + "\"]").fadeTo(500, 1), e.changeActionTargetProductId(r), t(document).trigger("added_to_wishlist")
                        },
                        error: function(e) {
                            var t = e.responseJSON.message;
                            alert(t)
                        }
                    })
                }), a.find(".wpr-wishlist-remove").on("click", function(i) {
                    i.preventDefault();
                    var r = t(this).data("product-id");
                    t(this).fadeTo(500, 0), t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "remove_from_wishlist",
                            nonce: WprConfig.nonce,
                            product_id: r
                        },
                        success: function() {
                            a.find(".wpr-wishlist-remove[data-product-id=\"" + r + "\"]").hide(), a.find(".wpr-wishlist-add[data-product-id=\"" + r + "\"]").show(), a.find(".wpr-wishlist-add[data-product-id=\"" + r + "\"]").fadeTo(500, 1), e.changeActionTargetProductId(r), t(document).trigger("removed_from_wishlist")
                        }
                    })
                }), t(document).on("removed_from_wishlist", function() {
                    a.find(".wpr-wishlist-remove[data-product-id=\"" + i + "\"]").hide(), a.find(".wpr-wishlist-add[data-product-id=\"" + i + "\"]").show(), a.find(".wpr-wishlist-add[data-product-id=\"" + i + "\"]").fadeTo(500, 1)
                })
            },
            widgetCompareButton: function(a) {
                t.ajax({
                    url: WprConfig.ajaxurl,
                    type: "POST",
                    data: {
                        action: "check_product_in_compare",
                        product_id: a.find(".wpr-compare-add").data("product-id")
                    },
                    success: function(e) {
                        !0 == e && (!a.find(".wpr-compare-add").hasClass("wpr-button-hidden") && a.find(".wpr-compare-add").addClass("wpr-button-hidden"), a.find(".wpr-compare-remove").hasClass("wpr-button-hidden") && a.find(".wpr-compare-remove").removeClass("wpr-button-hidden"))
                    }
                }), a.find(".wpr-compare-add").click(function(i) {
                    i.preventDefault();
                    var r = t(this).data("product-id");
                    t(this).fadeTo(500, 0), t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "add_to_compare",
                            nonce: WprConfig.nonce,
                            product_id: r
                        },
                        success: function() {
                            a.find(".wpr-compare-add[data-product-id=\"" + r + "\"]").hide(), a.find(".wpr-compare-remove[data-product-id=\"" + r + "\"]").show(), a.find(".wpr-compare-remove[data-product-id=\"" + r + "\"]").fadeTo(500, 1), e.changeActionTargetProductId(r), t(document).trigger("added_to_compare")
                        },
                        error: function(e) {
                            var t = e.responseJSON.message;
                            alert(t)
                        }
                    })
                }), a.find(".wpr-compare-remove").click(function(i) {
                    i.preventDefault();
                    var r = t(this).data("product-id");
                    t(this).fadeTo(500, 0), t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "remove_from_compare",
                            nonce: WprConfig.nonce,
                            product_id: r
                        },
                        success: function() {
                            a.find(".wpr-compare-remove[data-product-id=\"" + r + "\"]").hide(), a.find(".wpr-compare-add[data-product-id=\"" + r + "\"]").show(), a.find(".wpr-compare-add[data-product-id=\"" + r + "\"]").fadeTo(500, 1), e.changeActionTargetProductId(r), t(document).trigger("removed_from_compare")
                        }
                    })
                }), t(document).on("removed_from_compare", function() {
                    a.find(".wpr-compare-remove[data-product-id=\"" + i + "\"]").hide(), a.find(".wpr-compare-add[data-product-id=\"" + i + "\"]").show(), a.find(".wpr-compare-add[data-product-id=\"" + i + "\"]").fadeTo(500, 1)
                })
            },
            widgetMiniCompare: function(a) {
                0 < a.find(".wpr-compare-count").length && 0 == a.find(".wpr-compare-count").text() || a.find(".wpr-compare-count").css("display", "inline-flex"), a.hasClass("wpr-compare-style-popup") && (a.find(".wpr-compare-toggle-btn").on("click", function(i) {
                    i.preventDefault(), t("body").addClass("wpr-body-overflow-hidden"), a.find(".wpr-compare-bg").removeClass("wpr-compare-popup-hidden"), a.find(".wpr-compare-popup").removeClass("wpr-compare-fade-out").addClass("wpr-compare-fade-in"), a.find(".wpr-compare-bg").removeClass("wpr-compare-fade-out").addClass("wpr-compare-fade-in"), a.find(".wpr-compare-popup-inner-wrap").html("<div class=\"wpr-compare-loader-wrap\"><div class=\"wpr-double-bounce\"><div class=\"wpr-child wpr-double-bounce1\"></div><div class=\"wpr-child wpr-double-bounce2\"></div></div></div>"), t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "wpr_get_page_content",
                            nonce: WprConfig.nonce,
                            wpr_compare_page_id: WprConfig.comparePageID
                        },
                        success: function(i) {
                            a.find(".wpr-compare-popup-inner-wrap").html(i.data.content), e.widgetCompare(a), a.find(".wpr-compare-remove").click(function(i) {
                                i.preventDefault();
                                var r = t(this).data("product-id");
                                t.ajax({
                                    url: WprConfig.ajaxurl,
                                    type: "POST",
                                    data: {
                                        action: "remove_from_compare",
                                        nonce: WprConfig.nonce,
                                        product_id: r
                                    },
                                    success: function() {
                                        e.changeActionTargetProductId(r), a.find("[data-product-id=\"" + r + "\"]").remove(), 0 < a.find(".wpr-compare-popup-inner-wrap").find(".wpr-compare-remove").length ? (a.find(".wpr-compare-empty").addClass("wpr-hidden-element"), a.find(".wpr-compare-products").removeClass("wpr-hidden-element")) : (a.find(".wpr-compare-products").addClass("wpr-hidden-element"), a.find(".wpr-compare-empty").removeClass("wpr-hidden-element")), t(document).trigger("removed_from_compare")
                                    }
                                })
                            })
                        },
                        error: function(e) {
                            console.log(e.responseText)
                        }
                    })
                }), a.find(".wpr-close-compare").click(function() {
                    a.find(".wpr-compare-popup").removeClass("wpr-compare-fade-in").addClass("wpr-compare-fade-out"), a.find(".wpr-compare-bg").removeClass("wpr-compare-fade-in").addClass("wpr-compare-fade-out"), setTimeout(function() {
                        a.find(".wpr-compare-bg").addClass("wpr-compare-popup-hidden"), t("body").removeClass("wpr-body-overflow-hidden")
                    }, 600)
                }), a.find(".wpr-compare-bg").click(function(i) {
                    if (!i.target.classList.value.includes("wpr-compare-popup") && !i.target.closest(".wpr-compare-popup")) {
                        var e = t(this);
                        a.find(".wpr-compare-popup").removeClass("wpr-compare-fade-in").addClass("wpr-compare-fade-out"), a.find(".wpr-compare-bg").removeClass("wpr-compare-fade-in").addClass("wpr-compare-fade-out"), setTimeout(function() {
                            e.addClass("wpr-compare-popup-hidden"), t("body").removeClass("wpr-body-overflow-hidden")
                        }, 600)
                    }
                })), t.ajax({
                    url: WprConfig.ajaxurl,
                    type: "POST",
                    data: {
                        action: "count_compare_items"
                    },
                    success: function(e) {
                        "none" == a.find(".wpr-compare-count").css("display") && 0 < e.compare_count ? (a.find(".wpr-compare-count").text(e.compare_count), a.find(".wpr-compare-count").css("display", "inline-flex")) : 0 == e.compare_count ? (a.find(".wpr-compare-count").css("display", "none"), a.find(".wpr-compare-count").text(e.compare_count)) : a.find(".wpr-compare-count").text(e.compare_count)
                    },
                    error: function(e) {
                        console.log(e)
                    }
                }), t(document).on("removed_from_compare", function() {
                    t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "update_mini_compare",
                            product_id: i
                        },
                        success: function(e) {
                            a.find(".wpr-compare-count").text(e.compare_count), 0 == e.compare_count ? a.find(".wpr-compare-count").css("display", "none") : a.find(".wpr-compare-count").css("display", "inline-flex")
                        }
                    })
                }), t(document).on("added_to_compare", function() {
                    t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "update_mini_compare",
                            product_id: i
                        },
                        success: function(e) {
                            a.find(".wpr-compare-count").text(e.compare_count), a.find(".wpr-compare-count").css("display", "inline-flex")
                        }
                    })
                })
            },
            widgetCompare: function(i) {
                t.ajax({
                    url: WprConfig.ajaxurl,
                    type: "POST",
                    data: {
                        action: "count_compare_items",
                        remove_text: i.find(".wpr-compare-table-wrap").attr("remove_from_compare_text"),
                        compare_empty_text: i.find(".wpr-compare-table-wrap").attr("compare_empty_text"),
                        element_addcart_simple_txt: i.find(".wpr-compare-table-wrap").attr("element_addcart_simple_txt"),
                        element_addcart_grouped_txt: i.find(".wpr-compare-table-wrap").attr("element_addcart_grouped_txt"),
                        element_addcart_variable_txt: i.find(".wpr-compare-table-wrap").attr("element_addcart_variable_txt")
                    },
                    success: function(e) {
                        i.find(".wpr-compare-table-wrap").html(e.compare_table)
                    },
                    error: function(e) {
                        console.log(e)
                    }
                }), i.on("click", ".wpr-compare-remove", function(a) {
                    a.preventDefault();
                    var r = t(this).data("product-id");
                    t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "remove_from_compare",
                            nonce: WprConfig.nonce,
                            product_id: r
                        },
                        success: function() {
                            e.changeActionTargetProductId(r), i.find("[data-product-id=\"" + r + "\"]").remove(), 0 < i.find(".wpr-compare-remove").length ? (i.find(".wpr-compare-empty").addClass("wpr-hidden-element"), i.find(".wpr-compare-products").removeClass("wpr-hidden-element")) : (i.find(".wpr-compare-products").addClass("wpr-hidden-element"), i.find(".wpr-compare-empty").removeClass("wpr-hidden-element")), t(document).trigger("removed_from_compare")
                        }
                    })
                }), t("body").on("added_to_cart", function(e, t, i, a) {
                    a.next().fadeTo(700, 1), a.css("display", "none")
                })
            },
            widgetFormBuilder: function(i) {
                function a() {
                    i.find(".wpr-form-field, .wpr-form-field-type-radio, .wpr-form-field-type-checkbox, .wpr-step-input").each(function() {
                        var e = "";
                        if (e = t(this).prev("label") ? t(this).prev("label").text().trim() : "", "textarea" === t(this).prop("tagName").toLowerCase()) c[t(this).attr("id").replace("-", "_")] = [t(this).prop("tagName").toLowerCase(), t(this).val(), e];
                        else if (t(this).hasClass("wpr-select-wrap")) {
                            var i = t(this).find("select").val();
                            i = Array.isArray(t(this).find("select").val()) ? t(this).find("select").val().join(", ") : t(this).find("select").val(), c[t(this).find("select").attr("id").replace("-", "_")] = ["select", i, e]
                        } else if (t(this).hasClass("wpr-form-field-type-radio") || t(this).hasClass("wpr-form-field-type-checkbox")) {
                            var a = [],
                                r = t(this).find("input"),
                                s;
                            r.each(function() {
                                a.push([t(this).val(), t(this).is(":checked"), t(this).attr("name"), t(this).attr("id")])
                            }), s = t(this).hasClass("wpr-form-field-type-radio") ? "radio" : "checkbox";
                            var n = t(this).find(".wpr-form-field-label").text().trim();
                            0 < r.length && (c[t(this).find(".wpr-form-field-option").data("key").replace("-", "_")] = [s, a, n])
                        } else c[t(this).attr("id").replace("-", "_")] = t(this).hasClass("wpr-step-input") ? [t(this).attr("type"), "", t(this).val(), e] : "file" == t(this).attr("type") ? [t(this).attr("type"), f[t(this).attr("id")], e] : [t(this).attr("type"), t(this).val(), e]
                    })
                }

                function r(e, a, r) {
                    var s = e.attr("id");
                    0 < e.closest(".wpr-field-group").find(".wpr-submit-error").length && e.closest(".wpr-field-group").find(".wpr-submit-error").remove();
                    var n = e.data("maxfs") ? e.data("maxfs") : 0,
                        o = e.data("allft") ? e.data("allft") : 0;
                    let d = [];
                    for (let c = 0; c < a.length; c++) {
                        var l = a[c],
                            p = new FormData;
                        p.append("action", "wpr_addons_upload_file"), p.append("uploaded_file", l), p.append("max_file_size", n), p.append("allowed_file_types", o), p.append("triggering_event", r), p.append("wpr_addons_nonce", WprConfig.nonce), "click" != r || f[s] || (f[s] = []), d.push(new Promise((i, a) => {
                            t.ajax({
                                url: WprConfig.ajaxurl,
                                type: "POST",
                                data: p,
                                processData: !1,
                                contentType: !1,
                                success: function(t) {
                                    if (t.success) console.log(t), "click" == r && (f[s][c] = t.data.url), i(t);
                                    else {
                                        if (console.error("Error:", t), t.data) {
                                            if ("filesize" === t.data.cause) {
                                                let i = e.data("maxfs-notice") ? e.data("maxfs-notice") : t.data.message;
                                                e.closest(".wpr-field-group").append("<p class=\"wpr-submit-error\">" + i + "</p>")
                                            }
                                            "filetype" == t.data.cause && e.closest(".wpr-field-group").append("<p class=\"wpr-submit-error\">" + t.data.message + "</p>")
                                        }
                                        a(t)
                                    }
                                },
                                error: function(t) {
                                    if ("filesize" === t.cause) {
                                        let i = e.data("maxfs-notice") ? e.data("maxfs-notice") : t.message;
                                        e.closest(".wpr-field-group").append("<p class=\"wpr-submit-error\">" + i + "</p>")
                                    }
                                    "filetype" == t.cause && e.closest(".wpr-field-group").append("<p class=\"wpr-submit-error\">" + t.message + "</p>"), console.log(t), a(t)
                                }
                            })
                        }))
                    }
                    return Promise.all(d)
                }

                function s(e) {
                    const t = new Date(e),
                        i = (t.getMonth() + 1).toString().padStart(2, "0"),
                        a = t.getDate().toString().padStart(2, "0");
                    return `${i}/${a}`
                }

                function o(e) {
                    var t = i.find(".wpr-step-tab");
                    t.eq(e).removeClass("wpr-step-tab-hidden"), 0 === e ? i.find(".wpr-step-prev").hide() : i.find(".wpr-step-prev").show(), p(e)
                }

                function d(e) {
                    var t = i.find(".wpr-step-tab");
                    return !!(1 !== e || l()) && (t.eq(m).addClass("wpr-step-tab-hidden"), m += e, m >= t.length ? (i.find("form").submit(), !1) : void o(m))
                }

                function l() {
                    var e = !0,
                        a = i.find(".wpr-step-tab");
                    0 < a.length || (a = i.find(".wpr-form-fields-wrap"), m = 0);
                    var r = ["text", "email", "password", "file", "url", "tel", "number", "date", "datetime-local", "time", "week", "month", "color"];
                    return a.eq(m).find("input, select, textarea").each(function() {
                        const i = t(this).attr("type");
                        var s = "required" === t(this).closest(".wpr-field-group").find(".wpr-form-field").attr("required") || "required" === t(this).closest(".wpr-field-group").find(".wpr-form-field-textual").attr("required");
                        if (void 0 !== i && -1 !== t.inArray(i, r) && "" === t(this).val() && s) t(this).addClass("wpr-form-error"), e = !1;
                        else if ("radio" === i || "checkbox" === i) {
                            let r = "required" === t(this).closest(".wpr-field-group").find(".wpr-form-field-option input").attr("required");
                            r && 0 === a.eq(m).find("input[type=\"" + i + "\"]:checked").length && (t(this).addClass("wpr-form-error"), e = !1)
                        } else s && "SELECT" === this.tagName && "" === t(this).val().trim() ? (t(this).closest(".wpr-select-wrap").addClass("wpr-form-error-wrap"), t(this).addClass("wpr-form-error"), e = !1) : s && "TEXTAREA" === this.tagName && "" === t(this).val().trim() && (t(this).addClass("wpr-form-error"), e = !1)
                    }), e || a.eq(m).find(".wpr-form-error, .wpr-form-error-wrap").each(function() {
                        0 < t(this).closest(".wpr-field-group").find(".wpr-submit-error").length || ("file" == t(this).attr("type") ? t(this).closest(".wpr-field-group").append("<p class=\"wpr-submit-error\">" + WprConfig.file_empty + "</p>") : t(this).is("select") || "radio" === t(this).attr("type") || "checkbox" === t(this).attr("type") ? t(this).closest(".wpr-field-group").append("<p class=\"wpr-submit-error\">" + WprConfig.select_empty + "</p>") : t(this).closest(".wpr-field-group").append("<p class=\"wpr-submit-error\">" + WprConfig.input_empty + "</p>"))
                    }), e ? i.find(".wpr-step").eq(m).addClass("wpr-step-finish") : i.find(".wpr-step").eq(m).hasClass("wpr-step-finish") && i.find(".wpr-step").eq(m).removeClass("wpr-step-finish"), e
                }

                function p(e) {
                    var t = i.find(".wpr-step");
                    t.removeClass("wpr-step-active"), t.eq(e).addClass("wpr-step-active"), i.find(".wpr-step-active").hasClass("wpr-step-finish") && i.find(".wpr-step-active").removeClass("wpr-step-finish");
                    const a = i.find(".wpr-step-tab"),
                        r = i.find(".wpr-step-progress-fill");
                    (function() {
                        const t = a.length,
                            i = 100 * ((e + 1) / t);
                        r.css("width", i + "%"), setTimeout(function() {
                            r.text(Math.round(i) + "%")
                        }, 500)
                    })()
                }
                var c = {},
                    f = {};
                if (0 < t("body").find(".wpr-form-field-type-recaptcha-v3").length) {
                    var w = document.createElement("script");
                    w.src = "https://www.google.com/recaptcha/api.js?render=" + i.find("#g-recaptcha-response").data("site-key") + "", document.body.appendChild(w)
                }
                var m = 0;
                0 < i.find(".wpr-step-tab").length && (o(m), i.find(".wpr-step-prev").each(function() {
                    t(this).on("click", function() {
                        d(-1)
                    })
                }), i.find(".wpr-step-next").each(function() {
                    t(this).on("click", function() {
                        d(1)
                    })
                }));
                var h = i.find(".wpr-form-field-type-submit").data("actions");
                i.find("input[type=\"file\"]").on("change", function(i) {
                    var e = this.files,
                        a = t(this),
                        s = i.type;
                    r(a, e, s)
                }), i.find("input, select, textarea").each(function() {
                    t(this).on("change", function() {
                        var e = t(this);
                        if ("checkbox" == e.attr("type")) {
                            var i = e.closest(".wpr-form-field-option");
                            i.hasClass("wpr-checked") ? i.removeClass("wpr-checked") : i.addClass("wpr-checked")
                        } else if ("radio" == e.attr("type")) {
                            var a = e.attr("name"),
                                r = t("input[type=\"radio\"][name=\"" + a + "\"]");
                            r.closest(".wpr-form-field-option").removeClass("wpr-checked"), e.is(":checked") && e.closest(".wpr-form-field-option").addClass("wpr-checked")
                        }
                    }), t(this).on("input change keyup", function() {
                        0 < t(this).closest(".wpr-select-wrap").length && t(this).closest(".wpr-select-wrap").removeClass("wpr-form-error-wrap"), t(this).removeClass("wpr-form-error"), t(this).closest(".wpr-field-group").find(".wpr-submit-error").remove()
                    })
                }), i.find(".wpr-button").on("click", function(s) {
                    s.preventDefault();
                    var e = s.type;
                    c = {};
                    let n = [];
                    0 < i.find("input[type=\"file\"").length ? (i.find("input[type=\"file\"]").each(function() {
                        var i = this.files,
                            a = t(this);
                        n.push(r(a, i, e))
                    }), Promise.all(n).then(() => {
                        a(), l() && t(this).closest("form").trigger("submit")
                    }).catch(e => {
                        console.error(e)
                    })) : (a(), l() && t(this).closest("form").trigger("submit"))
                }), i.find("form").on("submit", function(a) {
                    function e(e, i, a, r) {
                        return t.ajax({
                            type: "POST",
                            url: WprConfig.ajaxurl,
                            data: {
                                action: "wpr_update_form_action_meta",
                                nonce: WprConfig.nonce,
                                post_id: e,
                                action_name: i,
                                status: a,
                                message: r
                            }
                        })
                    }

                    function r(e) {
                        return JSON.parse(JSON.stringify(e))
                    }

                    function n() {
                        var e = r(c);
                        for (let t in e)
                            if (("radio" == e[t][0] || "checkbox" == e[t][0]) && Array.isArray(e[t][1])) {
                                let i = e[t][1].filter(e => !0 === e[1]).map(e => e[0]),
                                    a = i.join(", ");
                                e[t][1] = a
                            }
                        return t.ajax({
                            type: "POST",
                            url: WprConfig.ajaxurl,
                            data: {
                                action: "wpr_form_builder_email",
                                nonce: WprConfig.nonce,
                                form_content: e,
                                wpr_form_id: i.find("input[name=\"form_id\"]").val()
                            },
                            success: function(e) {
                                console.log(e), !e.success
                            },
                            error: function() {}
                        })
                    }

                    function o() {
                        var e = r(c);
                        for (let t in e)
                            if (("radio" == e[t][0] || "checkbox" == e[t][0]) && Array.isArray(e[t][1])) {
                                let i = e[t][1].filter(e => !0 === e[1]).map(e => e[0]),
                                    a = i.join(", ");
                                e[t][1] = a
                            }
                        return t.ajax({
                            type: "POST",
                            url: WprConfig.ajaxurl,
                            data: {
                                action: "wpr_form_builder_webhook",
                                nonce: WprConfig.nonce,
                                form_content: e,
                                wpr_form_id: i.find("input[name=\"form_id\"]").val(),
                                form_name: i.find("form").attr("name")
                            },
                            success: function(e) {
                                console.log(e), !e.success
                            },
                            error: function(e) {
                                console.log(e)
                            }
                        })
                    }

                    function d() {
                        var e = {
                            action: "wpr_form_builder_submissions",
                            nonce: WprConfig.nonce,
                            form_content: c,
                            status: "publish",
                            form_name: i.find("form").attr("name"),
                            form_id: i.find("input[name=\"form_id\"]").val(),
                            form_page: i.find("form").attr("page"),
                            form_page_id: i.find("form").attr("page_id")
                        };
                        return t.ajax({
                            type: "POST",
                            url: WprConfig.ajaxurl,
                            data: e,
                            success: function(e) {
                                console.log(e)
                            },
                            error: function(e) {
                                console.log(e)
                            }
                        })
                    }

                    function l() {
                        const e = i.find(".wpr-form-field-type-submit"),
                            a = JSON.parse(e.attr("data-mailchimp-fields"));
                        let r = {};
                        return Object.keys(a).forEach(function(e) {
                            if ("group_id" == e) var t = Array.isArray(a[e]) ? a[e].join(",") : a[e];
                            else var t = i.find("#form-field-" + a[e]).val();
                            t && ("birthday_field" == e ? r[e] = s(t) : r[e] = t)
                        }), t.ajax({
                            url: WprConfig.ajaxurl,
                            method: "POST",
                            data: {
                                action: "wpr_form_builder_mailchimp",
                                nonce: WprConfig.nonce,
                                form_data: r,
                                listId: e.data("list-id")
                            },
                            beforeSend: function() {
                                e.prop("disabled", !0)
                            },
                            success: function(e) {
                                console.log(e), !e.success
                            },
                            error: function(e, t, i) {
                                console.log(i)
                            },
                            complete: function() {
                                e.prop("disabled", !1)
                            }
                        })
                    }
                    a.preventDefault();
                    let p = [];
                    i.find(".wpr-button>span").addClass("wpr-loader-hidden"), i.find(".wpr-button").find(".wpr-double-bounce").removeClass("wpr-loader-hidden"), i.find(".wpr-submit-error") && i.find(".wpr-submit-error").remove(), i.find(".wpr-submit-success") && i.find(".wpr-submit-success").remove(),
                        function(e) {
                            0 < i.find("#g-recaptcha-response").length ? grecaptcha.ready(function() {
                                grecaptcha.execute(WprConfig.site_key, {
                                    action: "submit"
                                }).then(function(a) {
                                    i.find("#g-recaptcha-response").val(a), t.ajax({
                                        type: "POST",
                                        url: WprConfig.ajaxurl,
                                        data: {
                                            action: "wpr_verify_recaptcha",
                                            "g-recaptcha-response": a
                                        },
                                        success: function(t) {
                                            t.success ? (console.log(t), e(!0)) : (console.log(t), setTimeout(function() {
                                                i.find(".wpr-button").find(".wpr-double-bounce").addClass("wpr-loader-hidden"), i.find(".wpr-button>span").removeClass("wpr-loader-hidden"), i.find("form").append("<p class=\"wpr-submit-error\">" + WprConfig.recaptcha_error + "</p>")
                                            }, 500), e(!1))
                                        },
                                        error: function(t) {
                                            console.log(t), setTimeout(function() {
                                                i.find(".wpr-button").find(".wpr-double-bounce").addClass("wpr-loader-hidden"), i.find(".wpr-button>span").removeClass("wpr-loader-hidden"), i.find("form").append("<p class=\"wpr-submit-error\">" + WprConfig.recaptcha_error + "</p>")
                                            }, 500), e(!1)
                                        }
                                    })
                                })
                            }) : e(!0)
                        }(function(a) {
                            if (a) {
                                var r = {
                                    emailPromise: n,
                                    submissionsPromise: d,
                                    mailchimpPromise: l,
                                    webhookPromise: o
                                };
                                Promise.all(h.map(e => {
                                    try {
                                        if (r[e + "Promise"]) return r[e + "Promise"]()
                                    } catch (e) {
                                        return console.error(e), Promise.reject(e)
                                    }
                                })).then(t => {
                                    console.log(t);
                                    const a = t.find(e => e && "wpr_form_builder_submissions" === e.data.action),
                                        r = a ? a.data.post_id : null;
                                    var s = h.map(i => {
                                        if ("redirect" !== i) {
                                            i = "wpr_form_builder_" + i;
                                            const a = t.find(e => e && e.data.action === i),
                                                s = a ? a.data.message : "";
                                            if (a && "success" === a.data.status) {
                                                if (p.push("success"), r) return e(r, i, "success", s);
                                            } else if (p.push("error"), r) return e(r, i, "error", s)
                                        }
                                    });
                                    return Promise.all(s).then(() => {
                                        p.includes("error") ? i.find("form").append("<p class=\"wpr-submit-error\">" + i.data("settings").error_message + "</p>") : (i.find("form").append("<p class=\"wpr-submit-success\">" + i.data("settings").success_message + "</p>"), i.find("button").attr("disabled", !0), i.find("button").css("opacity", .6))
                                    })
                                }).catch(e => {
                                    console.error(e)
                                }).then(() => {
                                    setTimeout(function() {
                                        i.find(".wpr-button").find(".wpr-double-bounce").addClass("wpr-loader-hidden"), i.find(".wpr-button>span").removeClass("wpr-loader-hidden"), setTimeout(function() {
                                            h.includes("redirect") && p.includes("success") && t(location).prop("href", i.find(".wpr-form-field-type-submit").data("redirect-url"))
                                        }, 500)
                                    }, 500)
                                }).catch(e => {
                                    console.error(e)
                                })
                            } else return !1
                        })
                })
            },
            widgetProductAddToCart: function(i) {
                var a = jQuery(".woocommerce .wpr-quantity-wrapper"),
                    r = a.find("input.qty").attr("max") ? a.find("input.qty").attr("max") : 99999999,
                    s = i.find(".wpr-product-add-to-cart").attr("layout-settings"),
                    n = i.find(".wpr-add-to-cart-icons-wrap"),
                    o = i.find(".wpr-add-to-cart-icons-wrap").length ? "first-child" : "last-child",
                    d = i.find(".wpr-add-to-cart-icons-wrap").length ? "last-child" : "first-child";
                e.editorCheck() && 0 < i.find("select").length && (i.find("select").on("change", function() {
                    i.find(".reset_variations").css("visibility", "visible")
                }), i.find(".reset_variations").on("click", function() {
                    alert("Reset is Disabled in Editor. Please Preview this Page to see it in action.")
                })), i.find("input.qty").each(function() {
                    t(this).val() || t(this).val(0)
                }), i.find(".variations").find("select").on("change", function() {
                    var e = !1;
                    i.find(".variations").find("select").each(function() {
                        "choose an option" !== t(this).find("option:selected").text().toLowerCase() && (e = !0)
                    }), !1 == e ? i.find(".reset_variations").css("display", "none") : i.find(".reset_variations").css("display", "inline-block")
                }), "default" !== s && a.find("input.qty").attr("type", "text").removeAttr("step").removeAttr("min").removeAttr("max"), a.on("click", "i:" + o, function() {
                    parseInt(jQuery(this).prev(".quantity").find("input.qty").val(), 10) < r && "both" == s ? (jQuery(this).prev(".quantity").find("input.qty").val(parseInt(jQuery(this).prev(".quantity").find("input.qty").val(), 10) + 1), jQuery("input[name=\"update_cart\"]").removeAttr("disabled")) : parseInt(jQuery(this).parent().siblings(".quantity").find("input.qty").val(), 10) < r && "both" !== s && "default" !== s && (jQuery(this).parent().siblings(".quantity").find("input.qty").val(parseInt(jQuery(this).parent().siblings(".quantity").find("input.qty").val(), 10) + 1), jQuery("input[name=\"update_cart\"]").removeAttr("disabled"))
                }), a.on("click", "i:" + d, function() {
                    0 < parseInt(jQuery(this).next(".quantity").find("input.qty").val(), 10) && "both" == s ? (jQuery(this).next(".quantity").find("input.qty").val(parseInt(jQuery(this).next(".quantity").find("input.qty").val(), 10) - 1), jQuery("input[name=\"update_cart\"]").removeAttr("disabled")) : 0 < parseInt(jQuery(this).parent().siblings(".quantity").find("input.qty").val(), 10) && "both" !== s && "default" !== s && (jQuery(this).parent().siblings(".quantity").find("input.qty").val(parseInt(jQuery(this).parent().siblings(".quantity").find("input.qty").val(), 10) - 1), jQuery("input[name=\"update_cart\"]").removeAttr("disabled"))
                }), a.find("input.qty").keyup(function() {
                    jQuery(this).val() > r && jQuery(this).val(r)
                }), "yes" !== i.find(".wpr-product-add-to-cart").data("ajax-add-to-cart") || t("div[data-elementor-type=\"wpr-theme-builder\"]").hasClass("product-type-external") || i.find(".single_add_to_cart_button").on("click", function(a) {
                    a.preventDefault();
                    let e = t(this).closest("form");
                    var r = e.closest(".variations_form");
                    let s = e.hasClass("grouped_form");
                    if (!e[0].checkValidity()) return e[0].reportValidity(), !1;
                    let n = t(this),
                        o = n.val() || "",
                        d = e.serialize();
                    if (s) {
                        let e = !1;
                        if (i.find(".woocommerce-grouped-product-list-item__quantity").find("input").each(function() {
                                0 < t(this).val() && (e = !0)
                            }), !e) return void alert(WprConfig.chooseQuantityText)
                    }
                    t.ajax({
                        type: "POST",
                        url: WprConfig.ajaxurl,
                        data: "action=wpr_addons_add_cart_single_product&add-to-cart=" + o + "&" + d,
                        beforeSend: function() {
                            0 < r.length && !r.find(".variations select").val() || n.hasClass("disabled") || n.removeClass("added").addClass("loading")
                        },
                        complete: function() {
                            0 < r.length && !r.find(".variations select").val() || n.hasClass("disabled") || n.addClass("added").removeClass("loading")
                        },
                        success: function(e) {
                            return e.notices && 0 < e.notices.length && ("wc_low_stock" === e.notices[0].type ? alert("Only " + e.notices[0].message + " left in stock!") : alert(e.notices[0].message)), e.error && e.product_url ? void(window.location = e.product_url) : "undefined" != typeof wc_add_to_cart_params && void(0 < r.length && !r.find(".variations select").val() || n.hasClass("disabled") || (t(document.body).trigger("wc_fragment_refresh"), t(document.body).trigger("added_to_cart", [e.fragments, e.cart_hash, n])))
                        }
                    })
                })
            },
            widgetMiniWishlist: function(a) {
                function r() {
                    a.find(".wpr-wishlist-remove").on("click", function(i) {
                        i.preventDefault();
                        var r = t(this).data("product-id");
                        t.ajax({
                            url: WprConfig.ajaxurl,
                            type: "POST",
                            data: {
                                action: "remove_from_wishlist",
                                nonce: WprConfig.nonce,
                                product_id: r
                            },
                            success: function() {
                                a.find(".wpr-wishlist-product[data-product-id=\"" + r + "\"]").remove(), e.changeActionTargetProductId(r), t(document).trigger("removed_from_wishlist")
                            }
                        })
                    })
                }

                function s() {
                    a.find(".wpr-close-wishlist span").on("click", function() {
                        a.find(".wpr-wishlist-inner-wrap").addClass("wpr-wishlist-slide-out"), a.find(".wpr-wishlist-slide-out").css("animation-speed", o), a.find(".wpr-wishlist").fadeOut(o), t("body").removeClass("wpr-wishlist-sidebar-body"), setTimeout(function() {
                            a.find(".wpr-wishlist-inner-wrap").removeClass("wpr-wishlist-slide-out"), a.find(".wpr-wishlist").css({
                                display: "none"
                            })
                        }, o + 100)
                    })
                }
                0 < a.find(".wpr-wishlist-count").length && 0 == a.find(".wpr-wishlist-count").text() || a.find(".wpr-wishlist-count").css("display", "inline-flex"), r();
                var n = new MutationObserver(function() {
                    r()
                });
                n.observe(a[0], {
                    childList: !0,
                    subtree: !0
                }), t.ajax({
                    url: WprConfig.ajaxurl,
                    type: "POST",
                    data: {
                        action: "count_wishlist_items"
                    },
                    success: function(e) {
                        "none" == a.find(".wpr-wishlist-count").css("display") && 0 < e.wishlist_count ? (a.find(".wpr-wishlist-count").text(e.wishlist_count), a.find(".wpr-wishlist-count").css("display", "inline-flex")) : 0 == e.wishlist_count ? (a.find(".wpr-wishlist-count").css("display", "none"), a.find(".wpr-wishlist-count").text(e.wishlist_count)) : a.find(".wpr-wishlist-count").text(e.wishlist_count);
                        var i = a.find(".wpr-wishlist-product"),
                            r = i.map(function() {
                                return t(this).data("product-id")
                            }).get(),
                            s = e.wishlist_items.filter(function(e) {
                                return !r.includes(e.product_id)
                            }),
                            n = e.wishlist_items.map(function(e) {
                                return e.product_id
                            });
                        i.each(function() {
                            var e = t(this).data("product-id");
                            n.includes(e) || t(this).remove()
                        }), s.forEach(function(e) {
                            a.find(".wpr-wishlist-products").append("<li class=\"wpr-wishlist-product\" data-product-id=\"" + e.product_id + "\"><a class=\"wpr-wishlist-product-img\" href=\"" + e.product_url + "\">" + e.product_image + "</a><div><a href=\"" + e.product_url + "\">" + e.product_title + "</a><div class=\"wpr-wishlist-product-price\">" + e.product_price + "</div></div><span class=\"wpr-wishlist-remove\" data-product-id=\"" + e.product_id + "\"></span></li>")
                        })
                    }
                }), t(document).on("added_to_wishlist", function() {
                    t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "update_mini_wishlist",
                            product_id: i
                        },
                        success: function(e) {
                            0 == a.find(".wpr-wishlist-products").find("li[data-product-id=" + e.product_id + "]").length && a.find(".wpr-wishlist-products").append("<li class=\"wpr-wishlist-product\" data-product-id=\"" + e.product_id + "\"><a class=\"wpr-wishlist-product-img\" href=\"" + e.product_url + "\">" + e.product_image + "</a><div><a href=\"" + e.product_url + "\">" + e.product_title + "</a><div class=\"wpr-wishlist-product-price\">" + e.product_price + "</div></div><span class=\"wpr-wishlist-remove\" data-product-id=\"" + e.product_id + "\"></span></li>"), a.find(".wpr-wishlist-count").text(e.wishlist_count), a.find(".wpr-wishlist-count").css("display", "inline-flex")
                        }
                    })
                }), t(document).on("removed_from_wishlist", function() {
                    a.find(".wpr-wishlist-product[data-product-id=\"" + i + "\"]").remove(), t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "update_mini_wishlist",
                            product_id: i
                        },
                        success: function(e) {
                            a.find(".wpr-wishlist-count").text(e.wishlist_count), 0 == e.wishlist_count ? a.find(".wpr-wishlist-count").css("display", "none") : a.find(".wpr-wishlist-count").css("display", "inline-flex")
                        }
                    })
                }), a.find(".wpr-wishlist").css({
                    display: "none"
                });
                var o = a.find(".wpr-wishlist-wrap").data("animation");
                t("body").on("click", function(t) {
                    t.target.classList.value.includes("wpr-wishlist-wrap") || t.target.closest(".wpr-wishlist-wrap") || (a.hasClass("wpr-wishlist-slide") ? a.find(".wpr-wishlist").slideUp(o) : a.find(".wpr-wishlist").fadeOut(o))
                }), 0 !== a.hasClass("wpr-wishlist-sidebar").length && (t("#wpadminbar").length && a.find(".wpr-wishlist").css({
                    "z-index": 999999
                }), s(), a.find(".wpr-wishlist").on("click", function(i) {
                    i.target.classList.value.includes("wpr-wishlist-inner-wrap") || i.target.closest(".wpr-wishlist-inner-wrap") || (a.find(".wpr-wishlist-inner-wrap").addClass("wpr-wishlist-slide-out"), a.find(".wpr-wishlist-slide-out").css("animation-speed", o), a.find(".wpr-wishlist").fadeOut(o), t("body").removeClass("wpr-wishlist-sidebar-body"), setTimeout(function() {
                        a.find(".wpr-wishlist-inner-wrap").removeClass("wpr-wishlist-slide-out"), a.find(".wpr-wishlist").css({
                            display: "none"
                        })
                    }, o + 100))
                })), a.find(".wpr-wishlist").length && (a.hasClass("wpr-wishlist-sidebar") || a.hasClass("wpr-wishlist-dropdown")) && a.find(".wpr-wishlist-toggle-btn").on("click", function(i) {
                    i.stopPropagation(), i.preventDefault(), "none" === a.find(".wpr-wishlist").css("display") ? (a.hasClass("wpr-wishlist-slide") ? a.find(".wpr-wishlist").slideDown(o) : a.find(".wpr-wishlist").fadeIn(o), a.hasClass("wpr-wishlist-sidebar") && (a.find(".wpr-wishlist").fadeIn(o), a.find(".wpr-wishlist-inner-wrap").addClass("wpr-wishlist-slide-in"), a.find(".wpr-wishlist-slide-in").css("animation-speed", o), t("body").addClass("wpr-wishlist-sidebar-body")), setTimeout(function() {
                        a.find(".wpr-wishlist").removeClass("wpr-wishlist-slide-in"), a.hasClass("wpr-wishlist-sidebar") && a.find(".wpr-wishlist").trigger("resize")
                    }, o + 100)) : a.hasClass("wpr-wishlist-slide") ? a.find(".wpr-wishlist").slideUp(o) : a.find(".wpr-wishlist").fadeOut(o)
                });
                var n = new MutationObserver(function() {
                    0 !== a.hasClass("wpr-wishlist-sidebar").length && s(), a.find(".wpr-wishlist-product").on("click", ".wpr-wishlist-remove", function() {
                        t(this).closest("li").addClass("wpr-before-remove-from-wishlist")
                    }), 0 === a.find(".wpr-wishlist-product").length ? (a.find(".wpr-wishlist-empty").removeClass("wpr-wishlist-empty-hidden"), a.find(".wpr-view-wishlist").addClass("wpr-hidden-element")) : (a.find(".wpr-wishlist-empty").addClass("wpr-wishlist-empty-hidden"), a.find(".wpr-view-wishlist").removeClass("wpr-hidden-element"))
                });
                n.observe(a[0], {
                    childList: !0,
                    subtree: !0
                })
            },
            widgetProductMiniCart: function(i) {
                function a() {
                    i.find(".wpr-close-cart span").on("click", function() {
                        i.find(".wpr-shopping-cart-inner-wrap").addClass("wpr-mini-cart-slide-out"), i.find(".wpr-mini-cart-slide-out").css("animation-speed", r), i.find(".wpr-shopping-cart-wrap").fadeOut(r), t("body").removeClass("wpr-mini-cart-sidebar-body"), setTimeout(function() {
                            i.find(".wpr-shopping-cart-inner-wrap").removeClass("wpr-mini-cart-slide-out"), i.find(".wpr-mini-cart").css({
                                display: "none"
                            })
                        }, r + 100)
                    })
                }
                i.find(".wpr-mini-cart").css({
                    display: "none"
                });
                var r = i.find(".wpr-mini-cart-wrap").data("animation");
                t("body").on("click", function(t) {
                    t.target.classList.value.includes("wpr-mini-cart") || t.target.closest(".wpr-mini-cart") || (i.find(".wpr-mini-cart-toggle-btn").closest(".elementor>.elementor-element").removeClass("wpr-z-index"), i.hasClass("wpr-mini-cart-slide") ? i.find(".wpr-mini-cart").slideUp(r) : i.find(".wpr-mini-cart").fadeOut(r))
                }), i.hasClass("wpr-mini-cart-sidebar") && (t("#wpadminbar").length && i.find(".wpr-mini-cart").css({
                    "z-index": 999999
                }), a(), i.find(".wpr-shopping-cart-wrap").on("click", function(a) {
                    a.target.classList.value.includes("wpr-shopping-cart-inner-wrap") || a.target.closest(".wpr-shopping-cart-inner-wrap") || (i.find(".wpr-shopping-cart-inner-wrap").addClass("wpr-mini-cart-slide-out"), i.find(".wpr-mini-cart-slide-out").css("animation-speed", r), i.find(".wpr-shopping-cart-wrap").fadeOut(r), t("body").removeClass("wpr-mini-cart-sidebar-body"), setTimeout(function() {
                        i.find(".wpr-shopping-cart-inner-wrap").removeClass("wpr-mini-cart-slide-out"), i.find(".wpr-mini-cart").css({
                            display: "none"
                        })
                    }, r + 100))
                })), i.find(".wpr-mini-cart").length && (i.hasClass("wpr-mini-cart-sidebar") || i.hasClass("wpr-mini-cart-dropdown")) && i.find(".wpr-mini-cart-toggle-btn").on("click", function(a) {
                    a.stopPropagation(), a.preventDefault(), "none" === i.find(".wpr-mini-cart").css("display") ? (t(this).closest(".elementor>.elementor-element").addClass("wpr-z-index"), i.hasClass("wpr-mini-cart-slide") ? i.find(".wpr-mini-cart").slideDown(r) : i.find(".wpr-mini-cart").fadeIn(r), i.hasClass("wpr-mini-cart-sidebar") && (i.find(".wpr-shopping-cart-wrap").fadeIn(r), i.find(".wpr-shopping-cart-inner-wrap").addClass("wpr-mini-cart-slide-in"), i.find(".wpr-mini-cart-slide-in").css("animation-speed", r), t("body").addClass("wpr-mini-cart-sidebar-body")), setTimeout(function() {
                        i.find(".wpr-shopping-cart-inner-wrap").removeClass("wpr-mini-cart-slide-in"), i.hasClass("wpr-mini-cart-sidebar") && i.find(".wpr-woo-mini-cart").trigger("resize")
                    }, r + 100)) : (t(this).closest(".elementor>.elementor-element").removeClass("wpr-z-index"), i.hasClass("wpr-mini-cart-slide") ? i.find(".wpr-mini-cart").slideUp(r) : i.find(".wpr-mini-cart").fadeOut(r))
                });
                var s = new MutationObserver(function() {
                    i.hasClass("wpr-mini-cart-sidebar") && a(), i.find(".woocommerce-mini-cart-item").on("click", ".wpr-remove-item-from-mini-cart", function() {
                        t(this).closest("li").addClass("wpr-before-remove-from-mini-cart")
                    })
                });
                s.observe(i[0], {
                    childList: !0,
                    subtree: !0
                })
            },
            widgetProductFilters: function(e) {
                0 !== e.find(".wpr-search-form-input").length && e.find(".wpr-search-form-input").on({
                    focus: function() {
                        e.addClass("wpr-search-form-input-focus")
                    },
                    blur: function() {
                        e.removeClass("wpr-search-form-input-focus")
                    }
                })
            },
            widgetPageCart: function() {},
            widgetPageMyAccount: function(a) {
                e.editorCheck() && (a.find(".woocommerce-MyAccount-content").each(function() {
                    1 !== t(this).index() && t(this).css("display", "none")
                }), a.find(".woocommerce-MyAccount-navigation-link").on("click", function() {
                    var e, i, r;
                    e = a.find(".woocommerce-MyAccount-content"), e.each(function() {
                        t(this).css("display", "none")
                    }), i = a.find(".woocommerce-MyAccount-navigation-link"), i.each(function() {
                        t(this).removeClass("is-active")
                    }), r = t(this).attr("class").slice(t(this).attr("class").indexOf("--") + 2), t(this).addClass("is-active"), a.find("[wpr-my-account-page=\"" + r + "\"]").css("display", "block")
                })), a.find(".wpr-wishlist-remove").length && (a.find(".wpr-wishlist-remove").on("click", function(i) {
                    i.preventDefault();
                    var r = t(this).data("product-id");
                    t.ajax({
                        url: WprConfig.ajaxurl,
                        type: "POST",
                        data: {
                            action: "remove_from_wishlist",
                            nonce: WprConfig.nonce,
                            product_id: r
                        },
                        success: function() {
                            a.find(".wpr-wishlist-product[data-product-id=\"" + r + "\"]").remove(), e.changeActionTargetProductId(r), t(document).trigger("removed_from_wishlist")
                        }
                    })
                }), t(document).on("removed_from_wishlist", function() {
                    a.find(".wpr-wishlist-product[data-product-id=\"" + i + "\"]").remove()
                }))
            },
            widgetReadingProgressBar: function(e) {
                function i(e, i) {
                    var r = t("body").css("paddingTop"),
                        s = t("body").css("paddingBottom");
                    "0px" === i.css("top") ? ("colored" == i.data("background-type") && t("body").css("paddingTop", e.find(".wpr-reading-progress-bar").css("height")), t("#wpadminbar").length && i.css("top", t("#wpadminbar").height()), t("body").css("paddingBottom", s)) : "0px" === i.css("bottom") && "colored" == i.data("background-type") && (t("body").css("paddingBottom", e.find(".wpr-reading-progress-bar").css("height")), t("body").css("paddingTop", r)), a(e), window.onscroll = function() {
                        a(e)
                    }
                }

                function a(e) {
                    if (e.find(".wpr-reading-progress-bar").length) {
                        var t = document.body.scrollTop || document.documentElement.scrollTop,
                            i = document.documentElement.scrollHeight - document.documentElement.clientHeight;
                        e.find(".wpr-reading-progress-bar").css("width", 100 * (t / i) + "%")
                    }
                }
                if (0 != e.find(".wpr-reading-progress-bar-container").length) {
                    var r = e.find(".wpr-reading-progress-bar-container");
                    i(e, r)
                }
            },
            widgetDataTable: function(a) {
                function r() {
                    if ("yes" === a.find(".wpr-table-inner-container").attr("data-entry-info")) {
                        var e = +a.find(".wpr-active-pagination-item").text(),
                            t = c * e - (c - a.find("tbody tr").length),
                            i = t - a.find("tbody tr").length + 1;
                        a.find(".wpr-entry-info").html("Showing " + i + " to " + t + " of " + w.length + " Entries.")
                    }
                }

                function s() {
                    u = a.find(".wpr-active-pagination-item").index(), f.each(function(e) {
                        0 == e || e == f.length - 1 || e <= u && e >= u - 2 ? t(this).css("display", "flex") : t(this).css("display", "none")
                    })
                }

                function n(e) {
                    return function(i, a) {
                        var r = o(i, e),
                            s = o(a, e);
                        return t.isNumeric(r) && t.isNumeric(s) ? r - s : r.toString().localeCompare(s)
                    }
                }

                function o(e, i) {
                    return t(e).children("td").eq(i).text()
                }

                function d(e, t, a) {
                    for (var r = [], s = a.find(".wpr-table-row"), n = 0; n < s.length; n++) {
                        for (var o = [], d = s[n].querySelectorAll(".wpr-table-text"), p = 0; p < d.length; p++) o.push(d[p].innerText);
                        r.push(o.join(","))
                    }
                    l(r.join("\n"), t)
                }

                function l(e, t) {
                    var i, a;
                    i = new Blob([e], {
                        type: "text/csv"
                    }), a = document.createElement("a"), a.download = t, a.href = window.URL.createObjectURL(i), a.style.display = "none", document.body.appendChild(a), a.click()
                }
                new PerfectScrollbar(a.find(".wpr-table-inner-container")[0], {});
                var p = a.find("tbody .wpr-table-row"),
                    c = +a.find(".wpr-table-inner-container").attr("data-rows-per-page"),
                    f = a.find(".wpr-table-custom-pagination-list-item"),
                    w = a.find(".wpr-table-inner-container tbody tr"),
                    m = a.find(".wpr-table-inner-container tbody"),
                    h, g, u;
                if ("yes" === a.find(".wpr-table-inner-container").attr("data-custom-pagination")) {
                    var y = w.filter(function(e) {
                        return e < a.find(".wpr-table-inner-container").attr("data-rows-per-page")
                    });
                    m.html(y), s(), a.on("click", ".wpr-table-custom-pagination-list-item", function() {
                        f.removeClass("wpr-active-pagination-item"), t(this).addClass("wpr-active-pagination-item"), s(), m.hide(), h = +t(this).text(), c = +a.find(".wpr-table-inner-container").attr("data-rows-per-page"), m.html(w.filter(function(e) {
                            return e++, e > c * (h - 1) && e <= c * h
                        })), m.show(), p = a.find("tbody .wpr-table-row"), p.find(".wpr-table-tr-before-remove").each(function() {
                            t(this).removeClass("wpr-table-tr-before-remove")
                        }), r()
                    }), a.find(".wpr-table-prev-next").each(function() {
                        h = +a.find(".wpr-active-pagination-item").text(), t(this).hasClass("wpr-table-custom-pagination-prev") ? t(this).on("click", function() {
                            1 < h && (f.removeClass("wpr-active-pagination-item"), h--, f.each(function(e) {
                                e++, e === h && (t(this).addClass("wpr-active-pagination-item"), h = +t(this).text())
                            }), s(), m.html(w.filter(function(e) {
                                return e++, e > c * (h - 1) && e <= c * h
                            })), p = a.find("tbody .wpr-table-row"), "" == g && m.html(p)), r()
                        }) : t(this).on("click", function() {
                            f.length > h && (f.removeClass("wpr-active-pagination-item"), h++, f.each(function(e) {
                                e++, e === h && (t(this).addClass("wpr-active-pagination-item"), h = +t(this).text())
                            }), s(), m.html(w.filter(function(e) {
                                return e++, e > c * (h - 1) && e <= c * h
                            })), p = a.find("tbody .wpr-table-row"), "" == g && m.html(p)), r()
                        }), p.find(".wpr-table-tr-before-remove").each(function() {
                            t(this).removeClass("wpr-table-tr-before-remove")
                        })
                    })
                }
                if (a.find(".wpr-table-inner-container").removeClass("wpr-hide-table-before-arrange"), r(), p = a.find("tbody .wpr-table-row"), a.find(".wpr-table-live-search").keyup(function() {
                        "" === this.value ? a.find(".wpr-table-pagination-cont").removeClass("wpr-hide-pagination-on-search") : a.find(".wpr-table-pagination-cont").addClass("wpr-hide-pagination-on-search"), g = this.value.toLowerCase().trim();
                        var e = [];
                        w.each(function() {
                            t(this).find("td").each(function() {
                                var i = t(this).text().toLowerCase().trim(),
                                    a = -1 == i.indexOf(g);
                                a || e.push(t(this).closest("tr"))
                            })
                        }), m.html(e), "" == g && m.html(p), r()
                    }), "yes" === a.find(".wpr-table-inner-container").attr("data-table-sorting") && (t(window).click(function(i) {
                        t(i.target).hasClass("wpr-table-th") || 0 !== t(i.target).closest(".wpr-table-th").length || t(i.target).hasClass("wpr-active-td-bg-color") || 0 !== t(i.target).closest(".wpr-active-td-bg-color").length || a.find("td").each(function() {
                            t(this).hasClass("wpr-active-td-bg-color") && t(this).removeClass("wpr-active-td-bg-color")
                        })
                    }), a.find("th").click(function() {
                        var e = t(this).index();
                        a.find("td").each(function() {
                            t(this).index() === e ? t(this).addClass("wpr-active-td-bg-color") : t(this).removeClass("wpr-active-td-bg-color")
                        }), a.find("th").each(function() {
                            t(this).find(".wpr-sorting-icon").html("<i class=\"fas fa-sort\" aria-hidden=\"true\"></i>")
                        });
                        var r = t(this).parents("table").eq(0),
                            s = r.find("tr:gt(0)").toArray().sort(n(t(this).index()));
                        this.asc = !this.asc, (a.hasClass("wpr-data-table-type-custom") ? !this.asc : this.asc) && (a.hasClass("wpr-data-table-type-custom") ? t(this).find(".wpr-sorting-icon").html("<i class=\"fas fa-sort-down\" aria-hidden=\"true\"></i>") : t(this).find(".wpr-sorting-icon").html("<i class=\"fas fa-sort-up\" aria-hidden=\"true\"></i>"), s = s.reverse()), (a.hasClass("wpr-data-table-type-custom") ? this.asc : !this.asc) && (a.hasClass("wpr-data-table-type-custom") ? t(this).find(".wpr-sorting-icon").html("<i class=\"fas fa-sort-up\" aria-hidden=\"true\"></i>") : t(this).find(".wpr-sorting-icon").html("<i class=\"fas fa-sort-down\" aria-hidden=\"true\"></i>"));
                        for (var o = 0; o < s.length; o++) r.append(s[o]);
                        p.find(".wpr-table-tr-before-remove").each(function() {
                            t(this).closest(".wpr-table-row").next(".wpr-table-appended-tr").remove(), t(this).removeClass("wpr-table-tr-before-remove")
                        })
                    })), "yes" === a.find(".wpr-table-inner-container").attr("data-row-pagination") && (a.find(".wpr-table-head-row").prepend("<th class=\"wpr-table-th-pag\" style=\"vertical-align: middle;\">#</th>"), w.each(function(e) {
                        t(this).prepend("<td class=\"wpr-table-td-pag\" style=\"vertical-align: middle;\"><span style=\"vertical-align: middle;\">" + (e + 1) + "</span></td>")
                    })), a.find(".wpr-table-export-button-cont").length) {
                    var b = a.find(".wpr-table-export-button-cont .wpr-button");
                    b.each(function() {
                        t(this).hasClass("wpr-xls") ? t(this).on("click", function() {
                            let e = a.find("table");
                            TableToExcel.convert(e[0], {
                                name: `export.xlsx`,
                                sheet: {
                                    name: "Sheet 1"
                                }
                            })
                        }) : t(this).hasClass("wpr-csv") && t(this).on("click", function() {
                            d("why-this-arg?", "placeholder.csv", a.find(".wpr-data-table"))
                        })
                    })
                }
            },
            editorCheck: function() {
                return !!t("body").hasClass("elementor-editor-active")
            },
            changeAdminBarMenu: function() {
                let e = t("#wp-admin-bar-elementor_edit_page-default");
                e.children("li").each(function() {
                    let e = t(this),
                        i = e.children("a").children("span").first().text();
                    0 === i.indexOf("wpr-mega-menu-item") && e.remove()
                })
            },
            changeActionTargetProductId: function(e) {
                i = e
            }
        },
        i;
    t(window).on("elementor/frontend/init", e.init)
})(jQuery, window.elementorFrontend),
function(e, t) {
    var i = function(e, t, i) {
        var a;
        return function() {
            var r = this,
                s = arguments;
            a ? clearTimeout(a) : i && e.apply(r, s), a = setTimeout(function() {
                i || e.apply(r, s), a = null
            }, t || 100)
        }
    };
    jQuery.fn[t] = function(e) {
        return e ? this.bind("resize", i(e)) : this.trigger(t)
    }
}(jQuery, "smartresize");