/* eslint-disable no-unused-vars */

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
        tags: []
      },
      mail: ''
    };

    this.exportMail = this.exportMail.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange (e) {
    let value = e.target.value;
    console.log('VALUE', value);
    this.setState({ mail: value });
  }

  exportMail () {
    console.log('done');
    Axios.post('/api/candidate/export', {
      data: {
        mail: this.state.mail,
        subject: 'Endava - HHRR Interview - Candidate: ' + this.props.candidate.name + ' ' + this.props.candidate.surname + ' (ID: ' + this.props.candidate.id + ')'
      },
      content: {
        candidate: this.props.candidate,
        HHRR: this.props.answersHR,
        SYS: this.props.answersSIST
      }
    });
  }

  componentDidMount () {
    this.props.fetchCandidate(this.props.candID)
      .then(() => this.props.fetchCandidateInterview(this.props.candID))
      .then(() => this.props.answersHR.length === 0 && this.props.fetchHrAnswers(this.props.candidate.InterviewIDId));
  }

  componentDidUpdate (prevState) {
    if (prevState.candidate.id !== this.props.candidate.id) {
      this.props.fetchHrAnswers(this.props.candidate.InterviewIDId);
      this.props.fetchSistAnswers(this.props.candidate.InterviewIDId);
      this.props.fetchGeneralObs(this.props.candidate.InterviewIDId);
    }
  }

  render () {
    const SistInterv1 = !this.props.candidate.interSIST1 ? '' : this.props.candidate.interSIST1.nombre;
    const SistInterv2 = !this.props.candidate.interSIST2 ? '' : this.props.candidate.interSIST2.nombre;
    return (
      <div>
        <div className='halfGrid'>
          <div>
            <h2 style={{ marginLeft: '4%', marginTop: '3%', textAlign: 'center', marginBottom: '25px' }}><strong style={{ fontSize: '1.3em', borderBottom: '1px solid black' }} >Final Report</strong></h2>
            <h2 style={{ textAlign: 'center', padding: '10px', margin: '1% 7%' }} className={'borde ' + this.props.candidate.status}>
              <p style={{ fontSize: '1em' }}><strong>STATUS :  </strong></p>
              <span className={'statusReport ' + this.props.candidate.status}>{' ' + this.props.candidate.status} </span>
            </h2>

          </div>
          <div>
            <Link to={'/candidates/' + this.props.candidate.id} style={{ textAlign: 'right' }}>
              <button className='ActionsBotonesNaranja' style={{ width: '80%', marginBottom: '30px', marginRight: '30px', display: 'block', margin: '20px auto' }}>Back</button>
            </Link>
            <p style={{ textAlign: 'center', border: '1px solid black', borderRadius: '25px', padding: '15px', margin: '35px 10px' }}>
              <strong style={{ borderBottom: '1px solid black' }}>  Send Report</strong>
              <form style={{
                display: 'grid',
                gridTemplateColumns: '1fr 0.3fr',
                borderRadius: '25px',
                marginLeft: '20px'
              }}>
                <input placeholder=' Type email you want to send this report' id='addTagInput' type='textbox' onChange={this.handleChange}></input>
                <input type='submit' className='ActionsBotonesBlanco' value='Send' onClick={this.exportMail}></input>
              </form>
            </p>
          </div>
        </div>
        <div style={{ marginLeft: '30px' }} style={{ display: 'grid', gridTemplateColumns: '1fr 0.7fr' }}>
          <div style={{ paddingLeft: '4%' }}>
            <h4 style={{ marginTop: '20px' }}>Candidate's Full-Name: <strong>{this.props.candidate.fullName} </strong></h4>
            <h4>Phone: <strong>{this.props.candidate.telNumber}</strong> </h4>
            <h4>Email Adress: <strong>{this.props.candidate.email}</strong></h4>
            <h4>Candidate ID: <strong>{this.props.candidate.id}</strong></h4>
            {this.props.candidate.tags && this.props.candidate.tags.length > 0 &&
              <h4>Candidate Tags :
                {this.props.candidate.tags.map(tag => <strong key={tag.id}>{' ' + tag.tag + ' '}</strong>)}
              </h4>}
            {this.props.candidate.url && <a style={{ textAlign: 'center' }} href={this.props.candidate.url} target='_blank'>Linked-in Profile</a>}
          </div>

          <div >

            {this.props.candidate.interviewerHR &&
              <h2 style={{ textAlign: 'left', marginTop: '20px', fontSize: '1.5em' }}>
                <strong>HR Interviewer: </strong>
                {' ' + this.props.candidate.interviewerHR.nombre}
              </h2>}

            {(this.props.candidate.interSIST1 || this.props.candidate.interSIST2) &&
              <h2 style={{ textAlign: 'left', marginTop: '20px', fontSize: '1.5em' }}>
                <strong >SYST Interviewer/s: </strong>
                {' ' + SistInterv1} {SistInterv2 ? ', ' + SistInterv2 : ''}
              </h2>}
            {/* {this.props.candidate.interSIST1 &&
              <h2 style={{ textAlign: 'left', marginTop: '20px' }}>
                <strong>SYST Interviewer: </strong>
                {' ' + this.props.candidate.interviewerHR.nombre}
              </h2>}

            {this.props.candidate.interSIST2 && <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
              <strong>SYST Interviewer: </strong>
              {' ' + this.props.candidate.interviewerHR.nombre}
            </h2>} */}
          </div>

        </div>
        {/* {<h2 style={{ textAlign: 'center', marginTop: '20px' }}>
            <strong>SIST Interviewer/s: </strong>
            <p><h2 style={{ textAlign: 'center', marginTop: '20px' }}>{' ' + SistInterv1} {SistInterv2 ? ', ' + SistInterv2 : ''}</h2></p>
          </h2>} */}
        {/* <div>
            <h1 style={{ marginTop: '20px' }}><b style={{ fontSize: '40px', color: '#DE411C' }}>Final Report</b></h1>
            <h4><b style={{ fontSize: '32px' }}>Name:</b> {this.props.candidate.fullName}</h4>
            <h4><b style={{ fontSize: '32px' }}>e-mail:</b> {this.props.candidate.email}</h4>
            <h4><b style={{ fontSize: '32px' }}>Telephone:</b> {this.props.candidate.telNumber}</h4>
            <h4><b style={{ fontSize: '32px' }}>Expertise:</b> {this.props.candidate.expertise}</h4>
          </div> */}
        <hr></hr><hr></hr>
        <div id='infoCandHR'><h2 style={{ textAlign: 'center' }}><b style={{ fontSize: '1.3em', color: '#DE411C' }}>HR Interview</b></h2><hr></hr><hr></hr>
          {/* {
              this.props.answersHR.map(element => (
                <div key={element.pregunta}>
                  <h4><b style={{ fontSize: '32px' }}>{element.pregunta}:</b> {element.respuesta}</h4>
                </div>
              ))
            }
            <h4><b style={{ fontSize: '32px' }}>Observations:</b> {this.props.HRObs}</h4> */}
          <div className='answersHR' style={{ padding: '15px' }}>
            {
              this.props.answersHR.map((elemento, key) => (
                <div key={elemento.pregunta} className='answerBox'>
                  <h5><strong style={{ borderBottom: '1px solid black' }}>{elemento.pregunta} :</strong> </h5>
                  <h5>{elemento.respuesta}</h5>
                </div>
              ))
            }
          </div>
          <hr></hr><hr></hr>
          <div ><h2 style={{ textAlign: 'center' }}><b style={{ fontSize: '1.5em', color: '#DE411C' }}>IT Interview</b></h2><hr></hr><hr></hr></div>
          <div className='answersHR' style={{ padding: '15px' }}>
            {
              this.props.answersSIST.map(element => (
                <div key={element.pregunta} className='answerBox' style={{ display: 'grid', gridTemplateColumns: '1fr 0.5fr' }}>
                  <h5>
                    <strong style={{ borderBottom: '1px solid black' }}>{element.pregunta} :</strong>
                    <p style={{ margin: '2% 3%' }}>{element.observation}</p>
                  </h5>
                  <StarsCalification score={element.score} />
                </div>
              ))
            }
          </div>
          {/* <h4><b style={{ fontSize: '32px' }}>Observations:</b> {this.props.SistObs}</h4> */}
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
