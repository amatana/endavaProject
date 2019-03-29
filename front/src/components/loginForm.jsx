import React from 'react';

const loginForm = (props) => {
  return (
    <div className='row' style={{ marginTop: '50px', padding: '20px' }}>
      <div className='col-lg-3'></div>
      <div className='col-lg-6 addUser'>
        <form onSubmit={props.onSubmit}>
          <h1 style={{ textAlign: 'center', color: '#DE411B' }}>LOGIN</h1>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Email address</label>
            <input type="email" onChange={props.onChange} className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" placeholder="Enter email" />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputPassword1">Password</label>
            <input type="password" className="form-control" onChange={props.onChange} id="exampleInputPassword1" name="password"  placeholder="Password" />
          </div>
          <div className='row'>
            <div className='col-lg-3'></div>
            <div className='col-lg-6' ><button style={{ width: '100%', marginTop: '20px', fontSize:'30px' }} type="submit" onSubmit={props.onSubmit} className="btn btn-lg boton">Iniciar Sesión</button></div>
            <div className='col-lg-3'></div>
          </div>
        </form>
      </div>
      <div className='col-lg-3'></div>
    </div>
  );
};

export default loginForm;