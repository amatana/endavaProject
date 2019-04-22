/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';

class InterviewSisComp extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (

      <div>
        <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <span aria-hidden="true">&times;</span>
                </button>
              </div>
              <div className="modal-body">
                <p>successfully saved candidate</p>
                {/* <p>{this.props.messege}</p> */}
              </div>
              <div className="modal-footer">
                <button type="button" onClick={() => this.props.onClick()} className="btn btn-lg" style={{ backgroundColor: '#DE411B' }} data-dismiss="modal" > Go to Candidates </button>
              </div>
            </div>
          </div>
        </div>

        <div id='infoCandHR' className='masGrid' style={{ marginLeft: '30px' }}>
          <div>
            <h2>Full name: <strong>{this.props.candidate.fullName} </strong></h2>
            <h2>Candidate ID: <strong>{this.props.candidate.id}</strong></h2>
            <h2>Email Adress: <strong>{this.props.candidate.email}</strong></h2>
            <h2>Phone: <strong>{this.props.candidate.telNumber}</strong> </h2>
            {this.props.candidate.url && <a href={this.props.candidate.url} target='_blank'>Link a Perfil en Linked-in</a>}
            {/* <h2>Candidate Tags :  {this.props.candidate.tags.map(tag => <strong> {tag.tag + ' - '} </strong>)}</h2> */}
          </div>
          <div>
            <Link to={'/candidates/' + this.props.candidate.id} ><button style={{ width: '80%' }} className='ActionsBotonesBlanco'> Go Back </button></Link>
            <div style={{ marginTop: '30px' }}>
              <h3><strong style={{ borderBottom: '1px solid black' }}> Candidate's Expertise</strong></h3>
              <h3>{this.props.candidate.expertise}</h3>
            </div>
          </div>
        </div>
        <div className='col-lg-3'></div>
        {this.props.questions.map((pregunta) => (
          <div key={pregunta.id} className="form-row" style={{ marginLeft: '30px' }}>

            <h5>{pregunta.value}</h5>
            <div className="form-group">
              <select className="form-control"
                id={pregunta.id}
                onChange={this.props.onChange}
                name='score'>
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
              {/* <label htmlFor="exampleFormControlTextarea1">observations</label> */}
              <textarea className="form-control" id={pregunta.id}
                name='observations'
                onChange={this.props.onChange}>
              </textarea>
            </div>

          </div>)
        )}
        {/* ACA VA LA OBS DE LA ENTREVISTA GENEARL!!!!!!
        <div className="form-group">
          <label htmlFor="exampleFormControlTextarea1">observations</label>
          <textarea className="form-control" id={pregunta.id}
            name='observationsInterviewSis'
            onChange={this.props.onChange}>
          </textarea>
        </div> */}
        <div className='col-lg-3'></div>
        <div style={{ marginLeft: '30px' }}>
          <button type='button' className="btn btn-primary" onClick={this.props.onSubmit} data-toggle="modal" data-target="#exampleModal">Submit</button>
        </div>

      </div>

    );
  }
}
export default InterviewSisComp;
