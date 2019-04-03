/* eslint-disable no-unused-vars */
import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import AllCandidatesGrid from '../components/allCandidates';

class AllCandidates extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      input: ''
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange (e) {
    this.setState({ input: e.target.value });
  }

  componentDidMount () {
    axios.get('/api/users/getAll')
      .then(res => res.data)
      .then(users => this.setState({ users }));
  }

  render () {
    return (
      this.state.users && this.state.users.length < 1 ? <h2>Cargando...</h2>
        : <AllCandidatesGrid handleCandClick={this.handleCandClick} input={this.state.input} searchingFor={this.searchingFor} handleChange={this.handleChange} onClick={this.onClick} users={this.state.users} user={this.props.user}/>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AllCandidates);
