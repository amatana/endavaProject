/* eslint-disable no-unused-vars */
import React from 'react';
import CreateInterviewComp from '../components/CreateInterviewComp';
import { connect } from 'react-redux';
import { fetchCandidate } from '../redux/action-creator/candidate-actions';

class CreateInterview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      respuestas: ''
    };
  }
  componentDidMount () {
    this.props.fetchCandidate(this.props.idCand);
  }

  handleChange (e) {
    this.setState(
      { [e.target.name]: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
  }

  render () {
    return (

      <CreateInterviewComp candidate={this.props.candidate} />
    );
  }
}

const mapStateToProps = (state) => ({
  candidate: state.candidate.candidate
});

const mapDispatchToProps = (dispatch) => ({
  fetchCandidate: (idCandi) => dispatch(fetchCandidate(idCandi))
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateInterview);
