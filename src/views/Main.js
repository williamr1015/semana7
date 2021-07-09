import logoA from "../assets/img/logo ALTERFLIX.png";

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
        <span class="icon-search"></span>
        <input
          placeholder="Busca cualquier término jurídico"
          type="text"
          id="inputIndex"
        />
        <span class="index-filtro">Ver filtros</span>
        <span class="icon-down"></span>
      </div>
      <a href="/#resultado/"><button id="buttonIndex">BUSCAR</button></a>
    </section>
    <section class="main-container-pdf">
      <div class="main-pdf-text">
        <span>Búsqueda avanzada con Inteligencia Artificial</span>
        <a href="#">¿Cómo funciona?</a>
      </div>
      <div class="main-pdf-data">
        <div class="data-input">
          <input type="file" />
          <span>Arrastra aquí o </span>
          <span class="selectData">selecciona un documento</span>
          <span>desde tus archivos</span>
        </div>
      </div>
    </section>
  </main>
    `;
    return view;
};

export default Main;