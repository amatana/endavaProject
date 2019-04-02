import React from 'react';

const AllUsers = (props) => {
  return (
    !props.user.isAdmin ? <h2>Lo siento, pero no tienes acceso para ver esta página</h2>
      : <div style={{ margin: '4% 9%', border: '2px solid #000000' }} >
        <table className="table">
          <thead style={{ backgroundColor: '#EC6861' }}>
            <tr>
              <th scope="col" style={{ fontSize: '20px', textAlign: 'center' }}>NOMBRE</th>
              <th scope="col" style={{ fontSize: '20px', textAlign: 'center' }}>EMAIL</th>
              <th scope="col" style={{ fontSize: '20px', textAlign: 'center' }}>ÁREA</th>
              <th scope="col" style={{ fontSize: '20px', textAlign: 'center' }}>isAdmin</th>
              <th scope="col" style={{ fontSize: '20px', textAlign: 'center' }}></th>
            </tr>
          </thead>
          {props.users && props.users.map((user, index = 0) => {
            return (
              <tbody key={index++}>
                <tr>
                  <th style={{ textAlign: 'center', fontSize: '20px' }} scope="row">{user.nombre}</th>
                  <td style={{ textAlign: 'center', fontSize: '20px' }}>{user.email}</td>
                  <td style={{ textAlign: 'center', fontSize: '20px' }}>{user.area}</td>
                  <td style={{ textAlign: 'center', fontSize: '20px' }}>{user.isAdmin ? <h3 style={{ color: '#3da547' }}>TRUE</h3> : <h3>FALSE</h3>}</td>
                  <td>
                    <a><img onClick={() => props.onClick(user.id)} id='trashUser' src="/utils/garbage.svg"></img></a>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </div>
  );
};

export default AllUsers;
