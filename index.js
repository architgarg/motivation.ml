var iframe = $('#video-iframe');
var loader = $('.loader');

$(function () {
    $.ajax({
        url: 'http://www.mocky.io/v2/5bb7b3de3000006300f93aca',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            iframe.attr('src', data.url + '?autoplay=1');
        },
        error: function (error) {
            console.log('Error ', error);
        }
    });
});

iframe.on('load', function(){
    loader.hide();
    console.log('WOOT!', arguments);
});