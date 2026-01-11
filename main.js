const burger = document.getElementById("burger")
const nav = document.getElementById("nav")

burger.onclick = () => {
  nav.classList.toggle("active")
}

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if(entry.isIntersecting){
      entry.target.classList.add("visible")
    }
  })
})

document.querySelectorAll(".reveal").forEach(el => observer.observe(el))
