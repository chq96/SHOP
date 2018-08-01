$(function() {
    $('.left').click(function() {
        $(this).addClass('selete');
        $('.right').removeClass('selete');
        $('.contcont').show();
        $('.iform').hide();
    });

    $('.right').click(function() {
        $(this).addClass('selete');
        $('.left').removeClass('selete');
        $('.iform').show();
        $('.contcont').hide();
    });


    var move = document.getElementsByClassName('header_log')[0];

    move.onmousedown = function(e) {
        var eve = e||event;
        mouX = eve.clientX - move.offsetLeft;
        mouY = eve.clientY - move.offsetTop;

        document.onmousemove = function(e) {
            var eve = e||event;
            var l = eve.clientX-mouX;
            var t = eve.clientY-mouY;

            console.log(l+":"+t);


            if(l<0) {
                l = 0;
            }else if(l>document.documentElement.clientWidth-move.offsetWidth) {
                l = document.documentElement.clientWidth-move.offsetWidth;
            }

            if(t<0) {
                t = 0;
            }else if(t>document.documentElement.clientHeight-move.offsetHeight+10) {
                t = document.documentElement.clientHeight-move.offsetHeight+10;
            }


            move.style.left = l+'px';
            move.style.top = t+'px';
        }
        document.onmouseup = function() {
            document.onmousemove = null;
            document.onmouseup = null;
        }
    }

    setTimeout(function(){
        $('.cover').show();
    },180000);
});