import React from 'react';
import ReactFileReader from 'react-file-reader';

export default class LoadFile extends React.Component {
  constructor (props) {
    super(props);

    this.state = {
      data: {}
    };
    this.handleFiles = this.handleFiles.bind(this);
  }

  handleFiles (files) {
    let quoteRemover = function (str) {
      let arr = str.slice(1, str.length - 1);
      return arr;
    };
    var reader = new FileReader();
    reader.onload = function (e) {
      let csv = reader.result;
      let lines = csv.split('\n');
      let result = [];
      let obj = {};
      let currentline;
      let array;
      for (var i = 0; i < lines.length; i++) {
        console.log('INDICE', i);
        currentline = lines[i].split(';');
        array = JSON.parse(currentline[2]);
        obj = {
          question: quoteRemover(currentline[0]),
          // eslint-disable-next-line no-unneeded-ternary
          required: currentline[1] === 'true' ? true : false,
          tags: array
        };
        result.push(obj);
      }
      console.log('RESULT', result);
    };

    reader.readAsText(files[0]);
  }

  render () {
    return (
      <ReactFileReader handleFiles={this.handleFiles} fileTypes={'.csv'}>
        <button className='btn'>Upload</button>
      </ReactFileReader>
    )
    ;
  }
}
