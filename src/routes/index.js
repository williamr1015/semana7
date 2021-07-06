import Header from "../components/header";
import Main from "../views/Main";
import Footer from "../components/footer";
const router = async () =>{
    const header = null || document.getElementById('header')
    const main = null || document.getElementById('main')
    const footer = null || document.getElementById('footer')
    header.innerHTML = await Header()
    main.innerHTML = await Main()
    footer.innerHTML = await Footer()
}

export default router