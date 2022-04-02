let burger = document.querySelector(".main__header_burger")

burger.addEventListener("click", function(){
    document.querySelector(".main__header_burger").classList.toggle("main__header_burger_active")
    document.querySelector(".main__header_burger_list").classList.toggle("main__header_burger_list_active")
    document.querySelector("body").classList.toggle("lock")
})

let arrow = document.querySelector(".arrow")

window.addEventListener("scroll", function(){
    if (scrollY >= 300) {
        arrow.classList.add("arrow__visibility")
    } else  {
        arrow.classList.remove("arrow__visibility")
    }
})

arrow.addEventListener("click", function(){
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    })
})