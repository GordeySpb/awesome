import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const BlueButton = styled.button`
  width: 660px;
  height: 97px;
  background-color: #72c6f7;
  border: 2px solid #427592;
  box-shadow: 0 0 5px rgba(111, 161, 190, 0.5);
  border-radius: 6px;
  color: #427592;
  font-size: 36px;
  cursor: pointer;
  outline: none;
  ${({ disabled }) => (disabled
    ? `background-color: #006dac;
      `
    : '')
}

  ${({ focus }) => (focus
    ? `outline: 2px solid #0fa0f4;
      `
    : '')
}
`;

const GreenButton = styled.button`
  width: 660px;
  height: 97px;
  background-color: #74c543;
  border: 2px solid #59a42b;
  box-shadow: 0 0 5px rgba(89, 164, 43, 0.5);
  border-radius: 6px;
  color: #fff;
  font-size: 36px;
  cursor: pointer;
  outline: none;
  ${({ disabled }) => (disabled
    ? `background-color: #2a7000;
      `
    : '')
}
  ${({ focus }) => (focus
    ? `outline: 2px solid #66db1f;
      `
    : '')
}
`;

const RedButton = styled.button`
  width: 660px;
  height: 97px;
  background-color: #ff4451;
  border: none;
  border-radius: 6px;
  color: #fff;
  font-size: 36px;
  cursor: pointer;
  outline: none;
  ${({ disabled }) => (disabled
    ? `background-color: #800009;
      `
    : '')
}
  ${({ focus }) => (focus
    ? `outline: 2px solid #f81222;
      `
    : '')
}
`;

const Button = ({
  title, color, hover, disabled, focus,
}) => {
  let button;

  if (color === 'blue') {
    button = <BlueButton disabled={disabled} type="button" focus={focus} hover={hover}>{title}</BlueButton>;
  } else if (color === 'green') {
    button = <GreenButton disabled={disabled} type="button" focus={focus} hover={hover}>{title}</GreenButton>;
  } else {
    button = <RedButton disabled={disabled} type="button" focus={focus} hover={hover}>{title}</RedButton>;
  }

  return (
    <>
      { button }
    </>
  );
};

Button.propTypes = {
  title: PropTypes.string,
  color: PropTypes.string,
  hover: PropTypes.bool,
  disabled: PropTypes.bool,
  focus: PropTypes.bool,
};

Button.defaultProps = {
  title: 'Button',
  color: 'blue',
  hover: true,
  disabled: false,
  focus: true,
};

export default Button;
