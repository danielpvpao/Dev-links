function toggleMode() {
    const html = document.documentElement
    html.classList.toggle("light")
    
    const img = document.querySelector(".profile img")

    if (html.classList.contains("light")) {
        img.setAttribute("src", "./assets/avatar-light.png")
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo com óculos escuros, usando casaco e blusa preta.")
    } else {
        img.setAttribute("src", "./assets/avatar.png")
        img.setAttribute("alt", "Foto de Mayk Brito sorrindo com óculos, usando casaco e blusa preta.")
    }
}


