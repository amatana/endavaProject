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

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount () {
    axios.get('/api/users/getAll')
      .then(res => res.data)
      .then(users => this.setState({ users }));
  }

  onClick (id) {
    axios.delete(`/api/users/delete/${id}`)
      .then(() => alert('Se eliminó correctamente al Usuario'))
      .then(() => axios.get('/api/users/getAll'))
      .then(res => res.data)
      .then(users => this.setState({ users }));
  }

  render () {
    return (
      this.state.users && this.state.users.length < 1 ? <h2>Cargando...</h2>
        : <AllUsersGrid onClick={this.onClick} users={this.state.users} user={this.props.user}/>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AllUsers);
