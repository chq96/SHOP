$(function() {

    //点击广告关闭按钮隐藏广告
    $('.advertising_img>div').click(function() {
        $('.advertising').fadeOut(300);
    });


    $('.nr_nav>li').eq(-1).mouseenter(function(){
        $('.dimension_jd').show();
    }).mouseleave(function() {
        $('.dimension_jd').hide();
    });


    $(".site>li").mouseenter(function(){
        $('.site-layer').show();
        $('.white_space').show();
    }).mouseleave(function(){
        $('.site-layer').hide();
        $('.white_space').hide();
    });

    $(".nr_nav>li:nth-child(5)").mouseenter(function(){
        $('.myjd').show();
        $('.white_space1').show();
    }).mouseleave(function(){
        $('.myjd').hide();
        $('.white_space1').hide();
    });

    $(".nr_nav>li:nth-child(11)").mouseenter(function(){
        $('.serve_list').show();
    }).mouseleave(function(){
        $('.serve_list').hide();
    });

    $(".nr_nav>li:nth-child(13)").mouseenter(function() {
        $('.naga_list').show();
    }).mouseleave(function(){
        $('.naga_list').hide();
    });

    $('.gw-bus').mouseenter(function() {
        $('.gw-bus2').show();
        $('.gw-bus').css('border-bottom','none');
    }).mouseleave(function(){
        $('.gw-bus2').hide();
    });

    // 轮播图效果开始
    var now = 0;
    var len = $('.carousel_img>li').length;
    function run() {
        timer = setInterval(function() {
            $('.carousel_img>li').hide();
            $('.carousel_num>li').css({"background":"none","box-shadow":"none"});
            if(now>=len-1) {
                now = 0;
            }else {
                now++;
            }
            $('.carousel_img>li:eq('+now+')').fadeIn();
            $('.carousel_num>li:eq('+now+')').css({"background":"#fff","box-shadow":"2px 0px 10px #fff,-2px 0px 10px #fff"});
        },2000);
    }
    run();

    $('#carousel').mouseenter(function(){
        clearInterval(timer);
    }).mouseleave(function() {
        run();
    });

    $('.carousel_num>li').mouseenter(function(){
        clearInterval(timer);
        $('.carousel_img>li').hide();
        $('.carousel_num>li').css({"background":"none","box-shadow":"none"});
        now = $(this).index();
        $('.carousel_img>li:eq('+now+')').show();
        $('.carousel_num>li:eq('+now+')').css({"background":"#fff","box-shadow":"2px 0px 10px #fff,-2px 0px 10px #fff"});
    });

    $('.btn-left').click(function(){
        $('.carousel_img>li').hide();
        $('.carousel_num>li').css({"background":"none","box-shadow":"none"});
        now--;
        if(now<0) {
            now = len-1;
        }
        $('.carousel_img>li:eq('+now+')').show();
        $('.carousel_num>li:eq('+now+')').css({"background":"#fff","box-shadow":"2px 0px 10px #fff,-2px 0px 10px #fff"});
    });

    $('.btn-right').click(function(){
        $('.carousel_img>li').hide();
        $('.carousel_num>li').css({"background":"none","box-shadow":"none"});
        now++;
        if(now>len-1) {
            now = 0;
        }
        $('.carousel_img>li:eq('+now+')').show();
        $('.carousel_num>li:eq('+now+')').css({"background":"#fff","box-shadow":"2px 0px 10px #fff,-2px 0px 10px #fff"});
    });
    // 轮播图效果结束

    // 选项卡
    $('.col2_item2_nav>a').mouseenter(function() {
        now = $(this).index();
        $('.col2_item2_lit>div').eq(now).show().siblings().hide();
        if(now==0) {
            $('.underline').animate({left:"14px"});
        }else if(now==1) {
            $('.underline').animate({left:"74px"});
        }
    });

    /*$('.classify_ul>li').mouseenter(function(){
        now = $(this).index();
        $('.classify_ul>li:eq('+now+') #classify_item1').show();
    }).mouseleave(function(){
        $('.classify_ul>li:eq('+now+') #classify_item1').hide();
    });
    $('#classify_item1').mouseleave(function(){
        $('#classify_item1').hide();
    })*/

    var hour = document.getElementById('hour');
    var minute = document.getElementById('minute');
    var second = document.getElementById('second');
    function skdown() {
        setInterval(function(){
            var date1 = new Date('2018-5-24');
            var date2 = new Date();
            var mistime = date1.getTime()-date2.getTime();
            var h = Math.floor(mistime/3600000%24);
            var m = Math.floor(mistime/60000%60);
            var s = Math.floor(mistime/1000%60);

            hour.innerHTML = num(h);
            minute.innerHTML = num(m);
            second.innerHTML = num(s);
        },1000);

        function num(a) {
            if(a<10)
                a= '0'+a;
                return a;
        }
    }
    skdown();

    // 图片容器
    var img_lis = document.getElementsByClassName('sk_img')[0];
    // 获取显示图片的容器
    var sk_center = document.getElementsByClassName('sk_center')[0];
    var last = document.getElementsByClassName('last')[0];
    var next = document.getElementsByClassName('next')[0];
    function animate(offset) {
        var nleft = parseInt(img_lis.style.left)+offset;
        // console.log(img_lis.style.left);
        if(nleft<-3200) {
            nleft = 0;
        }
        if(nleft>0) {
            nleft = -3200;
        }

        img_lis.style.left = nleft+'px';
    }
    last.onclick = function() {
        animate(800);
    }

    next.onclick = function() {
        animate(-800);
    }
    // $('.last').click(function(){
    //     $('.l').animate({left:"800px"});
    // });
    // $('.next').click(function(){
    //     $('.l').animate({left:"-800px"});
    // });
    //

    $('.button').click(function(){
        // console.log(132);
        // return;
        window.location.href="details.html";
    });


});