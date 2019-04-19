/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import { fetchCandidate } from '../redux/action-creator/candidate-actions';
import { fetchSisQuestions } from '../redux/action-creator/questionActions';
import { answerSystems } from '../redux/action-creator/answersActions';
import InterviewSisComp from '../components/interviewSisComp';

class InterviewSisCont extends React.Component {
  constructor (props) {
    super(props);
    // this.textInput = React.createRef();
    this.state = {

    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    // this.onChangeScore = this.onChangeScore.bind(this);
  }
  componentDidMount () {
    this.props.fetchCandidate(this.props.idCand)
      .then(data => {
        this.props.fetchSisQuestions(data.candidate.InterviewIDId);
        this.setState({
          InterviewSis: data.candidate.InterviewIDId
        });
      });
    // this.textInput.current.focusTextInput();
  }
  handleSubmit (e) {
    e.preventDefault();
    console.log(this.state);
    this.props.answerSystems(this.state);

    //   .then(error => {
    //     if (error) {
    //       console.log('el error es:', error);
    //       this.setState({ messege: error });
    //     } else {
    //       console.log('successfully saved candidate');
    //       this.setState({ messege: 'successfully saved candidate' });
    //     }
    //   });
  }
  // onClick () {
  //   console.log(this.state);
  //   // this.props.history.push('/candidates/allCandidates');
  // }
  handleChange (e) {
    console.log({ [e.target.id + '-' + e.target.name]: e.target.value });
    this.setState(
      { [e.target.id + '-' + e.target.name]: e.target.value }

      //   // { obj: [e.target.id, e.target.name, e.target.value] }
      //   // this.state.array = [e.target.id]=  {[e.target.id, e.target.name, e.target.value]}

    //   // {[e.target.id]:}
    //   //  e.target.data-id = {
    //   //   id: e.target.id,
    //   //   value: e.target.value
    //   // }
    );
    // console.log(this.state);
  }

  // onChangeScore () {
  //   console.log(this.textInput.current);

  //   // this.setState(
  //   //   // { obj: [e.target.id, e.target.name, e.target.value] }
  //   //   // this.state.array = [e.target.id]=  {[e.target.id, e.target.name, e.target.value]}
  //   //   // { [e.target.id + '-' + e.target.name]: e.target.value }
  //   //   // {[e.target.id]:}
  //   //   e.target.name = {
  //   //     id: e.target.id,
  //   //     value: e.target.value
  //   //   }
  //   // );
  //   // console.log(this.state);
  // }

  render () {
    // console.log('las props que llegan a entrevista de sistemas', this.props);
    return (
      <InterviewSisComp

        onChange={this.handleChange}
        onSubmit={this.handleSubmit}
        questions={this.props.questionSIS}
        candidate={this.props.candidate}
        // interview={this.props.interview}
        ref={this.textInput}

        onChangeScore={this.onChangeScore}

      />
    );
  }
}
const mapStateToProps = (state) => ({
  candidate: state.candidate.candidate,
  questionSIS: state.question.questionSIS

});

const mapDispatchToProps = (dispatch) => ({
  fetchCandidate: (idCandi) => dispatch(fetchCandidate(idCandi)),
  fetchSisQuestions: (idInter) => dispatch(fetchSisQuestions(idInter)),
  answerSystems: (answer) => dispatch(answerSystems(answer))
});

export default connect(mapStateToProps, mapDispatchToProps)(InterviewSisCont);

// handleChange (e) {
//   console.log(e.target.id, ':', e.target.name, '=>', e.target.value);
//   this.setState(
//     [e.target.id] = [
//       { [e.target.name]: e.target.value }
//     ]);
// }
