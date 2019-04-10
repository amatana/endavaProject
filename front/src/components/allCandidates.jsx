/* eslint-disable no-unused-vars */
import React from 'react';
import { candidatos, entrevistadoresSist } from '../containers/seed';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

class allCandidates extends React.Component {
  constructor () {
    super();
    this.state = {
      entrevistador: '',
      popInput: ''
    };
  }

  render () {
    console.log('SOY LAS PROPSSSSS', this.props);
    console.log('el nuevo entrevistador es', this.state.entrevistador);
    return (
      !this.props.user.isAdmin ? <h2>Lo siento, pero no tienes acceso para ver esta página</h2>
        : <div>
          <form className="form-inline" style={{ float: 'left', margin: 'auto' }}>
            <i className="fas fa-search" aria-hidden="true"></i>
            <input onChange={this.props.handleChange} className="form-control form-control-sm ml-3 w-75 inputSearch" type="text" placeholder="Filter by State" aria-label="Search" />
          </form>
          <div className='addcand'>
            <Link to="/candidates/addCandidate"><button type="button" className="btn btn-lg boton">Add Candidate</button></Link>
          </div>
          <div className='tableDiv' style={{ margin: '3% 1%' }} >
            <h2 className='titHome'><a>ALL CANDIDATES</a> || <a onClick={() => this.props.fetchMyCandidates(this.props.user.id)}>MY CANDIDATES</a></h2>
            <table className="table">
              <thead style={{ backgroundColor: '#DE411B' }}>
                <tr>
                  <th scope="col" className='tableHeading'>CANDIDATE</th>
                  <th scope="col" className='tableHeading'>PROFILE</th>
                  <th scope="col" className='tableHeading'>STATUS</th>
                  <th scope="col" className='tableHeading'>DETAILS</th>
                  <th scope="col" className='tableHeading'></th>
                </tr>
              </thead>

              {this.props.candidates.map((campo, index = 0) => {
                if (campo.status.toLowerCase().includes(this.props.input)) {
                  return (
                    <tbody key={index++}>
                      <tr>
                        <th className='tableHeading' scope="row">{campo.name + ' ' + campo.surname}</th>
                        <td className='tableHeading'>Acá van los perfiles</td>
                        <td className='tableHeading'>{campo.status}</td>
                        <td className='tableHeading'><Link to={`/candidates/${campo.id}`}><button>More Details</button></Link></td>
                      </tr>
                    </tbody>
                  )
                  ;
                };
              })}
            </table>
          </div>
        </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user.user
});
const mapDispatchToProps = (dispatch) => ({
  fetchMyCandidates : (userId) => dispatch(fetchMyCandidates(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(allCandidates);
