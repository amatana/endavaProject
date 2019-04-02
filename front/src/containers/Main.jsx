/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Login';
import AddUser from './AddUser';
import Home from './Home';
import AllUsers from './AllUsers';
import AllCantidates from './AllCandidates';
import Header from '../components/Header';

import { fetchUser } from '../redux/action-creator/user-actions';

class Main extends React.Component {
  componentDidMount () {
    this.props.fetchUser();
  }

  render () {
    return (
      <div>
        <Route render= {({ history }) => (<Header fetchUser={this.props.fetchUser} user={this.props.user} history={history} />)} />
        <Switch>
          <Route exact path="/" render={({ history }) => (<Login history={history} />)} />
          <Route exact path='/users/addUser' render={({ history }) => (<AddUser history={history} />)} />
          <Route exact path='/home' render={({ history }) => (<Home history={history} user={this.props.user}/>)} />
          <Route exact path='/addCandidate' render={({ history }) => (<AddCandidate user={this.props.user} history={history} />)} />
          <Route exact path='/candidates' render={({ history }) => (<AllCantidates history={history} user={this.props.user}/>)} />
          <Route exact path='/questions' render={({ history }) => (<Home history={history} user={this.props.user}/>)} />
          <Route exact path='/users/allUsers' render={({ history }) => (<AllUsers user={this.props.user} history={history} />)} />

        </Switch>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  fetchUser: () => dispatch((fetchUser()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Main);
