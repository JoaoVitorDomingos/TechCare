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

    let idioma = localStorage.getItem("idioma")
    if(idioma == null) 
        acessarPrefUsuLing()
    else {
        if(idioma == "pt-br") {
            desativarIconesLingua("en")
        } else {
            desativarIconesLingua("pt-br")
            mudarIdioma("en")
        }
    }
}

iconesTheme.forEach(icone => {
    icone.addEventListener("click", evt => {
        let darkMode = localStorage.getItem("darkMode")

        if(darkMode == "ativado") {
            desativarDarkMode()
        } else {
            ativarDarkMode()
        }
    })
})


// Troca a linguagem do site
const iconesLingua = [...document.querySelectorAll(".language")]

function desativarIconesLingua(tipo) {
    iconesLingua.forEach(i => {
        if(tipo == "en") {
            i.getAttribute("data-language") == "en" ? i.style.display = "none" : i.style.display = "block"
        } else {
            i.getAttribute("data-language") == "pt-br" ? i.style.display = "none" : i.style.display = "block"
        }
    })
}

async function mudarIdioma(idioma) {

    function trocarTextos(objIdioma) {
        const elementos = [...document.querySelectorAll("[data-langPath]")]

        elementos.forEach(el => {
            let path = (el.getAttribute("data-langPath")).split("-")
            let finalPath = el.getAttribute("data-lang")

            let objJson = objIdioma[`${path[0]}`]
            for(let i = 1; i < path.length; i++) {
                objJson = objJson[`${path[i]}`]
            }
            let texto = objJson[finalPath]

            if(el.tagName == "INPUT" || el.tagName == "TEXTAREA") {
                if(el.getAttribute("type") == "submit")
                    el.value = texto
                else 
                    el.placeholder = texto
            } else 
                el.innerHTML = texto

        })
    }


    try {
        const resposta = await fetch(`../linguas/${idioma}.json`)

        const arqObj = await resposta.json()

        trocarTextos(arqObj)


    } catch (erro) {
        alert("Erro ao carregar o idioma")
        console.log("Erro: ")
        console.log(erro)
        localStorage.setItem("idioma", "pt-br")
        desativarIconesLingua("en")
    }

}

function trocarLinguagem() {
    let idioma = localStorage.getItem("idioma")

    if(idioma == "en") {
        localStorage.setItem("idioma", "pt-br")
        desativarIconesLingua("en")
        mudarIdioma("pt_br")

    } else {
        localStorage.setItem("idioma", "en")
        desativarIconesLingua("pt-br")
        mudarIdioma("en")
    }
}

function acessarPrefUsuLing() {
    const idiomaUsu = navigator.language

    if(idiomaUsu.startsWith("pt-BR")) {
        localStorage.setItem("idioma", "pt-br")
        desativarIconesLingua("en")
    } else {
        localStorage.setItem("idioma", "en")
        desativarIconesLingua("pt-br")
        mudarIdioma("en")
    }
}

iconesLingua.forEach(i => {
    i.addEventListener("click", trocarLinguagem)
});