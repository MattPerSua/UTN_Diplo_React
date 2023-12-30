import React from "react";

const HomePage = (props) => {

    return (
        <main className="holder">
            <div className="heading">
      <h1>Sobre Nosotros</h1>
      <p>Un grupo de amigos que decidieron comenzar a jugar Calabozos y Dragones para hacerle frente a la pandemia y
        cuarentena obligatoria durante el año 2020, y despúes siguieron jugando adentrandose en la historia de sus
        personajes y la historia que su Maestro del Calabozo les propone.</p>
    </div>
    <div className="container">
      <section className="about">
        <div className="about-image">
          <img src="img/Retrato.png" alt=""/>
        </div>
        <div className="about-content">
          <h2>
            Los Stray Sharpies
          </h2>
          <p>Una Hechicera escapando de casa, una picara escapando de las consecuencias de sus acciones, una druida buscando descubrir un mundo que le era negado y un monje con dotes musicales tratando de ganarse la vida de una manera honesta, se cuentran en un viaje donde sus vidas se conectaran de la forma más inusual y epica.</p>
          <a href="temporadas.html" className="read-more">Leer Más</a>
        </div>
      </section>
    </div>

        </main>
    )
}
export default HomePage;