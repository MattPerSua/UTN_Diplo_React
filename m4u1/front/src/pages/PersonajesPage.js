import React from "react";
import CardItem from '../components/CardItem';
import '../styles/home.css'

const PersonajesPage = (props) => {

    return (
        <main className="holder">
            <div className="team-container">
        <div className="personajes-container">
          <div className="text">Conocé Al Grupo</div>
        </div>
        <div className="row">

          <CardItem 
          title="Chandler"
          subtitle="Nivel 10"
          body="Bardo monje"
          imagen="/personajes/chandler.png"
          alttex="Chandler"
          />

          <CardItem 
          title="Damaia"
          subtitle="Nivel 10"
          body="Picara"
          imagen="/personajes/damaia.png"
          alttex="Damaia"
          />

          <CardItem 
          title="Ember"
          subtitle="Nivel 10"
          body="Druida"
          imagen="/personajes/ember.png"
          alttex="Ember"
          />

          <CardItem 
          title="Luthien"
          subtitle="Nivel 10"
          body="Paladina - Ex Hechicera"
          imagen="/personajes/luthien.png"
          alttex="Luthien"
          />
          
          
        </div>        
      </div>
    </main>
    )
}
export default PersonajesPage;