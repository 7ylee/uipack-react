import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import Color from 'color';

const ColorChip = styled.li`
    background: ${props => props.color};
    color : ${props => Color(props.color).isDark() ? '#fff' : '#333'};
    width: 200px;
    line-height: 40px;
    font-size: 0.7em;
    font-weight: bold;
    text-align: center;
    display: inline-block;
`;

const PaletteContainer = styled.div`
ul {
    margin: 0;
    padding: 0;
}
`;

const Palette = ({ title, colors }) => {
    const ColorList = Object.keys(colors).map((key) => <ColorChip key={key} color={colors[key]}>{key}</ColorChip>);
    return (
        <PaletteContainer>
            <span>{title}</span>
            <ul>{ColorList}</ul>
        </PaletteContainer>
    );
};

Palette.propTypes = {
    title: PropTypes.string.isRequired,
    colors: PropTypes.shape({}).isRequired,
};

export default Palette;