// eslint-disable-next-line no-unused-vars
import React from 'react';
import { fetchHrAnswers } from '../redux/action-creator/answersActions';
import { connect } from 'react-redux';
import Axios from 'axios';
import { getAllCandidates, fetchCandidate } from '../redux/action-creator/candidate-actions';
import { Link } from 'react-router-dom';

class ReportComp extends React.Component {
  constructor () {
    super();
    this.changeCandStatus = this.changeCandStatus.bind(this);
  }
  componentDidMount () {
    this.props.fetchHrAnswers(this.props.idInter);
    this.props.fetchCandidate(this.props.candidate.id);
    console.log(this.props);
  }

  changeCandStatus (idCandi, status) {
    Axios.put('/api/candidate/changeStatus', { idCandi, status })
      .then(() => this.props.getAllCandidates())
      .then(() => this.props.history.push('/candidates/allCandidates'));
  };

  render () {
    return (

      <div >
        <div id='infoCandHR'>
          <Link to={'/candidates/' + this.props.candidate.id} ><button className='ActionsBotonesBlanco'>Go Back</button></Link>
          <div style={{ marginLeft: '30px' }} className='halfGrid'>
            <div>
              <h2 style={{ marginTop: '20px' }}>Full name: <strong>{this.props.candidate.fullName} </strong></h2>
              <h2>Phone: <strong>{this.props.candidate.telNumber}</strong> </h2>
              <h2>Email Adress: <strong>{this.props.candidate.email}</strong></h2>
              <h2>Candidate ID: <strong>{this.props.candidate.id}</strong></h2>
            </div>

            <div id='leftSideReport'>
              <h2 style={{ textAlign: 'center', padding: '10px', margin: '1% 7%' }} className={'borde ' + this.props.candidate.status}>
                <strong className={this.props.candidate.status}>STATUS :  </strong>
                <span className={'statusReport '}>{' ' + this.props.candidate.status} </span>
              </h2>
              <h2 style={{ textAlign: 'center', marginTop: '20px' }}>
                <strong>HR Interviewer: </strong>
                {' ' + this.props.candidate.interviewerHR.nombre}
              </h2>
              <div className='halfGrid' >
                <a style={{ textAlign: 'center' }} href="#candidateExpertise"> Read Candidate Expertise</a>
                {this.props.candidate.url && <a style={{ textAlign: 'center' }} href={this.props.candidate.url} target='_blank'>Link a Perfil en Linked-in</a>}
              </div>
            </div>

          </div>
          <div className='divito'>
            <div className='mitadReport'>
              <button
                id='appReport'
                onClick={() => this.changeCandStatus(this.props.candidate.id, 'Approved HR')} >
                APPROVE HR</button>
              <button
                id='pendReport'
                onClick={() => this.changeCandStatus(this.props.candidate.id, 'Pending HR')}>PENDING</button>
              <button
                id='rejReport'
                onClick={() => this.changeCandStatus(this.props.candidate.id, 'Rejected HR')}>REJECT HR</button>
            </div>
          </div>
        </div>

        <div className='answersHR'>
          {
            this.props.answersHR.map((elemento, key) => (
              <div key={elemento.pregunta} className='answerBox'>
                <h3><strong style={{ borderBottom: '1px solid black' }}>{elemento.pregunta} :</strong> </h3>
                <h3>{elemento.respuesta}</h3>
              </div>
            ))
          }
        </div>
        <div id='candidateExpertise' className='answersHR answerBox'>
          <h3><strong style={{ borderBottom: '1px solid #0EB8DD', color: '#0EB8DD' }}> Candidate's Expertise</strong></h3>
          <h3>{this.props.candidate.expertise}</h3>
        </div>

      </div>

    );
  }
}

const mapStateToProps = (state) => ({
  candidate: state.candidate.candidate,
  answersHR: state.answers.answersHR
});

const mapDispatchToProps = (dispatch) => ({
  fetchHrAnswers: (interviewID) => dispatch(fetchHrAnswers(interviewID)),
  getAllCandidates: () => dispatch(getAllCandidates()),
  fetchCandidate: (idCandi) => dispatch(fetchCandidate(idCandi))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportComp);
