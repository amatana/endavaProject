/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import AddCandidateComp from '../components/addcandidate';
import { createCandidate } from '../redux/action-creator/candidate-actions';
import Axios from 'axios';

class AddCandidate extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      status: 'New',
      messege: '',
      allTags: [],
      selectedTags: []
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
    this.handleTagSubmit = this.handleTagSubmit.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  }

  componentDidMount() {
    Axios.get('/api/tags/retrieve')
      .then((allTags) => {
        this.setState({ allTags: allTags.data });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createCandidate(this.state)
      .then(error => {
        if (error) {
          console.log('el error es:', error);
          this.setState({ messege: error });
        } else {
          console.log('successfully saved candidate');
          this.setState({ messege: 'successfully saved candidate' });
        }
      });
  }

  handleChange(e) {
    this.setState(
      { [e.target.name]: e.target.value });
  }

  handleTagSubmit(e) {
    e.preventDefault();
    console.log("ALLTAGS", this.state.allTags);
    let index = e.target.value;
    console.log('INDEX', index);
    let arr = this.state.selectedTags;
    let found = arr.find((element) => {
      if (element === this.state.allTags[index].id) {
        return element;
      }
    });

    if (!found) {
      arr.push(this.state.allTags[index]);
      this.setState({ selectedTags: arr });
      console.log("STATE", this.state.selectedTags);
    } else {
      alert('The tag was aleady added');
    }
  }

  onClick() {
    this.props.history.push('/candidates/allCandidates');
  }

  handleDelete(e) {
    let toDelete = e.target.getAttribute('value');
    console.log("TODELETE", toDelete);
    let arr = this.state.selectedTags;
    arr.splice(toDelete, 1);
    this.setState({ selectedTags: arr });
  };

  render() {
    console.log('tagArray', this.state.tags);
    return (
      <AddCandidateComp
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        messege={this.state.messege}
        onClick={this.onClick}
        handleDelete={this.handleDelete}
        allTags={this.state.allTags}
        handleTagSubmit={this.handleTagSubmit}
        selectedTags={this.state.selectedTags}
      />
    );
  }
}
const mapStateToProps = (state) => ({
  candidate: state.candidate.candidate
});

const mapDispatchToProps = (dispatch) => ({
  createCandidate: (candidate) => dispatch(createCandidate(candidate))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCandidate);
