import React from "react"
import ReactDOM from "react-dom"
import UploadForm from "./components/upload_form/upload_form"

class Layout extends React.Component {
  render() {
    return (
        <UploadForm/>
    );
  }
}

const app = document.getElementById("app");
ReactDOM.render(<Layout/>, app);