/* eslint-disable no-unused-vars */
import React from 'react';
import QuestionInput from '../components/QuestionInput';
import { Link } from 'react-router-dom';
import Axios from 'axios';

let arr = [];

class addQuestion extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      tagsData: [],
      selectedTags: [],
      alert: ''
    };
    this.handleSubmiTag = this.handleSubmiTag.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleSubmitQuestion = this.handleSubmitQuestion.bind(this);
    this.finalSubmit = this.finalSubmit.bind(this);
  }

  handleSubmiTag (e) {
    e.preventDefault();
    let found = this.state.selectedTags.find(function (element) {
      if (element === e.target.dropdown.value) {
        return element;
      }
    });

    if (!found) {
      arr = this.state.selectedTags.concat(e.target.dropdown.value);
      this.setState({ selectedTags: arr });
      this.setState({ alert: '' });
    } else {
      this.setState({ alert: 'The tag has already been added' });
    }
  }

  handleDelete (e) {
    let index = e.target.getAttribute('name');
    arr = this.state.selectedTags;
    arr.splice(index, 1);
    this.setState({ selectedTags: arr });
  }

  handleSubmitQuestion (e) {
    console.log('this', this);
    e.preventDefault();
    let question = e.target.question.value;
    e.target.question.value = '';
    this.finalSubmit(question, this.state.selectedTags);
  }

  finalSubmit (question, tags) {
    let area = this.props.user.area;
    console.log('props', this.props);
    Axios.post('/api/questions/create', {
      area,
      question,
      tags
    });
  }

  componentDidMount () {
    Axios.get('/api/questions/tags')
      .then(tags => {
        console.log('TAAAAAAGGG', tags)
        this.setState({ tagsData: tags.data });
      });
  }

  render () {
    console.log(this.state);
    return (
      <div>
        <QuestionInput
          submiTag = {this.handleSubmiTag}
          submitQuestion = {this.handleSubmitQuestion}
          delete = {this.handleDelete}
          tags = {this.state.tagsData}
          selectedTags = {this.state.selectedTags}
          alert = {this.state.alert}
        />
      </div>
    );
  }
}

export default addQuestion;