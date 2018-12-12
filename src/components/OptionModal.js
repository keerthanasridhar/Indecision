import React from 'react';
import Modal from 'react-modal';


const OptionModal = (props)=>(
    <Modal
    isOpen = {!!props.selectedOption}
    onRequestClose ={props.handleDeleteselectedOption} //Helps us to cancel the modal once your click the background or esc
    contentLabel = "Selected Option"
    closeTimeoutMS = {200}
    className = "modal"
    >
    <h3 className ="modal__title"> Selected Option</h3>
    {props.selectedOption && <p className = "modal__body">{props.selectedOption}</p>}
    <button className = "small_button"onClick={props.handleDeleteselectedOption}>Okay</button>
    </Modal>
);

export default OptionModal;

