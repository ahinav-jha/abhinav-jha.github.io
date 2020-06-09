document.addEventListener("DOMContentLoaded", () => {
    const more = document.querySelector(".view-more")

    more.onclick = () => {
        for (x = 0; x < 3; x++) {
            document.querySelector(".hide").classList.add("appear")
            document.querySelector(".hide").classList.remove("hide")
        }
        more.setAttribute("class", "hide")
    }
})