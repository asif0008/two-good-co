let videoContainer = document.querySelector('.video-container');
let playBtn = document.querySelector('.play');

videoContainer.addEventListener('mouseenter', () => {
    gsap.to(playBtn, {
        scale:1,
        opacity:1
    })
})
videoContainer.addEventListener('mouseout', () => {
    gsap.to(playBtn, {
        scale:0,
        opacity:0
    })
})