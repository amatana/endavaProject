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
    this.handleDelete = this.handleDelete.bind(this);
  };

  componentDidMount () {
    axios.get('/api/tags/retrieve')
      .then((allTags) => {
        console.log('TAGS MOUNTED', allTags);
        this.setState({ allTags });
      });
  };

  handleChange (e) {
    let input = e.target.value;
    if (input.length <= 15) {
      this.setState({ tagInput: input });
    }
  }

  handleSubmit (e) {
    e.preventDefault();
    axios.post('api/tags/create', { tag: this.state.tagInput })
      .then(() => {
        console.log('olis');
        this.setState({ tagInput: '' });
        axios.get('api/tags/retrieve')
          .then((allTags) => {
            this.setState({ allTags });
          });
      });
  }

  handleDelete (e) {
    let index = e.target.getAttribute('name');
    axios.post('api/tags/delete', { deleted: index })
      .then(() => {
        axios.get('api/tags/retrieve')
          .then((allTags) => {
            this.setState({ allTags });
          });
      });
  }

  render () {
    return (
      <div>
        <TagInput
          handleSubmit={this.handleSubmit}
          handleChange={this.handleChange}
          handleDelete={this.handleDelete}
          tagInput={this.state.tagInput}
          allTags={this.state.allTags} />
      </div>
    );
  }
}

export default addTag;
