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

// Ativa ou Desativa o Dark Mode
const iconesTheme = [...document.querySelectorAll(".theme-light"), ...document.querySelectorAll(".theme-dark")]

function desativarIconesTheme(tipo) {
    iconesTheme.forEach(icone => {
        if(tipo == "light") {
            if(icone.classList.contains("theme-light")) {
                icone.style.display = "none"
            } else {
                icone.style.display = "block"
            }
        } else {
            if(icone.classList.contains("theme-dark")) {
                icone.style.display = "none"
            } else {
                icone.style.display = "block"
            }
        }
    })
}

function ativarDarkMode() {
    document.body.classList.add("dark-mode")
    localStorage.setItem("darkMode", "ativado")
    desativarIconesTheme("light")
}

function desativarDarkMode() {
    document.body.classList.remove("dark-mode")
    localStorage.setItem("darkMode", "desativado")
    desativarIconesTheme("dark")
}

function acessarPrefUsu() {
    let darkMode = localStorage.getItem("darkMode")

    if(darkMode == null) {
        const preferenciaUsu = window.matchMedia("(prefers-color-scheme: dark)").matches

        if(preferenciaUsu) {
            ativarDarkMode()
        } else {
            desativarDarkMode()
        }
        
    } else {
        if(darkMode == "ativado") {
            ativarDarkMode()
        } else {
            desativarDarkMode()
        }
    }

    
}

//console.log(iconesTheme)

iconesTheme.forEach(icone => {
    icone.addEventListener("click", evt => {
        let darkMode = localStorage.getItem("darkMode")

        //console.log(darkMode)

        if(darkMode == "ativado") {
            //console.log("desativar")
            desativarDarkMode()
        } else {
            //console.log("ativar")
            ativarDarkMode()
        }
    })
})
