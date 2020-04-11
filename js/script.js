const app = {}

app.smoothScroll = function () {
    $('a').smoothScroll({
        autoFocus: false,
        easing: 'swing',
        speed: '400',
    });
}

//initialize the app
app.init = function () {
    app.smoothScroll();
}

//call the init function after the page loads
$(function () {
    app.init();
})
