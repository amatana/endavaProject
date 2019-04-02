import React from 'react';

const candidate = (props) => {
  return (
    <div className="form-group form-control-lg row" style={{ marginTop: '50px', padding: '20px' }}>
      <div className='col-lg-3'></div>
      <div className='col-lg-6 addUser'>
        <form onSubmit={props.onSubmit}>
          <h1>Add new candidate</h1>
          <div className="form-group " >
            <label htmlFor="lastName">Last Name</label>
            <input onChange={props.onChange} type="text" className="form-control" id="LastName" placeholder="Last Name" name='LastName'/>
          </div>
          <div className="form-group">
            <label htmlFor="firsstName">First Name</label>
            <input onChange={props.onChange} type="text" className="form-control" id="First Name" placeholder="First Name" name='FirstName'/>
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input onChange={props.onChange} type="email" className="form-control" id="Email" placeholder="Email" name='Email'/>
          </div>
          <div className="form-group">
            <label htmlFor="number">Cell phone number</label>
            <input onChange={props.onChange} type="tel" className="form-control" id="phone" placeholder="Cell phone number" name='CellPhone '/>
          </div>
          <div className="form-group">
            <label htmlFor="workExperince">Work Experience</label>
            <textarea onChange={props.onChange} className="form-control" id="WorkExperience" rows="3" name="WorkExperience"></textarea>
          </div>
          <div className="form-group">
            <label htmlFor="url">URL Linkedin</label>
            <input onChange={props.onChange} type="url" className="form-control" id="URLLinkedin" placeholder="URL Linkedin" name="URLLinkedin"/>
          </div>
          <div>
            <button onSubmit={props.onSubmit} type="submit" className="btn boton btn-lg">Add Applicant</button>
          </div>
        </form>
      </div>
      <div className='col-lg-3'></div>
    </div>
  );
};

export default candidate;

