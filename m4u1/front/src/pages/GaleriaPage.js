import React from "react";


const GaleriaPage = (props) => {

    return (
        <main className="holder">
            <div className="container-galeria">
      <h2 className="titulo-galeria">Galeria</h2>
      <div className="galeria-img">
        <div className="columna">
          <div className="imagen-galeria">
            <img src="galeria/img-1.png" alt=""/>
          </div>
          <div className="imagen-galeria">
            <img src="galeria/img-2.jpg" alt=""/>
          </div>
          <div className="imagen-galeria">
            <img src="galeria/img-3.jpg" alt=""/>
          </div>
        </div>
        <div className="columna">
          <div className="imagen-galeria">
            <img src="galeria/img-4.png" alt=""/>
          </div>
          <div className="imagen-galeria">
            <img src="galeria/img-5.png" alt=""/>
          </div>
          <div className="imagen-galeria">
            <img src="galeria/img-6.png" alt=""/>
          </div>
        </div>
      </div>
    </div>
        </main>
    )
}
export default GaleriaPage;