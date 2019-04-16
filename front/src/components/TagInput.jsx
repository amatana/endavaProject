/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const addTag = (props) => {
  let allTags = props.allTags.data;
  // Solicita lista de Tags al servidor y los convierte en un dropdown element
  return (
    <div style = { { width: '100%' } }>
      <div id = 'searchBar'>
        <h1 className='titHome'>TAG MANAGEMENT</h1>
        <form onSubmit = {props.handleSubmit}>
          <div>
            <input onChange = {props.handleChange} name = 'tagInput' type = 'text' value = {props.tagInput} />
            <input type='submit' value = 'Add Tag'/>
          </div>
        </form>
      </div>
      <div id = 'table'>
        <h1>TAGS</h1>
        {allTags && allTags.map((tag, i) => {
          return (
            <div className = 'cell'>
              <h4 key = {i} name = {tag.id}><strong>{tag.tag}</strong></h4>
              <h6 name = {tag.id}onClick = {props.handleDelete}> Delete </h6>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default addTag;
