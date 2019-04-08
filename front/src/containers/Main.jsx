/* eslint-disable no-unused-vars */
import React from 'react';
import { Route, Redirect, Switch, Link } from 'react-router-dom';
import { connect } from 'react-redux';

import Login from './Login';
import AddUser from './AddUser';
import Home from './Home';
import AllUsers from './AllUsers';
import AddQuestion from './AddQuestion';
import AllCantidates from './AllCandidates';

import AddCandidate from './AddCandidate';
import Header from '../components/Header';
import AllQuestionsList from './AllQuestionsList';
import UserHome from '../components/UserHome';
import CandidatesHome from '../components/candidateHome';
import SingleCandidate from '../containers/singleCandidate'
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
          <Route exact path='/' render={({ history }) => (<Home history={history} user={this.props.user}/>)} />
          <Route exact path="/login" render={({ history }) => (<Login history={history} />)} />
          <Route exact path='/candidates' render={({ history }) => (<CandidatesHome history={history} user={this.props.user}/>)} />
          <Route exact path='/candidates' render={({ history }) => (<CandidatesHome history={history} user={this.props.user}/>)} />
          <Route exact path='/candidates/addCandidate' render={({ history }) => (<AddCandidate user={this.props.user} history={history} />)} />
          <Route exact path='/candidates/allCandidates' render={({ history }) => (<AllCandidates history={history} user={this.props.user} />)} />
          <Route exact path='/candidates/:idCand' render={({ history, match }) => (<SingleCandidate history={history} user={this.props.user} idCand={match.params.idCand}/>)} />
          <Route exact path='/users' render={({ history }) => (<UserHome history={history} user={this.props.user}/>)} />
          <Route exact path='/users/addUser' render={({ history }) => (<AddUser history={history} />)} />
          <Route exact path='/users/allUsers' render={({ history }) => (<AllUsers user={this.props.user} history={history} />)} />
          <Route exact path='/questions' render={({ history }) => (<AllQuestionsList history={history} />)} />
          <Route exact path='/questions/add' render={({ history }) => (<AddQuestion history={history} user={this.props.user}/>)} />
          <Route exact path='/questions/loadFile' render={({ history }) => (<LoadFile history={history}/>)} />
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
