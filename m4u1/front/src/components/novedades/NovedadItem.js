import React from 'react';
import PropTypes from 'prop-types';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className="novedad-item">
        <img src={imagen} alt={title} />
        <h3>{title}</h3>
        <p>{subtitle}</p>
        <p>{body}</p>
    </div>
    );
}

NovedadItem.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    imagen: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

export default NovedadItem;