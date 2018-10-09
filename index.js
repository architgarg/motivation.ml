const player = videojs('vid1',
    {
        "controls": false,
        "autoplay": true,
        "preload": "auto",
        "youtube": {
            "modestbranding": 1,
            "iv_load_policy": 3,
            "origin": 'https://www.faadmotivation.ml',
        }
    });

let key = 0;
let videos = [];

$(function () {
    $.ajax({
        url: 'https://us-central1-faad-motivation.cloudfunctions.net/api/videos',
        type: 'GET',
        success: function (data) {
            if (data.length) {
                videos = data;
                setVideo(videos[0].videoId);
            } else {
                // TODO: show a CTA here.
                console.log('CTA');
            }
        },
        error: function (error) {
            setVideo('7Km0uAOsN8E');
            console.log('Error ', error);
        }
    });
});

player.on('ended', () => {
    key = key + 1;

    if (key < videos.length) {
        setVideo(videos[key].videoId);
    } else {
        // TODO: show CTA here.
    }
});

function setVideo(videoId) {
    player.src({type: 'video/youtube', src: 'https://www.youtube.com/watch?v=' + videoId});
    player.poster('https://img.youtube.com/vi/' + videoId + '/maxresdefault.jpg');
    player.play();
}