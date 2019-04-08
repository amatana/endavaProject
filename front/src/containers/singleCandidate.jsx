import React from 'react';
import { fetchCandidate } from '../redux/action-creator/candidate-actions';
import { connect } from 'react-redux';

class SingleCandidate extends React.Component {
  componentDidMount () {
    this.props.fetchCandidate(this.props.idCand)
  }
  render () {
    const candidate = this.props.candidate
    return (
      !!this.props.candidate && !!this.props.candidate.id &&
      <div>
        <h2>{candidate.name + ' ' + candidate.surname + ' ||  #' + candidate.id}</h2>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  candidate: state.candidate
});
const mapDispatchToProps = (dispatch) => ({
  fetchCandidate: (id) => dispatch(fetchCandidate(id))
});

export default connect(mapStateToProps, mapDispatchToProps)(SingleCandidate);
