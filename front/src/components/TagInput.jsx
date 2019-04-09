import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const addTag = (props) => {
  console.log(props.allTags);
  let allTags = props.allTags.data;
  let table =
    allTags.map((tag) => {
      return <p>{tag}</p>;
    });
  // Solicita lista de Tags al servidor y los convierte en un dropdown element
  return (
    <div>
      <div id = 'searchBar'>
        <h1 className='titHome'>TAG MANAGEMENT</h1>
        <form onSubmit = {props.handleSubmit}>
          <div>
            <input onChange = {props.handleChange} name = 'tagInput' type = 'text' value = {props.tagInput} />
            <input type='submit' />
          </div>
        </form>
      </div>
      <div id = 'table'>
      </div>
    </div>
  );
};

export default addTag;
