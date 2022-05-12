gsap.to(".judul", {
    duration: 2000,
    text: "Hi NAMAKU ANDREANSYAH",
    ease: "none",
    delay: 1
});

var imgArray = [
    'img/bg.jpg',
    'img/a1.jpeg',
    'img/a3.jpeg'
];
var curIndex = 0;
var imgDuration = 2000;

function slideShow() {
    document.querySelector('.banner').style.backgroundImage = 'url(' + imgArray[curIndex] + ')';
    curIndex++;
    if (curIndex == imgArray.length) {
        curIndex = 0;
    }
    setTimeout("slideShow()", imgDuration);
}
slideShow();