/* eslint-disable no-undef */
/* eslint-disable no-useless-constructor */
/* eslint-disable no-unused-vars */
import React from 'react';

class InterviewSisComp extends React.Component {
  constructor (props) {
    super(props);
  }

  render () {
    return (

      <div>
        <div className='probando'>
          {/* {console.log('mis props del componente====================', props)} */}
          <div style={{ marginLeft: '30px' }}>
            <h2>Full name:</h2> {this.props.candidate.fullName}
            <h2>Phone:</h2> {this.props.candidate.telNumber}
            <h2>Email Adress:</h2> {this.props.candidate.email}
          </div>

          <div >
            <h2>Tags:</h2> {'aca van los tags'}
          </div>
        </div>
        <div className='col-lg-3'></div>
        {this.props.questions.map((pregunta) => (
          <div key={pregunta.id} className="form-row" style={{ marginLeft: '30px' }}>
            {/* {console.log('cada presgunta======================', pregunta)} */}

            <h5>{pregunta.value}</h5>
            <div className="form-group">
              {/* <label htmlFor="exampleFormControlSelect1">response score</label> */}
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
                onChange={this.props.onChange}
                name='observations'>
              </textarea>
            </div>

          </div>)
        )}
        <div className='col-lg-3'></div>
        <div style={{ marginLeft: '30px' }}>
          <button type='button' className="btn btn-primary" onClick={this.props.onSubmit} >Sign in</button>
        </div>

      </div>

    );
  }
}
export default InterviewSisComp;
