/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  return (
    props.user && props.user.isAdmin
      ? <div>
        <div className='homeDisplay'>
          <Link to="/candidates"><button className="btn btn-lg botonHome">Admin Candidates</button></Link>
          <Link to="/questions"><div><button className="btn btn-lg botonHome">Admin Questions</button></div></Link>
          <Link to="/users"><div><button className="btn btn-lg botonHome">Users Managment</button></div></Link>
        </div>
        <div className='col-lg-4' ></div>
      </div>
      : <div>No tenes permiso</div>
  );
};

export default Home;
