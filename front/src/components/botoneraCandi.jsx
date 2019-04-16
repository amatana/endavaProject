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
    if (prevState !== this.state) {
      this.props.changeCandStatus(this.props.candidate.id, this.state.status);
    }
  }

  render () {
    return (
      <div>
        {(this.props.user && this.props.user.area === 'RRHH')
          ? (<div>
            <div id='botonesHR'>
              {/* <button className='ActionsBotones' style={{ backgroundColor: '#0EB8DD' }}>Assign Interviewers</button> */}
              {this.props.candidate && this.props.candidate.status === 'New'
                ? <button className='ActionsBotones' style={{ backgroundColor: '#FFD029' }}
                  onClick={() => {
                    this.props.onClickInterview(this.props.candidate.id);
                  }
                  }>Create Interview</button>
                : <button
                  className='ActionsBotones'
                  style={{ backgroundColor: '#808080' }}
                  onClick={() => this.props.history.push(`/candidates/${this.props.candidate.id}/interview/${this.props.candidate.InterviewIDId}`)}
                >
                  View HR Report</button>}
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
              {/* <button className='ActionsBotones' style={{ backgroundColor: '#0EB8DD' }}>Assign Interviewer SIST</button> */}
              <button className='ActionsBotones' style={{ backgroundColor: '#FFD029' }} onClick={() => this.props.onClickInterview(this.props.candidate.id)}>Prepare Interview SIST</button>
              <button className='ActionsBotones' style={{ backgroundColor: '#0EDD4D' }} onClick={() => this.changeStatus('Tech Approved')}> APPROVE SIST</button>
              <button className='ActionsBotones' style={{ backgroundColor: '#DD0E0E' }} onClick={() => this.changeStatus('Rejected Tech')}>Reject SIST</button>
            </div>
          </div>)
        }
      </div>
    )
    ;
  };
};

export default botonera;
