import React from 'react';

class botonera extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      status: null
    };
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus (status) {
    this.setState({ status });
  }

  componentDidUpdate (prevProps, prevState) {
      console.log('PREV PROPSSSSSSSSS', prevProps)
      console.log('PREV STTATEEEEEEEE', prevState)
      console.log('SOY EL ESADO LOCLALLL', this.state)
    if ( prevState !== this.state) {
      this.props.changeCandStatus(this.props.candidate.id, this.state.status)
    }
  }

  render () {
    console.log('AHORA SOY LAS PROPS PUTITO', this.props);
    return (
      <div>
        {(this.props.user && this.props.user.area === 'RRHH')
          ? (<div>
            <div id='botonesHR'>
              <button className='ActionsBotones' style={{ backgroundColor: '#0EB8DD' }}>Assign Interviewers</button>
              <button className='ActionsBotones' style={{ backgroundColor: '#FFD029' }} onClick={() => {
                this.props.onClickInterview(this.props.candidate.id);
              }
              }>Create Interview</button>
              <button
                className='ActionsBotones'
                style={{ backgroundColor: '#0EDD4D' }}
                onClick={() => this.changeStatus('Approved HR')} >
                Approve HR</button>
              <button
                className='ActionsBotones'
                style={{ backgroundColor: '#DD0E0E' }}
                onClick={() => this.changeStatus('Rejected HR')}>Reject HR</button>
            </div>
          </div>)
          : (<div>
            <div id='botonesHR'>
              <button className='ActionsBotones' style={{ backgroundColor: '#0EB8DD' }}>Assign Interviewer SIST</button>
              <button className='ActionsBotones' style={{ backgroundColor: '#FFD029' }} onClick={() => this.props.onClickInterview(this.props.candidate.id)}>Prepare Interview SIST</button>
              <button className='ActionsBotones' style={{ backgroundColor: '#0EDD4D' }} onClick={() => this.changeStatus('Approved Sist')}> Approve SIST</button>
              <button className='ActionsBotones' style={{ backgroundColor: '#DD0E0E' }} onClick={() => this.changeStatus('Rejected Sist')}>Reject SIST</button>
            </div>
          </div>)
        }
      </div>
    )
    ;
  };
};

export default botonera;
