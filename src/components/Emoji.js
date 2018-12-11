import React from 'react';
import PropTypes from 'prop-types';

const Emoji = ({ label, symbol }) => (
    <span role="img" aria-label={label || ''}>{symbol}</span>
);

Emoji.defaultProps = {
    label: ''
};

Emoji.propTypes = {
    symbol: PropTypes.string.isRequired,
    label: PropTypes.string
};

export default Emoji;