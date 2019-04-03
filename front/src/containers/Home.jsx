/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    props.user && props.user.isAdmin
      ? <div className='row'>
        <div className='col-lg-4' ></div>
        <div className='col-lg-4'>
          <img style= { { width: '100%', marginBottom: '80px', marginTop: '80px' } } src = './utils/logo.png' />
          <Link to="/candidates"><button style={{ width: '100%', margin: '20px', fontSize: '30px' }} className="btn btn-lg boton">Admin Candidates</button></Link>
          <Link to="/questions/allQuestions"><div><button style={{ width: '100%', margin: '20px', fontSize: '30px' }} className="btn btn-lg boton">Admin Questions</button></div></Link>
          <Link to="/users"><div><button style={{ width: '100%', margin: '20px', fontSize: '30px' }} className="btn btn-lg boton">Admin Users</button></div></Link>
        </div>
        <div className='col-lg-4' ></div>
      </div>
      : <div>No tenes permiso</div>
  );
};

export default Home;
