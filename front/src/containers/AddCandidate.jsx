/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import AddCandidateComp from '../components/addcandidate';

class AddCandidate extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      users: [],
      candidate: {}
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    // if (this.state.email.split('@')[1] !== 'endava.com') {
    //   alert('El email debe pertenecer al dominio @envada.com');
    // } else {
    //   this.props.createUSer(this.state);
    //   return this.props.history.push('./');
    // }
  }

  handleChange (e) {
    console.log('loque me llega al handleChage ', e.target.name, e.target.value);
    // this.setState(
    //   { [e.target.name]: e.target.value });
  }

  render () {
    return (
      <AddCandidateComp onChange={this.handleChange} onSubmit={this.handleSubmit}/>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AddCandidate);
