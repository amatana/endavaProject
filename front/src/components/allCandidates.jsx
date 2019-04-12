/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';
import { Link, Router, Route } from 'react-router-dom';
import { fetchMyCandidates, getAllCandidates } from '../redux/action-creator/candidate-actions';
import CandidateTable from './candidatesTable';

class allCandidates extends React.Component {
  constructor() {
    super();
    this.state = {
      entrevistador: '',
      popInput: '',
      candidates: []
    };
  }

  componentDidMount() {
    if (this.props.user.area === 'RRHH') {
      this.props.getAllCandidates()
        .then(candidates => this.setState({ candidates: candidates }));
    } else {
      this.props.fetchMyCandidates(this.props.user.id)
        .then(candidates => this.setState({ candidates: candidates }));
    }
  }

  render() {
    return (
      !this.props.user.isAdmin ? <h2>Lo siento, pero no tienes acceso para ver esta página</h2>
        : <div>
          <form className="form-inline" style={{ float: 'left', margin: 'auto' }}>
            <i className="fas fa-search" aria-hidden="true"></i>
            <input onChange={this.props.handleChange} className="form-control form-control-sm ml-3 w-75 inputSearch" type="text" placeholder="Filter by State" aria-label="Search" />
          </form>
          <div className='addcand'>
            <Link to="/candidates/addCandidate"><button type="button" className="btn btn-lg ActionsBotonesNaranja">Add Candidate</button></Link>
          </div>

          <div className='tableDiv' style={{ margin: '3% 1%' }} >
            <h2 className='titHome'>
              {!!(this.props.user.area === 'RRHH') && <button className='ActionsBotonesBlanco' onClick={() => {
                this.props.getAllCandidates()
                  .then(candidates => this.setState({ candidates: candidates }))
              }}>
                ALL CANDIDATES </button>}
              <button className='ActionsBotonesBlanco' onClick={() => {
                this.props.fetchMyCandidates(this.props.user.id)
                  .then(candidates => this.setState({ candidates: candidates }))
              }}>MY CANDIDATES</button>
            </h2>
          </div>
          <div>
            <CandidateTable
              candidates={this.state.candidates}
              input={this.props.input}
            />
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user,
  // candidates: state.candidate.candidates,
  // myCandidates: state.candidate.myCandidates
});
const mapDispatchToProps = (dispatch) => ({
  fetchMyCandidates: (userId) => dispatch(fetchMyCandidates(userId)),
  getAllCandidates: () => dispatch(getAllCandidates())
});

export default connect(mapStateToProps, mapDispatchToProps)(allCandidates);
