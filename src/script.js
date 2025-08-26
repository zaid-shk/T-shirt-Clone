// let body = document.querySelector("body")
// let nav = document.querySelector('#nav')
// let page1 = document.querySelector('#page1')
let all = document.querySelector('*')

var x = document.querySelector("#sun");
x.addEventListener('click', function () {
    if (x.style.display === "none") {
        x.style.display = "block";
        moon.style.display = "none"
        all.style.background = "black"
        all.style.color = "#F9FAFB"
    } else {
        console.log("Dark mode")
        x.style.display = "none";
        moon.style.display = 'block'
        console.log("hello");
        all.style.background = "#F9FAFB"
        all.style.color = "black"
        document.querySelector('body').classList.toggle("dark");
    }
});
var moon = document.querySelector("#dark #moon")
moon.addEventListener('click', function () {
    if (moon.style.display === "none") {
        x.style.display = "none";
        moon.style.display = "block"
        all.style.background = "#F9FAFB"
        all.style.color = "black"
    } else {
        console.log("light mode")
        x.style.display = "block";
        moon.style.display = 'none'
        console.log("hello");
    }
})
