// eslint-disable-next-line no-unused-vars
import React from 'react';
import { fetchHrAnswers } from '../redux/action-creator/answersActions';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import Axios from 'axios';
import { getAllCandidates } from '../redux/action-creator/candidate-actions';

class ReportComp extends React.Component {
  constructor () {
    super();
    this.changeCandStatus = this.changeCandStatus.bind(this);
  }
  componentDidMount () {
    this.props.fetchHrAnswers(this.props.idInter);
  }

  changeCandStatus (idCandi, status) {
    Axios.put('/api/candidate/changeStatus', { idCandi, status })
      .then(alert('Estado actualizado'))
      .then(() => this.props.getAllCandidates())
      .then(() => this.props.history.push('/candidates/allCandidates'));
  };

  render () {
    return (
      <div>
        <div>
          <div className='probando'>
            <div style={{ marginLeft: '30px' }}>
              <h2>Full name:</h2> {this.props.candidate.fullName}
              <h2>Phone:</h2> {this.props.candidate.telNumber}
              <h2>Email Adress:</h2> {this.props.candidate.email}
            </div>
            <div>
              {
                this.props.answersHR.map((elemento, key) => (
                  <div key={elemento.pregunta}>
                    <h2>{elemento.pregunta} : {elemento.respuesta}</h2>
                  </div>
                ))
              }
            </div>
          </div>
        </div>
        <button
          className='ActionsBotones'
          style={{ backgroundColor: '#0EDD4D' }}
          onClick={() => this.changeCandStatus(this.props.candidate.id, 'Approved HR')} >
          Approve HR</button>
        <button
          className='ActionsBotones'
          style={{ backgroundColor: '#DD0E0E' }}
          onClick={() => this.changeCandStatus(this.props.candidate.id, 'Rejected HR')}>Reject HR</button>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  answersHR: state.answers.answersHR
});

const mapDispatchToProps = (dispatch) => ({
  fetchHrAnswers: (interviewID) => dispatch(fetchHrAnswers(interviewID)),
  getAllCandidates: () => dispatch(getAllCandidates())
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportComp);
