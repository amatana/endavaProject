/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import AddCandidateComp from '../components/addcandidate';
import { createCandidate } from '../redux/action-creator/candidate-actions';

class AddCandidate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      status: 'New',
      messege: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onClick = this.onClick.bind(this);
  }
  handleSubmit (e) {
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

  handleChange (e) {
    this.setState(
      { [e.target.name]: e.target.value });
  }
  onClick () {
    this.props.history.push('/candidates/allCandidates');
  }

  render () {
    return (
      <AddCandidateComp
        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        messege={this.state.messege}
        onClick={this.onClick}
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
