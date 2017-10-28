import React, { Component } from 'react';
import request from 'superagent';
import axios from 'axios';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { newCloudinaryUrl, createImageId } from '../../ducks/reducer';

const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const url = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;


class PhotoUploader extends React.Component {
    constructor() {
        super()
        this.state = { files: [] }
    }

    onImageDrop(files) {
        console.log(files)
        this.setState({
            files: files
        })
        this.handleImageUpload(files)
    }


    handleImageUpload(files) {
        // Push all the axios request promise into a single array
        const uploaders = files.map(file => {
            // Initial FormData
            const formData = new FormData();
            formData.append("file", file);
            formData.append("tags", this.props.user.user_id.toString());
            formData.append("upload_preset", preset); // Replace the preset name with your own
            formData.append("api_key", 428332871437726); // Replace API key with your own Cloudinary key
            formData.append("timestamp", (Date.now() / 1000) | 0);

            // Make an AJAX upload request using Axios (replace Cloudinary URL below with your own)
            return axios.post(url, formData, {
                headers: { "X-Requested-With": "XMLHttpRequest" },
            }).then(response => {
                const data = response.data;
                console.log(data);
                this.props.newCloudinaryUrl(response.data.secure_url)
            })
        });

        // Once all the files are uploaded 
        axios.all(uploaders).then(() => {
            console.log("DONE")
            // ... perform after upload is successful operation
        });

    }


    render() {
        const dropzoneStyle = {
            width: "50%",
            border: "3px dashed #cdcdcd",
            align: "center",
            margin: "1vw auto",
            padding: "1vw",
            borderRadius: "1vw",
            cursor: "pointer"
        };

        return (
            <div className="imagePreview">
                <Dropzone multiple={true} accept="image/*" onDrop={(file) => this.onImageDrop(file)}
                    style={dropzoneStyle}>
                    <div>To upload, click here, or drag an drop and image.</div>
                </Dropzone>
                {
                    this.state.files.map(f => <li key={f.name}>{f.name} - {f.size} bytes</li>)
                }
                <div className="imagePreview">
                    {this.props.cloudinaryUrl.length !== 0 ? <div><b>Image Preview:</b></div> : () => { }}
                    {this.props.cloudinaryUrl.map((img, i) => {
                        return <div>
                            <div><img src={this.props.cloudinaryUrl[i]} alt="uploaded image" /></div>
                        </div>
                    })}
                </div>
            </div>
        )

    }

}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    newCloudinaryUrl,
    createImageId
}

export default connect(mapStateToProps, outputActions)(PhotoUploader);