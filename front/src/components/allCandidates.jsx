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
            <Link to="/candidates/addCandidate"><button type="button" className="btn boton">Add Candidate</button></Link>
          </div>
          <div  style={{ margin: '3% 1%'}}  >
          <h1 className='titHome'>ALL CANDIDATES</h1>
            <table className="table">
              <thead style={{ backgroundColor: '#DE411B' }}>
                <tr>
                  <th scope="col" className='tableHeading'>CANDIDATE</th>
                  <th scope="col" className='tableHeading'>PROFILE</th>
                  <th scope="col" className='tableHeading'>STATE</th>
                  <th scope="col" className='tableHeading'>ACTION</th>
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
                        {campo.status === 'Approbed HR'
                          ? <td className='tableHeading'>
                            <button type="button" className="btn boton btn-primaryList">Assign Sist.
                            </button>
                          </td>
                          : campo.status === 'Tech Approved'
                            ? <td className='tableHeading'>
                              <button type="button" className="btn boton btn-primaryList" data-toggle="modal" data-target=".bd-example-modal-sm">Generate report
                              </button>
                              <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                <div className="modal-dialog modal-sm">
                                  <div className="modal-content">
                                    Selecciona al entrevistador:
                                    {entrevistadoresSist.map((entrevistador, index = 0) => (
                                      <div key={index++} className="list-group">
                                        <div className="list-group">
                                          <a className="list-group-item list-group-item-action" onClick={() => this.setState({ entrevistador })}>{entrevistador}</a>
                                        </div>
                                      </div>)
                                    )}
                                  </div>
                                </div>
                              </div>
                            </td>
                            : campo.status === 'New'
                              ? <td className='tableHeading'>
                                <button type="button" className="btn boton btn-primaryList" data-toggle="modal" data-target=".bd-example-modal-sm">Assign Hr.
                                </button>
                                <div className="modal fade bd-example-modal-sm" tabIndex="-1" role="dialog" aria-labelledby="mySmallModalLabel" aria-hidden="true">
                                  <div className="modal-dialog modal-sm">
                                    <div className="modal-content">
                                      Selecciona al entrevistador:
                                      {this.props.users.map((entrevistador, index = 0) => (
                                        <div key={index++} className="list-group">
                                          <div className="list-group">
                                            <a className="list-group-item list-group-item-action" onClick={() => this.setState({ entrevistador: entrevistador.id })}>{entrevistador.nombre}</a>
                                          </div>
                                        </div>)
                                      )}
                                    </div>
                                  </div>
                                </div>
                              </td>
                              : <td className='tableHeading'>
                                <button type="button" className="btn boton btn-primaryList">Go to the pingo
                                </button>
                              </td>}
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
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(allCandidates);
