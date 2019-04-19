import React from 'react';

const addTagInline = (props) => {
  return (
    <div>
      < form onSubmit={props.handleTagSubmit} >
        <div className="form-group">
          <br />
          <div className="dropdown">
            <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
              Select Tags
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {props.allTags && props.allTags.map((tag, i) => {
                return (<button className="dropdown-item" value={i} onClick = {props.handleTagSubmit}>{tag.tag}</button>);
              })}
            </div>
          </div>
        </div>
      </form >
      
      <p style={{ fontSize: '15px', fontStyle: 'italic' }}>Click to delete</p>

      <h3 style={{ float: 'left', marginLeft: '20px', color: '#EC6861' }}> | </h3>

      <div style={{ float: 'left', padding: '1%' }}>
        {props.selectedTags.map((id, i) => {
          return <p style={{ float: 'left', marginLeft: '20px', color: 'red' }} onClick={props.handleDelete} value={i} >{[props.selectedTags[i].tag]}</p>;
        })
        }
      </div>
    </div >
  );
};

export default addTagInline;
