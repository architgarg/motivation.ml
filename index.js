$(document).ready(function () {
    $.ajax({
        url: 'http://www.mocky.io/v2/5bb7a85f3000005400f93ab8',
        type: 'GET',
        dataType: 'json',
        success: function (data) {
            $('#video-iframe').attr('src', data.url);
        },
        error: function (error) {
            console.log('Error ', error);
        }
    });
});