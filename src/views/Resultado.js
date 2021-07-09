import lupa from "../assets/icons/lupa-buscar.png"
import cerrar from "../assets/icons/cerrar-buscar.png"
import filtro from "../assets/icons/chevron filtro.png"
import guardados from "../assets/icons/icono guardados.png"
import getData from "../utils/getData"
import getHash from "../utils/getHash"
import logoA from "../assets/img/logo ALTERFLIX.png";



const Resultado = async() => {
        const movies = await getData();

        const view = `
  <nav class="navbar navbar-expand-lg navbar-light ">
    <div class="container-fluid">
    <a class="navbar-brand logoIC" href="#"><img class="logoAl" src="${logoA}" alt="logoALTERFLIX"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex buscador">
          <img src="${lupa}" alt="buscar">
          <input class="form-control me-2" type="search" id="inputIndex" placeholder="Busca cualquier pelicula ¡Bienvenido!" aria-label="Search">
          <img src="${cerrar}" alt="cerrar">
        </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item filtro">
            <a class="nav-link active" aria-current="page" href="#filtros/">Ver filtros  <img src="${filtro}" alt="filtros"></a>
          </li>
          <li class="nav-item gurardados">
            <a class="nav-link active" href="#save/"><img src="${guardados}" alt="guardados"> Favoritas</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</section>
<div class="busqueda">
  <span class"text-busqueda">Resultado de la busqueda: </span>
  <span class"resultado-busqueda" id="print-resultado"> </span>
</div>
${movies.items.map(movie => `
<hr id="hr-main"/>
<section class="main-resulatdo">

          <div class="container-print">
          <div class="button-mostrar">
  <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop${movie.id}">
  ver detalles 
</button>
         <hr class="div-containers">
      </div>
            <div class="row g-0">
              <div class="col-md-4">
                <img src="https://www.themoviedb.org/t/p/w220_and_h330_face/${movie.poster_path}" class="img-fluid rounded-start">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${movie.original_title}</h5>
                  <p class="card-text"><small class="text-muted">fecha de estreno: ${movie.release_date }</small></p>
                </div>
              </div>
            </div>
            </div>
          
              </div>
      </div>

          </div>
      </div>    
      
      <div class="modal fade" id="staticBackdrop${movie.id}" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="staticBackdropLabel">${movie.original_title}</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
          <p class="card-text">${movie.overview}</p>
          </div>
        </div>
      </div>
    </div>           
      </container>
  
  <container class="relatoria" id="relatoria">
  <div class="head-relatoria">
      <span class="cerrar" id="cerrar">cerrar</span>
      <h3 class="title-relatoria">información general de la pelicula</h3>
  </div>
  <div class="content-relatoria">
      <h3 class="title-detail-relatoria">Nombre: ${movie.original_title}
     <div class="detail-relatoria">
     </div>
     <div class="detail-relatoria">
      <span class="title-detail">Sinopsis:
       </span>  
          <p class="card-text">${movie.overview}</p>
       </div>
       </div>
       <section class="bottom-relatoria"> <a href="#">Ver pelicula</a> </section>
  </div>

  </container>
</section>
`).join('')}  
</main>
 


</div>

    `
    return view
}

export default Resultado