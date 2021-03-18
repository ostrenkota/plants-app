import React, {Component} from 'react';

class FileUploader extends Component {
    constructor(props) {
        super(props);
        this.hiddenFileInput = React.createRef();
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        if (!prevProps.initFileInput && this.props.initFileInput) {
            this.hiddenFileInput.current.click();
        }
    }

    handleAddClick = () => {
        this.props.onAddClick();
    };

    handleInputChange = event => {
        const fileUploaded = event.target.files[0];
        this.props.onFileSelect(fileUploaded);
    };

    render() {
        return (
            <>
                { React.cloneElement( this.props.children, { onClick: this.handleAddClick } ) }
                <input
                    type="file"
                    accept="image/!*"
                    ref={this.hiddenFileInput}
                    onChange={this.handleInputChange}
                    style={{display: 'none'}}
                />
            </>
        );
    }
}

export default FileUploader;
