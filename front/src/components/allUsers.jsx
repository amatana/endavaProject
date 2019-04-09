// eslint-disable-next-line no-unused-vars
import React from 'react';

const AllUsers = (props) => {
  return (
    !props.user.isAdmin ? <h2>Lo siento, pero no tienes acceso para ver esta página</h2>
      : <div className='tableDiv' style={{ margin: '3% 1%' }} >
        <h2 className='titHome'>ALL USERS</h2>
        <table className="table">
          <thead style={{ backgroundColor: '#DE411B' }}>
            <tr>
              <th scope="col" className='tableHeading'>NOMBRE</th>
              <th scope="col" className='tableHeading' >EMAIL</th>
              <th scope="col" className='tableHeading' >ÁREA</th>
              <th scope="col" className='tableHeading' >isAdmin</th>
              <th scope="col" className='tableHeading' >Delete</th>
            </tr>
          </thead>
          {props.users && props.users.map((user, index = 0) => {
            return (
              <tbody key={index++}>
                <tr>
                  <th className='tableHeading' scope="row">{user.nombre}</th>
                  <td className='tableHeading'>{user.email}</td>
                  <td className='tableHeading'>{user.area}</td>
                  <td className='tableHeading'>{user.isAdmin ? <h3 style={{ color: '#3da547' }}>TRUE</h3> : <h3>FALSE</h3>}</td>
                  <td>
                    <a><img data-toggle="modal" data-target="#exampleModal" id='trashUser' src="/utils/garbage.svg"></img></a>
                    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
                      <div class="modal-dialog" role="document">
                        <div class="modal-content">
                          <div class="modal-header">
                            <h5 class="modal-title" id="exampleModalLabel">Reconfirm</h5>
                            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                              <span aria-hidden="true">&times;</span>
                            </button>
                          </div>
                          <div class="modal-body">
                          Are you sure you want to delete this user?
                          </div>
                          <div class="modal-footer">
                            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cancel</button>
                            <button type="button" class="btn btn-primary" onClick={() => props.onClick(user.id)}>Yes</button>
                          </div>
                        </div>
                      </div>
                    </div>
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
