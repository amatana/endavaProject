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
      usersSIST: []
    };
    this.createInterview = this.createInterview.bind(this);
    this.handleSubmitId = this.handleSubmitId.bind(this);
    this.submitHR = this.submitHR.bind(this);
    this.submitSIST = this.submitSIST.bind(this);
    this.handlePushId = this.handlePushId.bind(this);
  }
  componentDidMount () {
    this.props.getAllUsers();
    this.props.fetchCandidate(this.props.idCand)
      .then(() => {
        const { candidate } = this.props;
        const interSIST1Id = candidate.interSIST1 && candidate.interSIST1.id;
        const interSIST2Id = candidate.interSIST2 && candidate.interSIST2.id;
        this.setState({
          usersSIST: [interSIST1Id, interSIST2Id]
        });
      });
  }

  createInterview (candidate) {
    Axios.post('/api/interview/newInterv', {
      candidateId: candidate
    })
      .then(interview => {
        this.props.history.push(`/candidate/${candidate}/interview/${interview.data.id}`);
      });
  }

  handleSubmitId (e) {
    e.preventDefault();
    this.setState({ userHRId: Number(e.target.value) });
  }

  handlePushId (e) {
    e.preventDefault();
    const ids = this.state.usersSIST.slice();
    const value = Number(e.target.value);
    if (e.target.name === 'sist1') ids[0] = value;
    else ids[1] = value;
    this.setState({
      usersSIST: ids
    });
  }

  submitHR (idCandi) {
    Axios.post('/api/candidate/setUserHR', { idUser: this.state.userHRId, idCandi })
      .then(user => console.log(user));
  }
  submitSIST (idCandi) {
    Axios.post('/api/candidate/setUserSIST', { idUser: this.state.userSIST, idCandi })
      .then(user => console.log(user));
  }
  render () {
    return (
      !!this.props.candidate && !!this.props.candidate.id &&
      <ActionsCandidates users={this.props.users} user={this.props.user} candidate={this.props.candidate} submitHR={this.submitHR} onClickInterview={this.createInterview} handleSubmitId={this.handleSubmitId} handlePushId={this.handlePushId}/>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  candidate: state.candidate,
  users: state.user.users
});
const mapDispatchToProps = (dispatch) => ({
  fetchCandidate: (idUser, idCandi) => dispatch(fetchCandidate(idUser, idCandi)),
  getAllUsers: () => dispatch(getAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCandidate);
