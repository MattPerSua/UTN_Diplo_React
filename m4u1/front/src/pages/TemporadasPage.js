import React from "react";
import TemporadaItem from "../components/TemporadaItem";
import "../styles/home.css";

const TemporadasPage = (props) => {
  return (
    <main className="holder">
      <div className="temp-container">
        <TemporadaItem
          temporada="Temporada 1"
          año="2020"
          lapso="Abril - Diciembre"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          pdf="pdfs/Stray Sharpies. Diario de aventura. Temporada 1.pdf"
        />

        <TemporadaItem
          temporada="Temporada 2"
          año="2021"
          lapso="Febrero - Diciembre"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          pdf="pdfs/Stray Sharpies. Diario de aventura. Temporada 2.pdf"
        />

        <TemporadaItem
          temporada="Temporada 3"
          año="2022"
          lapso="Mayo - Noviembre"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          pdf="pdfs/Stray Sharpies. Diario de aventura. Temporada 3.pdf"
        />

        <TemporadaItem
          temporada="Temporada 4"
          año="2023"
          lapso="Febrero - Diciembre"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          pdf="pdfs/Stray Sharpies. Diario de aventura. Temporada 4.pdf"
        />

        <TemporadaItem
          temporada="Temporada 5"
          año="2024"
          lapso="Enero - En Proceso"
          body="Lorem ipsum dolor sit amet consectetur adipisicing elit."
          pdf="pdfs/Stray Sharpies. Diario de aventura. Temporada 5.pdf"
        />
      </div>
    </main>
  );
};
export default TemporadasPage;
