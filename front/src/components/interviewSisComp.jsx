/* eslint-disable no-unused-vars */
import React from 'react';

const InterviewSisComp = (props) => (

  <div className='probando'>
    {console.log('mis props del componente====================', props)}
    <div style={{ marginLeft: '30px' }}>
      <h2>Full name:</h2> {props.candidate.fullName}
      <h2>Phone:</h2> {props.candidate.telNumber}
      <h2>Email Adress:</h2> {props.candidate.email}
    </div>

    <div >
      <h2>Tags:</h2> {'aca van los tags'}
    </div>
  </div>

);

export default InterviewSisComp;
