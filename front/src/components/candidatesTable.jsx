import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class CandidTable extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      selected: null
    };
  }
  render () {
    return (
      <table className="table">
        <thead >
          <tr style={{ borderBottom: '5px solid #DE411B', borderTop: '5px solid #DE411B' }}>
            <th scope="col" className='tableHeading'>CANDIDATE</th>
            <th scope="col" className='tableHeading'>PROFILE</th>
            <th scope="col" className='tableHeading'>STATUS</th>
            <th scope="col" className='tableHeading'>DETAILS</th>
            <th scope="col" className='tableHeading'>DELETE</th>
          </tr>
        </thead>

        <tbody >
          {this.props.candidates.map((candidate, index = 0) => {
            if (candidate.status.toLowerCase().includes(this.props.input)) {
              return (
                <tr key={index++} className={index % 2 ? 'grey' : 'white'}>
                  <th className='tableHeading ' scope="row">{candidate.name + ' ' + candidate.surname}</th>
                  <td className='tableHeading '>Acá van los perfiles</td>
                  <td className='tableHeading '><div className={candidate.status + ' gridDot'}></div><div id='candStatus'>{candidate.status}</div></td>
                  <td className='tableHeading '><Link to={`/candidates/${candidate.id}`}><button className='ActionsBotonesBlanco'>Actions Managment</button></Link></td>
                  <td className='tableHeading '>
                    <a><img onClick={() => this.setState({ selected: candidate.id })} data-toggle="modal" data-target="#exampleModal" id='trashUser' src="/utils/garbage.svg">
                    </img></a>
                    <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div className="modal-dialog" role="document">
                        <div className="modal-content">
                          <div className="modal-header">
                            <h5 className="modal-title textModal" id="exampleModalLabel">Reconfirm</h5>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div className="modal-body textModal">
                            Are you sure you want to delete this candidate?
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary textModal" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary textModal" data-dismiss="modal"
                              onClick={() => {
                                this.props.onClickDelete(candidate.id)
                              }}>Yes</button>
                          </div>
                        </div>
                      </div>
                    </div>
                  </td>
                </tr>
              )
              ;
            };
          })}
        </tbody>
      </table>
    );
  };
}
const mapStateToProps = (state) => ({
  user: state.user.user
  // candidates: state.candidate.candidates
});
const mapDispatchToProps = (dispatch) => ({
  fetchMyCandidates: (userId) => dispatch(fetchMyCandidates(userId)),
  getAllCandidates: () => dispatch(getAllCandidates())
});
export default connect(mapStateToProps, mapDispatchToProps)(CandidTable);
