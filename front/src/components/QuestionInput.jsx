import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const QuestionInput = (props) => {
  // Solicita lista de Tags al servidor y los convierte en un dropdown element
  return (
    <div>
      <form onSubmit={props.submiTag}>

        <p>Select Question Tags</p>

        <select name='dropdown'>
          {
            props.tags.map(function (tag) {
              return <option value={tag.id} key={tag.id}>{tag.tag}</option>
            })
          }
        </select>
        <br/>
        <br/>
        <input type='submit' value='Add Tag' />
      </form>

      <div style={{ margin: '20px', border: 'solid black 1px' }} id='tagContainer'>
        <label>Click the selected tags to delete</label>
        <br/>
        <label style={{ color: 'red' }}>{props.alert}</label>
        <br />
        <div>
          {
            props.selectedTags.map(function (tagId) {
              return <p style={{ float: 'left', marginLeft: '15px' }} onClick={props.delete} name={tagId} key={tagId}>{props.tags[tagId - 1].tag}</p>;
            })
          }
        </div>
        <br/>
      </div>

      <form name = 'question' onSubmit = {props.submitQuestion}>
        <p>Question</p>
        <input type='textbox' name='question' className='questionTextbox' />
        <br />
        <br/>
        <input type='submit' value='Create Question' />
      </form>
    </div>
  );
};

export default QuestionInput;
