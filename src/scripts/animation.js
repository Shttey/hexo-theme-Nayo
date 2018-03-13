
module.exports = {
    init: initArticleScroll         
}

//----------------
// index page
// article scroll In
//----------------

function initArticleScroll(){


    // get window params
    var wH         = $(window).height();
    var wScrollTop = $(window).scrollTop();

    // get article 
    var obj     = $('.article'); 
    var objH    = $('.article').outerHeight();

    // check (is null)
    if(obj.length <= 0 ) return ;

    // get top of article
    var num = [];
    for(let i = 0 ; i < obj.length ;  i++ ){

        num.push( obj.eq(i).offset().top + ( objH/3 )); 

    }

    // the frist articles
    if( obj.eq(0) ){

        obj.eq(0).addClass('scrollIn');

    }

    // check (is visible in window ? ) 
    function judgeScroll(){

        for(var j= 1 ; j < num.length ; j++ ){
            if ( num[j] < (wScrollTop + wH) ) {
                for ( var k = 0 ; k <= j ; k++){
                    obj.eq(k).addClass('scrollIn');
                }
            }
        }
    }
    // init
    judgeScroll();

    // update window params
    $( window ).scroll( function() {
        wH          = $(window).height();
        wScrollTop  = $(window).scrollTop();
        judgeScroll();
    });    
}