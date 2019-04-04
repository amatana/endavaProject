import React from 'react'; 

function buildFileSelector(){
    const fileSelector = document.createElement('input');
    fileSelector.setAttribute('type', 'file');
    fileSelector.setAttribute('multiple', 'multiple');
    return fileSelector;
  }
  
  export default class FileDialogue extends React.Component {
    constructor(props){
      super(props);
      this.state={
        fileSelector: null,
      }
      this.handleFileSelect= this.handleFileSelect.bind(this);
    }
    componentDidMount(){
      console.log("seteando el estado")
      this.setState({fileSelector: buildFileSelector()});
    }
    
    handleFileSelect(e){
      e.preventDefault();
      console.log(this.state)
      this.state.fileSelector.click();
    }
    
    render(){
      return <button href="" onClick={this.handleFileSelect}>Select file</button>
    }
  }