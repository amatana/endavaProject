
import React from 'react';
import { connect } from 'react-redux';

import { fetchCandidate } from '../redux/action-creator/candidate-actions';

class ReportGeneration extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      candidato: {
        tags: []
      }
    };
  }

  componentDidMount () {
    this.props.fetchCandidate(this.props.candID);
  }

  render () {
    return (
      <div>
        <h1>GENERATE REPORT</h1>
        <h2>{this.props.candID}</h2>
        <h4>Name: {this.props.candidate.fullName}</h4>
        <h4>e-mail: {this.props.candidate.email}</h4>
        <h4>telephone: {this.props.candidate.telNumber}</h4>
        <h4>expertise: {this.props.candidate.expertise}</h4>
      </div>
      <div></div>
    );
  }
}
const mapStateToProps = (state) => ({
  candidate: state.candidate.candidate
});
const mapDispatchToProps = (dispatch) => ({
  fetchCandidate: (candID) => dispatch(fetchCandidate(candID))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReportGeneration);
