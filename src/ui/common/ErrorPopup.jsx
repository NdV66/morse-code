import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

const ErrorPopupModal = (props) => {
    const {onCancel, isModal} = props;
    return <div>
        <Modal
            isOpen={isModal}
            toggle={onCancel}
            className=''
            centered={true}
            autoFocus={true}
        >
            <ModalHeader toggle={onCancel}>
                {props.header}
            </ModalHeader>
            <ModalBody>
                {props.body}
            </ModalBody>
            <ModalFooter>
                <Button color='primary' onClick={onCancel}>OK</Button>
            </ModalFooter>
        </Modal>
    </div>;
};

ErrorPopupModal.propTypes = {
    onCancel: PropTypes.func.isRequired,
    isModal: PropTypes.bool.isRequired,
    body: PropTypes.string.isRequired,
    header: PropTypes.string.isRequired,
};

const ErrorPopup = (props) => ReactDOM.createPortal(<ErrorPopupModal {...props} />, document.getElementById('portal'));

ErrorPopup.propTypes = ErrorPopupModal.propTypes;

export default ErrorPopup;