/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import { setInterviewCandidate } from '../redux/action-creator/interviewActions';
import { fetchCandidate } from '../redux/action-creator/candidate-actions';
import { fetchCandidateQuestions } from '../redux/action-creator/questionActions';

class PreSistInterview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      candidato: {
        tags: []
      }
    };
    this.onChangeCheckbox = this.onChangeCheckbox.bind(this);
    this.onClickFunc = this.onClickFunc.bind(this);
  };

  componentDidMount () {
    this.props.fetchCandidate(this.props.candID);
  }

  componentDidUpdate (prevState) {
    if (prevState.candidate !== this.props.candidate) {
      this.props.fetchCandidateQuestions(this.props.candidate.tags);
      this.setState({ candidato: this.props.candidate });
    }
  }

  onChangeCheckbox (e) {
    e.preventDefault();
    let arrayQuestionsID = [];
    console.dir(e.target);
    for (let i = 0; i < this.props.candidateQuestions.length; i += 1) {
      console.log(e.target[i].value, '++++++++++ ', e.target[i].checked);
      if (e.target[i].checked) arrayQuestionsID.push(Number(e.target[i].value));
    }
    console.log('arreglo de ID de pregutnas', arrayQuestionsID);
    console.log('CANDIDATO', this.props.candidate.id);
    this.props.setInterviewCandidate({
      candidateID: this.props.candidate.id,
      questionsID: arrayQuestionsID
    });
    alert('Interview has been created! ');
  }

  onClickFunc () {
    console.log('LEONARDOOOOOOOOOOO!!!!!!!!!!!!!!!!!!');
    this.props.history.push('/PAGINA_DE_LEO');
  }
  render () {
    return (<div>
      <img src="/utils/Frame.png"></img>
      <button style={{ position: 'absolute',
        width: '268px',
        height: '60px',
        left: '1000px',
        top: '40px',

        background: '#DE411C',
        border: '1px solid #DE411C',
        boxSizing: 'border-box',
        borderRadius: '30px'
      }}>
      </button>
      <div style={{ position: 'absolute',
        width: '268px',
        height: '60px',
        left: '979px',
        top: '40px',

        fontFamily: 'Roboto Condensed',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: 'normal',
        textAlign: 'center',
        color: '#FFFFFF' }}>
        CREATE CANDIDATE  + </div>
      <div>
        <h2 style={{ position: 'absolute',
          width: '325px',
          height: '22px',
          left: '40px',
          top: '155px',

          fontFamily: 'Roboto Condensed',
          fontStyle: 'normal',
          fontWeight: 'bold',
          fontSize: '20px',
          lineHeight: 'normal',
          letterSpacing: '-0.01em',

          color: '#000000' }}>Candidate info
        </h2>
      </div>
      <div>
        <textarea className= 'testNew' type="text" value={
          this.state.candidato.fullName + '\n' +
              this.state.candidato.email + '\n' +
              this.state.candidato.telNumber + '\n' +
              this.state.candidato.url
        }/>
      </div>

      <div style={{
        position: 'absolute',
        left: '70.67%',
        right: '22.22%',
        top: '20.21%',
        bottom: '76.66%' }}>
        {this.state.candidato.tags.map(tag => (
          <button key={tag.tag}
            style={{
              background: '#FFFFFF',
              border: '1px solid #9BB4BE',
              boxSizing: 'border-box',
              borderRadius: '24px' }}>
            <h4 style={{ fontFamily: 'Avenir',
              fontSize: '14px',
              lineHeight: '24px',
              textAlign: 'center',

              color: '#000000'
            }}>
              <strong key={tag.tag}>{tag.tag}</strong></h4>
          </button>
        ))}
      </div>
      < div style= {{ position: 'absolute',
        width: '325px',
        height: '22px',
        left: '40px',
        top: '481px',

        fontFamily: 'Roboto Condensed',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: 'normal',
        letterSpacing: '-0.01em',

        color: '#000000' }}>
Select questions
      </div>
      <div style={{
        position: 'absolute',
        width: '1284px',
        height: '72px',
        left: '40px',
        top: '545px',

        background: 'rgba(155, 180, 190, 0.1)'
      }}>
        <form onSubmit={this.onChangeCheckbox}>
          <legend>Select questions</legend>
          {this.props.candidateQuestions.map(preg => (
            <div key={preg.id}>
              <input type="checkbox" name={preg.id} value={preg.id}></input>
              <label >{preg.content}</label>
            </div>
          ))}
          <button
            style={{
              position: 'absolute',
              width: '268px',
              height: '60px',
              left: '40px',
              top: '1000px',
              background: '#DE411C',
              border: '1px solid #DE411C',
              boxSizing: 'border-box',
              borderRadius: '30px'
            }}>Create interview</button>
          <div>
            <button onClick={this.onClickFunc}
              style={{
                position: 'absolute',
                width: '268px',
                height: '60px',
                left: '400px',
                top: '1000px',
                background: '#DE411C',
                border: '1px solid #DE411C',
                boxSizing: 'border-box',
                borderRadius: '30px'
              }}>Go to interview</button>
          </div>
        </form>
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => ({
  candidate: state.candidate.candidate,
  candidateQuestions: state.question.candidateQuestions
});
const mapDispatchToProps = (dispatch) => ({
  fetchCandidate: (candID) => dispatch(fetchCandidate(candID)),
  fetchCandidateQuestions: (tags) => dispatch(fetchCandidateQuestions(tags)),
  setInterviewCandidate: (obj) => dispatch(setInterviewCandidate(obj))
});

export default connect(mapStateToProps, mapDispatchToProps)(PreSistInterview);
