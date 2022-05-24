import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import {isActiveModal, isFormPost} from "../store/actions";
import Modal from "./Modal";

const FormComment = ({idPost}) => {
    const isActive = useSelector(state => state.modalActive);
    const isFormPostStatus = useSelector(state => state.isFormPost)
    const dispatch = useDispatch();

    const closeModal = () => {
        dispatch(isActiveModal(false))
    }

    const isFormLoad = (status) => {
        dispatch(isFormPost(status))
    }

    function getFormValue(event) {
        event.preventDefault();

        const name = document.getElementById('input-name');
        const email = document.getElementById('input-email');
        const comment = document.getElementById('input-comment');

        const data = {
            name: name.value,
            email: email.value,
            body: comment.value,
            postId: idPost
        };

        axios.post('https://jsonplaceholder.typicode.com/comments',
            data)
            .then(function (response) {
                if (response.status === 201) {
                    isFormLoad(true);
                    setTimeout(closeModal, 3000);
                    setTimeout(() => {
                        isFormLoad(false)
                    }, 4000);
                }
            })
            .catch(function (error) {
                console.log(error);
            });

    }

        return (
        <div className={isActive ? 'modal active' : 'modal'} onClick={() => dispatch(closeModal)}>
            {(isFormPostStatus === true) ? <Modal /> :
                    <form onSubmit={getFormValue}
                          className={isActive ? 'modal__content active' : 'modal__content'}
                          onClick={e => e.stopPropagation()}
                          encType="multipart/form-data">
                        <ul className="form-list">
                            <li className="form-list-item">
                                <label>Name </label>
                                <input name="name" type='text' id="input-name" defaultValue=""/>
                            </li>
                            <li className="form-list-item">
                                <label>Email </label>
                                <input name="email" type='email' id="input-email" defaultValue=""/>
                            </li>
                            <li className="form-list-item">
                                <label>Comment</label>
                            </li>
                            <li>
                                <textarea name="body" rows={5} id="input-comment" defaultValue=""/>
                            </li>
                            <li className="form-list-item">
                                <button type={"submit"} className="btn-send-form">Send comment</button>
                            </li>
                        </ul>
                    </form>
            }
        </div>
    );
};

export default FormComment;