import React from 'react';
import PropTypes from 'prop-types';

export const style = {
    default: {
        'background': 'purple',
        'color': '#fff',
        'border': '1px solid #999',
        'padding': '0.25em 1em',
        'line-height': '1.5',
    },
    submit: {
        'background': '#fff',
        'color': '#666',
        'border': '1px solid #666',
        'padding': '0.25em 1em',
        'line-height': '1.5',
    }
};

/* eslint-disable react/button-has-type */
const Button = ({ type, text }) => (
    <button type={type} style={type === 'button' ? style.default : style.submit}>{text}</button>
);

// has default type
Button.defaultProps = {
    type: 'button'
};

Button.propTypes = {
    type: PropTypes.string,
    text: PropTypes.string.isRequired,
};
export default Button;