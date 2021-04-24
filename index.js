var $video = $('.project-vid');

$video.on('mouseenter',function(){
    $video.get(0).play();
});

$video.on('mouseout',function(){
    $video.get(0).pause();
});