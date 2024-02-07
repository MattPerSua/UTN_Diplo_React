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
          title="Chandle G."
          subtitle="Nivel 10"
          body="Bardo monje"
          imagen="/personajes/chandler.png"
          />

          <CardItem 
          title="Chandle G."
          subtitle="Nivel 10"
          body="Bardo monje"
          imagen="/personajes/damaia.png"/>

          <CardItem 
          title="Chandle G."
          subtitle="Nivel 10"
          body="Bardo monje"
          imagen="/personajes/ember.png"/>
          
          <CardItem 
          title="Chandle G."
          subtitle="Nivel 10"
          body="Bardo monje"
          imagen="/personajes/luthien.png"/>
          
          
        </div>        
      </div>
    </main>
    )
}
export default PersonajesPage;