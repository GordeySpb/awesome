import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 120px;
  height: 50px; 
`;

const Wrap = ({ children }) => <StyledDiv>{children}</StyledDiv>;

Wrap.propTypes = {
  children: PropTypes.element,
};

Wrap.defaultProps = {
  children: PropTypes.element,
};

export default Wrap;
