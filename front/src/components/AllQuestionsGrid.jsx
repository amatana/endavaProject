/* eslint-disable no-unused-vars */
import React from 'react';

export default class AllQuestions extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selectedQuestionID: null,
      selectedQuestionContent: ''
    };
  }

  setSelectedQuestion (questionId, questionContent) {
    console.log(questionContent);
    this.state.selectedQuestionID = questionId;
    this.setState({ selectedQuestionContent: questionContent });
  }

  setModifiedQuestion (e) {
    this.state.selectedQuestionContent = e.target.value;
  }

  render () {
    const { onClick, questions } = this.props;

    return (
      <div style={{ margin: '4% 9%', border: '2px solid #000000' }} >

        <div className="modal fade" id="confirmDeleteModal" tabIndex="-1" role="dialog" aria-labelledby="confirmDeleteLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="confirmDeleteLabel">Are your sure you to delete this question?</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              This action will delete selected question permanently
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger" onClick={() => onClick(this.state.selectedQuestionID, 'delete')} data-dismiss="modal" >Delete</button>
              </div>
            </div>
          </div>
        </div>

        <div className="modal fade" id="editQuestionModal" tabIndex="-1" role="dialog" aria-labelledby="editQuestionlLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="editQuestionLabel">Edit this question</h5>
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="input-group">
                <textarea className="form-control" aria-label="With textarea" placeholder={this.state.selectedQuestionContent} onChange={(e) => this.setModifiedQuestion(e)}></textarea>
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-dismiss="modal">Cancel</button>
                <button type="button" className="btn btn-danger" onClick={() => onClick(this.state.selectedQuestionID, 'edit', this.state.selectedQuestionContent) } data-dismiss="modal" >Change</button>
              </div>
            </div>
          </div>
        </div>

        <table className="table">
          <thead style={{ backgroundColor: '#EC6861' }}>
            <tr>
              <th scope="col" style={{ fontSize: '20px', textAlign: 'center' }}>Questions</th>
            </tr>
          </thead>

          {questions.map((question) => {
            return (
              <tbody key={question.content}>
                <tr>
                  <td style={{ textAlign: 'left', fontSize: '20px' }} scope="row">{question.content}
                    <button onClick={() => this.setSelectedQuestion(question.id, question.content)} type="button" className="btn btn-link" style={{ float: 'right' }} data-toggle="modal" data-target="#confirmDeleteModal">
                      <img src="/utils/garbage.svg" width="20" />
                    </button>
                    <button onClick={() => this.setSelectedQuestion(question.id, question.content)} type="button" className="btn btn-link" style={{ float: 'right' }} data-toggle="modal" data-target="#editQuestionModal">
                      <img src="/utils/pencil.svg" width="20" />
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })
          }
        </table>
      </div>
    );
  };
}
