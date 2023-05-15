import React, { useState,useEffect,ChangeEvent } from "react";
import '../styles/Popup.scss'
import FileUploadSingle from "./FileUploadSingle.tsx";
import GalleryJewelryService from "../services/gallery-jewelry-service";

function Popup2(props) {

    /* const [fileNameOut, setFileNameOut] = useState({}); */

    /* const AddGallery = async () => {
        try{
            await GalleryJewelryService.AddGallery(fileNameOut)
                .then((response) => {
                    console.log(response)
                }, (error) => {
                    console.log(error)
                })
        } catch(error) {
            console.log(error)
        }
    } */

    /* useEffect(() => {
        setFileNameOut(props.fileName);        
    }, []); */

    function output(){
        props.setTrigger(false);
    }

    const [file, setFile] = useState([]);

  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
    console.log(file.size);
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

    return (props.trigger) ?( 
        <div className="popup">
            <div className="popup-inner" >
                <h1>Kérem adja meg az adatokat:</h1>
                <form>
                <FileUploadSingle props={props}/>
                </form>
                {props.children}
            </div>
        </div>
    ) : "";
}

export default Popup2