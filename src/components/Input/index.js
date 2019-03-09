import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import search from '../../icon/search.svg';


const StyledInput = styled.input`
  width: 100%;
  padding: 33px 70px 33px 30px;
  font-size: 36px;
  color: #676767;
  outline: none;
  border-radius: 6px;
  border: solid 2px #eff3f6;
  background-color: #eff3f6;

  ${({ withSearchIcon }) => (withSearchIcon
    ? `background-image: url(${search});
      background-repeat: no-repeat;
      background-position: 95% center;
      `
    : '')
}

  ${({ isValid }) => (isValid
    ? `border: solid 2px #ff4451;
      `
    : '')
}

}
`;

const StyledTextArea = styled.textarea`
  width: 100%;
  padding: 33px 0px 0px 30px;
  font-size: 36px;
  color: #676767;
  outline: none;
  border-radius: 6px;
  border: solid 2px #eff3f6;
  background-color: #eff3f6;
  resize: none;

  ${({ isValid }) => (isValid
    ? `border: solid 2px #ff4451;
      `
    : '')
  }
`;

class Input extends React.Component {
  state = {
    value: this.props.value,
  }

  get isControled() {
    const { value, onFocus, onBlur } = this.props;

    if (value && onFocus && onBlur) return true;
  }

  getValue = () => {
    if (this.isControled) {
      const { value } = this.props;
      return value;
    } else {
      const { value } = this.state;
      return value;
    }
  }

  handleChange = ({target: { value }}) => {
    if (!this.isControled) {
      const {onChange} = this.props;
      onChange(value);
    } else {
      this.setState({ value })
    } 
  }

  render() {
    const {type, placeholder, withSearchIcon, isValid, rows, onFocus, onBlur} = this.props;
    return(
      <>
        {!rows
          ? (
            <StyledInput
              value={this.getValue}
              type={type}
              placeholder={placeholder}
              withSearchIcon={withSearchIcon}
              isValid={isValid}
              onFocus={onFocus}
              onChange={this.handleChange}
              onBlur={onBlur}
            />
          )
          : <StyledTextArea 
              placeholder={placeholder}
              isValid={isValid}
              rows={rows}
              onFocus={onFocus}
              onChange={this.handleChange}
              onBlur={onBlur}
            />
        }
      </>
    );
  }
}
  


export default Input;
