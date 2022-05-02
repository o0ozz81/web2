(function($){
  //console.log($);
  var gangwon = {
    init: function(){
      this.header();
      this.section1();
      this.section2();
      this.footer();
    },
    header: function(){
        //마우스 + 키보드 접근성 고려한 것 ! 
        //객체(object) 형식의 이벤트
        $('.main-btn').on({
          mouseenter: function(){ 
            $('.sub').stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);
          
            $('.main-btn').removeClass('on');
            $(this).addClass('on');
          },
          focusin: function(){
            $('.sub').stop().fadeOut(0);
            $(this).next().stop().fadeIn(300);
          
            $('.main-btn').removeClass('on');
            $(this).addClass('on');
          }
        });
        $('#nav').on({
          mouseleave : function(){
            $('.sub').stop().fadeOut(300);
            $('.main-btn').removeClass('on');
          }
        });
    },
    section1: function(){
        //메인슬라이드
        let cnt=0;

        //1.메인슬라이드 함수
        function mainSlide(){
          console.log('보이는 슬라이드 =페이드인',cnt);
          console.log('사라지는 슬라이드 = 페이드 아웃',cnt===0?2:cnt-1);
          $('.slide').css({zIndex:1}).animate({opacity:1},0); //초기화
          $('.slide').eq(cnt).css({zIndex:2}); //보인상태 그대로 유지
          $('.slide').eq(cnt===0?2:cnt-1).css({zIndex:3}).animate({opacity:0},1000); //사라져 
        }
        //2.다음카운트 함수
        function nextCount(){
          cnt++;//0 1 2
          cnt>2?cnt=0:cnt;
          mainSlide();
        }
        //3.자동타이머 함수
        function autoTimer(){
          setInterval(nextCount,3000);
        }autoTimer();
    },
    section2: function(){
        /* 공지사항 notice & 갤러리 탭메뉴 클릭 이벤트 
         공지사항 눌러져있으니까 갤러리 버튼부터 작업 */
         //갤러리버튼 모두 온 추가
        $('.gallery-btn').on({
          click: function(){ // 마우스 클릭 그리고 키보드는 엔터(Enter)
            $('.notice-btn').addClass('on');
            $('.gallery-btn').addClass('on');
            $('.notice-box').addClass('on');
            $('.gallery-box').addClass('on');
          }
        });
        //공지사항버튼
        $('.notice-btn').on({  // 마우스 클릭 그리고 키보드는 엔터(Enter)
          click: function(){
            $('.notice-btn').removeClass('on');
            $('.gallery-btn').removeClass('on');
            $('.notice-box').removeClass('on');
            $('.gallery-box').removeClass('on');
          }
        });
        //레이어팝업창 
        $('.link-btn').on({ // 마우스 클릭 그리고 키보드는 엔터(Enter)
          click: function(){
            $('#modal').stop().fadeIn(300);
          }
        });
        //레이어팝업창 닫기
        $('.close-btn').on({
          click : function(){
            $('#modal').stop().fadeOut(300);
          }
        });
    },
    footer: function(){

    }
  }
  gangwon.init();

})(jQuery);