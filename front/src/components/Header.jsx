import React from 'react';
import axios from 'axios';
import { logOut } from '../redux/action-creator/user-actions';
import { connect } from 'react-redux';

const Header = (props) => {
  return (
    <div className='row header'>
      {props.user && props.user.id
        ? <div>
          <div style={{ float: 'left' }}>
            <img id='imgHeader' src="/utils/user1.svg">
            </img><span id='headerName'>{props.user.nombre}</span>
          </div>
          <div style={{ float: 'right' }}>
            <button onClick={(e) => {
              e.preventDefault();
              props.logOut();
              return props.history.push('/');
            }} className='btn btn-lg btnLogOut'>LOG OUT</button></div>
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
