import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const QuestionInput = (props) => {
  // Solicita lista de Tags al servidor y los convierte en un dropdown element
  axios.get('/tags')
    .then(function (tags) {
      console.log(tags);
    });
  return (
    <div>
      <form>
        <p>Select Question Tags</p>
        <select>
        </select>
        <p>Add Question</p>
        <input type='textbox' name='question' className ='questionTextbox' />
      </form>
    </div>
  );
};

export default QuestionInput;
