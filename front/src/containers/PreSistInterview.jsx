/* eslint-disable no-unused-vars */
import React from 'react';
import { connect } from 'react-redux';

import { fetchInterview } from '../redux/action-creator/interviewActions';

class PreSistInterview extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      interviewID: 1,
      interview: {},
      value: 'HOLA MUNDO! JUAN CARLOS HERMACORA',
      listaDePregunta: ['chocolate', 'helado', 'flan', 'stolen', 'arroz con leche']
    };
  }

  componentDidMount () {
    this.props.fetchInterview(this.state.interviewID);
  }

  // componentDidUpdate (prevState) {
  //   if (prevState.interview.id !== this.props.interview.id) {
  //     this.setState({ interview: this.props.interview });
  //     console.log('LLEGO LA ENTREVISTA CON ID: ', this.state.interviewID, 'CONTENIDO', this.state.interview);
  //   }
  // }

  render () {
    return (<div>
      <img src="/utils/Frame.png"></img>
      <button style={{ position: 'absolute',
        width: '268px',
        height: '60px',
        left: '1000px',
        top: '40px',

        background: '#DE411C',
        border: '1px solid #DE411C',
        boxSizing: 'border-box',
        borderRadius: '30px'
      }}>
      </button>
      <div style={{ position: 'absolute',
        width: '268px',
        height: '60px',
        left: '979px',
        top: '40px',

        fontFamily: 'Roboto Condensed',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: 'normal',
        textAlign: 'center',
        color: '#FFFFFF' }}>
        CREATE CANDIDATE  + </div>
      <h2 style={{ position: 'absolute',
        width: '325px',
        height: '22px',
        left: '40px',
        top: '155px',

        fontFamily: 'Roboto Condensed',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: 'normal',
        letterSpacing: '-0.01em',

        color: '#000000' }}>Candidate info</h2>
      <input
        className= 'testNew'
        type="text"
        value={this.state.value}
      />
      <button style={{ position: 'absolute',
        left: '66.67%',
        right: '22.22%',
        top: '20.21%',
        bottom: '76.66%',

        background: '#FFFFFF',
        border: '1px solid #9BB4BE',
        boxSizing: 'border-box',
        borderRadius: '24px' }}>
        <h4 style={{ fontFamily: 'Avenir',
          fontSize: '14px',
          lineHeight: '24px',
          textAlign: 'center',

          color: '#000000' }}><strong>Tag1</strong></h4>
      </button>
      <button style={{ position: 'absolute',
        left: '79.17%',
        right: '9.72%',
        top: '20.21%',
        bottom: '76.66%',

        background: '#FFFFFF',
        border: '1px solid #9BB4BE',
        boxSizing: 'border-box',
        borderRadius: '24px' }}>
        <h4 style={{ fontFamily: 'Avenir',
          fontSize: '14px',
          lineHeight: '24px',
          textAlign: 'center',

          color: '#000000' }}><strong>Tag2</strong></h4>
      </button>

      < div style= {{ position: 'absolute',
        width: '325px',
        height: '22px',
        left: '40px',
        top: '481px',

        fontFamily: 'Roboto Condensed',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: '20px',
        lineHeight: 'normal',
        letterSpacing: '-0.01em',

        color: '#000000' }}>
Select questions
      </div>
      <div style={{
        position: 'absolute',
        width: '1284px',
        height: '72px',
        left: '40px',
        top: '545px',

        background: 'rgba(155, 180, 190, 0.1)'
      }}>
        {this.state.listaDePregunta.map(preg => (<li key={preg}>{preg}</li>)) }
      </div>
    </div>);
  }
}

const mapStateToProps = (state) => ({

});
const mapDispatchToProps = (dispatch) => ({
  fetchInterview: (interviewID) => dispatch(fetchInterview(interviewID))
});

export default connect(mapStateToProps, mapDispatchToProps)(PreSistInterview);
