/* eslint-disable no-unused-vars */
import React from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const addTag = (props) => {
  let allTags = props.allTags.data;
  // Solicita lista de Tags al servidor y los convierte en un dropdown element
  return (
    <div>
      <div>
        <h1 className='titHome'>TAGS MANAGEMENT</h1>
        <div id='searchBar'>
          <form onSubmit={props.handleSubmit}>
            <div><input onChange={props.handleSearch} placeholder='Filter tags 🔎'name='tagSearch' type='text' value={props.searchTagInput} />
            </div>
            <br/>
            <div>
              <input placeholder= 'New tags' onChange={props.handleChange} name='tagInput' type='text' value={props.tagInput} />
              <input type='submit' value='Add Tag' />
            </div>
          </form>
        </div>
        <div style={{ width: '300px', textAlign: 'center' }}>
          <table style={{ display: 'inline-block' }}>
            <tr>
              <th ><h1>TAGS</h1></th>
            </tr>
            <td>
              {allTags && allTags.filter(word => word.tag.toLowerCase().includes(props.stateSearchTag)).map((tag, i) => {
                return (
                  <div>
                    <tr>
                      <div style={{ clear: 'both' }} className='cell'>
                        <td>
                          <p style={{ fontSize: '30px' }} key={i} name={tag.id}>{tag.tag}</p>
                        </td>
                        <td>
                          <img style={{ width: '30px', marginLeft: '10px', marginBottom: '10px' }} name={tag.id} onClick={props.handleDelete} src='/utils/garbage.svg' />
                        </td>
                      </div>
                    </tr>
                  </div>
                );
              })}
            </td>
          </table>
        </div>
      </div>
    </div >
  );
};

export default addTag;
