import logoA from "../assets/img/logo ALTERFLIX.png";
import iconD from "../assets/icons/chevron filtro.png"
import iconB from "../assets/icons/lupa-buscar.png"
import spm from "../assets/img/spiderman.png"
import irm2 from "../assets/img/Iron_Man_2.png"
import antm from "../assets/img/antman.png"
import dpool from "../assets/img/deadpool.png"
const Main = async() => {
    const view = `
    <main class="main-index">
    <section class="main-index-logo">
      <img
        src="${logoA}"
        alt="Logo ALTERFLIX"
      />
      <span>Buscador de peliculas</span>
    </section>
    <section class="main-container-search">
      <div class="main-index-search">
        <span class="icon-search">
        <img src="${iconB}" alt="buscar">
        </span>
        <input
          placeholder="Busca cualquier pelicula ¡Bienvenido!"
          type="text"
          id="inputIndex"
        />
        <span class="index-filtro"><a href="#filtros/">Ver filtros</a></span>
        <span class="icon-down">
        <img src="${iconD}" alt="filtro">
        </span>
      </div>
      <a href="/#resultado/"><button id="buttonIndex">BUSCAR</button></a>
    </section>
    <div class="titlecarousel"><h2>MAS POPULARES</h2></div>
    <section class="carousel">
        <div class="carousel__container">
            <div class="carousel-item">
                <img class="carousel-item__img" src="${spm}">
            </div>
            <div class="carousel-item">
            <img class="carousel-item__img" src="${irm2}">
            </div>
            <div class="carousel-item">
            <img class="carousel-item__img" src="${antm}">
            </div>
            <div class="carousel-item">
            <img class="carousel-item__img" src="${dpool}">
            </div>
        </div>
    </section>
  </main>
    `;
    return view;
};

export default Main;