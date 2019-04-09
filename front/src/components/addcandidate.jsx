/* eslint-disable no-unused-vars */
import React from 'react';

const candidate = (props) => {
  return (
    <div className="form-group form-control-lg row formUser" style={{ marginTop: '50px', padding: '20px' }}>
      <div className='col-lg-3'></div>
      <div className='col-lg-6 addUser'>
        <form onSubmit={props.onSubmit} className='formUser' >
          <h1 className='titHomeForms'>ADD NEW CANDIDATE</h1>
          <div className="form-group " >
            <label htmlFor="lastName">First Name</label>
            <input onChange={props.onChange} type="text" className="form-control inputLogin" id="LastName" placeholder="Name" name='name'/>
          </div>
          <div className="form-group">
            <label htmlFor="firsstName">Last Name</label>
            <input onChange={props.onChange} type="text" className="form-control inputLogin" id="First Name" placeholder="Last Name" name='surname'/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={props.onChange} type="email" className="form-control inputLogin" id="Email" placeholder="Email" name='email'/>
          </div>
          <div className="form-group">
            <label htmlFor="number">Cell phone number</label>
            <input onChange={props.onChange} type="tel" className="form-control inputLogin" id="phone" placeholder="Cell phone number" name='telNumber'/>
          </div>
          <div className="form-group">
            <label htmlFor="workExperince">Work Experience</label>
            <textarea onChange={props.onChange} className="form-control inputLogin" id="WorkExperience" rows="3" name="expertise"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="url">URL Linkedin</label>
            <input onChange={props.onChange} type="url" className="form-control inputLogin" id="URLLinkedin" placeholder="URL Linkedin" name="url"/>
          </div>
          <div>
            <button onSubmit={props.onSubmit} type="submit" className="btn boton btn-lg botonLogin">Add Applicant</button>
          </div>
        </form>
      </div>
      <div className='col-lg-3'></div>
    </div>
  );
};

export default candidate;
