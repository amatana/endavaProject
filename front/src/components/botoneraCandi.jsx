import React from 'react';

const botonera = (props) => {
    console.log('////PROPS BOTONERA/////', props)
  return (
    <div>
      {(props.user && props.user.area==='RRHH')
        ? (<div>
          <div id='botonesHR'>
            <button className='ActionsBotones' style={{ backgroundColor: '#0EB8DD' }}>Assign Interviewers</button>
            <button className='ActionsBotones' style={{ backgroundColor: '#FFD029' }} onClick={() => {
                props.onClickInterview(props.candidate.id)}
                }>Create Interview</button>
            <button className='ActionsBotones' style={{ backgroundColor: '#0EDD4D' }} onClick={() => changeCandStatus(props.candidate.id)} > Approve HR</button>
            <button className='ActionsBotones' style={{ backgroundColor: '#DD0E0E' }}>Reject HR</button>
          </div>
        </div>)
        :( <div>
          <div id='botonesHR'>
            <button className='ActionsBotones' style={{ backgroundColor: '#0EB8DD' }}>Assign Interviewer SIST</button>
            <button className='ActionsBotones' style={{ backgroundColor: '#FFD029' }} onClick={() => props.onClickInterview(candidate.id)}>Prepare Interview SIST</button>
            <button className='ActionsBotones' style={{ backgroundColor: '#0EDD4D' }} > Approve SIST</button>
            <button className='ActionsBotones' style={{ backgroundColor: '#DD0E0E' }}>Reject SIST</button>
          </div>
        </div>)
      }
    </div>
  );
};

export default botonera;
