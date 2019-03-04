import React from 'react';
import PropTypes from 'prop-types';
import styled, { ThemeProvider } from 'styled-components';
import theme from 'styled-theming';

const backgroundColor = theme('mode', {
  blue: '#72c6f7',
  green: '#74c543',
  red: '#ff4451',
});

const backgroundHover = theme('mode', {
  blue: '#97d4f7',
  green: '#98d772',
  red: '#fc7780',
});


const textColor = theme('mode', {
  blue: '#427592',
  green: '#f8f8f8',
  red: '#f8f8f8',
});

const borderColor = theme('mode', {
  blue: '#427592',
});

const boxShadow = theme('mode', {
  blue: '(111, 161, 190, 0.5)',
  green: '(89, 164, 43, 0.5)',
});


const StyledButton = styled.button`
  border: 2px solid ${borderColor};
  box-shadow: 0 0 5px rgba(${boxShadow});
  border-radius: 6px;
  color: ${textColor};
  font-size: 36px;
  cursor: pointer;
  outline: none;
  width: 100%;
  padding-top: 0px;
  paddin-bottom: 0px; 
  background-color: ${backgroundColor};

  &:hover {
    background: ${backgroundHover};
  }

  &:disabled {
    background: #ccc;
    cursor: not-allowed;
  }
}

`;

const Button = ({
  title, variant, disabled, onClick,
}) => (
  <ThemeProvider theme={{ mode: variant }}>
    <StyledButton disabled={disabled} onClick={onClick}>{title}</StyledButton>
  </ThemeProvider>
);

Button.propTypes = {
  title: PropTypes.string,
  variant: PropTypes.string,
  disabled: PropTypes.string,
  onClick: PropTypes.func,
};

Button.defaultProps = {
  title: 'Button',
  variant: 'blue',
  disabled: 'disabled',
  onClick: PropTypes.func,
};


export default Button;
