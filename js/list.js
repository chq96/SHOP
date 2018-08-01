$(function(){
    $('.fl').mouseover(function(){
        $('.white_space').show();
        $('.site-layer').show();
    }).mouseout(function(){
        $('.white_space').hide();
        $('.site-layer').hide();
    });

    $('.jd1').mouseover(function() {
        $('.jd1 .white_space1').show();
        $('.myjd').show();
    }).mouseout(function() {
        $('.jd1 .white_space1').hide();
        $('.myjd').hide();
    });

    $('.ph_jd').mouseover(function() {
        $('.ph_jd .white_space1').show();
        $('.p_jd').show();
    }).mouseout(function() {
        $('.ph_jd .white_space1').hide();
        $('.p_jd').hide();
    });

    $('.atten_jd').mouseover(function() {
        $('.atten_jd .white_space1').show();
        $('.atten').show();
    }).mouseout(function() {
        $('.atten_jd .white_space1').hide();
        $('.atten').hide();
    });

    $('.cl_serve').mouseover(function() {
        $('.cl_serve .white_space1').show();
        $('.serve_list').show();
    }).mouseout(function() {
        $('.cl_serve .white_space1').hide();
        $('.serve_list').hide();cl_serve
    });

    $('.naviga').mouseover(function() {
        $('.naviga .white_space1').show();
        $('.naga_list').show();
    }).mouseout(function() {
        $('.naviga .white_space1').hide();
        $('.naga_list').hide();
    });

    // function mou(m){
    //     $+"("+"'"+"."+m+"."+")".mouseover(function(){
    //         $+"("+"'"+"."+m+" .white_space1"+"'"+")".show();
    //     }).mouseout(function(){
    //         $+"("+"'"+"."+m+" .white_space1"+"'"+")".hide();
    //     });
    // }

    $('.clf').mouseenter(function(){
        $('.clf_sele').show();
    }).mouseleave(function(){
        $('.clf_sele').hide();
    });

    $('.advertising_img>div').click(function(){
        $('.advertising').hide();
    });

    $('.gw-bus').mouseenter(function(){
        $('.gw-bus2').show();
    }).mouseleave(function(){
        $('.gw-bus2').hide();
    });

     $('.weixin_sel').mouseenter(function(){
        $('.weixin_pop').show();
    }).mouseleave(function(){
        $('.weixin_pop').hide();
    });


    // 轮播图开始
    var now = 0;
    var len = $('.slider_ul>li').length;
    function run() {
        timer = setInterval(function() {
            $('.slider_ul>li').hide();

            if(now>=len-1) {
                $('.carousel_num>li').css({"background":"none","box-shadow":"none"});
                now = 0;
            }else {
                now++;
            }
            $('.slider_ul>li:eq('+now+')').fadeIn();
            $('.carousel_num>li:eq('+now+')').css({"background":"#fff","box-shadow":"2px 0px 10px #fff,-2px 0px 10px #fff"});
        },2000);
    }
    // run();

    $('.put_slider').mouseenter(function(){
        clearInterval(timer);
    }).mouseleave(function() {
        run();
    });

    $('.carousel_num>li').mouseenter(function(){
        clearInterval(timer);
        $('.slider_ul>li').hide();
        $('.carousel_num>li').css({"background":"none","box-shadow":"none"});
        now = $(this).index();
        $('.slider_ul>li:eq('+now+')').show();
        $('.carousel_num>li:eq('+now+')').css({"background":"#fff","box-shadow":"2px 0px 10px #fff,-2px 0px 10px #fff"});
    });

    // 轮播图结束

    $('.storelogo').mouseover(function() {
        $(this).css('animation','z_ro .5s');
    }).mouseout(function() {
        $(this).css('animation','f_ro .5s');
    });


    //回到顶部
    $('#go_top').hide();

    $(window).scroll(function(){
        if($(window).scrollTop()>200){
            $('#go_top').fadeIn(300);
        }else{
            $('#go_top').fadeOut(200);
        }

    });

    $('#go_top').click(function(){

        $('body,html').animate({scrollTop:0},300);
        return false;
    });



    // 滚动条件，等于0走到-140，小于0，走回0
    $('.prev').click(function() {
        var left = parseInt($('.scroll_lit>ul').css('left'));
        if(left==0){
            $('.scroll_lit>ul').animate({left:"-140px"},300);
        }

        if(left<0) {
            $('.scroll_lit>ul').animate({left:"0px"},300);
        }

    });

    $('.next').click(function() {
        var left = parseInt($('.scroll_lit>ul').css('left'));
        if(left==0){
            $('.scroll_lit>ul').animate({left:"-140px"},300);
        }else if(left<0) {
            $('.scroll_lit>ul').animate({left:"0px"},300);
        }
    });


    // 楼层效应
    $('#elevator').hide();

    var heights = [];
    $('#shop>div').each(function(){
        heights.push($(this).offset().top);
    });

    $(window).scroll(function() {
        var top = $(window).scrollTop();
        if(top>=heights[0]) {
            $('#elevator').fadeIn(300);
        }else if(top<heights[0]) {
            $('#elevator').fadeOut(300);
        }

        var index;

        for(var i=0; i<heights.length; i++) {
            if(top>=heights[i] && top<heights[i+1]) {
                index = i;
                $('#elevator>ul>li').eq(i).css('background','#CCFDF0').siblings().css('background','none');
            }
            else if(top>=heights[heights.length-1]) {
                $('#elevator>ul>li').css('background','none');
            }
        }
    });

    $('#elevator>ul>li').click(function() {
        var index = $(this).index();
        var top = heights[index];
        console.log(top);
        $('body,html').animate({scrollTop:top},800);
    });


    $('.exercise_ul1>li').mouseenter(function() {
        now = $(this).index();
        $('.exercise_ul1>li:eq('+now+')>a>img').css({"transform":"scale(1.03)","transition":"all 1s"});
    }).mouseleave(function(){
        $('.exercise_ul1>li:eq('+now+')>a>img').css({"transform":"none"});
    });

    $('.exercise_ul2>li').mouseenter(function() {
        now = $(this).index();
        $('.exercise_ul2>li:eq('+now+')>a>img').css({"transform":"scale(1.03)","transition":"all 1s"});
    }).mouseleave(function(){
        $('.exercise_ul2>li:eq('+now+')>a>img').css({"transform":"none"});
    });

    $('.tide_ul1>li').mouseenter(function() {
        now = $(this).index();
        $('.tide_ul1>li:eq('+now+')>a>img').css({"transform":"scale(1.03)","transition":"all 1s"});
    }).mouseleave(function(){
        $('.tide_ul1>li:eq('+now+')>a>img').css({"transform":"none"});
    });

    $('.tide_ul2>li').mouseenter(function() {
        now = $(this).index();
        $('.tide_ul2>li:eq('+now+')>a>img').css({"transform":"scale(1.03)","transition":"all 1s"});
    }).mouseleave(function(){
        $('.tide_ul2>li:eq('+now+')>a>img').css({"transform":"none"});
    });

    $('.articles_ul1>li').mouseenter(function() {
        now = $(this).index();
        $('.articles_ul1>li:eq('+now+')>a>img').css({"transform":"scale(1.03)","transition":"all 1s"});
    }).mouseleave(function(){
        $('.articles_ul1>li:eq('+now+')>a>img').css({"transform":"none"});
    });

    $('.articles_ul2>li').mouseenter(function() {
        now = $(this).index();
        $('.articles_ul2>li:eq('+now+')>a>img').css({"transform":"scale(1.03)","transition":"all 1s"});
    }).mouseleave(function(){
        $('.articles_ul2>li:eq('+now+')>a>img').css({"transform":"none"});
    });

    $('.building_ul1>li').mouseenter(function() {
        now = $(this).index();
        $('.building_ul1>li:eq('+now+')>a>img').css({"transform":"scale(1.03)","transition":"all 1s"});
    }).mouseleave(function(){
        $('.building_ul1>li:eq('+now+')>a>img').css({"transform":"none"});
    });

    $('.building_ul2>li').mouseenter(function() {
        now = $(this).index();
        $('.building_ul2>li:eq('+now+')>a>img').css({"transform":"scale(1.03)","transition":"all 1s"});
    }).mouseleave(function(){
        $('.building_ul2>li:eq('+now+')>a>img').css({"transform":"none"});
    });

});

