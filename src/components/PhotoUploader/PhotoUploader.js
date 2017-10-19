import React, { Component } from 'react';
import request from 'superagent';
import Dropzone from 'react-dropzone';
import { connect } from 'react-redux';
import { newCloudinaryUrl } from '../../ducks/reducer';

const CLOUDINARY_UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;
const CLOUDINARY_UPLOAD_URL = process.env.REACT_APP_CLOUDINARY_UPLOAD_URL;


class PhotoUploader extends Component {
    constructor(props) {
        super(props);
        this.state = {
            uploadedFileCLoudinaryUrl: '',
        };

        var onDrop = function (acceptedFiles, rejectedFiles) {
            // console.log('Accepted files: ', acceptedFiles[0].name);
            var filesToBeSent = this.state.filesToBeSent;
            filesToBeSent.push(acceptedFiles);
            this.setState({ filesToBeSent });
        }


    }

    onImageDrop(files) {
        console.log(files)
        this.setState({
            uploadedFile: files
        });

        this.handleImageUpload(files)
    }

    handleImageUpload(file) {
        let upload = request.post(CLOUDINARY_UPLOAD_URL)
            .field('upload_preset', CLOUDINARY_UPLOAD_PRESET)
            .field('file', file);

        upload.end((err, response) => {
            if (err) {
                console.error(err);
            }
            if (response.body.secure_url !== '') {
                // this.setState({
                //     uploadedFileCLoudinaryUrl: response.body.secure_url
                // });
                // TODO: send url to the database
                this.props.newCloudinaryUrl(response.body.secure_url)
            }
        });
    }


    render() {
        let imagePreview = () => {
            if (this.state.uploadedFileCloudinaryUrl === null) {
                return <div></div>
            } else {
                return (<div>
                    {/* <p>{this.state.uploadedFile.name}</p> */}
                    <img src={this.state.uploadedFileCloudinaryUrl} />
                </div>
                )
            }
        }

        const dropzoneStyle = {
            width: "100%",
            border: "3px dashed #cdcdcd",
            height: "7vh",
        };

        return (
            <div>
                <Dropzone multiple={false} accept="image/*" onDrop={(file) => this.onImageDrop(file)}
                    style={dropzoneStyle}>
                    <div>Try dropping some files here, or click to select files to upload.</div>
                </Dropzone>
                <img src={this.props.cloudinaryUrl} alt="Your image will appear as soon as it's uploaded." />
            </div>
        )

    }

}

function mapStateToProps(state) {
    return state
}

const outputActions = {
    newCloudinaryUrl
}

export default connect(mapStateToProps, outputActions)(PhotoUploader);