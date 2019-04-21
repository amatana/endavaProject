
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCandidate, fetchCandidateInterview } from '../redux/action-creator/candidate-actions';
import { fetchHrAnswers, fetchSistAnswers } from '../redux/action-creator/answersActions';
import StarsCalification from '../components/StarsCalification'

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
      <div id='infoCandHR'>
        <Link to={'/candidates/' + this.props.candidate.id} ><button className='ActionsBotonesBlanco'>Back</button></Link>
        <div style={{ marginLeft: '30px' }} className='halfGrid'>
          <div>
            <h1 style={{ marginTop: '20px' }}><b style={{ fontSize: '40px', color: '#DE411C' }}>Final Report</b></h1>
            <h4><b style={{ fontSize: '32px' }}>Name:</b> {this.props.candidate.fullName}</h4>
            <h4><b style={{ fontSize: '32px' }}>e-mail:</b> {this.props.candidate.email}</h4>
            <h4><b style={{ fontSize: '32px' }}>Telephone:</b> {this.props.candidate.telNumber}</h4>
            <h4><b style={{ fontSize: '32px' }}>Expertise:</b> {this.props.candidate.expertise}</h4>
          </div>
          <hr></hr><hr></hr><hr></hr>
          <div id='infoCandHR'><h3 style={{ textAlign: 'center' }}><b style={{ fontSize: '32px', color: '#DE411C' }}>RRHH Interview</b></h3><hr></hr>
            {
              this.props.answersHR.map(element => (
                <div key={element.pregunta}>
                  <h4><b style={{ fontSize: '32px' }}>{element.pregunta}:</b> {element.respuesta}</h4>
                </div>
              ))
            }
            <hr></hr><hr></hr>
            <div id='infoCandHR'><h3 style={{ textAlign: 'center' }}><b style={{ fontSize: '32px', color: '#DE411C' }}>IT Interview</b></h3><hr></hr>
              {
                this.props.answersSIST.map(element => (
                  <div key={element.pregunta}>
                    <StarsCalification pregunta={element.pregunta} score={element.score}/>
                  </div>
                ))
              }
            </div>
          </div>
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
