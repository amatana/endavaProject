import React from 'react';
import axios from 'axios';
import { Link } from 'react-router';
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
      <div className="dropdown show" >
        <h2>Question management</h2>
        <button type="button" className="btn btn-link" role="button" id="addQuestionIcon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ float: 'right' }} >
          <img src="/utils/add.svg" width="50" />
        </button>
        <div className="dropdown-menu" aria-labelledby="addQuestionIcon">
          <a className="dropdown-item">Add new question manually</a>
          <a className="dropdown-item" href="/home">Add new question from file</a>
        </div>
        <AllQuestionsGrid onClick={this.onClick} questions={this.state.allQuestions} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(AllQuestionsList);
