import React from 'react';
import TagInput from '../components/TagInput';
import { Link } from 'react-router-dom';
import axios from 'axios';

class addTag extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tagInput: '',
      allTags: []
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
  };

  handleChange (e) {
    let input = e.target.value;
    if (input.length <= 10) {
      this.setState({ tagInput: input });
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    axios.post('api/tags/create', { tag: this.state.tagInput });
    this.setState({ tagInput: '' });
    axios.get('api/tags/retrieve')
      .then((allTags) => {
        this.setState({ allTags });
      });
  }

  render () {
    return (
      <div>
        <TagInput
          handleSubmit = {this.handleSubmit}
          handleChange = {this.handleChange}
          tagInput = {this.state.tagInput}
          allTags = {this.state.allTags}/>
      </div>
    );
  }
}

export default addTag;
