/* eslint-disable no-unused-vars */
import React from 'react';
import obj from '../containers/seed';

const AllUsers = (props) => {
  return (
    !props.user.isAdmin ? <h2>Lo siento, pero no tienes acceso para ver esta página</h2>
      : <div>
        <div className='addcand'><button type="button" className="btn btn-primary">Agregar candidato</button></div>
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
            {obj.map((campo, index = 0) => {
              return (
                <tbody key={index++}>
                  <tr>
                    <th style={{ textAlign: 'center', fontSize: '20px' }} scope="row">{campo.candidato}</th>
                    <td style={{ textAlign: 'center', fontSize: '20px' }}>{campo.perfil}</td>
                    <td style={{ textAlign: 'center', fontSize: '20px' }}>{campo.estado}</td>
                    {campo.estado === 'Approbed HR' ? <td style={{ textAlign: 'center', fontSize: '20px' }}><button type="button" className="btn btn-primary btn-primaryList">Assign Sist.</button>
                    </td> : campo.estado === 'Tech Approved' ? <td style={{ textAlign: 'center', fontSize: '20px' }}><button type="button" className="btn btn-primary btn-primaryList">Generate Report</button>
                    </td> : campo.estado === 'New' ? <td style={{ textAlign: 'center', fontSize: '20px' }}><button type="button" className="btn btn-primary btn-primaryList">Assign Hr.</button>
                    </td> : <td style={{ textAlign: 'center', fontSize: '20px' }}><button type="button" className="btn btn-primary btn-primaryList">Go to the pingo</button>
                    </td>}
                  </tr>
                </tbody>
              );
            })}
          </table>
        </div>
      </div>
  );
};

export default AllUsers;
