/* eslint-disable no-unused-vars */
import React from 'react';
import { Link, Redirect } from 'react-router-dom';

const Home = (props) => {
  return (
    props.user && props.user.isAdmin
      ? <div>
        <div className='homeDisplay'>
        <h1 className='titHome'>HOME</h1>
          <Link to="/candidates/allCandidates"><button className="btn btn-lg botonHome">Candidates Managment</button></Link>
          <Link to="/questions"><div><button className="btn btn-lg botonHome">Questions Managment</button></div></Link>
          <Link to="/users/allUsers"><div><button className="btn btn-lg botonHome">Users Managment</button></div></Link>
          <Link to="/tags"><div><button className="btn btn-lg botonHome">Tag Management</button></div></Link>
        </div>
        <div className='logoAbajo'><img className='imgHome' src='./utils/logo.png' /></div>
      </div>
      : <Redirect to='./candidates/allCandidates'/>
  );
};

export default Home;
