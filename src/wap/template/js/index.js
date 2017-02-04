$(document).ready(function(){

    var aBanner = [];
    //형식 안내 --> url: '상품링크 주소'
    aBanner.push({url: '',  img: '/upload/main1.jpg'});
    aBanner.push({url: '',  img: '/upload/main2.jpg'});
    aBanner.push({url: '',  img: '/upload/main3.jpg'});


    var iNo		  = 0;		//
    var iDuration = 7000;   //롤링되는 시간
    var iCount    = aBanner.length;
    var iWidth    = $('.visual_area').width();
    var iHeight   = $('.visual_area').height();
    var sOnBtn    = '/upload/btn_on.png';
    var sOffBtn   = '/upload/btn_off.png';
    var iEffectCount  = 3;      //정의된 이벤트 수


    /**
     * 효과정의
     * 0, 천천이 fadeout 시킨
     * 1, 천천히 slideUp
     * 2, 왼쪽으로 이동
     * 3, 위로 이동
     * 4, Random 위의 효과를 랜돔하게 보여줍니다.
     */
    var iEffect   = 0;
    init();
    oInterval = setInterval(loop, iDuration);
    /**
     * 초기 기능 버튼등을 활성화
     */
    function init() {
        $('.visual_image').html(template(aBanner[0], 10));

        var aHtml = [];
        var sSwitch = '';

        for(var i=0; i<iCount; i++) {
            sSwitch = i === 0 ? sOnBtn : sOffBtn;
            aHtml.push('<img src="'+sSwitch+'" alt="배너버튼" style="padding-left:3px;" no="'+i+'" />');
        }
        $('.visual_btn').html(aHtml.join('')).find('img').css({cursor:'pointer'}).mouseover(function() {
            clearInterval(oInterval);
            iNo = Number($(this).attr('no')) - 1;
            iNo = iNo === -1 ? (iCount-1) : iNo;
            oInterval = setInterval(loop, iDuration);
            loop();
        });
    }


    function template(aBanner,zIndex ) {
        return '<a href="'+aBanner.url+'"><img src="'+aBanner.img+'" alt="배너" style="z-index:'+zIndex+'; position:absolute; top:0px; left:0;" /></a>';
    }

    function loop() {

        iNo++;
        iNo = iCount === iNo ? 0 : iNo;


        $('.visual_btn img').each(function(iBtnNo) {
            var sSwitch =  (iBtnNo === iNo) ? sOnBtn : sOffBtn;
            $(this).attr('src', sSwitch);
        });


        $('.visual_image').append(template(aBanner[iNo], 9));

        var iRand = iEffect == 4 ? (Math.floor(Math.random() * iEffectCount)) : iEffect;


        effects($('.visual_image img:first').css({zIndex:10}), iRand);
    }



    function effects(node, iRand) {
        var removeNode = function() {
            $(this).remove();
        };

        switch(iRand) {
            case 0:
                $(node).fadeOut('slow', removeNode);
                break;

            case 1:
                $(node).slideUp('slow', removeNode);
                break;

            case 2:
                $(node).animate({"left": iWidth+"px"}, 500, removeNode);
                break;

            case 3:
                $(node).animate({"top": iHeight+"px"}, 500, removeNode);
                break;

            default :
                $(node).fadeOut('slow', removeNode);

        }
    }
    var oSlide          = $('#slide-product .prdList');
    var iSlideItemWidth = oSlide.find('li').width();
    var iSlideItemCount = oSlide.find('li').length;
    var iSlideWidth     = iSlideItemWidth * iSlideItemCount;
    oSlide.css({left:0, width:iSlideWidth});

    var oSlide2         = oSlide.clone().prependTo('#slide-product');
    var iSpeed          = 0;
    var iSlideShow      = 0;
    var oRightTime      = null;
    var oLeftTime       = null;
    var bLeftFlow       = true;

    /** 초기화 **/
    var init = function() {
        oSlide2.css('left',iSlideWidth+iSlideShow);
        oLeftTime       = setInterval(slideLeft, 30);
    }();


    //상품에 마우스를 올리면 흐름 멈추기
    $('.prdList').mouseenter(function() {
        pause();
    }).mouseleave(function() {
        var event = (bLeftFlow) ? slideLeft : slideRight;
        oLeftTime=setInterval(event,30);
    });


    // Left event //
    function slideLeft() {

        var iLeft1 = parseInt(oSlide.css('left'));
        var iLeft2 = parseInt(oSlide2.css('left'));

        if(iLeft1 > (iSlideWidth*(-1)+8)) {
            oSlide.css('left', iLeft1-iSpeed);
        } else {
            oSlide.css('left', iLeft2+iSlideWidth+iSlideShow);
        }

        if(iLeft2 > (iSlideWidth*(-1)+8)) {
            oSlide2.css('left', iLeft2-iSpeed);
        } else {
            oSlide2.css('left', iLeft1+iSlideWidth+iSlideShow);
        }
        bLeftFlow = true;
    }


    // Right event //
    function slideRight() {
        var iLeft1 = parseInt(oSlide.css('left'));
        var iLeft2 = parseInt(oSlide2.css('left'));

        if(iLeft1 < (iSlideWidth+8)) {
            oSlide.css('left', iLeft1+iSpeed);
        } else {
            oSlide.css('left', iLeft2+iSlideWidth*(-1)+iSlideShow);
        }

        if(iLeft2 < (iSlideWidth+8)) {
            oSlide2.css('left', iLeft2+iSpeed);
        } else {
            oSlide2.css('left', iLeft1+iSlideWidth*(-1)+iSlideShow);
        }
        bLeftFlow = false;
    }


    // 좌우버튼 활성화
    $('#slide-product .arrow-left, #slide-product .arrow-right').mouseover(function() {
        pause();

        iSpeed = 2;
        var event = ($(this).hasClass('arrow-left')) ? slideLeft : slideRight;
        oLeftTime=setInterval(event,30);
    }).mouseout(function() {
        iSpeed = 0;
    });


    //이벤트 멈춤
    function pause() {
        clearInterval(oRightTime);
        clearInterval(oLeftTime);
    }





});

// 加入收藏 兼容360和IE6
function shoucang(sTitle,sURL)
{
    try
    {
        window.external.addFavorite(sURL, sTitle);
    }
    catch (e)
    {
        try
        {
            window.sidebar.addPanel(sTitle, sURL, "");
        }
        catch (e)
        {
            alert("加入收藏失败，请使用Ctrl+D进行添加");
        }
    }
}