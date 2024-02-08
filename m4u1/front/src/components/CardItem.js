import React from 'react';
import PropTypes from 'prop-types';

const CardItem = (props) => {
    

    return (
        <div className="tarj-perfil">
            <div className="profile-content">
              <div className="profile-image">
                <img className="img-card" src={props.imagen} alt={props.alttex}/>
              </div>
              <div className="descripcion">
                <h2>{props.title}</h2>
                <p>{props.subtitle} <span>{props.body}</span></p>
              </div>
              <div className="btn-div">
                <button className="btn"><i/>Ver más</button>
              </div>
            </div>
          </div>
    );
}

CardItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    alttex: PropTypes.string.isRequired,

};

export default CardItem;