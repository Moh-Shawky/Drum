var k = new Audio(src = "sounds/crash.mp3")
var l = new Audio(src = "sounds/kick-bass.mp3")
var j = new Audio(src = "sounds/snare.mp3")
var w = new Audio(src = "sounds/tom-1.mp3")
var a = new Audio(src = "sounds/tom-2.mp3")
var s = new Audio(src = "sounds/tom-3.mp3")
var d = new Audio(src = "sounds/tom-4.mp3")

var char = 'a';
for (var i = 0; i < 7; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {
        char = this.innerHTML;
        listen(char);
        animationact(char);
    })

}
document.addEventListener("keypress", function (event) {
    listen(event.key);
    animationact(event.key)
})
function listen(char) {
    switch (char) {
        case "w":
            w.play();
            break;
        case "a":
            a.play();
            break;
        case "d":
            d.play();
            break;
        case "k":
            k.play();
            break;
        case "l":
            l.play();
            break;
        case "j":
            j.play();
            break;
        case "s":
            s.play();
            break;
        default:
            break;
    }
}
function animationact(key) {
    var press = document.querySelector("." + key);
    press.classList.add("pressed")
    setTimeout(function () {
        press.classList.remove("pressed")
    }, 100)
}