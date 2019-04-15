/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import { fetchCandidate } from '../redux/action-creator/candidate-actions';
import { fetchInterview } from '../redux/action-creator/interviewActions';

import InterviewSisComp from '../components/interviewSisComp';
import interviewsReducer from '../redux/reducer/interviewsReducer';

class InterviewSisCont extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      candidate: {},
      questionsSis: []

    };
  }
  componentDidMount () {
    this.props.fetchCandidate(this.props.idCand);
    this.props.fetchInterview(this.props.idCand);
  }

  render () {
    console.log('las props que llegan a entrevista de sistemas', this.props);
    return (
      <InterviewSisComp
        // onSubmit={this.onSubmit}
        // onChange={this.handleChange}
        // questions={this.props.questionsHR}
        candidate={this.props.candidate}
        interview={this.props.interview}

      />
    );
  }
}
const mapStateToProps = (state) => ({
  candidate: state.candidate.candidate,
  interview: state.interview.interview

});

const mapDispatchToProps = (dispatch) => ({
  fetchCandidate: (idCandi) => dispatch(fetchCandidate(idCandi)),
  fetchInterview: (idCandi) => dispatch(fetchInterview(idCandi))
});

export default connect(mapStateToProps, mapDispatchToProps)(InterviewSisCont);
