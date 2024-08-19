const texto = document.querySelector(".paragrafos")
const p = texto.querySelectorAll("p")

const bodyStyle = getComputedStyle(document.body)
const corDoFundo = bodyStyle.backgroundColor

for (el of p) {
    el.style.backgroundColor = corDoFundo
    el.style.color = "white"
}