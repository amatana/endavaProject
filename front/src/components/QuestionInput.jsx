//Version de Ana

import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const QuestionInput = (props) => {
  // Solicita lista de Tags al servidor y los convierte en un dropdown element
  return (
    <div>
      {console.log('aca estan las props', props)}
      <div>
        <h1 className='titHome'>ADD A NEW QUESTION</h1>
        <div id='responsiveNewQuestion'>
          <h6 className='subTitles' style={{ fontSize: '2em', marginLeft: '15px', marginTop: '10px' }}>Select question tags: </h6>
          <div id='tagsDisplay'>
            <form onSubmit={props.submiTag} className='addTag'>
              <select name='dropdown' className='selectTag'>
                {
                  props.tags.map(function (tag) {
                    return <option value={tag.id} key={tag.id}>{tag.tag}</option>;
                  })
                }
              </select>
              <br />
              <br />
              <input type='submit' value='ADD TAG' id='addTagBtn' />
            </form>
            <div id='tagContainer'>
              <h5 style={{ marginLeft: '10px', color: '#DE411B' }}>TAGS SELECTED - Click on them to delete</h5>
              {/* <br />
                <label style={{ color: 'red' }}>{props.alert}</label>
                <br /> */
              }
              <div>
                {
                  props.selectedTags.map(function (tagId) {
                    return <h6 style={{ float: 'left', marginLeft: '15px', border: '1px solid black', padding: '7px', borderRadius: '8px', marginBottom: '10px' }} onClick={props.delete} onClick={props.delete} name={tagId} key={tagId}>{props.tags[tagId - 1].tag}</h6>;
                  })
                }
              </div>
              <br />
            </div>
          </div>
          <form name='question' onSubmit={props.submitQuestion}>
            <h6 style={{ fontSize: '2em', marginLeft: '15px', marginTop: '10px' }}>Question content: </h6>
            <div ><textarea type='textbox' name='question' className='questionTextbox' style={{ width: '96%', margin: '10px 20px', height: '90px', fontSize: '1.5em' }} /></div>
            <br />
            <br />
            <div style={{ padding: '0px 15%' }}><button style={{ width: '100%', padding: '20px' }} className='btn boton btn-lg' type='submit' > CREATE QUESTION</button></div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default QuestionInput;
