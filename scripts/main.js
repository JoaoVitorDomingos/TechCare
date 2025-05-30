// Impede que o usuário scrolla a página quando o menu expandir em telas de celulares
const checkbox = document.getElementById("menu_check")

checkbox.addEventListener("change", () => {
    if(window.innerWidth < 768) {
        if(checkbox.checked) {
            document.body.classList.add("no-scroll")
        } else {
            document.body.classList.remove("no-scroll")
        }
    }
})

// Irá fechar o menu expandido ao apertar em um dos links
const linksMenu = [...document.querySelectorAll("#menu_expandido>nav>ul>li>a")]

//console.log(linksMenu)

linksMenu.forEach(link => {
    link.addEventListener("click", () => {
        checkbox.checked = false

        checkbox.dispatchEvent(new Event("change"))
    })
})

