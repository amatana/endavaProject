// eslint-disable-next-line no-unused-vars
import React from 'react';
import { fetchSistAnswers } from '../redux/action-creator/answersActions';
import { connect } from 'react-redux';
import Axios from 'axios';
import { getAllCandidates, fetchCandidate } from '../redux/action-creator/candidate-actions';
import StarsCalification from './StarsCalification'
import { Link } from 'react-router-dom';

class ReportComp extends React.Component {
  constructor () {
    super();
    this.changeCandStatus = this.changeCandStatus.bind(this);
  }
  componentDidMount () {
    this.props.fetchCandidate(this.props.idCand)
      .then(() => this.props.fetchSistAnswers(this.props.candidate.InterviewIDId));
  }

  changeCandStatus (idCandi, status) {
    Axios.put('/api/candidate/changeStatus', { idCandi, status })
      .then(() => this.props.getAllCandidates())
      .then(() => this.props.history.push('/candidates/allCandidates'));
  };

  render () {
    var SistInterv1 = !this.props.candidate.interSIST1 ? '' : this.props.candidate.interSIST1.nombre;
    var SistInterv2 = !this.props.candidate.interSIST2 ? '' : this.props.candidate.interSIST2.nombre;

    return (
      <div >
        <div id='infoCandHR'>
          <Link to={'/candidates/' + this.props.candidate.id} ><button className='ActionsBotonesBlanco'>Go Back</button></Link>
          <div style={{ marginLeft: '30px' }} className='halfGrid'>
            <div>
              <h4 style={{ marginTop: '20px' }}>Full name: <strong>{this.props.candidate.fullName} </strong></h4>
              <h4>Phone: <strong>{this.props.candidate.telNumber}</strong> </h4>
              <h4>Email Adress: <strong>{this.props.candidate.email}</strong></h4>
              <h4>Candidate ID: <strong>{this.props.candidate.id}</strong></h4>
              {this.props.candidate.tags && this.props.candidate.tags.length > 0 &&
              <h4>Candidate Tags:
                {this.props.candidate.tags.map(tag => <strong>{tag.tag}</strong>)}
              </h4>}
            </div>

            <div id='leftSideReport'>
              <h2 style={{ textAlign: 'center', padding: '10px', margin: '1% 7%' }} className={'borde ' + this.props.candidate.status}>
                <strong className={this.props.candidate.status}>STATUS :  </strong>
                <span className={'statusReport '}>{' ' + this.props.candidate.status} </span>
              </h2>
              {<h2 style={{ textAlign: 'center', marginTop: '20px' }}>
                <strong>SIST Interviewer/s: </strong>
                <p><h2 style={{ textAlign: 'center', marginTop: '20px' }}>{' ' + SistInterv1} { SistInterv2 ? ', ' + SistInterv2 : ''}</h2></p>
              </h2>}
              <div className='halfGrid' >
                <a style={{ textAlign: 'center' }} href="#candidateExpertise"> Read Candidate Expertise</a>
                {this.props.candidate.url && <a style={{ textAlign: 'center' }} href={this.props.candidate.url} target='_blank'>Linked-in Profile</a>}
              </div>
            </div>

          </div>
          <div className='divito'>
            <div className='mitadReport'>
              <button
                id='appReport'
                onClick={() => this.changeCandStatus(this.props.candidate.id, 'Tech Approved')} >APPROVE TECH</button>
              <button
                id='pendReport'
                onClick={() => this.changeCandStatus(this.props.candidate.id, 'Pending Tech')}>PENDING</button>
              <button
                id='rejReport'
                onClick={() => this.changeCandStatus(this.props.candidate.id, 'Rejected Tech')}>REJECT TECH</button>
            </div>
          </div>
        </div>

        <div className='answersHR'>
          {
            this.props.answersSIST.map((elemento, key) => (
              <div key={elemento.pregunta} className='answerBox'>
                <h5><strong style={{ borderBottom: '1px solid black' }}>{elemento.pregunta} :</strong> </h5>
                <div key={elemento.pregunta}>
                  <StarsCalification score={elemento.score} observation={elemento.observation} />
                </div>
              </div>
            ))
          }
        </div>
        <div id='candidateExpertise' className='answersHR answerBox'>
          <h5><strong style={{ borderBottom: '1px solid #0EB8DD', color: '#0EB8DD' }}> Candidate's Expertise</strong></h5>
          <h5>{this.props.candidate.expertise}</h5>
        </div>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  candidate: state.candidate.candidate,
  answersSIST: state.answers.answersSIST
});

const mapDispatchToProps = (dispatch) => ({
  fetchCandidate: (idCandi) => dispatch(fetchCandidate(idCandi)),
  fetchSistAnswers: (interviewID) => dispatch(fetchSistAnswers(interviewID)),
  getAllCandidates: () => dispatch(getAllCandidates())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportComp);
