// eslint-disable-next-line no-unused-vars
import React from 'react';
import { connect } from 'react-redux';
import { getAllCandidates } from '../redux/action-creator/candidate-actions';

class CreateInterviewComp extends React.Component {
  componentDidMount () {
    this.props.getAllCandidates();
  }

  render () {
    return (
      <div>
        <div className='probando'>
          <div >
            <h2>Full name:</h2> {this.props.candidates[0] && this.props.candidates[0].fullName}
            <h2>Phone:</h2> {this.props.candidates[0] && this.props.candidates[0].telNumber}
            <h2>Email Adress:</h2> {this.props.candidates[0] && this.props.candidates[0].email}
          </div>

          <div >
            <h2>Tags:</h2> {'aca van los tags'}
          </div>
        </div>
      </div>
    );
  };
}

const mapStateToProps = (state) => ({
  candidates: state.candidates
});

const mapDispatchToProps = (dispatch) => ({
  getAllCandidates: () => dispatch(getAllCandidates())
});

export default connect(mapStateToProps, mapDispatchToProps)(CreateInterviewComp);
