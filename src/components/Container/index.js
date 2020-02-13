import React, { Component } from 'react';
import Button from '../Button';
import TextBox from '../TextBox';
import axios from 'axios';
import {responseUrl} from '../../constants'
class Container extends Component {
    state={
        text:''
    }
    
      
      componentDidMount=async () => {
        const data=(await axios.get(responseUrl));
        this.setState({
          text:data.data.initialText
      })
    }
    onChange=(inputTextValue)=>{
        this.setState({
            text:inputTextValue
        })
    }

    render() {
        const {testId,testIdButton,testIdTextBox}=this.props;
        return (
            <div data-testid={testId}>
                <TextBox onChange={(this.onChange)} testId={testIdTextBox} value={this.state.text}/>
                <Button text={this.state.text} buttonType="round" testId={testIdButton}/>
            </div>
        )
    }
}


export default Container
