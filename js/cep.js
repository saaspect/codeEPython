$(function(){"use strict";$(window).on("load",function(){$("#preloader").fadeOut(600);$(".preloader-bg").delay(400).fadeOut(600);setTimeout(function(){$(".fadeIn-element").delay(600).css({display:"none"}).fadeIn(800);},0);});$(".slick-about, .slick-services").slick({arrows:true,initialSlide:0,infinite:true,slidesToShow:1,slidesToScroll:1,prevArrow:"<i class='slick-prev icon ion-chevron-left'></i>",nextArrow:"<i class='slick-next icon ion-chevron-right'></i>",fade:false,autoplay:false,autoplaySpeed:4000,cssEase:"ease",speed:500});$(".slick-fullscreen-slideshow").slick({arrows:false,initialSlide:0,infinite:true,slidesToShow:1,slidesToScroll:1,fade:true,autoplay:true,autoplaySpeed:4000,cssEase:"ease",speed:1600,draggable:true,dots:false,pauseOnDotsHover:false,pauseOnFocus:false,pauseOnHover:false});$("#works-page-img-carousel").owlCarousel({loop:false,center:false,items:3,margin:0,autoplay:false,autoplaySpeed:1000,autoplayTimeout:5000,smartSpeed:450,nav:true,navText:["<i class='owl-custom ion-chevron-left'></i>","<i class='owl-custom ion-chevron-right'></i>"],responsive:{0:{items:1},768:{items:2},1170:{items:3}}});$("#news-page-img-carousel").owlCarousel({loop:true,center:false,items:2,margin:0,autoplay:false,autoplaySpeed:1000,autoplayTimeout:5000,smartSpeed:450,nav:true,navText:["<i class='owl-custom ion-chevron-left'></i>","<i class='owl-custom ion-chevron-right'></i>"],responsive:{0:{items:1},768:{items:2},1170:{items:2}}});$("#home-page-img-carousel").owlCarousel({loop:true,center:true,items:3,margin:0,autoplay:true,autoplaySpeed:1000,autoplayTimeout:5000,smartSpeed:450,nav:false,responsive:{0:{items:2},768:{items:2},1170:{items:3}}});$(".popup-photo").magnificPopup({type:"image",gallery:{enabled:true,tPrev:"",tNext:"",tCounter:"%curr% / %total%"},removalDelay:300,mainClass:"mfp-fade"});$(".menu-state").on("click",function(){$("#menu-mobile").removeClass("activated");$("#menu-mobile-caller").removeClass("lines-close");});$("a.menu-state").on("click",function(){$("a.menu-state").removeClass("active");$(this).addClass("active");});$("#fullpage").fullpage({anchors:["home","howitworks","services","works","contact"],navigation:true,navigationPosition:"right",navigationTooltips:["Home","howitworks","Services","Works","contact"],responsiveWidth:900,autoScrolling:true,scrollBar:false,afterResponsive:function(isResponsive){}});$("#bgndVideo").YTPlayer();$(".c-btn-news").on("click",function(){var divClass=$(this).attr("data-id");if($(this).hasClass("open")){$(this).removeClass("open");$("."+divClass).addClass("open");}else{$(this).addClass("open");$("."+divClass).addClass("open");}});$(".inverse-dark").on("click",function(){$(".panel-left, .panel-right").removeClass("open");});$("form#form").on("submit",function(){$("form#form .error").remove();var s=!1;if($(".requiredField").each(function(){if(""===jQuery.trim($(this).val()))$(this).prev("label").text(),$(this).parent().append('<span class="error">This field is required</span>'),$(this).addClass("inputError"),s=!0;else if($(this).hasClass("email")){var r=/^([\w-\.]+@([\w-]+\.)+[\w-]{2,4})?$/;r.test(jQuery.trim($(this).val()))||($(this).prev("label").text(),$(this).parent().append('<span class="error">Invalid email address</span>'),$(this).addClass("inputError"),s=!0);}}),!s){$("form#form input.submit").fadeOut("normal",function(){$(this).parent().append("");});var r=$(this).serialize();$.post($(this).attr("action"),r,function(){$("form#form").slideUp("fast",function(){$(this).before('<div class="success">Your email was sent successfully.</div>');});});}
return!1;});$(".contact-modal-launcher, .contact-modal-closer").on("click",function(){if($(".contact-modal").hasClass("open")){$(".contact-modal").removeClass("open").addClass("close");}else{$(".contact-modal").removeClass("close").addClass("open");}});$(".navigation-icon, .logo").on("click",function(){$(".contact-modal").removeClass("open").addClass("close");});$(".show-skillbar").appear(function(){$(".skillbar").skillBars({from:0,speed:4000,interval:100,decimals:0});});$(".facts-counter-number").appear(function(){var count=$(this);count.countTo({from:0,to:count.html(),speed:1200,refreshInterval:60});});var timelineSwiper=new Swiper(".timeline .swiper-container",{direction:"vertical",autoplay:false,speed:1600,spaceBetween:0,loop:false,mousewheelControl:false,keyboardControl:true,pagination:".swiper-pagination",paginationBulletRender:function(swiper,index,className){var year=document.querySelectorAll(".swiper-slide")[index].getAttribute("data-year");return'<span class="'+className+'">'+year+'</span>';},nextButton:".swiper-button-next",prevButton:".swiper-button-prev",paginationClickable:true,breakpoints:{768:{direction:"horizontal",}}});$.fn.duplicate=function(count,cloneEvents,callback){var stack=[],el;while(count--){el=this.clone(cloneEvents);callback&&callback.call(el);stack.push(el.get()[0]);}
return this.pushStack(stack);};$("<div class='vertical-lines-wrapper'></div>").appendTo(".vertical-lines");$("<div class='vertical-effect'></div>").duplicate(4).appendTo(".vertical-lines-wrapper");});$(".c-btn-news").on("click",function(){target=$(".news-page-img-wrapper");$("html, body").animate({scrollTop:target.offset().top},500);});$(".contact-modal-launcher").on("click",function(){target=$(".contact-reset");$("html, body").animate({scrollTop:target.offset().top},500);});