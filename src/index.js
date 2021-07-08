import css from "./assets/style.css"
import  query from "./assets/media-querys.css"
import 'bootstrap';



import router from "./routes"

window.addEventListener("load", router)

window.addEventListener("hashchange", () => {
    router(window.location.hash);
  })
  