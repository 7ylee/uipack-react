import React from 'react';
import PropTypes from 'prop-types';

const FromBottom = ({ children, animate }) =>
    <div>
        {children}
        {animate && <strong>animated </strong>}
    </div>;

FromBottom.defaultProps = {
    animate: undefined,
}

FromBottom.propTypes = {
    animate: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default FromBottom;