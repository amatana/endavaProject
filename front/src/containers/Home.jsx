import React from 'react';
import { Link } from 'react-router-dom';

const Home = (props) => {
  console.log('SOY LAS PROPS DEL HOME!!!', props);
  console.log('USER', props.user);

  if (props.user.isAdmin === true) {
    var bnq = <div><button style={{ width: '100%', margin: '20px', fontSize: '30px' }} className="btn btn-lg boton">Questions</button></div>;
  }

  return (
    <div className='row'>
      <div className='col-lg-4' >
      </div>
      <div className='col-lg-3'>
        <img style= { { width: '100%', marginBottom: '80px', marginTop: '80px' } } src = './utils/logo.png' />
        <Link to="/candidates"><button style={{ width: '100%', margin: '20px', fontSize: '30px' }} className="btn btn-lg boton">Candidates</button></Link>
        <Link to="/questions">{bnq}</Link>
      </div>
      <div className='col-lg-4' >
      </div>
    </div>
  );
};

export default Home;
