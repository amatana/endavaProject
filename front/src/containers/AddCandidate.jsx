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
      status: 'New'
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    console.log('el estado es', this.state);
    this.props.createCandidate(this.state);
    return this.props.history.push('/candidates');
  }

  handleChange (e) {
    this.setState(
      { [e.target.name]: e.target.value });
  }

  render () {
    return (
      <AddCandidateComp onChange={this.handleChange} onSubmit={this.handleSubmit}/>
    );
  }
}
const mapStateToProps = (state) => ({
  candidate: state.candidate
});
const mapDispatchToProps = (dispatch) => ({
  createCandidate: (candidate) => dispatch(createCandidate(candidate))
});

export default connect(mapStateToProps, mapDispatchToProps)(AddCandidate);
