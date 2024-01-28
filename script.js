function toggleMode() {
  const html = document.documentElement

  /*if(html.classList.contains('light')){
    html.classList.remove('light')
  }
  else{
    html.classList.add('light')
  }*/

  html.classList.toggle("light")

  const image = document.querySelector("#profile img")
  if (html.classList.contains("light")) {
    image.setAttribute("src", "./assets/avatar-light.png")
    image.setAttribute("alt", "image de mayke brito")
  } else {
    image.setAttribute("src", "./assets/avatar.png")
    image.setAttribute("alt", "Foto de Ednilson Silvério na praia.")
  }
}
