window.addEventListener("load", () => {
    const cards = [...document.querySelectorAll(".card")]
    cards.forEach(item => {
        const heartIcon = item.querySelector(".heart-icon")

        heartIcon.addEventListener("click", changeIcon)

        function changeIcon(event) {
            console.log(`2222`)
            if (event.target.classList == "heart-icon fa-regular fa-heart") {
                event.target.classList = `heart-icon fa-solid fa-heart`
            } else {
                event.target.classList = `heart-icon fa-regular fa-heart`
            }
        }
    })
})