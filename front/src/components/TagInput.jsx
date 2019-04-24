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
            <div className='halfGrid'>
              <div className='halfGrid'>
                <input id='addTagInput' style={{ paddingLeft: '0.9em' }} placeholder='New tags' onChange={props.handleChange} name='tagInput' type='text' value={props.tagInput} />
                <input className='ActionsBotonesNaranja' id='addTagBton' type='submit' value='Add Tag' />
              </div>
              <input style= {{ paddingLeft: '1.5em' }} id='filterTag' onChange={props.handleSearch} placeholder='Filter tags 🔎' name='tagSearch' type='text' value= {props.searchTagInput} />
            </div>
          </form>
        </div>
        <div style={{ width: '90%', margin: '20px auto' }}>
          {/* <table > */}
          {/* <thead> */}
          {/* <tr> */}
          <h1><strong style={{ borderBottom: '2px solid black' }}>TAGS</strong></h1>
          {/* </tr> */}
          {/* </thead> */}
          {/* <td> */}
          {allTags && allTags.filter(word => word.tag.toLowerCase().includes(props.stateSearchTag)).map((tag, i) => {
            return (

              <span style={{ fontSize: '30px', margin: '2px' }} key={i} name={tag.id}>{tag.tag}  </span>
            );
          })}
          {/* </td> */}
          {/* </table> */}
        </div>
      </div>
    </div >
  );
};

export default addTag;
