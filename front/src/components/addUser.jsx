import React from 'react';

const AddUser = (props) => {
  return (
    <div>
      <form onSubmit={props.onSubmit}>
        <div className='row'>
          <div className="col-lg-3"></div>
          <div className="col-lg-6  addUser">
            <h2 style={{ color: '#DE411B', marginBottom: '15px' }}>AÑADIR UN NUEVO USUARIO</h2>
            <div className="form-group" >
              <label htmlFor="nombre">Nombre y Apellido</label>
              <input onChange={props.onChange} type="text" className="form-control" id="nombre" aria-describedby="emailHelp" placeholder="Nombre y Apellido" name="nombre" />
            </div>

            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input onChange={props.onChange} type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" placeholder="Email" />
              <small id="emailHelp" className="form-text text-muted">Recordá sólo ingresar casillas @endava.com </small>
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input onChange={props.onChange} type="password" className="form-control" name="password" id="password" placeholder="Password" />
            </div>
            
            <h5>Pertenece al área de :</h5>
            <div className="form-check form-check-inline">
              <input onChange={props.onChange} className="form-check-input" type="radio" name="area" id="inlineRadio1" value="Sistemas" />
              <label className="form-check-label" htmlFor="inlineRadio1">Sistemas</label>
            </div>

            <div className="form-check form-check-inline">
              <input onChange={props.onChange} className="form-check-input" type="radio" name="area" id="inlineRadio2" value="RRHH" />
              <label className="form-check-label" htmlFor="inlineRadio2">Recursos Humanos</label>
            </div>

            <div className="form-group formorm-check" style={{ margin: '20px', float: 'right' }}>
              <input type="checkbox" value={true} onChange={props.onChange} className="form-check-input" id="isAdmin" name="isAdmin" />
              <label className="form-check-label" htmlFor="isAdmin">Es Admin</label>
            </div>
            <button onSubmit={props.onSubmit} type="submit" className="btn boton btn-lg">Añadir Usuario</button>
          </div>
          <div className="col-lg-3"></div>
        </div>
      </form>
    </div>
  );
};

export default AddUser;
