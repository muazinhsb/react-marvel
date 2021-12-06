import React from 'react'
import './Modal.css'

const Modal = (props) => {
    if (!props.show) {
        return null
    }
    
    return (
        <div className="modal" onClick={props.onClose}>
            <div className="modal-content" onClick={e => e.stopPropagation()}>
                <div className="modal-header">
                    <h4 className="modal-title">Title</h4>
                </div>
                <div className="modal-body">
                    {props.komik}
                </div>
                <div className="modal-footer">
                    <button className='close-btn' onClick={props.onClose}>Close</button>
                </div>
            </div>
        </div>
    )
}

export default Modal
