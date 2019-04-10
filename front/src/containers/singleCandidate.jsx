import React from 'react';
// eslint-disable-next-line no-unused-vars
import ActionsCandidates from '../components/actionsCandidates';
import { fetchCandidate } from '../redux/action-creator/candidate-actions';
import { connect } from 'react-redux';
import { getAllUsers } from '../redux/action-creator/user-actions';
import Axios from 'axios';

class SingleCandidate extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      userHRId: null,
      userSIST1: null,
      userSIST2: null
    };
this.handleChangeId = this.handleChangeId.bind(this);
this.submitHR = this.submitHR.bind(this);
this.submitSIST1 = this.submitSIST1.bind(this);
this.submitSIST2 = this.submitSIST2.bind(this);
this.createInterview = this.createInterview.bind(this);
}
  componentDidMount () {
    this.props.getAllUsers();
    this.props.fetchCandidate(this.props.idCand);
  }

  createInterview (candidate) {
    Axios.post('/api/interview/newInterv', {
      candidateId: candidate
    })
      .then(interview => {
        this.props.history.push(`/candidate/${candidate}/interview/${interview.data.id}`);
      });
  }

  handleChangeId (e) {
    e.preventDefault();
    console.log("==============*************************$$$$$$$$$$$$$$$$$$$$$$")
    this.setState({ [e.target.name]: Number(e.target.value) });
  }

  submitHR (idCandi) {
    console.log('ESTADO E IDS', this.state);
    Axios.post('/api/candidate/setUserHR', {
      idUser: this.state.userHRId || this.props.usersRH[0].id,
      idCandi
    })
      .then(() => this.props.fetchCandidate(this.props.idCand));
  }
  submitSIST1 (idCandi) {
    Axios.post('/api/candidate/setUserSIST1', {
      idUser: this.state.userSIST1 || this.props.usersSIST[0].id,
      idCandi
    })
      .then(() => this.props.fetchCandidate(this.props.idCand));
  }
  submitSIST2 (idCandi) {
    Axios.post('/api/candidate/setUserSIST2', {
      idUser: this.state.userSIST2 ||  this.props.usersSIST[0].id,
      idCandi })
      .then(() => this.props.fetchCandidate(this.props.idCand));
  }
  render () {
    return (
      !!this.props.candidate && !!this.props.candidate.id &&
      <ActionsCandidates
        usersRH={this.props.usersRH}
        user={this.props.user}
        candidate={this.props.candidate}
        submitHR={this.submitHR}
        handleChangeID={this.handleChangeId}
        handleSubSIS1={this.submitSIST1}
        handleSubSIS2={this.submitSIST2}
        usersSIST={this.props.usersSIST}
      />
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  candidate: state.candidate.candidate,
  usersRH: state.user.users.filter(user => user.area === 'RRHH'),
  usersSIST: state.user.users.filter(user => user.area === 'Sistemas')
});
const mapDispatchToProps = (dispatch) => ({
  fetchCandidate: (idUser, idCandi) => dispatch(fetchCandidate(idUser, idCandi)),
  getAllUsers: () => dispatch(getAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCandidate);
