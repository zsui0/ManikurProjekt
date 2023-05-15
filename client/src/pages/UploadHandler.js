import React, { Component } from 'react';
import axios from 'axios';

class UploadHandler extends Component {
  constructor(props) {
    super(props);
      this.state = {
        selectedFile: null,
      }
      this.props = props;
   
  }
onChangeHandler=event=>{
     this.setState({
     selectedFile: event.target.files[0],
     loaded: 0
  })
  console.log(this.state.selectedFile);
} 
onClickHandler = (e) => {
    e.preventDefault();
    const data = new FormData() 
    data.append('file', this.state.selectedFile)
    data.append('type', "galleria")
    axios.post("http://localhost:5000/file/upload_gallery", data, {})
      .then(res => { // then print response status
        console.log(res.statusText)
        
      })
    }

  render() {
    return (
        <>
        
        <div className="inputDiv">
            <label className="input-label">Válasszon ki egy fájlt:</label>
            <input className="text-input" id="nOut" type="file" onChange={this.onChangeHandler}></input>
        </div>
        <div>
            <button className="pButtonLeft" onClick={()=>this.props.setTrigger(false)}>Vissza</button>
            <button className="pButtonRight" onClick={this.onClickHandler}>Mentés</button>
        </div>
        
    
        </> 
    );
  }
}

export default UploadHandler;
