import React from 'react';

import Wrap from './components/Wrap';
import Input from './components/Input';
// import Button from './components/Button';


class App extends React.Component {
  state = {
    value: '',
  }

  getValue = ({target: {value}}) => value;

  handleFocus = (e) => {

  }

  handleChange = (value) => this.setState({ value });

  

  handleBlur = (e) => {

  }

  render() {
    const { value } = this.state;

    return(
      <Wrap>
        <Input
          value={value}
          type="text"
          placeholder="Search"
          withSearchIcon
          isValid
          onFocus={this.handleFocus}
          onChange={this.handleChange}
          onBlur={this.handleBlur} 
        />
      </Wrap>
    )
    
  }
  
}


export default App;
