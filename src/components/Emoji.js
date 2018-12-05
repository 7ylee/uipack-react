import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ label, content }) => (
    <span role="img" aria-label={label}>{content}</span>
);

Emoji.propTypes = {
    content: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired
};

export default Emoji;