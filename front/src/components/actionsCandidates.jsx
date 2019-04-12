import React from 'react';
import CandidateButtons from './botoneraCandi';

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
          <h1><span style={{ borderBottom: '1px solid black', fontSize: '1em' }}> Candidate Info</span></h1>
          <h3>Nombre Completo :  <strong style={{ fontSize: '1em' }}>{ ' ' + candidate.name + ' ' + candidate.surname + ' '}</strong></h3>
          <h3>Email : <strong style={{ fontSize: '1em' }}>{' ' + candidate.email}</strong></h3>
          <h3>Status HR: <strong style={{ fontSize: '1em' }}>{candidate.status}</strong></h3>
          <a href={candidate.url} target='_blank'>Link a Perfil en Linked-in</a>
        </div>
        <div>
          <h1 ><span style={{ borderBottom: '1px solid black', fontSize: '1em' }}>Users Assignment</span></h1>
          <h3>HR User Assigned : <strong style={{ fontSize: '1em' }}>{userRRHH && userRRHH.nombre}</strong></h3>
          <h3>IT User Assigned 1 : <strong style={{ fontSize: '1em' }}> {userSIST1 && userSIST1.nombre}</strong></h3>
          <h3>IT User Assigned 2 : <strong style={{ fontSize: '1em' }}>{userSIST2 && userSIST2.nombre}</strong></h3>
        </div>
      </div>
      {props.user && props.user.area === 'RRHH'
        ? <div>
          <div id='actions'>
            <h1 style={{ marginBottom: '25px', marginBottom: '30px' }}><span style={{ borderBottom: '1px solid black', fontSize: '1em' }}> HR ACTIONS</span></h1>
            <div style={{ margin: '30px' }}>
              <CandidateButtons
                onClickInterview={props.createInterview}
                candidate={props.candidate}
                handleChangeID={props.handleChangeID}
                submitHR={props.submitHR}
                user={props.user}
                changeCandStatus={props.changeCandStatus}
              />
            </div>
          </div>

          <div>
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
        : <div>
          <h1 style={{ marginLeft: '25px', marginBottom: '30px', marginTop: '40px' }}><span style={{ borderBottom: '1px solid black', fontSize: '1em' }}> SISTEMAS ACTIONS</span></h1>
          <div style={{ margin: '30px' }}>
            <CandidateButtons
              onClickInterview={props.onClickInterview}
              candidate={props.candidate}
              handleChangeID={props.handleChangeID}
              submitHR={props.submitHR}
              user={props.user}
              changeCandStatus={props.changeCandStatus}
            />
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
      }
    </div>
  );
};

export default ActionsCandidates;
