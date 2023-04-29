/*$(window).bind("load", function() {$('.video-cover').attr('src','https://theninehertz.com/wp-content/themes/ninehertz/assets/img/video-frame2.gif');});*/
jQuery(document).ready(function(){
	

    getAccordion("#uk-nav-tabs",768);
   // getAccordion("#uk-nav-tabs",768);

    let ip;
    let ip_value;
    $("#contact_pre_phone").intlTelInput({
        autoHideDialCode: false,
        geoIpLookup: function(callback) {
            $.get('https://ipinfo.io/', function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
                ip=resp.ip;
            });
        },
        initialCountry: "auto",
        nationalMode: false,
    }).on('countrychange', function (e, countryData) {
        $("input.track-country").val(($("#contact_pre_phone").intlTelInput("getSelectedCountryData").name));
    });


    $("#pre_phone_top").intlTelInput({
        autoHideDialCode: false,
        geoIpLookup: function(callback) {
            $.get('https://ipinfo.io/', function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
                ip=resp.ip;
            });
        },
        initialCountry: "auto",
        nationalMode: false,
    }).on('countrychange', function (e, countryData) {
        $("input.pre_phone_top_country").val(($("#pre_phone_top").intlTelInput("getSelectedCountryData").name));
    });



    $("#footCode").intlTelInput({
        autoHideDialCode: false,
        geoIpLookup: function(callback) {
            $.get('https://ipinfo.io/', function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
                ip=resp.ip;
            });
        },
        initialCountry: "auto",
        nationalMode: false,
    }).on('countrychange', function (e, countryData) {

        $("input.footCode-country").val(($("#footCode").intlTelInput("getSelectedCountryData").name));
    });

    $("#inner_pre_phone").intlTelInput({
        autoHideDialCode: false,
        geoIpLookup: function(callback) {
            $.get('https://ipinfo.io/', function() {}, "jsonp").always(function(resp) {
                var countryCode = (resp && resp.country) ? resp.country : "";
                callback(countryCode);
                ip=resp.ip;
            });
        },
        initialCountry: "auto",
        nationalMode: false,
    }).on('countrychange', function (e, countryData) {
        $("input.inner_pre_phone_country").val(($("#inner_pre_phone").intlTelInput("getSelectedCountryData").name));
    });



    $(".testimonials_video").on('hidden.bs.modal', function () {
        var t = this.id;
        $("#" + t).find("iframe")[0].contentWindow.postMessage(JSON.stringify({
            event: "command",
            func: "stopVideo",
            args: ""
        }), "*")
    });

    jQuery(".video_closer").click(function () {
        jQuery(".video-container").addClass("out");
        jQuery("body").removeClass("modal-active");
        var e = jQuery(this).attr("data-id");
        jQuery("#" + e).find("iframe")[0].contentWindow.postMessage(JSON.stringify({
            event: "command",
            func: "stopVideo",
            args: ""
        }), "*");
    });
    //new menu Style
    jQuery(document).on("click", ".mega-dropdown", function (i) {
    i.stopPropagation()
    }),
    //End new menu Style 
    jQuery(document).ready(function() {
        if ( jQuery(window).width() < 767 ) {
            startCarousel();
        } else {
            jQuery('.owl-hiretop').addClass('off');
            jQuery('.owl-hirebottom').addClass('off');
            jQuery('.owl-addmobile1').addClass('off');
            jQuery('.owl-addmobile2').addClass('off');
            jQuery('.owl-addmobile3').addClass('off');
        }
        
        //new menu Style
        $(".mega-dropdown").on("show.bs.dropdown", function () {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideDown()
        }), 

        $(".mega-dropdown").on("hide.bs.dropdown", function () {
        $(this).find(".dropdown-menu").first().stop(!0, !0).slideUp()
        });    
        //End new menu Style
    });


    jQuery(window).resize(function() {
        if ( jQuery(window).width() < 767 ) {
            startCarousel();
        } else {
            stopCarousel();
        }
    });



    function startCarousel(){
    jQuery(".owl-hiretop").owlCarousel({loop: true,center: true,items: 1,margin:0,autoplay: true,nav: true,navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'],navText: ['', ''],dots:false,autoplayTimeout: 10000,smartSpeed: 450,responsive: {0: {items: 1},768:{items: 1},1170: {items: 1}}});jQuery(".owl-hirebottom").owlCarousel({loop: true,center: true,items: 1,margin:0,autoplay: true,nav: true,navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'],navText: ['', ''],dots:false,autoplayTimeout: 10000,smartSpeed: 450,responsive: {0: {items: 1},768:{items: 1},1170: {items: 1}}});
    jQuery(".owl-addmobile1").owlCarousel({loop: true,center: false,items: 2,margin:0,autoplay: true,nav: true,navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'],navText: ['', ''],dots:false,autoplayTimeout: 10000,smartSpeed: 450,responsive: {0: {items: 2},768:{items: 2},1170: {items: 2}}});
    jQuery(".owl-addmobile2").owlCarousel({loop: true,center: false,items: 2,margin:0,autoplay: true,nav: true,navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'],navText: ['', ''],dots:false,autoplayTimeout: 10000,smartSpeed: 450,responsive: {0: {items: 2},768:{items: 2},1170: {items: 2}}});
    jQuery(".owl-addmobile3").owlCarousel({loop: true,center: false,items: 1,margin:0,autoplay: true,nav: true,navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'],navText: ['', ''],dots:false,autoplayTimeout: 10000,smartSpeed: 450,responsive: {0: {items: 1},768:{items: 1},1170: {items: 1}}}); 
    }
    function stopCarousel() {
        var owl = jQuery('.owl-hiretop');
        owl.trigger('destroy.owl.carousel');
        owl.addClass('off');

        var owl1 = jQuery('.owl-hirebottom');
        owl1.trigger('destroy.owl.carousel');
        owl1.addClass('off');
        
        var owl2 = jQuery('.owl-addmobile1');
        owl2.trigger('destroy.owl.carousel');
        owl2.addClass('off');
        
        var owl3 = jQuery('.owl-addmobile2');
        owl3.trigger('destroy.owl.carousel');
        owl3.addClass('off');
        
        var owl4 = jQuery('.owl-addmobile3');
        owl4.trigger('destroy.owl.carousel');
        owl4.addClass('off');
    }

    jQuery(".owl-toprated").owlCarousel({loop: true,items: 5,margin: 0,autoplay: true,nav: true,navClass: ['fa fa-angle-left', 'fa fa-angle-right'],navText: ['', ''],dots:true,autoplayTimeout: 9500,smartSpeed: 450,responsive: { 0: {items: 1},768: {items: 3},1170: {items: 4}}});jQuery(".service-provider-icon-slider").owlCarousel({loop: true, center: true, items: 7, margin: 0, autoplay: true, nav: true, navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'], navText: ['', ''],dots:true, autoplayTimeout: 9500, smartSpeed: 450, responsive: {0: {items: 3}, 768: {items: 3}, 1170: {items: 7}}});jQuery(".owl-clone-script").owlCarousel({loop: true,center: true,items: 3,stagePadding: 30,margin:30,autoplay: true,nav: true,navClass: ['fa fa-angle-left', 'fa fa-angle-right'],navText: ['', ''],dots:false,autoplayTimeout: 10000,smartSpeed: 450,responsive: {0: {items: 1},768: {items: 2},1170: {items: 3}}});jQuery(".owl-overview-mob").owlCarousel({loop: true,center: true,items: 1,margin:0,autoplay: true,nav: true,navClass: ['fa fa-angle-left', 'fa fa-angle-right'],navText: ['', ''],dots:false,autoplayTimeout: 10000,smartSpeed: 450,responsive: {0: {items: 1},768: {items: 1},1170: {items: 1}}});jQuery(".tickTock-visual-app").owlCarousel({margin: 0,center: true,nav: true,navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'],navText: ['', ''],loop: true,autoplay: true,autoplayTimeout: 9500,smartSpeed: 450,responsive: {0: {items: 1},480: {items: 1},600: {items: 2},1000: {items: 3},1366:{items: 5},1440: {items: 5}}});jQuery(".owl-video").owlCarousel({loop: true, center: true, items: 1, margin:0, autoplay: true, nav: true, navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'], navText: ['', ''], dots:false, autoplayTimeout: 10000, smartSpeed: 450, responsive: {0: {items: 1}, 768: {items: 1}, 1170: {items: 1}}});jQuery(".owl-jaipur-app").owlCarousel({loop: true,center: true,items: 1,margin:0,autoplay: true,nav: true,navClass: ['fa fa-angle-left', 'fa fa-angle-right'],navText: ['', ''],dots:false,autoplayTimeout: 10000,smartSpeed: 450,responsive: {0: {items: 1},768: {items: 1},1170: {items: 1}}});jQuery(".owl-awards").owlCarousel({loop: true, center: true, items: 3, margin:0, autoplay: true, nav: true, navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'], navText: ['', ''], dots:false, autoplayTimeout: 10000, smartSpeed: 450, responsive: {0: {items: 1}, 768: {items: 2}, 1170: {items: 3}}});jQuery(".main-menu-toggle").click(function(){jQuery(this).parent("li.menu-item").toggleClass("open_active"),jQuery(".sub-menu",this).slideToggle(),jQuery(this).toggleClass("menu-show"),jQuery(this).next("ul.sub-menu").toggleClass("open_in")}),jQuery(".mobile-menu").click(function(){jQuery(".mobile_navigation").toggleClass("mobile-menu-open")}),jQuery(".mobile-menu li a span").click(function(e){return e.preventDefault(),jQuery(this).find(".sub-menu").first().fadeToggle(),!1}),jQuery(".customers-testimonials").owlCarousel({loop:!0,center:!0,items:3,margin:0,autoplay:!0,nav:!0,navClass:["fa fa-chevron-left","fa fa-chevron-right"],navText:["",""],dots:!1,autoplayTimeout:9500,smartSpeed:450,responsive:{0:{items:1},768:{items:2},1170:{items:3}}}),jQuery(".taber").click(function(e){e.preventDefault(),jQuery(".taber").parent().removeClass("current-tab"),jQuery(this).parent().addClass("current-tab")}),jQuery(".mob-nav-tabs").owlCarousel({margin:10,nav:!1,navClass:["fa fa-chevron-left","fa fa-chevron-right"],navText:["",""],items:3,loop:!1,autoplay:!1,dots:!1,autoplayTimeout:9500,smartSpeed:450}),jQuery(".mob-inner-slider").owlCarousel({margin:0,center:!0,nav:!0,navClass:["fa fa-chevron-left","fa fa-chevron-right"],navText:["",""],items:1,loop:!1,autoplay:!1,dots:!1,autoplayTimeout:9500,smartSpeed:450})}),$(".count").each(function(){$(this).prop("Counter",0).animate({Counter:$(this).text()},{duration:4e3,easing:"swing",step:function(e){$(this).text(Math.ceil(e))}})}),$(".js-input").keyup(function(){$(this).val()?$(this).addClass("not-empty"):$(this).removeClass("not-empty")});var TxtType=function(e,t,o){this.toRotate=t,this.el=e,this.loopNum=0,this.period=parseInt(o,10)||2e3,this.txt="",this.tick(),this.isDeleting=!1};TxtType.prototype.tick=function(){var e=this.loopNum%this.toRotate.length,t=this.toRotate[e];this.isDeleting?this.txt=t.substring(0,this.txt.length-1):this.txt=t.substring(0,this.txt.length+1),this.el.innerHTML='<span class="wrap">'+this.txt+"</span>";var o=this,a=200-100*Math.random();this.isDeleting&&(a/=2),this.isDeleting||this.txt!==t?this.isDeleting&&""===this.txt&&(this.isDeleting=!1,this.loopNum++,a=500):(a=this.period,this.isDeleting=!0),setTimeout(function(){o.tick()},a)},window.onload=function(){for(var e=document.getElementsByClassName("typewrite"),t=0;t<e.length;t++){var o=e[t].getAttribute("data-type"),a=e[t].getAttribute("data-period");o&&new TxtType(e[t],JSON.parse(o),a)}var s=document.createElement("style");s.type="text/css",s.innerHTML=".typewrite > .wrap { border-right: 0.08em solid #fff}",document.body.appendChild(s)},$(function(){$(".fliping").mousemove(function(e){var t=$(this).offset(),o=e.pageX-t.left,a=e.pageY-t.top,s=($(this).height()/2-a)/($(this).height()/2)*6,i=-1*($(this).width()/2-o)/($(this).width()/2)*6;$(this).css({transform:"rotateX("+s+"deg) rotateY("+i+"deg) rotateZ("+i+"deg)"})}),$(".fliping").mouseleave(function(e){$(this).css({transform:"rotateX(0deg) rotateY(0deg) rotateZ(0deg)"})})}),$(window).scroll(function(){$(this).scrollTop()>50?$("nav").addClass("sticky"):$("nav").removeClass("sticky")}),$(document).ready(function(){$(".get_quote").click(function(){$(".mobile-nav1").toggleClass("show-menu"),$(".panelOverlay").toggleClass("form-overly"),$(".navbar-brand,.top-menu,.menu,.mob-menu").toggleClass("display-none"),$(".masthead").toggleClass("mouseevent-none"),$("body").toggleClass("overflow-none")}),$(".form-close").click(function(){$(".mobile-nav1").toggleClass("show-menu"),$(".panelOverlay").toggleClass("form-overly"),$(".navbar-brand,.top-menu,.menu,.mob-menu").toggleClass("display-none"),$(".masthead").toggleClass("mouseevent-none"),$("body").toggleClass("overflow-none")}),$(".mobile-menu-close").click(function(){$(".mobile-nav2").toggleClass("show-menu"),$(".panelOverlay").toggleClass("mobile-overly"),$(".navbar-brand,.top-menu,.menu").toggleClass("display-none"),$(".masthead").toggleClass("mouseevent-none"),$("body").toggleClass("overflow-none")}),$(".menu-btn").click(function(){$(".top-menu,.mob-menu").toggleClass("display-none"),$(".masthead").toggleClass("mouseevent-none"),$("body").toggleClass("overflow-none")});var e=$("#hamburger-icon"),t=$(".mobile-nav");e.click(function(){return t.toggle(),e.toggleClass("active"),!1}),e.click(function(){return t.toggleClass("show-menu"),!1})}),function(e){e.fn.scrollImage=function(){var t=function(e){var t=e.find("img").height(),o=e.height();return parseInt(o-t)},o=function(e){e.find("img").css({bottom:t(e)})};this.hover(function(){if(!(t(e(this))>0)){$ele=e(this).find("img"),$ele.stop();var o=e(this).attr("data-duration");o||(o=5e3),$ele.animate({bottom:0},parseInt(o))}},function(){$ele.stop(),$ele.animate({bottom:t(e(this))},500)});var a=this;return e(window).resize(function(){a.each(function(){o(e(0))})}),this.each(function(){o(e(0))})},e(window).on("load",function(){e(".screen").scrollImage()})}(jQuery),jQuery(document).ready(function(e){e(".awards-mob").owlCarousel({margin:10,nav:!0,loop:!0,dots:!1,responsive:{0:{items:1},480:{items:2},600:{items:3},1000:{items:3}}}),e(".awards-single").owlCarousel({margin:10,nav:!0,loop:!0,responsive:{0:{items:2},480:{items:2},600:{items:4},1000:{items:6}}}),e(".section-slider").owlCarousel({margin:0,items:1,nav:!0,loop:!0,animateOut:"fadeOut"}),e(".kabaddi-slider").owlCarousel({margin:0,items:1,nav:!0,loop:!0,autoplay:!0,autoplayTimeout:1e4,animateOut:"fadeOut"}),e(".allCoins").owlCarousel({margin:10,nav:!0,loop:!0,autoplay:!0,autoplayTimeout:4e3,responsive:{0:{items:1},480:{items:1},600:{items:1},1000:{items:1}}}),e(".os-screens").owlCarousel({margin:10,nav:!0,loop:!0,responsive:{0:{items:1},480:{items:2},600:{items:4},1000:{items:6}}}),e(".hire_full_stack").owlCarousel({margin:20,nav:!0,loop:!0,responsive:{0:{items:1},480:{items:1},600:{items:1},1000:{items:1}}}),e(".ios-ods-slider").owlCarousel({margin:20,center:!0,nav:!0,loop:!0,responsive:{0:{items:1},480:{items:1},600:{items:1},1000:{items:3},1366:{items:3},1440:{items:5}}}),e(".home-badge-slider").owlCarousel({margin:0,nav:!0,loop:!0,responsive:{0:{items:1},480:{items:1},600:{items:2},1000:{items:3},1366:{items:3},1440:{items:3},1600:{items:3},1700:{items:4}}}),e(".dc-cli-ents").owlCarousel({margin:20,center:!0,nav:!0,loop:!0,responsive:{0:{items:1},480:{items:1},600:{items:2},1000:{items:3},1366:{items:3},1440:{items:3}}}),jQuery(".owl-driver").owlCarousel({margin: 0,nav: true,loop: true,navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'],navText: ['', ''],items : 1,dots:false,autoplay: false}),jQuery(".owl-passenger").owlCarousel({margin: 0,nav: true,loop: true,navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'],navText: ['', ''],items : 1,dots:false,autoplay: false}),jQuery(".uk-featured").owlCarousel({margin: 0,nav: true,navClass: ['fa fa-chevron-left', 'fa fa-chevron-right'],navText: ['', ''],loop: true,autoplay: true,autoplayTimeout: 9500,smartSpeed: 450,responsive: {0: {items: 1},480: {items: 1},600: {items: 2},1000: {items: 3},1366: {items: 4},1440: {items: 5}}}),jQuery(".clutch-widget-carousel").owlCarousel({margin:0,nav:!0,loop:!0,navClass:["fa fa-chevron-left","fa fa-chevron-right"],navText:["",""],items:1,dots:!1,autoplay:!1}),e(".accordion").find(".accordion-toggle").click(function(){e(this).next().slideToggle("600"),e(".accordion-content").not(e(this).next()).slideUp("600")}),e(".accordion-toggle").on("click",function(){e(this).toggleClass("active").siblings().removeClass("active")})}),$("form").on("change",".file-upload-field",function(){$(this).parent(".file-upload-wrapper").attr("data-text",$(this).val().replace(/.*(\/|\\)/,""))}),jQuery(document).ready(function(){var e=$(".portfolio-work").offset().top+$(".portfolio-work").outerHeight()-($(window).height()-16);$(".carousel").carousel({pause:!0,interval:!1,wrap:!1}),$(".carousel").bind("mousewheel DOMMouseScroll",function(t){$(".tab-pane.active .carousel .carousel-inner .item").length;var o=$(this).offset().top;t.originalEvent.wheelDelta>0||t.originalEvent.detail<0?$(".tab-pane.active .carousel .carousel-inner .item:first").hasClass("active")?($(".folio-tab-bar").removeClass("folio-fixed-tab"),$(".port-outer-bg .tab-content").removeClass("folio-fixed-slider"),$(this).carousel("prev")):($(".folio-tab-bar").addClass("folio-fixed-tab"),$(".port-outer-bg .tab-content").addClass("folio-fixed-slider"),e>=o&&$(this).carousel("prev")):$(".tab-pane.active .carousel .carousel-inner .item:last").hasClass("active")?($(".folio-tab-bar").removeClass("folio-fixed-tab"),$(".port-outer-bg .tab-content").removeClass("folio-fixed-slider")):($(".folio-tab-bar").addClass("folio-fixed-tab"),$(".port-outer-bg .tab-content").addClass("folio-fixed-slider"),e<o&&$(this).carousel("next"))}),$("#myCarousel").on("touchstart",function(e){var t=e.originalEvent.touches[0].pageY;$(this).one("touchmove",function(e){var o=e.originalEvent.touches[0].pageY;Math.floor(t-o)>1?$(".carousel").carousel("next"):Math.floor(t-o)<-1&&$(".carousel").carousel("prev")}),$(".carousel").on("touchend",function(){$(this).off("touchmove")})})});var i=0,autoload=1;function new_clock(){i=getRandomizer(i),$(".show_featimg").removeClass("active"),$(".featimg_sec").hide(),$("#test"+i).addClass("active"),$("#featimg"+i).show()}function getRandomizer(e){if(9==++e)e=1;return e}function watchclock(){1==autoload&&(tm=setInterval(function(){new_clock()},3e3))}console.log(autoload),watchclock(),$(".show_featimg").mouseenter(function(){$(".show_featimg").removeClass("active"),$(".featimg_sec").hide(),$(this).addClass("active"),$("#"+$(this).attr("custom")).show(),clearInterval(tm),autoload=0,watchclock()}),$(".show_featimg").mouseleave(function(){clearInterval(tm),autoload=1,watchclock()});

	$(function(){
    $('.app-info').click(function(){
		  $('.app-info-container').hide();
		  $('.div'+$(this).attr('target')).show(500);
	});
	
	$( ".app-info-close" ).click(function() {
		  $('.app-info-container').hide(500);
	});

});

// // Welcome area init
	if ($('.owl-carousel').length) {
		var welcomeSlider = $(".owl-carousel");
		welcomeSlider.owlCarousel({
			loop: true,
			margin: 10,
			nav: false,
			margin: 30,
			items: 1
		});

		checkClasses();
		welcomeSlider.on('translated.owl.carousel', function (event) {
			checkClasses();
		});

		function checkClasses() {
			var total = $('.owl-carousel .owl-stage .owl-item.active').length;

			$('.owl-carousel .owl-stage .owl-item').removeClass('firstActiveItem');

			$('.owl-carousel .owl-stage .owl-item.active').each(function (index) {
				if (index === 0) {
					$(this).addClass('firstActiveItem');
				}
			});
		}

		$('.base .prev').click(function () {
			welcomeSlider.trigger('prev.owl.carousel');
		});

		$('.base .next').click(function () {
			welcomeSlider.trigger('next.owl.carousel');
		});
	}