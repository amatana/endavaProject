/* eslint-disable no-unused-vars */
import React from 'react';
import { candidatos, entrevistadoresSist } from '../containers/seed';
import { connect } from 'react-redux';

class allCandidates extends React.Component {
  constructor () {
    super();
    this.state = {
      entrevistador: '',
      popInput: ''
    };
  }

  render () {
    console.log('el nuevo entrevistador es', this.state.entrevistador);
    return (
      !this.props.user.isAdmin ? <h2>Lo siento, pero no tienes acceso para ver esta página</h2>
        : <div>
          <form className="form-inline" style={{ float: 'left', margin: 'auto' }}>
            <i className="fas fa-search" aria-hidden="true"></i>
            <input onChange={this.props.handleChange} className="form-control form-control-sm ml-3 w-75" type="text" placeholder="Filter by State" aria-label="Search" />
          </form>
          <div className='addcand'>
            <button type="button" className="btn btn-primary">Agregar candidato</button>
          </div>
          <div style={{ margin: '4% 9%', border: '2px solid #000000' }} >
            <table className="table">
              <thead style={{ backgroundColor: '#EC6861' }}>
                <tr>
                  <th scope="col" style={{ fontSize: '20px', textAlign: 'center' }}>CANDIDATE</th>
                  <th scope="col" style={{ fontSize: '20px', textAlign: 'center' }}>PROFILE</th>
                  <th scope="col" style={{ fontSize: '20px', textAlign: 'center' }}>STATE</th>
                  <th scope="col" style={{ fontSize: '20px', textAlign: 'center' }}>ACTION</th>
                  <th scope="col" style={{ fontSize: '20px', textAlign: 'center' }}></th>
                </tr>
              </thead>

              {candidatos.map((campo, index = 0) => {
                if (campo.estado.toLowerCase().includes(this.props.input)) {
                  return (
                    <tbody key={index++}>
                      <tr>
                        <th style={{ textAlign: 'center', fontSize: '20px' }} scope="row">{campo.candidato}</th>
                        <td style={{ textAlign: 'center', fontSize: '20px' }}>{campo.perfil}</td>
                        <td style={{ textAlign: 'center', fontSize: '20px' }}>{campo.estado}</td>
                        {campo.estado === 'Approbed HR'
                          ? <td style={{ textAlign: 'center', fontSize: '20px' }}>
                            <button type="button" className="btn btn-primary btn-primaryList">Assign Sist.
                            </button>
                          </td>
                          : campo.estado === 'Tech Approved'
                            ? <td style={{ textAlign: 'center', fontSize: '20px' }}>
                              <button type="button" className="btn btn-primary btn-primaryList" data-toggle="modal" data-target=".bd-example-modal-sm">Generate report
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
                            : campo.estado === 'New'
                              ? <td style={{ textAlign: 'center', fontSize: '20px' }}>
                                <button type="button" className="btn btn-primary btn-primaryList">Assign Hr.
                                </button>
                              </td>
                              : <td style={{ textAlign: 'center', fontSize: '20px' }}>
                                <button type="button" className="btn btn-primary btn-primaryList">Go to the pingo
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
