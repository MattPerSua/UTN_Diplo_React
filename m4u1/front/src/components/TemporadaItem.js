import React from 'react';
import PropTypes from 'prop-types';

const CardItem = (props) => {
    

    return (
        <div className="timeline">
          <div className="custon"></div>
          <div className="icon">
            <span><a href={props.pdf} target="_blank" rel="noreferrer"><i className="ri-star-fill"></i></a></span>
          </div>
          <div className="info">
            <h2>{props.temporada} - {props.año}<hr/> ({props.lapso})</h2>
            <p>{props.body} </p>
          </div>
        </div>
    );
}

CardItem.propTypes = {
    temporada: PropTypes.string.isRequired,
    año: PropTypes.string.isRequired,
    lapso: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    pdf: PropTypes.string.isRequired,
};

export default CardItem;