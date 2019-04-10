/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import CreateInterviewComp from '../components/CreateInterviewComp';

class CreateInterview extends React.Component {
  render () {
    return (
      <div>
        <CreateInterviewComp />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  candidates: state.candidates
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(CreateInterview);
