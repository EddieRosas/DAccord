import React from 'react';

class CreateServer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: `${this.props.user.username}'s Server`,
            imageUrl: null,
            imageFile: null,
        }


        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.handleImageClick = this.handleImageClick.bind(this);
        this.handleFile = this.handleFile.bind(this);
    }

    handleChange() {
        return e => this.setState({ name: e.target.value });
    }

    handleSubmit(e) {
        e.preventDefault();
        const formData = new FormData();
        formData.append('server[name]', this.state.name);
        if (this.state.imageFile) {
            formData.append('server[image]', this.state.imageFile);
        }
        this.props.closeModal();
        this.props.createServer(formData)
    }

    handleClick(modal) {
        return e => {
            e.preventDefault();
            this.props.openModal(modal);
        }
    }

    handleImageClick() {
        $("#server-image-upload-input").trigger('click')
    }

    handleFile(e) {
        const file = e.currentTarget.files[0];
        const fileReader = new FileReader();
        fileReader.onloadend = () => {
            this.setState({ imageUrl: fileReader.result , imageFile: file });
        };
        if (file) {
            fileReader.readAsDataURL(file);
        }
    }

    render() {
        const preview = this.state.imageUrl ? <img className="preview-image" src={this.state.imageUrl} /> : null;
        const textOrPreview = this.state.imageUrl ? "" : <p id="server-image-upload-text">Change Icon</p>
        return (
            <div id="create-server-modal">
                <div id="create-server-modal-top">
                    <h2 id="create-server-header">Create Your Server</h2>
                    <h3 id="create-server-subheader">By creating a server, you will have access to free text chat to use amongst your friends!</h3>
                    <div id="server-image-icon-container">
                        <div id="server-image-icon-placeholder" onClick={this.handleImageClick}>
                            {preview}
                            <input id="server-image-upload-input" type="file" onChange={this.handleFile} style={{ display: "none" }} />
                            {textOrPreview}
                        </div>
                    </div>
                    <div id="create-server-name-container">
                        <label id="create-server-name-label">SERVER NAME</label>
                        <input id="create-server-name-input" onChange={this.handleChange()} type="text" value={this.state.name}></input>
                    </div>
                </div>
                <div id="create-server-buttons-bottom">
                    <div id="create-server-buttons-container">
                        <button onClick={this.handleClick("add/join")} id="create-server-back-button">
                            <img src={window.backToPrevIcon} id="join-server-back-icon" /> BACK
                        </button>
                        <button onClick={this.handleSubmit} id="create-server-create-button">Create Server</button>
                    </div>
                </div>
            </div>
        )
    }
}

export default CreateServer;
