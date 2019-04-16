/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const addTag = (props) => {
  let allTags = props.allTags.data;
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
        {allTags && allTags.map((tag, index=0) => {
          return (
            <div className = 'cell' key={index++}>
              <h4><strong>{tag.tag}</strong></h4>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default addTag;
