/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import { fetchInterview } from '../redux/action-creator/interviewActions';

class SistInterview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      interviewID: 1,
      interview: {}
    };
  }

  componentDidMount () {
    this.props.fetchInterview(this.state.interviewID);
  }

  componentDidUpdate (prevState) {
    if (prevState.interview.id !== this.props.interview.id) {
      this.setState({ interview: this.props.interview });
      console.log('LLEGO LA ENTREVISTA CON ID: ', this.state.interviewID, 'CONTENIDO', this.state.interview);
    }
  }

  render () {
    return (<div><h2>IT Interview</h2></div>);
  }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
  fetchInterview: (interviewID) => dispatch(fetchInterview(interviewID))
});

export default connect(mapStateToProps, mapDispatchToProps)(SistInterview);
