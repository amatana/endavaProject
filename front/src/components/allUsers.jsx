import React from 'react';
import { Link } from 'react-router-dom'

const AllUsers = (props) => {
  return (
    !props.user.isAdmin ? <h2>Lo siento, pero no tienes acceso para ver esta página</h2>
      : <div className='tableDiv' style={{ margin: '3% 1%' }} >
        <div className='addcand'>
          <Link to="/users/addUser"><button type="button" className="btn btn-lg boton">Add User</button></Link>
        </div>
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
                          Are you sure you want to delete this user?
                          </div>
                          <div className="modal-footer">
                            <button type="button" className="btn btn-secondary textModal" data-dismiss="modal">Cancel</button>
                            <button type="button" className="btn btn-primary textModal" onClick={() => props.onClick(user.id)}>Yes</button>
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
