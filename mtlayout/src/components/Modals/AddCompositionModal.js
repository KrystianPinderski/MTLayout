import React, { Component } from 'react'
import Modal from 'react-modal';
import { connect } from 'react-redux'
import './AddCompositionModal.css'
import LatterCompositionsItem from '../LatterCompositions/LatterCompositionsItem';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
const customStyles = {
    content: {
        width: "85vw",
        height: "80vh",
        display: "flex",
        flexDirection: 'column',
        zIndex: 99,
        top: "10vh",
        left: "5vw",
    }
};
const regExLink = RegExp(/[-a-zA-Z0-9@:%._\+~#=]{1,256}\.[a-zA-Z0-9()]{1,6}\b([-a-zA-Z0-9()@:%_\+.~#?&//=]*)?/gi);
const formValid = state => {
    let valid = true;
    Object.values(state.formErrors).forEach(val => val.length > 0 && (valid = false))
    Object.values(state.formControls).forEach(val => {
        if (Object.prototype.toString.call(val) === '[object Date]') {
            if (isNaN(val.getTime())) {  // d.valueOf() could also work
                console.log("Set date valid to false")
                return valid = false;
            } else {
                console.log("Set date valid to true")
                valid = true
            }
        }
        if(val === null){
            return valid=false;
        }
        if (val.length === 0) {
            console.log("Set valid to false")
            return valid = false;
        }
    })
    console.log("return valid:", valid)
    return valid;
}
/* regExLink.test(value)*/
Modal.setAppElement('#root')
class AddCompositionModal extends Component {
    constructor() {
        super();

        this.state = {
            modalIsOpen: false,
            formControls: {
                id: Math.random(),
                date: '',
                compositionName: '',
                title: '',
                description: '',
                backgroundImage: '',
                sound: 0,
                loves: 0,
                share: 0,
                comments: 0,
                link: '',
            },
            formErrors: {
                date: "",
                compositionName: '',
                title: '',
                description: '',
                backgroundImage: '',
                sound: "",
                loves: "",
                share: "",
                comments: "",
                link: '',
            },
            step2: false
        };

        this.openModal = this.openModal.bind(this);
        this.afterOpenModal = this.afterOpenModal.bind(this);
        this.closeModal = this.closeModal.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    openModal() {
        this.setState({ modalIsOpen: true });
    }

    afterOpenModal() {
        // references are now sync'd and can be accessed.
        this.subtitle.style.color = '#f00';
    }

    closeModal() {
        this.setState({ modalIsOpen: false, step2: false })
    }
    //Form functions:
    handleSubmit = (event) => {
        event.preventDefault();
        if (this.state.step2) {
            this.closeModal();
            this.props.addComposition(this.state.formControls)
        } else {
            if (formValid(this.state)) {
                this.setState({ step2: true })
            } else {
                alert("Please set all fields.")
            }
        }
    }
    handleDateChange = date => {
        this.setState({
          ...this.state,
          formControls: { ...this.state.formControls, date: date }
        }, () => { console.log(this.state) })}
    handleChange = event => {
        const { name, value } = event.target;
        let formErrors = this.state.formErrors;
        switch (name) {
            case 'compositionName':
                formErrors.compositionName = value.length < 1 ? "Can't be empty" : ""
                break;
            case 'title':
                formErrors.title = value.length < 1 ? "Can't be empty" : ""
                break;
            case 'description':
                formErrors.description = value.length < 1 ? "Can't be empty" : ""
                break;
            case 'backgroundImage':
                formErrors.backgroundImage = value.length > 0 && value.match(regExLink) ? "" : "Invalid link"
                break;
            case 'sound':
                formErrors.sound = value.length < 1 ? "Can't be empty" : ""
                break;
            case 'loves':
                formErrors.loves = value.length < 1 ? "Can't be empty" : ""
                break;
            case 'share':
                formErrors.share = value.length < 1 ? "Can't be empty" : ""
                break;
            case 'comments':
                formErrors.comments = value.length < 1 ? "Can't be empty" : ""
                break;
            case 'link':
                formErrors.link = value.length > 0 && value.match(regExLink) ? "" : "Invalid link"
                break;
            default:
                break;
        }

        this.setState({
            formControls: {
                ...this.state.formControls,
                [name]: value
            },
            formErrors: {
                ...this.state.formErrors,
            }
        }, () => { console.log(this.state) });
    }
    handleBackPress = (event) => {
        event.preventDefault();
        this.setState({ ...this.state, step2: false })
    }
    render() {
        const { formErrors, formControls } = this.state
        return (
            <div>
                <div className="OpenModalButton" onClick={this.openModal}>{this.props.buttonText}</div>
                <Modal
                    isOpen={this.state.modalIsOpen}
                    onAfterOpen={this.afterOpenModal}
                    onRequestClose={this.closeModal}
                    style={customStyles}
                    contentLabel="Example Modal"
                >
                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                        <h2 ref={subtitle => this.subtitle = subtitle}>Add composition</h2>
                        <div className="buttonClose" onClick={this.closeModal}></div>
                    </div>
                    {this.state.step2 ?
                        <div className="Accept-Container">
                            <LatterCompositionsItem modal composition={this.state.formControls} />
                            <form className="AcceptForm-Container" onSubmit={this.handleSubmit}>
                                <button onClick={this.handleBackPress}>Move back</button>
                                <button type="submit" value="Send" >Accept</button>
                            </form>
                        </div> :
                        <div className="Form-Container">
                            <form onSubmit={this.handleSubmit}>
                                <label>
                                    Composition Date:
                                <DatePicker
                                        dateFormat="dd/MM/yyyy"
                                        selected={formControls.date}
                                        onChange={this.handleDateChange}
                                    />
                                </label>
                                <label>
                                    Composition name:
                            <input
                                        type="text"
                                        name="compositionName"
                                        value={formControls.compositionName}
                                        onChange={this.handleChange}
                                        disabled={!formControls.date ?true:false}
                                    />
                                    {formErrors.compositionName.length > 0 && (<p className="ErrorMessage">{formErrors.compositionName}</p>)}
                                </label>
                                <label>
                                    Composition title:
                            <input type="text"
                                        name="title"
                                        value={this.state.formControls.title}
                                        onChange={this.handleChange}
                                        disabled={!formControls.date ?true:false}
                                    />
                                    {formErrors.title.length > 0 && (<p className="ErrorMessage">{formErrors.title}</p>)}
                                </label>
                                <label>
                                    Description:
                            <input type="text"
                                        name="description"
                                        value={this.state.formControls.description}
                                        onChange={this.handleChange}
                                        disabled={!formControls.date ?true:false}
                                    />
                                    {formErrors.description.length > 0 && (<p className="ErrorMessage">{formErrors.description}</p>)}
                                </label>
                                <label>
                                    Link to background Image:
                            <input type="text"
                                        name="backgroundImage"
                                        value={this.state.formControls.backgroundImage}
                                        onChange={this.handleChange}
                                        disabled={!formControls.date ?true:false}
                                    />
                                    {formErrors.backgroundImage.length > 0 && (<p className="ErrorMessage">{formErrors.backgroundImage}</p>)}
                                </label>
                                <label>
                                    Number of listened:
                            <input type="number"
                                        name="sound"
                                        min="0"
                                        value={this.state.formControls.sound}
                                        onChange={this.handleChange}
                                        disabled={!formControls.date ?true:false}
                                    />
                                    {formErrors.sound.length > 0 && (<p className="ErrorMessage">{formErrors.sound}</p>)}
                                </label>
                                <label>
                                    Number of likes:
                            <input type="number"
                                        name="loves"
                                        min="0"
                                        value={this.state.formControls.loves}
                                        onChange={this.handleChange}
                                        disabled={!formControls.date ?true:false}
                                    />
                                    {formErrors.loves.length > 0 && (<p className="ErrorMessage">{formErrors.loves}</p>)}
                                </label>
                                <label>
                                    Number of shares:
                            <input type="number"
                                        name="share"
                                        min="0"
                                        value={this.state.formControls.share}
                                        onChange={this.handleChange}
                                        disabled={!formControls.date ?true:false}
                                    />
                                    {formErrors.share.length > 0 && (<p className="ErrorMessage">{formErrors.share}</p>)}
                                </label>

                                <label>
                                    Number of comments:
                            <input type="number"
                                        name="comments"
                                        value={this.state.formControls.comments}
                                        onChange={this.handleChange}
                                        disabled={!formControls.date ?true:false}
                                    />
                                    {formErrors.comments.length > 0 && (<p className="ErrorMessage">{formErrors.comments}</p>)}
                                </label>
                                <label>
                                    Link to video:
                            <input type="text"
                                        name="link"
                                        value={this.state.formControls.link}
                                        onChange={this.handleChange}
                                        disabled={!formControls.date ?true:false}
                                    />
                                    {formErrors.link.length > 0 && (<p className="ErrorMessage">{formErrors.link}</p>)}
                                </label>
                                <button type="submit" value="Wyślij" >Submit</button>
                            </form>
                            <div className="rightImage"></div>
                        </div>
                    }
                </Modal>
            </div>
        );
    }
}
const MapStateToProps = (state) => {
    return {
    }
}
const MapDispatchToProps = (dispatch) => {
    return {
    }
}
export default connect(MapStateToProps, MapDispatchToProps)(AddCompositionModal);
