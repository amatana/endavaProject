import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

// eslint-disable-next-line no-unused-vars
import AllQuestionsGrid from '../components/AllQuestionsGrid';

class AllQuestionsList extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      allQuestions: [],
      area: 'RRHH'
    };

    this.onClick = this.onClick.bind(this);
  }

  componentDidMount () {
    this.searchAllQuestions(this.state.area);
  }

  onClick (questId, action, modifiedQuestion) {
    switch (action) {
      case 'delete':
        this.deleteQuestion(questId)
          .then(res => {
            this.searchAllQuestions(this.state.area);
          });
        break;

      case 'edit':
        this.editQuestion(questId, modifiedQuestion);
        break;
      default:
    }
  }

  searchAllQuestions (area) {
    axios.get(`/api/questions/reqAllQuestions/${area}`)
      .then(res => {
        this.setState({ allQuestions: res.data });
      });
  }

  deleteQuestion (questId) {
    return axios.get(`/api/questions/delete/${questId}`);
  }

  editQuestion (questId, modifiedQuestion) {
    axios.post(`/api/questions/edit/${questId}`, {
      content: modifiedQuestion
    })
      .then(modifiedQuestion => this.searchAllQuestions(this.state.area));
  }

  render () {
    return (
      <div>
        <h2>Question management</h2>
        <AllQuestionsGrid onClick={this.onClick} questions={this.state.allQuestions}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AllQuestionsList);
