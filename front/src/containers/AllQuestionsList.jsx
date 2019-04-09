import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';
import { Link } from 'react-router';

// eslint-disable-next-line no-unused-vars
import AllQuestionsGrid from '../components/AllQuestionsGrid';
import { searchAllQuestions, deleteQuestion, editQuestion } from '../redux/action-creator/questionActions';

function buildFileSelector() {
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.setAttribute('multiple', 'multiple');
  return fileSelector;
}

class AllQuestionsList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fileSelector: null
    };
    this.handleFileSelect = this.handleFileSelect.bind(this);
    this.onClick = this.onClick.bind(this);
  }

  componentDidMount() {
    this.props.searchAllQuestions(this.props.user.area);
    this.setState({ fileSelector: buildFileSelector() });
  }

  componentDidUpdate(prevState) {
    if (prevState.user.area !== this.props.user.area) {
      this.props.user.area ? this.props.searchAllQuestions(this.props.user.area) : null;
    }
  }

  onClick(questId, action, modifiedQuestion) {
    switch (action) {
      case 'delete':
        this.props.deleteQuestion(questId, this.props.user.area);
        break;
      case 'edit':
        this.props.editQuestion(questId, modifiedQuestion, this.props.user.area);
        break;
      case 'addManually':
        this.props.history.push('/questions/add');
        break;
      case 'addFromFile':
        this.props.history.push('/questions/addFromFile');
        break;
      case 'addTag':
        this.props.addTag();
        break;

      default:
    }
  }

  handleFileSelect(e) {
    e.preventDefault();
    console.log(this.state);
    this.state.fileSelector.click();
  }

  render() {
    return (
      <div className="dropdown show" >
        <button type="button" className="btn btn-link" role="button" id="addQuestionIcon" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" style={{ float: 'right' }} >
          <img src="/utils/add.svg" width="50" id='addQuestBtn' />
        </button>
        <div className='modalQuest'>
          <div className="dropdown-menu probandModal" aria-labelledby="addQuestionIcon">
            <button className="dropdown-item probando2" onClick={() => this.onClick(null, 'addManually')}>Add new question manually</button>
            <button className="dropdown-item probando2" onClick={this.handleFileSelect}>Add new question from file</button>
          </div>
        </div>
        <AllQuestionsGrid onClick={this.onClick} questions={this.props.allQuestions} />
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
  allQuestions: state.allQuestions
});
const mapDispatchToProps = (dispatch) => ({
  searchAllQuestions: (area) => dispatch(searchAllQuestions(area)),
  deleteQuestion: (questId, area) => dispatch(deleteQuestion(questId, area)),
  editQuestion: (questId, modifiedQuestion, area) => dispatch(editQuestion(questId, modifiedQuestion, area))

});

export default connect(mapStateToProps, mapDispatchToProps)(AllQuestionsList);
