import React, { Component } from 'react';
import request from 'superagent';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { newCloudinaryUrl, createImageId } from '../../ducks/reducer';

const preset = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const url = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;


class PhotoUploader extends Component {
    constructor(props) {
        super(props);

    }

    onImageDrop(files) {
        console.log(files)
        this.setState({
            uploadedFile: files
        });
        this.handleImageUpload(files)
    }

    handleImageUpload(file) {
        let upload = request.post(url)
            .field('upload_preset', preset)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            if (response.body.secure_url !== '') {
                this.props.newCloudinaryUrl(response.body.secure_url)
            }
        });

        this.props.createImageId(this.props)
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
            this.props.cloudinaryUrl ?
                <div></div>
                : 
                <div className="imagePreview">
                <Dropzone multiple={false} accept="image/*" onDrop={(file) => this.onImageDrop(file)}
                    style={dropzoneStyle}>
                    <div>To upload, click here, or drag an drop and image.</div>
                </Dropzone>
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