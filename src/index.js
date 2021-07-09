import "./assets/style.css";
import  "./assets/media-querys.css";
import 'bootstrap';



import router from "./routes";

window.addEventListener("load", router);

window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
  