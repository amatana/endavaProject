// eslint-disable-next-line no-unused-vars
import React from 'react';
// import { Preguntas } from '../containers/seed';

const CreateInterviewComp = (props) => (
  <div>
    <div className='probando'>
      <div >
        <h2>Full name:</h2> {props.candidate.fullName}
        <h2>Phone:</h2> {props.candidate.telNumber}
        <h2>Email Adress:</h2> {props.candidate.email}
      </div>

      <div >
        <h2>Tags:</h2> {'aca van los tags'}
      </div>
    </div>

    <form id='formCand'>
      {props.questions.map((pregunta) => (
        <div key={pregunta.id} className="form-row">
          <div className="form-group col-md-6">
            <label htmlFor="inputEmail4" style={{ margin: '10px' }}>{pregunta.content}</label>
            <textarea onChange={props.onChange} name={ pregunta.id }style={{ margin: '5px' }} type="email" className="form-control" id="inputEmail4" placeholder="Respuesta"/>
          </div>
        </div>
      ))}
      <button type='button' onClick ={props.onSubmit}> Que miras pelotudo</button>
    </form>
  </div>
);

export default CreateInterviewComp;
