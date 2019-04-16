/* eslint-disable no-unused-vars */
import React from 'react';

const InterviewSisComp = (props) => (
  <div>
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

    <div rows="3"></div>

    <form style={{ marginLeft: '30px' }}>

      <h5>questions</h5>
      <div className="form-group">
        <label for="exampleFormControlSelect1">response score</label>
        <select className="form-control" id="exampleFormControlSelect1">
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
          <option>6</option>
          <option>7</option>
          <option>8</option>
          <option>9</option>
          <option>10</option>
        </select>
      </div>
      <div className="form-group">
        <label for="exampleFormControlTextarea1">observations</label>
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
      </div>
      <div>
        <button type="submit" class="btn btn-primary">Sign in</button>
      </div>
    </form>
    <div rows="3"></div>

  </div>

);

export default InterviewSisComp;
