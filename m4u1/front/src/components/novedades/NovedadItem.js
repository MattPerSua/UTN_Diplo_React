import React from 'react';
import PropTypes from 'prop-types';

const NovedadItem = (props) => {
    const { title, subtitle, imagen, body } = props;

    return (
        <div className='novedades'>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <img src={imagen} alt=''/>
            <div dangerouslySetInnerHTML={{ __html: body }} />
            <hr />
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