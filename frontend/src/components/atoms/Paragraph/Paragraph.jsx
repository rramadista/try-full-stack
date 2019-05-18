import React from 'react';
import PropTypes from 'prop-types';

const Paragraph = props => (
    <p>{props.text}</p>
)

Paragraph.propTypes = {
    text: PropTypes.string.isRequired,
}

export default Paragraph