/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import AllCandidatesGrid from '../components/allCandidates';
import { getAllCandidates } from '../redux/action-creator/candidate-actions';
import { getAllUsers } from '../redux/action-creator/user-actions';

class AllCandidates extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount () {
    this.props.getAllUsers();
    this.props.getAllCandidates();
  }

  handleChange (e) {
    this.setState({ input: e.target.value });
  }

  render () {
    return (
      this.props.candidates && this.props.candidates.length < 1 ? <h2>Cargando...</h2>
        : <AllCandidatesGrid handleCandClick={this.handleCandClick} input={this.state.input} searchingFor={this.searchingFor} handleChange={this.handleChange} candidates={this.props.candidates} onClick={this.onClick} users={this.props.users} user={this.props.user} moreDetails={this.moreDetails}/>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  users: state.user.users,
  candidates: state.candidate.candidates
});
const mapDispatchToProps = (dispatch) => ({
  getAllCandidates: () => dispatch(getAllCandidates()),
  getAllUsers: () => dispatch(getAllUsers())
});

export default connect(mapStateToProps, mapDispatchToProps)(AllCandidates);
