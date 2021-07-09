import lupa from "../assets/icons/lupa-buscar.png"
import cerrar from "../assets/icons/cerrar-buscar.png"
import filtro from "../assets/icons/chevron filtro.png"
import guardados from "../assets/icons/icono guardados.png"
import logoA from "../assets/img/logo ALTERFLIX.png"
import getData from "../utils/getData"
import getHash from "../utils/getHash"


const Resultado = async() => {
        const movies = await getData();

        const view = `
    <nav class="navbar navbar-expand-lg navbar-light">
    <div class="container-fluid">
      <a class="navbar-brand logoIC" href="#"><img class="logoAl" src="${logoA}" alt="logoALTERFLIX"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex buscador">
            <img src="${lupa}" alt="buscar">
            <input class="form-control me-2" id="innerText" type="search" placeholder="Busca cualquier pelicula ¡Bienvenido!" aria-label="Search">
            <img src="${cerrar}" alt="cerrar">
          </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item filtro">
            <a class="nav-link active" aria-current="page" href="#">Ver filtros  <img src="${filtro}" alt="filtros"></a>
          </li>
          <li class="nav-item gurardados">
            <a class="nav-link active" href="#"><img src="${guardados}" alt="guardados"> Guardados</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</section>
<hr id="hr-main"/>
<!-- cards parte de william -->
<div class="posterPeliculas">
${movies.items.map(movie => `

  <article class="pelicula-item">
  <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}" alt="poster">
  <h2>${movie.original_title}</h2>
  </article>

`).join('')}  


</div>
        
<!-- relatorias parte de Esteban -->
    </container>
    <container class="relatoria" id="relatoria">
        <div class="head-relatoria">
            <span class="cerrar" id="cerrar">cerrar</span>
            <h3 class="title-relatoria">información general de la relatoria</h3>
        </div>
        <div class="content-relatoria">
            <h3 class="title-detail-relatoria">Alfredo Alvarez Santana-Killacel </h3>
           <div class="detail-relatoria">
               <span class="title-detail">Número de expediente: </span> 20-2033020
           </div>
           <div class="detail-relatoria">
            <span class="title-detail">Fecha de providencia: </span> 2020-08-16
            </div>
        <section class="bottom-relatoria"><span></span> <a href="#">IR A RELATORÍA</a> </section>
        </div>
        <div class="content-relatoria">
            <section class="concidencias">
                <div class="title-concidencias">28 Concidencias</div> <div><span class="row-left"></span><span class="page">01</span> <span class="row-right"></span></div>
            </section>
            <div class="text-concidencias">
                ...si la decisión de remover a Serviucis S.A. de la junta directiva de NCSC S.A.S. adolece de nulidad absoluta por <span style="background-color: #D1FFE3;">demanda colectiva </span>en los términos del artículo 43 de la Ley 1258 de 2008...
            </div>

        </div>
        <div class="content-relatoria">
        <section class="number-relatoria" >
            <h3>RELATORÍA#1</h3><br><br>
            La demanda presentada ante este Despacho está orientada a establecer si la decisión de remover a Serviucis S.A. de la junta directiva de NCSC S.A.S. adolece de nulidad absoluta.<br><br>
            Despacho está orientada a establecer si la decisión de remover a Serviucis S.A. de la junta directiva de NCSC S.A.S. adolece de nulidad absoluta Despacho está orientada a establecer si la decisión de remover a Serviucis S.A. de la junta directiva de NCSC S.A.S. adolece de nulidad absolutaz
        </section>
        </div>
    </container>
</section>
</main> 
    `
    return view
}
export default Resultado