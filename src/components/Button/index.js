import React, { Component } from 'react'
import * as styles from './index.css';

class Button extends Component {

  state={
    count:0
  }

  countHandler = () => {
    const {click}=this.props;
    this.setState({
      count:this.state.count + 1
    },
    click);
  }

  render() {
    const {text,buttonType,testId}=this.props;
    return (
      <button className={buttonType === 'rect' ? styles.rect : styles.round} data-testid={testId} onClick={() => this.countHandler()}>
        {text} clicked {this.state.count} times.
      </button> 
    )
  }
}

export default Button;

