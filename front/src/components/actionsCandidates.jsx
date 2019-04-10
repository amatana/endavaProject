import React from 'react';

const ActionsCandidates = (props) => {
  const candidate = props.candidate;
  const userRRHH = props.candidate.interviewerHR;
  const userSIST1 = props.candidate.interSIST1;
  const userSIST2 = props.candidate.interSIST2;
  return (
    !!props.candidate && !!props.candidate.id &&
    <div>
      <div id='infoCandi'>
        <div >
          <h1>Candidate Info</h1>
          <h2>{'Nombre Completo : ' + candidate.name + ' ' + candidate.surname + ' ||  #' + candidate.id}</h2>
          <h2>{'Email : ' + candidate.email}</h2>
          <h2>Status : {candidate.status}</h2>
          <a href={candidate.url} target='_blank'>Link a Perfil en Linked-in</a>
        </div>
        <div>
          <h1 >Users Assignment</h1>
          <h2>Nombre del Usuario RRHH asignado: {userRRHH && userRRHH.nombre}</h2>
          <h2>Nombre del Usuario de Sistemas asignado: {userSIST1 && userSIST1.nombre}</h2>
          <h2>Nombre del Usuario de Sistemas asignado: {userSIST2 && userSIST2.nombre}</h2>
        </div>
      </div>
      <div id='actions'>
        <h1 style={{ marginBottom: '25px', marginBottom: '30px' }}>ACTIONS</h1>
        <div className='assignUser'>
          <h3>Assign RRHH :</h3>
          <select name='userHRId' onChange={props.handleChangeID} className='selectTag' >
            {props.usersRH.map(user => (
              <option value={user.id} key={user.id}>{user.nombre}</option>
            ))
         }
          </select >
          <input type='submit' className='subBtn' value='ASSIGN RRHH' onClick={() => props.submitHR(candidate.id)} />
        </div>

        <div className='assignUser'>
          <h3>Assign Interviewer Sistemas 1:</h3>
          <select name='userSIST1' onChange={props.handleChangeID} className='selectTag' >
            {props.usersSIST.map(user => (
              <option value={user.id} key={user.id}>{user.nombre}</option>
            ))
         }
          </select >
          <input type='submit' className='subBtn' value='ASSIGN Sisemas' onClick={() => props.handleSubSIS1(candidate.id)} />
        </div>

        <div className='assignUser'>
          <h3>Assign Interviewer Sistemas 2: </h3>
          <select name='userSIST2' onChange={props.handleChangeID} className='selectTag' >
            {props.usersSIST.map(user => (
              <option value={user.id} key={user.id}>{user.nombre}</option>
            ))
         }
          </select >
          <input type='submit' value='ASSIGN Sisemas' className='subBtn' onClick={() => props.handleSubSIS2(candidate.id)} />
        </div>
      </div>
    </div>
  );
};

export default ActionsCandidates;
