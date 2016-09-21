import React from "react"
import ReactDOM from "react-dom"

export default class UploadForm extends React.Component {

  componentDidMount() {
    this.refs.file_input.webkitdirectory = true;
    this.refs.file_input.directory = true;
    //this.refs.file_input.getDOMNode().setAttribute('webkitdirectory', true);
    //this.refs.file_input.getDOMNode().setAttribute('directory', true);


  }

  constructor() {
    super();
  }

  render() {
    return (
        <div>
          <input ref="file_input" type="file" id="file_input" multiple />
          <button>Upload</button>
        </div>
    )
  }
}