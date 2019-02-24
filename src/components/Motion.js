import PropTypes from 'prop-types';
import React, { Component } from 'react';
import FromBottom from './Motion/FromBottom';

class Motion extends Component {
    static FromBottom = FromBottom;

    render() {
        const { isVisible, children } = this.props;

        return (
            <div>
                {React.Children.map(children, child =>
                    React.cloneElement(child, { animate: isVisible })
                )}
            </div>
        );
    }
}

Motion.defaultProps = {
    isVisible: undefined,
}

Motion.propTypes = {
    isVisible: PropTypes.bool,
    children: PropTypes.node.isRequired,
}

export default Motion;