import { ChangeEvent, useState } from 'react';
import React from 'react';

function FileUploadSingle(props) {
  
  const [file, setFile] = useState<File>();

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    console.log(file);
  };

  const handleUploadClick = () => {
    if (!file) {
      return;
    }

    // 👇 Uploading the file using the fetch API to the server
    fetch('https://httpbin.org/post', {
      method: 'POST',
      body: file,
      // 👇 Set headers manually for single file upload
      headers: {
        'content-type': file.type,
        'content-length': `${file.size}`, // 👈 Headers need to be a string
      },
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <>
    <div className="inputDiv">
                    <label className="input-label">Válasszon ki egy fájlt:</label>
                    <input className="text-input" id="nOut" type="file" onChange={handleFileChange}></input>
                </div>
                <div>
                    <button className="pButtonLeft" onClick={()=>props.setTrigger(false)}>Vissza</button>
                    <button className="pButtonRight" onClick={handleUploadClick}>Mentés</button>
                </div>
                </> 
  );
}

export default FileUploadSingle;