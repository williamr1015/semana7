import logoA from "../assets/img/logo ALTERFLIX.png";
import iconD from "../assets/icons/chevron filtro.png"
import iconB from "../assets/icons/lupa-buscar.png"

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
        <span class="index-filtro">Ver filtros</span>
        <span class="icon-down">
        <img src="${iconD}" alt="filtro">
        </span>
      </div>
      <a href="/#resultado/"><button id="buttonIndex">BUSCAR</button></a>
    </section>
    
  </main>
    `;
    return view;
};

export default Main;