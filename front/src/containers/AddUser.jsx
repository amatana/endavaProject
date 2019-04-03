import React from 'react';
import { connect } from 'react-redux';

// eslint-disable-next-line no-unused-vars
import AddUserForm from '../components/addUser';
import { createUser } from '../redux/action-creator/user-actions';

class addUser extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      nombre: '',
      email: '',
      password: '',
      area: '',
      isAdmin: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit (e) {
    e.preventDefault();
    if (this.state.email.split('@')[1] !== 'endava.com') {
      alert('El email debe pertenecer al dominio @endava.com');
    } else {
      this.props.createUSer(this.state);
      return this.props.history.push('./');
    }
  }

  handleChange (e) {
    this.setState(
      { [e.target.name]: e.target.value });
  }

  render () {
    return (
      < AddUserForm onChange={this.handleChange} onSubmit={this.handleSubmit} />
    )
    ;
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  createUSer: (user) => dispatch((createUser(user)))
});

export default connect(mapStateToProps, mapDispatchToProps)(addUser);
