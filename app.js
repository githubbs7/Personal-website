let btn = document.querySelector("#menu")
let menu = document.querySelector(".menu")

btn.addEventListener("click", ()=>{
    menu.classList.toggle("toggle")
})
let submit = document.querySelector(".submit")
let all = document.querySelectorAll(".itext, textarea")
submit.addEventListener("click", ()=> {
    setTimeout(()=>{
    all.forEach((a)=> {
    a.value = ""
})},3000)
})


let git = document.querySelectorAll(".github")
git.forEach((g) => {
    g.addEventListener("click", function () {
    let show = this.nextElementSibling;
    show.classList.toggle("center")
    this.parentElement.classList.toggle("blur")
    })
})

// practice

document.querySelector(".submit").addEventListener("click", function () {
    let text = document.querySelector(".submit").innerText
    if (text.length < 5) {
        
    }
})