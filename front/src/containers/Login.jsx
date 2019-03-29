import React from 'react';
import { connect } from 'react-redux';

import { checkUserLogin } from '../redux/action-creator/user-actions';
import LoginForm from '../components/loginForm';

class Login extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      email: '',
      password: ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange (e) {
    console.log("AVERGA SI APAREZCOOO", this.state)
    this.setState(
      { [e.target.name]: e.target.value });
  }

  handleSubmit (e) {
    e.preventDefault();
    const user = this.state;
    this.props.checkUserLogin(user)
      .then(() => {
        this.props.history.push('/home');
      })
    ;
  }

  render () {
    return (
      <LoginForm onChange={this.handleChange} onSubmit={this.handleSubmit}/>
    );
  }
}
const mapStateToProps = (state) => ({
  user: state.user,
});
const mapDispatchToProps = (dispatch) => ({
  checkUserLogin: (user) => dispatch((checkUserLogin(user)))
});

export default connect(mapStateToProps, mapDispatchToProps)(Login);
