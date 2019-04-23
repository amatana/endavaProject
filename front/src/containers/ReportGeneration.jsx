
import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { fetchCandidate, fetchCandidateInterview } from '../redux/action-creator/candidate-actions';
import { fetchHrAnswers, fetchSistAnswers, fetchGeneralObs } from '../redux/action-creator/answersActions';
import StarsCalification from '../components/StarsCalification';
import Axios from 'axios';

class ReportGeneration extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      candidato: {
        tags: [],
        mail: ''
      }
    };
  }

  exportMail () {
    console.log('asbd ajsbdjasbdjabjdba', this.props.candidate);
    Axios.post('/api/candidate/export', {
      data: {
        mail: 'aenoriss@gmail.com',
        subject: 'Endava - HHRR Interview - Candidate: ' + this.props.candidate.name + ' ' + this.props.candidate.surname
      },
      content: {
        candidate: this.props.candidate,
        HHRR: this.props.answersHR,
        SYS: this.props.answersSIST
      }
    });
  }

  componentDidMount () {
    this.props.fetchCandidate(this.props.candID);
    this.props.fetchCandidateInterview(this.props.candID);
  }

  componentDidUpdate (prevState) {
    if (prevState.candidate.id !== this.props.candidate.id) {
      this.props.fetchHrAnswers(this.props.candidate.id);
      this.props.fetchSistAnswers(this.props.candidate.id);
      this.props.fetchGeneralObs(this.props.candidate.id);
    }
  }

  render () {
    this.exportMail();
    return (
      <div >
        <Link to={'/candidates/' + this.props.candidate.id} ><button className='ActionsBotonesBlanco'>Back</button></Link>
        <div style={{ marginLeft: '30px' }} >
          <div>
            <h1 style={{ marginTop: '20px' }}><b style={{ fontSize: '40px', color: '#DE411C' }}>Final Report</b></h1>
            <h4><b style={{ fontSize: '32px' }}>Name:</b> {this.props.candidate.fullName}</h4>
            <h4><b style={{ fontSize: '32px' }}>e-mail:</b> {this.props.candidate.email}</h4>
            <h4><b style={{ fontSize: '32px' }}>Telephone:</b> {this.props.candidate.telNumber}</h4>
            <h4><b style={{ fontSize: '32px' }}>Expertise:</b> {this.props.candidate.expertise}</h4>
          </div>
          <hr></hr><hr></hr><hr></hr>
          <div id='infoCandHR'><h3 style={{ textAlign: 'center' }}><b style={{ fontSize: '32px', color: '#DE411C' }}>HR Interview</b></h3><hr></hr>
            {
              this.props.answersHR.map(element => (
                <div key={element.pregunta}>
                  <h4><b style={{ fontSize: '32px' }}>{element.pregunta}:</b> {element.respuesta}</h4>
                </div>
              ))
            }
            <h4><b style={{ fontSize: '32px' }}>Observations:</b> {this.props.HRObs}</h4>
            <hr></hr><hr></hr>
            <div ><h3 style={{ textAlign: 'center' }}><b style={{ fontSize: '32px', color: '#DE411C' }}>IT Interview</b></h3><hr></hr>
              {
                this.props.answersSIST.map(element => (
                  <div key={element.pregunta}>
                    <StarsCalification pregunta={element.pregunta} score={element.score} />
                  </div>
                ))
              }
            </div>
            <h4><b style={{ fontSize: '32px' }}>Observations:</b> {this.props.SistObs}</h4>
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
  answersSIST: state.answers.answersSIST,
  HRObs: state.answers.HRObs,
  SistObs: state.answers.SistObs
});
const mapDispatchToProps = (dispatch) => ({
  fetchCandidate: (candID) => dispatch(fetchCandidate(candID)),
  fetchHrAnswers: (interviewID) => dispatch(fetchHrAnswers(interviewID)),
  fetchSistAnswers: (interviewID) => dispatch(fetchSistAnswers(interviewID)),
  fetchCandidateInterview: (candID) => dispatch(fetchCandidateInterview(candID)),
  fetchGeneralObs: (candID) => dispatch(fetchGeneralObs(candID))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportGeneration);
