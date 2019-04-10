/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  console.log('SOY LAS PROPS DEL HOME!!!', props);
  console.log('USER', props.user);

  if (props.user.isAdmin === true) {
    var bnq = <div><button style={{ width: '100%', margin: '20px', fontSize: '30px' }} className="btn btn-lg boton">Questions</button></div>;
  }

  return (
    props.user && props.user.isAdmin
      ? <div>
        <div className='homeDisplay'>
        <h1 className='titHome'>HOME</h1>
          <Link to="/candidates/allCandidates"><button className="btn btn-lg botonHome">Candidates Managment</button></Link>
          <Link to="/questions"><div><button className="btn btn-lg botonHome">Questions Managment</button></div></Link>
          <Link to="/users/allUsers"><div><button className="btn btn-lg botonHome">Users Managment</button></div></Link>
        </div>
        <div className='logoAbajo'><img className='imgHome' src='./utils/logo.png' /></div>
      </div>
      : null
      //<div>{props.history.push('/login')}</div>
  );
};

export default Home;
