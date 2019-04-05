import React from 'react';
import QuestionInput from '../components/QuestionInput';
import { Link } from 'react-router-dom';
import Axios from 'axios';


class addTag extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
    };
    // this.handleSubmit = this.handleSubmiTag.bind(this);    
  }

  handleSubmit (e) {
    e.preventDefault();
  }

  render () {
    console.log("selectedTags",this.state.selectedTags);
    return (
      <div>
        <TagInput />
      </div>
    );
  }
}

export default addQuestion;