const Resultado = () => {
    const view = `
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container-fluid">
      <a class="navbar-brand logoIC" href="#"><img src="./assets/imgs/Logo Industria y Comercio-color.png" alt="logo industria y comercio"></a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <form class="d-flex buscador">
            <img src="./assets/icons/lupa-buscar.png" alt="buscar">
            <input class="form-control me-2" type="search" placeholder="Demanda colectiva" aria-label="Search">
            <img src="./assets/icons/cerrar-buscar.png" alt="cerrar">
          </form>
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item filtro">
            <a class="nav-link active" aria-current="page" href="#">Ver filtros  <img src="./assets/icons/chevron filtro.png" alt="filtros"></a>
          </li>
          <li class="nav-item gurardados">
            <a class="nav-link active" href="#"><img src="./assets/icons/icono guardados.png" alt="guardados"> Guardados</a>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</section>
<hr id="hr-main"/>
<!-- cards parte de william -->
<section class="main-resulatdo">
    <container>
        <div class="button-mostrar"><button onclick="mostrarRelatoria()" class="bottom-relatoria"><a href="#">RELATORÍA</a></button>
        </div>

        <div class="estadisticas">
            <div class="countainer-estadistica">
                <p>Rango de tiempo (de providencia):</p>
                <img class="imagen-estadistica" src="./assets/imgs/estadisticas.png" alt="estadisticas">
            </div>
            <div class="filtro-busqueda">
                <p>Filtros de búsqueda</p>
                <span class="demanda">Demanda colectiva <img src="./assets/icons/Vector X.png" alt="cerrar"></span>
                <span class="fecha">De 24/10/2019 a 14/01/2020 <img src="./assets/icons/Vector X.png" alt="cerrar"></span>
                <span class="proteccion">Protección al consumidor <img src="./assets/icons/Vector X.png" alt="cerrar"></span>
            </div>
           <hr class="div-containers">
        </div>
        <div class="container-resultados">
            <div class="container-relevancia">
                <span class="tresultados">34 Resultados</span>
                <span>
                    <span class="ordenar">Oredenar por:</span>
                    <button class="relevancia-boton disabled">Relevancia <img src="./assets/icons/Vector relevancia.png" alt="relevancia"></button>
                </span>
            </div>
            <!-- container para impresion de resultado busqueda -->
            <div class="container-print">
                <div class="container-principal">
                    <h2 class="title-print" id="print-resultado">Nelly Giraldo Giraldo y otros - Gales Asociados S.A.S</h2>
                </div>
                <div class="img-75">
                    <img src="./assets/icons/circle-75-porciento.png" alt="75 porciento">
                    <p>Relevancia</p>
                </div>
                <div class="container-table">
                    <div>
                        <h4>Fecha de Providencia</h4>
                        <p>01/12/2019</p>
                        <h4>Numero de expediente</h4>
                        <p>19-2033019</p>
                    </div>
                    <div>
                        <h4>Tipo de Proceso</h4>
                        <p>Proteccion al consumidor</p>
                        <h4>Tipo de providencia</h4>
                        <p>Sentencia</p>
                    </div>
                </div>
                <div class="img-guardar">
                    <img src="./assets/icons/Vector guardar.png" alt="Guardar">
                    <p>Guardar</p>
                </div>
            </div>
        </div>
        <div class="tarjeta-alfredo-alvares">

            <div>
                <h4>Alfredo Alvarez Santana-Killacel</h4>
                <hr>
                
                <div class="contenedor-informacion">
                    <div class="columnas-resultados">
                        <div>
                            <p class="titulo">Fecha de providencia:</p>
                            <p class="contenido">16/08/20</p>
                        </div>
                        <div>
                            <p class="titulo">Número de expediente:</p>
                            <p class="contenido">20-25689451</p>
                        </div>

                    </div>
                    <div class="titulo-contenido-2">
                        <div>
                            <p class="titulo">Tipo de proceso:</p>
                            <p class="contenido">Protección al consumidor</p>
                        </div>
                        <div>
                            <p class="titulo">Tipo de providencia:</p>
                            <p class="contenido">Sentencia</p>
                        </div>


                    </div>

                </div>



            </div>
            <div class="alfredo-circulo">
                <div class="imagen-texto">
                        <img src="assets/imgs/circle_75.svg">
                        <p>Relevancia</p>
                </div>
                <div class="imagen-texto">
                    <img src="assets/imgs/Vector.svg" alt="">
                    <p>Guardar</p>
                </div>
            </div>

        </div>

        <div class="tarjeta-alfredo-alvares">

            <div>
                <h4>Nelly Giraldo Giraldo Otros- Gales Asociados S.A.S</h4>
                <hr>
                
                <div class="contenedor-informacion">
                    <div class="columnas-resultados">
                        <div>
                            <p class="titulo">Fecha de providencia:</p>
                            <p class="contenido">15/04/21</p>
                        </div>
                        <div>
                            <p class="titulo">Número de expediente:</p>
                            <p class="contenido">20-251651651</p>
                        </div>

                    </div>
                    <div class="titulo-contenido-2">
                        <div>
                            <p class="titulo">Tipo de proceso:</p>
                            <p class="contenido">Protección al consumidor</p>
                        </div>
                        <div>
                            <p class="titulo">Tipo de providencia:</p>
                            <p class="contenido">Sentencia</p>
                        </div>


                    </div>

                </div>



            </div>
            <div class="alfredo-circulo">
                <div class="imagen-texto">
                        <img src="assets/imgs/circle_75.svg">
                        <p>Relevancia</p>
                </div>
                <div class="imagen-texto">
                    <img src="assets/imgs/Vector.svg" alt="">
                    <p>Guardar</p>
                </div>
            </div>
            
        </div>                       
            
        <div class="last-card">                
                <div>   
                  <h4>Nelly Giraldo Giraldo Otros- Gales Asociados S.A.S</h4>
                  <hr>
                  <br>                              
                    <div class="card-info">
                        <div class="rows">
                            <div>
                                <p class="title">Fecha de providencia:</p>
                                <p class="info">22/09/2020</p>
                            </div>
                            <div>
                                <p class="title">Número de expediente:</p>
                                <p class="info">19-2033019</p>
                            </div>    
                        </div>
                        <div class="rows-one">
                            <div>
                                <p class="title">Tipo de proceso:</p>
                                <p class="info">Protección al consumidor</p>
                            </div>
                            <div>
                                <p class="title">Tipo de providencia:</p>
                                <p class="info">Sentencia</p>
                            </div>
                        </div>             
                 </div>
               </div>
               <div class="icon-circle">
                <div class="image-text">
                        <img src="assets/imgs/circle_75.svg">
                        <p>Relevancia</p>
                </div>
                <div class="icon-save">
                    <img src="assets/imgs/Vector.svg" alt="">
                    <p>Guardar</p>
                </div>
            </div>         
        
    </div>
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