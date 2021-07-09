import "./assets/style.css";
import  "./assets/media-querys.css";
import 'bootstrap';
import lookingFor from "./utils/lookingFor";


import router from "./routes";

window.addEventListener("load", router);

window.addEventListener("hashchange", () => {
    router(window.location.hash);
  });
  window.addEventListener('click', lookingFor);
 