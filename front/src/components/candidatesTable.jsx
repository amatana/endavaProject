import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

const CandidTable = (props) => {
  console.log('&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&', props)
  return (
    <table className="table">
      <thead style={{ backgroundColor: '#DE411B' }}>
        <tr>
          <th scope="col" className='tableHeading'>CANDIDATE</th>
          <th scope="col" className='tableHeading'>PROFILE</th>
          <th scope="col" className='tableHeading'>STATUS</th>
          <th scope="col" className='tableHeading'>DETAILS</th>
          <th scope="col" className='tableHeading'></th>
        </tr>
      </thead>

      {props.candidates.map((candidate, index = 0) => {
        if (candidate.status.toLowerCase().includes(props.input)) {
          return (
            <tbody key={index++}>
              <tr>
                <th className='tableHeading' scope="row">{candidate.name + ' ' + candidate.surname}</th>
                <td className='tableHeading'>Acá van los perfiles</td>
                <td className='tableHeading'>{candidate.status}</td>
                <td className='tableHeading'><Link to={`/candidates/${candidate.id}`}><button className='ActionsBotonesBlanco'>Actions Managment</button></Link></td>
              </tr>
            </tbody>
          )
          ;
        };
      })}
    </table>
  );
};
const mapStateToProps = (state) => ({
  user: state.user.user,
  // candidates: state.candidate.candidates
});
const mapDispatchToProps = (dispatch) => ({
  fetchMyCandidates: (userId) => dispatch(fetchMyCandidates(userId)),
  getAllCandidates: () => dispatch(getAllCandidates())
});
export default connect(mapStateToProps, mapDispatchToProps)(CandidTable);
