import React from "react";

const PersonajesPage = (props) => {

    return (
        <main className="holder">
            <div className="team-container">
        <div className="personajes-container">
          <div className="text">Conocé Al Grupo</div>
        </div>
        <div className="row">
          
          <div className="tarj-perfil">
            <div className="profile-content">
              <div className="profile-image">
                <img className="img-card" src="/personajes/chandler.png" alt="Chandle Goodenough, Bardo Monje."/>
              </div>
              <div className="descripcion">
                <h2>Chandler Goodenough</h2>
                <p>Bardo Monje <span>Nivel 10</span></p>
              </div>
              <div className="btn-div">
                <button className="btn"><i/>Ver más</button>
              </div>
            </div>
          </div>
          
          <div className="tarj-perfil">
            <div className="profile-content">
              <div className="profile-image">
                <img className="img-card" src="/personajes/damaia.png" alt=""/>
              </div>
              <div className="descripcion">
                <h2>Damaia Stormless</h2>
                <p>Rogue <span>Nivel 10</span></p>
              </div>
              <div className="btn-div">
                <button className="btn"><i/>Ver más</button>
              </div>
            </div>
          </div>
          
          
          <div className="tarj-perfil">
            <div className="profile-content">
              <div className="profile-image">
                <img className="img-card" src="/personajes/ember.png" alt=""/>
              </div>
              <div className="descripcion">
                <h2>Ember Ink</h2>
                <p>Druida <span>Nivel 10</span></p>
              </div>
              <div className="btn-div">
                <button className="btn">Ver más</button>
              </div>
            </div>
          </div>
          
          <div className="tarj-perfil">
            <div className="profile-content">
              <div className="profile-image">
                <img className="img-card" src="/personajes/luthien.png" alt=""/>
              </div>
              <div className="descripcion">
                <h2>Luthien Dadode</h2>
                <p>Paladina, ex-Hechicera<span>Nivel 10</span></p>
              </div>
              <div className="btn-div">
                <button className="btn">Ver más</button>
              </div>
            </div>
          </div>
          
        </div>        
      </div>
    </main>
    )
}
export default PersonajesPage;