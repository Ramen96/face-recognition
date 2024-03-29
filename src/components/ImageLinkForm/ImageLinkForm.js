import React from "react";
import "./ImageLinkForm.css"


const ImageLinkForm = ({ onInputChange, onSubmit }) => {
    return (
        <div>
            <p className="f3">
                { 'This Magic Brain will detect faces in your pictures. Give it a try.' }
            </p>
            <div className="center">
                <div className="pa4 br3 shadow-5 center form">
                    <input className="f4 pa2 ma2 w-70 center" type="text" onChange={onInputChange} placeholder="Paste or type a URL"/>
                    <button className="w-30 grow ma2 f4 link ph3 pv2 dib white" onClick={onSubmit}>Detect</button>
                </div>
            </div>
        </div>
    );
}

export default ImageLinkForm;