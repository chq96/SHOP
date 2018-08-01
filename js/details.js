$(function() {
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

    $('.menu_list>li:eq(1)').mouseenter(function(){
        $('.menu_list>li:eq(1)>a').css({background:"#000",
    color: "#fff"});
        $('.sub_menu_wrap').show();
    }).mouseleave(function(){
        $('.sub_menu_wrap').hide();
        $('.menu_list>li:eq(1)>a').css({background:"none",
    color: "#000"});
    });


    // 放大镜区域
    $('.spec_items_ul li').mouseenter(function(){
        now = $(this).index();
        $('.spec_items_ul li:eq('+now+')').addClass('red').siblings().removeClass('red');
    });

    $('.spec_items_ul li img').mouseenter(function(){
        $('#smallImg>img').attr('src',$(this).attr('src'));
    });

    // 放大镜效果
    $('#smallImg').mousemove(function(e){
        $('#move,#bigImg').show();

        var x = e.pageX - $(this).offset().left;
        var y = e.pageY - $(this).offset().top;

        var x = x - $('#move').width()/2;
        var y = y - $('#move').height()/2;

        if(x<=0) {
            x = 0;
        }

        if(x>=$('#smallImg').width()-$('#move').width()) {
            x = $('#smallImg').width()-$('#move').width();

        }

        if(y<=0) {
            y = 0;
        }

        if(y>=$('#smallImg').height()-$('#move').height()) {
            y = $('#smallImg').height()-$('#move').height();

        }

        $('#move').css({left:x,top:y});

        var scale = $('#bigImg>img').width()/$('#smallImg>img').width();

        $('#bigImg').scrollLeft(x*scale);
        $('#bigImg').scrollTop(y*scale);

        $('#bigImg>img').attr('src',$('#smallImg>img').attr('src'));
    }).mouseout(function(){
        $('#move,#bigImg').hide();
    });


    // 放大镜旁边的轮播

    $('.sprite_up').click(function() {
        var top = parseInt($('.track_con>ul').css('top'));
        var height = $('.track_con>ul').height();
        if(top==0){
            top=560-height;
            $('.track_con>ul').animate({top:top+"px"},300);
        }else if(top<-560) {
            top=top+560;
            $('.track_con>ul').animate({top:top+"px"},300);
        }else if(top>=-560) {
            $('.track_con>ul').animate({top:"0px"},300);
        }

    });

    $('.sprite_down').click(function() {
        var top = parseInt($('.track_con>ul').css('top'));
        var height = $('.track_con>ul').height();

        if(top>=-2260) {
            top = top-560;
            $('.track_con>ul').animate({top:top+"px"},300);
        }

        if(top<-2260) {
            $('.track_con>ul').animate({top:"0px"},300);
        }
    });

    // 放大镜区域结束

    // 选项卡
    $('.tab_main>ul>li').click(function() {
        now = $(this).index();
        console.log(now);
        $('.tab_main>ul>li:eq('+now+')').addClass('current').siblings().removeClass('current');

        if(now==0) {
            // $('.tab_con').show();
            $('.tab_con').show();
            $('.tab_con1').hide();
        }else if(now==1) {
            $('.tab_con').hide();
            $('.tab_con1').show();
        }
    });

});