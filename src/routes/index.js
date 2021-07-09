import Header from "../components/header";
import Main from "../views/Main";
import Footer from "../components/footer";
import getHash from "../utils/getHash";
import Resultados from "../views/Resultado";
import Error404 from "../views/Error404";
import Found from "../utils/Found";
import lookingFor from "../utils/lookingFor";

const routes = {
    "": Main(),
    "#resultado/": Resultados(),
    "#filtros/": Error404(),
    "#save/": Error404()
}

const router = async () =>{
    
    const header = null || document.getElementById('header')
    const main = null || document.getElementById('main')
    const footer = null || document.getElementById('footer')
    header.innerHTML = await Header()
    footer.innerHTML = await Footer()
    let hash = getHash()
    let render = routes[hash] ? routes[hash] : Main();
    main.innerHTML = await render;
    Found();
    
    
}

export default router