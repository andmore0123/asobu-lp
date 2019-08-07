var App = function() {
}

// スムーススクロール
App.scroll = function(target) {

    if($(target).length != 0) {
        $('body,html').animate({scrollTop:$(target).offset().top}, 1000, 'swing');
    }
}