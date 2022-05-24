import React from 'react';

const Modal = () => {
    return (
        <div className="modal__content load-success">
            <h2 className="modal-title">Ваш комментарий отправлен</h2>
            <img id="icon-smile" src={require("../assets/smile.png")} alt="" />
        </div>
    );
};

export default Modal;