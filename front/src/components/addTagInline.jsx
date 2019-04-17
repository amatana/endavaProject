import React from 'react';

const addTagInline = (props) => {
  return (
    <div>
      < form onSubmit={props.handleTagSubmit} >
        <div className="form-group">
          <br />
          <p style={{ fontSize: '15px', fontStyle: 'italic' }}>Click to delete</p>
          <select name='tagDropdown' style={{ float: 'left', margin: '5px', width: '120px', height: '30px' }}>
            {props.allTags && props.allTags.map((tag, i) => {
              return (<option value={i}>{tag.tag}</option>);
            })}
          </select>
          <input type="submit" value="Add Tag" style={{ float: 'left', margin: '5px' }} />
        </div>
      </form >

      <h3 style={{ float: 'left', marginLeft: '20px', color: '#EC6861' }}> | </h3>

      <div style={{ float: 'left', padding: '1%' }}>
        {props.selectedTags.map((id, i) => {
          return <p style={{ float: 'left', marginLeft: '20px', color: 'red' }} onClick={props.handleDelete} value={i} >{props.allTags[i].tag}</p>;
        })
        }
      </div>
    </div>
  );
};

export default addTagInline;
