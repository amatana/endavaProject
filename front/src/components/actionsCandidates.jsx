import React from 'react';

const ActionsCandidates = (props) => {
  const candidate = props.candidate;
  const userRRHH = props.users.find(user => user.id === candidate.interviewerHRId)
  console.log(candidate);
  return (
    !!props.candidate && !!props.candidate.id &&
        <div>

          <div id='infoCandi'>
            <h2>{'Nombre Completo : ' + candidate.name + ' ' + candidate.surname + ' ||  #' + candidate.id}</h2>
            <h2>{'Email : ' + candidate.email}</h2>
            <h2>Status : {candidate.status}</h2>
            <a href={candidate.url} target='_blank'>Link a Perfil en Linked-in</a>
            <h2>Id de Usuario RRHH asignado: {userRRHH && userRRHH.nombre}</h2>

          </div>

          <h1>ACTIONS</h1>
          <div id='assHR'>
                Assign RRHH
            <select name='dropdown' onChange={props.handleSubmitId} className='selectTag' >
              {props.users.map(user => {
                if (user.area.includes('RRHH')) return <option value={user.id} key={user.id}>{user.nombre}</option>;
              })
              }
            </select >
            <input type='submit' value='ASSIGN RRHH' onClick={() => props.submitHR(candidate.id)} />
          </div>

          <div>
          Assign Interviewer Sistemas1:
            <select name='sist1' onChange={props.handlePushId} className='selectTag' >
              {props.users.map(user => {
                if (user.area.includes('Sistemas')) return <option value={user.id} key={user.id}>{user.nombre}</option>;
              })
              }
            </select >
            <input type='submit' value='ASSIGN Sisemas' onClick={() => props.submitHR(candidate.id)} />
          </div>

          <div>
          Assign Interviewer Sistemas1:
            <select name='sist2' onChange={props.handleSubmitId} className='selectTag' >
              {props.users.map(user => {
                if (user.area.includes('Sistemas')) return <option value={user.id} key={user.id}>{user.nombre}</option>;
              })
              }
            </select >
            <input type='submit' value='ASSIGN Sisemas' onClick={() => props.submitHR(candidate.id)} />
          </div>

        </div>
  );
};

export default ActionsCandidates;
