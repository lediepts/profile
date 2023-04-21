window.onload = function () {
  const menus = document.querySelectorAll(".menu")
  menus.forEach(elm => {
    elm.onclick = function (e) {
      const id = e.target.dataset.to
      const content = document.getElementById(id)
      console.log('main.js:7>>', e, id, content)
      if (content) {
        content.scrollIntoView({ behavior: 'smooth', block: 'start' })
      }
    }
  })
}