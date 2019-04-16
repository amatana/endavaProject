
import React from 'react';
import { connect } from 'react-redux';

import { fetchCandidate, fetchCandidateInterview } from '../redux/action-creator/candidate-actions';
import { fetchHrAnswers, fetchSistAnswers } from '../redux/action-creator/answersActions';

class ReportGeneration extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      candidato: {
        tags: []
      }
    };
  }

  componentDidMount () {
    this.props.fetchCandidate(this.props.candID);
    this.props.fetchCandidateInterview(this.props.candID);
  }

  componentDidUpdate (prevState) {
    if (prevState.candidate.id !== this.props.candidate.id) {
      this.props.fetchHrAnswers(this.props.candidate.id);
      this.props.fetchSistAnswers(this.props.candidate.id);
    }
  }

  render () {
    return (
      <div>
        <h1>GENERATE REPORT</h1>
        <h2>{this.props.candID}</h2>
        <h4>Name: {this.props.candidate.fullName}</h4>
        <h4>e-mail: {this.props.candidate.email}</h4>
        <h4>telephone: {this.props.candidate.telNumber}</h4>
        <h4>expertise: {this.props.candidate.expertise}</h4>
        <hr></hr><hr></hr><hr></hr>
        <div><h3>RRHH</h3><hr></hr>
          {
            this.props.answersHR.map(element => (
              <div key={element.pregunta}>
                <h4>{element.pregunta} : {element.respuesta}</h4>
              </div>
            ))
          }
        </div>
        <hr></hr><hr></hr>
        <div><h3>IT</h3><hr></hr>
          {
            this.props.answersSIST.map(element => (
              <div key={element.pregunta}>
                <h4>{element.pregunta} : {element.score}</h4>
              </div>
            ))
          }
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  candidate: state.candidate.candidate,
  interviewID: state.candidate.interviewID.interviewID,
  answersHR: state.answers.answersHR,
  answersSIST: state.answers.answersSIST
});
const mapDispatchToProps = (dispatch) => ({
  fetchCandidate: (candID) => dispatch(fetchCandidate(candID)),
  fetchHrAnswers: (interviewID) => dispatch(fetchHrAnswers(interviewID)),
  fetchSistAnswers: (interviewID) => dispatch(fetchSistAnswers(interviewID)),
  fetchCandidateInterview: (candID) => dispatch(fetchCandidateInterview(candID))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportGeneration);
