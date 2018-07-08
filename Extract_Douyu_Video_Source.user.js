var video = document.querySelector('#video');
var source = video.src;
document.querySelector('.video-describe-box').innerHTML = '<a href="' + source + '">' + source + '</a>';
