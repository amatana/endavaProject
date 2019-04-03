import React from 'react';

const AddUser = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit} className='formUser'>
        <div className='row'>
          <div className="col-lg-3"></div>
          <div className="col-lg-6  addUser">
            <h2 style={{ color: '#DE411B', paddingTop: '25px' }} className='titHome'>CREATE NEW USER</h2>
            <div className="formSpace form-group" >
              <label htmlFor="nombre">Full Name</label>
              <input onChange={props.onChange} type="text" className="inputLogin form-control" id="nombre" aria-describedby="emailHelp" name="nombre" />
            </div>

            <div className="formSpace form-group">
              <label htmlFor="email">Email</label>
              <input onChange={props.onChange} type="email" className="inputLogin form-control" id="email" name="email" aria-describedby="emailHelp" />
              <small id="emailHelp" className="form-text text-muted tiny">Remember you can only add @endava.com emails </small>
            </div>

            <div className="formSpace form-group">
              <label htmlFor="password">Password</label>
              <input onChange={props.onChange} type="password" className="inputLogin form-control" name="password" id="password" />
            </div>

            <div className='form-group formSpace'>
            <h5 id='belongsTo'>Belongs to :</h5>
              <div className="form-check form-check-inline formSpace">
                <input onChange={props.onChange} className="form-check-input radioScale" type="radio" name="area" id="inlineRadio1" value="Sistemas" />
                <label className="form-check-label labelSpacing" htmlFor="inlineRadio1">    Sistemas  </label>
              </div>

              <div className="form-check form-check-inline formSpace">
                <input onChange={props.onChange} className="form-check-input radioScale" type="radio" name="area" id="inlineRadio2" value="RRHH" />
                <label className="form-check-label labelSpacing" htmlFor="inlineRadio2">    RRHH  </label>
              </div>
            </div>

            <div className="form-check formorm-check-inline formSpace checkBox" >
              <input type="checkbox" style={{paddingBottom:'35px', marginLeft:'25px'}}value={true} onChange={props.onChange} className=" radioScale" id="isAdmin" name="isAdmin" /><span id='textCheckBox'>  isAdmin</span>
            </div>

            <div><button onSubmit={props.onSubmit} type="submit" className="btn boton btn-lg botonLogin">Done</button></div>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
