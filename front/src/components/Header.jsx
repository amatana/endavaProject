import React from 'react';
import axios from 'axios';
import { logOut } from '../redux/action-creator/user-actions';
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <div className='row header' style={{ backgroundColor: '#DE411B', height: '5%', padding: '8px' }}>
      {props.user && props.user.id
        ? <div>
          <div style={{ float: 'left' }}>
            <img style={{ width: '30px', height: '30px', marginLeft: '30px' }} src="/utils/user1.svg">
            </img><span style={{ fontSize: '20px' }}>{props.user.nombre}</span>
          </div>
          <div style={{ float: 'right' }}>
            <button onClick={(e) => {
              e.preventDefault();
              props.logOut();
              return props.history.push('/');
            }} className='btn btn-lg' style={{ border: '1px solid black', backgroundColor: '#F0F3F3' }}>LOG OUT</button></div>
        </div>
        : <h2></h2>}
    </div>
  );
};

const mapStateToProps = (state) => ({
  user: state.user
});
const mapDispatchToProps = (dispatch) => ({
  logOut: () => dispatch((logOut()))
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
