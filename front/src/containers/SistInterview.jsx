/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

class SistInterview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount () {

  }

  componentDidUpdate (prevState) {
    if (prevState.user.area !== this.props.user.area) {

    }
  }

  render () {
    return (<div>SIST INTERVIEW</div>);
  }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
});

export default connect(mapStateToProps, mapDispatchToProps)(SistInterview);
