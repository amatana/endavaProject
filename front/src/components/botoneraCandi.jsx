import React from 'react';

class botonera extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      // status: 'New',
      assign: 'assignOff'
    };
    this.changeStatus = this.changeStatus.bind(this);
  }

  changeStatus(status) {
    this.setState({ status });
  }

  // componentDidUpdate(prevProps, prevState) {
  //   if (prevState !== this.state) {
  //     this.props.changeCandStatus(this.props.candidate.id, this.state.status);
  //   }
  // }

  render() {
    return (
      <div>
        {(this.props.user && this.props.user.area === 'RRHH')
          ? (<div>
            <div id='botonesHR'>

              <button className='ActionsBotones '
                style={{ backgroundColor: '#0EB8DD' }}
                onClick={() => {
                  if (this.state.assign === 'assignOff') this.setState({ assign: 'onAssign' })
                  if (this.state.assign === 'onAssign') this.setState({ assign: 'assignOff' })
                }}
              >
                Assign Interviewers
              </button>

              {this.props.candidate && this.props.candidate.status === 'New'
                ? <button className='ActionsBotones' style={{ backgroundColor: '#FFD029' }}
                  onClick={() => {
                    this.props.onClickInterview(this.props.candidate.id);
                  }
                  }>Create Interview</button>
                : <button
                  className='ActionsBotones'
                  style={{ backgroundColor: '#FFD029' }}
                  onClick={() => this.props.history.push(`/candidates/${this.props.candidate.id}/interview/hr/${this.props.candidate.InterviewIDId}`)}
                >
                  View HR Report
              </button>}

              {/* <button
                className='ActionsBotones'
                style={{ backgroundColor: '#0EDD4D' }}
                onClick={() => this.changeStatus('Approved HR')} >
                Approve HR
              </button>

              <button
                className='ActionsBotones'
                style={{ backgroundColor: '#DD0E0E' }}
                onClick={() => this.changeStatus('Rejected HR')}>
                Reject HR
              </button> */}



            </div>

            <div className={'display ' + this.state.assign}>
              <div className='assignUser'>
                <h3>Assign RRHH :</h3>
                <select name='userHRId' onChange={this.props.handleChangeId} className='selectTag' >
                  {this.props.usersRH.map(user => (
                    <option value={user.id} key={user.id}>{user.nombre}</option>
                  ))
                  }
                </select >
                <input type='submit' className='subBtn' value='ASSIGN RRHH' onClick={() => this.props.submitHR(this.props.candidate.id)} />
              </div>
              <div className='assignUser'>
                <h3>Assign Interviewer Sistemas 1:</h3>
                <select name='userSIST1' onChange={this.props.handleChangeId} className='selectTag' >
                  {this.props.usersSIST.map(user => (
                    <option value={user.id} key={user.id}>{user.nombre}</option>
                  ))
                  }
                </select >
                <input type='submit' className='subBtn' value='ASSIGN Sisemas' onClick={() => this.props.submitSIST1(this.props.candidate.id)} />
              </div>

              <div className='assignUser'>
                <h3>Assign Interviewer Sistemas 2: </h3>
                <select name='userSIST2' onChange={this.props.handleChangeId} className='selectTag' >
                  {this.props.usersSIST.map(user => (
                    <option value={user.id} key={user.id}>{user.nombre}</option>
                  ))
                  }
                </select >
                <input type='submit' value='ASSIGN Sisemas' className='subBtn' onClick={() => this.props.submitSIST2(this.props.candidate.id)} />
              </div>
            </div>
          </div>)


          : (<div>
            <div id='botonesHR'>
              <button 
                className='ActionsBotones' 
                style={{ backgroundColor: '#0EB8DD' }} 
                onClick={() => {
                  if (this.state.assign === 'assignOff') this.setState({ assign: 'onAssign' })
                  if (this.state.assign === 'onAssign') this.setState({ assign: 'assignOff' })
                }}
              >
                Assign Interviewer SIST
              </button>

              <button className='ActionsBotones' style={{ backgroundColor: '#FFD029' }} onClick={() => this.props.onClickSist(this.props.candidate.id)}>Prepare Interview SIST</button>
              <button className='ActionsBotones' style={{ backgroundColor: '#395fdd' }} onClick={() => this.props.onClickInterviewSis(this.props.candidate.id)}> Interview SIST </button>
              <button className='ActionsBotones' style={{ backgroundColor: '#0EDD4D' }} onClick={() => this.changeStatus('Tech Approved')}> APPROVE SIST</button>
              {/* <button className='ActionsBotones' style={{ backgroundColor: '#DD0E0E' }} onClick={() => this.changeStatus('Rejected Tech')}>Reject SIST</button> */}
            </div>
            <div className={this.state.assign}>
              <div className='assignUser ' >
                <h3>Assign Interviewer Sistemas 1:</h3>
                <select name='userSIST1' onChange={this.props.handleChangeId} className='selectTag' >
                  {this.props.usersSIST.map(user => (
                    <option value={user.id} key={user.id}>{user.nombre}</option>
                  ))
                  }
                </select >
                <input type='submit' className='subBtn' value='ASSIGN Sisemas' 
                  onClick={() => {
                    this.props.submitSIST1(this.props.candidate.id)
                    }} />
              </div>

              <div className='assignUser'>
                <h3>Assign Interviewer Sistemas 2: </h3>
                <select name='userSIST2' onChange={this.props.handleChangeId} className='selectTag' >
                  {this.props.usersSIST.map(user => (
                    <option value={user.id} key={user.id}>{user.nombre}</option>
                  ))
                  }
                </select >
                <input type='submit' value='ASSIGN Sisemas' className='subBtn' 
                    onClick={() => this.props.submitSIST2(this.props.candidate.id)} />
              </div>
            </div>
          </div>)
        }
      </div>
    )
      ;
  };
};

export default botonera;
