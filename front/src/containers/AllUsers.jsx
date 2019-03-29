import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import AllUsersGrid from '../components/allUsers';

class AllUsers extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      users: []
    };
  }

  componentDidMount () {
    axios.get('/api/users/getAll')
      .then(res => res.data)
      .then(users => this.setState({ users }));
  }

  render () {
    return (
    this.state.users && this.state.users.length < 1 ? <h2>Cargando...</h2>
      : <AllUsersGrid users={this.state.users} user={this.props.user}/>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
