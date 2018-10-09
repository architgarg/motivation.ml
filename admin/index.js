const error = $('.error')[0];

function postNewVideo(url) {
    $.ajax({
        url: 'https://us-central1-faad-motivation.cloudfunctions.net/api/videos',
        type: 'POST',
        data: {url: url},
        success: function () {
            setErrorMsg('');
            $('#url').val('');
        },
        error: function (error) {
            setErrorMsg('Server Internal Error');
        }
    });
}

function validateUrl() {
    const regex = /^.*(?:(?:youtu\.be\/|v\/|vi\/|u\/\w\/|embed\/)|(?:(?:watch)?\?v(?:i)?=|&v(?:i)?=))([^#&?]*).*/;
    const url = $('#url').val();

    if (!url.match(regex)) {
        setErrorMsg('Please post a valid a URL');
    } else {
        postNewVideo(url);
    }
}

function setErrorMsg(msg) {
    $('.error')[0].innerHTML = msg;
}